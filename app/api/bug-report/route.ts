import { Resend } from 'resend';
import { NextRequest } from 'next/server';

function getIP(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  
  const cfConnectingIp = req.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp;
  
  return "unknown";
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { category, description, screenRecording, attachmentLink } = await req.json();

    // Generate bug report ID
    const bugId = `BUG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const ip = getIP(req);

    const { data, error } = await resend.emails.send({
      from: 'OWASP VIT Bhopal Bug Report <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO as string],
      subject: `Bug Report [${bugId}] - ${category}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #fff; padding: 2rem; color: #111;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 16px; border: 2px solid #111; box-shadow: 0 2px 12px rgba(0,0,0,0.05); overflow: hidden;">
            <div style="background: #111; padding: 1.5rem 2rem;">
              <h2 style="color: #fff; margin: 0;">🐛 Bug Report - OWASP VIT Bhopal</h2>
              <div style="font-size: 1.1rem; color: #fff; margin-top: 4px;">Bug ID: ${bugId}</div>
            </div>
            <div style="padding: 2rem;">
              <table cellpadding="8" cellspacing="0" border="0" style="width:100%; background:#fafafa; border-radius:10px;">
                <tr>
                  <td style="font-weight:600; color:#111; width:140px;">Category:</td>
                  <td style="color:#111;">${category}</td>
                </tr>
                <tr>
                  <td style="font-weight:600; color:#111;">Description:</td>
                  <td style="white-space:pre-line; color:#111;">${description}</td>
                </tr>
                ${screenRecording ? `
                <tr>
                  <td style="font-weight:600; color:#111;">Screen Recording:</td>
                  <td style="color:#111;"><a href="${screenRecording}" style="color:#0066cc;">${screenRecording}</a></td>
                </tr>
                ` : ''}
                ${attachmentLink ? `
                <tr>
                  <td style="font-weight:600; color:#111;">Attachment Link:</td>
                  <td style="color:#111;"><a href="${attachmentLink}" style="color:#0066cc;">${attachmentLink}</a></td>
                </tr>
                ` : ''}
                <tr>
                  <td style="font-weight:600; color:#111;">Reported At:</td>
                  <td style="color:#111;">${new Date().toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="font-weight:600; color:#111;">Reporter IP:</td>
                  <td style="color:#111;">${ip}</td>
                </tr>
              </table>
              <div style="margin-top: 2rem; color:#111; font-size: 0.95rem; background: #fff; padding: 0.75rem 1rem; border-radius: 10px; border: 1px solid #111;">
                This bug report was submitted via the <b>OWASP VIT Bhopal Student Chapter Official Website</b>.
              </div>
            </div>
          </div>
          <div style="text-align:center; font-size:0.85rem; color:#111; margin-top:2rem;">
            &copy; ${new Date().getFullYear()} OWASP VIT Bhopal Student Chapter
          </div>
        </div>
      `,
      text: `
Bug Report - OWASP VIT Bhopal Student Chapter
Bug ID: ${bugId}

Category: ${category}
Description: ${description}
${screenRecording ? `Screen Recording: ${screenRecording}` : ''}
${attachmentLink ? `Attachment Link: ${attachmentLink}` : ''}
Reported At: ${new Date().toLocaleString()}
Reporter IP: ${ip}

This bug report was submitted via the OWASP VIT Bhopal Student Chapter Official Website.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ success: false, error: 'Failed to send bug report' }, { status: 500 });
    }

    return Response.json({ 
      success: true, 
      data: { bugId, message: 'Bug report submitted successfully' }
    }, { status: 201 });
  } catch (error) {
    console.error('Bug report submission error:', error);
    return Response.json({ success: false, error: 'Failed to submit bug report' }, { status: 500 });
  }
}