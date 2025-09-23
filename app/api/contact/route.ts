import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

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
      text: `
New Contact Form Submission
This message was submitted via the OWASP VIT Bhopal Student Chapter Official Website.

Name: ${name}
Email: ${email}
Message: ${message}
Received At: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 201 });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}