// app/api/contact/route.ts
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextRequest } from 'next/server';

// Initialize services
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiter: max 3 requests per 10 minutes per IP
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '10 m'),
  analytics: true,
});

// Simple HTML tag stripper (basic XSS protection)
function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .trim();
}

// Basic email validation
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(req: NextRequest) {
  // 🔒 Rate limiting
  const ip = req.ip ?? '127.0.0.1';
  const { success: isAllowed } = await ratelimit.limit(ip);
  if (!isAllowed) {
    return Response.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // 🔒 Input validation
    let { name, email, message } = body;

    // Ensure all fields exist and are strings
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return Response.json({ success: false, error: 'Invalid input types.' }, { status: 400 });
    }

    // Sanitize
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    message = sanitizeInput(message);

    // Trim and check lengths
    if (name.length < 1 || name.length > 100) {
      return Response.json({ success: false, error: 'Name must be 1–100 characters.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return Response.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }
    if (message.length < 1 || message.length > 2000) {
      return Response.json({ success: false, error: 'Message must be 1–2000 characters.' }, { status: 400 });
    }

    // ✉️ Send email
    const { data, error } = await resend.emails.send({
      from: 'OWASP VIT Bhopal Contact <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO as string],
      subject: 'New Contact Form Submission - OWASP VIT Bhopal Student Chapter',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #fff; padding: 2rem; color: #111;">
          <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 16px; border: 2px solid #111; box-shadow: 0 2px 12px rgba(0,0,0,0.05); overflow: hidden;">
            <div style="background: #111; padding: 1.5rem 2rem;">
              <h2 style="color: #fff; margin: 0;">OWASP VIT Bhopal Student Chapter</h2>
              <div style="font-size: 1.1rem; color: #fff; margin-top: 4px;">Official Website Contact Form Submission</div>
            </div>
            <div style="padding: 2rem;">
              <table cellpadding="8" cellspacing="0" border="0" style="width:100%; background:#fafafa; border-radius:10px;">
                <tr>
                  <td style="font-weight:600; color:#111; width:120px;">Name:</td>
                  <td style="color:#111;">${name}</td>
                </tr>
                <tr>
                  <td style="font-weight:600; color:#111;">Email:</td>
                  <td style="color:#111;">${email}</td>
                </tr>
                <tr>
                  <td style="font-weight:600; color:#111;">Message:</td>
                  <td style="white-space:pre-line; color:#111;">${message}</td>
                </tr>
                <tr>
                  <td style="font-weight:600; color:#111;">Received At:</td>
                  <td style="color:#111;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              <div style="margin-top: 2rem; color:#111; font-size: 0.95rem; background: #fff; padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid #111;">
                This message was submitted via the <b>OWASP VIT Bhopal Student Chapter Official Website</b>.
              </div>
            </div>
          </div>
          <div style="text-align:center; font-size:0.85rem; color:#111; margin-top:2rem;">
            &copy; ${new Date().getFullYear()} OWASP VIT Bhopal Student Chapter
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nReceived At: ${new Date().toLocaleString()}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ success: false, error: 'Failed to send message.' }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({ success: false, error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
