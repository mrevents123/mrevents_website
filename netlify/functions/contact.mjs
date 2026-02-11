import nodemailer from "nodemailer";

// ─── Input Sanitization ───
const sanitize = (str) => {
  if (typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim();
};

const ALLOWED_EVENTS = ["", "wedding", "corporate", "party", "launch", "other"];

// ─── Rate limiting store (per function instance) ───
const ipRequests = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 min
const RATE_LIMIT_MAX = 5;

const isRateLimited = (ip) => {
  const now = Date.now();
  const record = ipRequests.get(ip);
  if (!record || now - record.start > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { start: now, count: 1 });
    return false;
  }
  record.count++;
  return record.count > RATE_LIMIT_MAX;
};

// ─── Netlify Function Handler ───
export default async (req) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("client-ip") || "unknown";
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again in 15 minutes." }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    const { name, email, phone, event, message } = body;

    // Server-side validation
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanPhone = sanitize(phone);
    const cleanEvent = ALLOWED_EVENTS.includes(event) ? event : "";
    const cleanMessage = sanitize(message);

    if (!cleanName || cleanName.length > 100) {
      return new Response(JSON.stringify({ error: "Name is required (max 100 chars)." }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }
    if (!cleanEmail || cleanEmail.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return new Response(JSON.stringify({ error: "Valid email is required." }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }
    if (cleanPhone && (cleanPhone.length > 20 || !/^[+\d\s()-]+$/.test(cleanPhone))) {
      return new Response(JSON.stringify({ error: "Invalid phone number." }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }
    if (!cleanMessage || cleanMessage.length > 2000) {
      return new Response(JSON.stringify({ error: "Message is required (max 2000 chars)." }), {
        status: 400, headers: { "Content-Type": "application/json" },
      });
    }

    const eventLabel = cleanEvent || "Not specified";
    const phoneLabel = cleanPhone || "Not provided";

    // ─── Nodemailer Transporter ───
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send notification to MR Events
    await transporter.sendMail({
      from: `"MR Events Website" <${process.env.SMTP_USER}>`,
      to: "tapasi@mrevents.co.in",
      replyTo: cleanEmail,
      subject: `New Enquiry from ${cleanName} — ${eventLabel}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
          <div style="background:#222653;padding:24px 32px">
            <h1 style="color:#D4AF37;margin:0;font-size:22px">New Event Enquiry</h1>
          </div>
          <div style="padding:28px 32px;background:#fff">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:10px 0;color:#888;width:120px">Name</td><td style="padding:10px 0;font-weight:600">${cleanName}</td></tr>
              <tr><td style="padding:10px 0;color:#888">Email</td><td style="padding:10px 0"><a href="mailto:${cleanEmail}" style="color:#222653">${cleanEmail}</a></td></tr>
              <tr><td style="padding:10px 0;color:#888">Phone</td><td style="padding:10px 0">${phoneLabel}</td></tr>
              <tr><td style="padding:10px 0;color:#888">Event Type</td><td style="padding:10px 0">${eventLabel}</td></tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:8px">
              <p style="margin:0 0 6px;color:#888;font-size:13px">Message</p>
              <p style="margin:0;line-height:1.6">${cleanMessage.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:#f3f4f6;text-align:center;color:#aaa;font-size:12px">
            Sent from mrevents.co.in contact form
          </div>
        </div>
      `,
    });

    // Auto-reply to the customer
    await transporter.sendMail({
      from: `"MR Events" <${process.env.SMTP_USER}>`,
      to: cleanEmail,
      subject: "Thank you for contacting MR Events!",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#222653;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#D4AF37;margin:0;font-size:22px">Thank You, ${cleanName}!</h1>
          </div>
          <div style="padding:28px 32px;background:#fff;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px">
            <p style="line-height:1.7;color:#333">We've received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
            <p style="line-height:1.7;color:#333">In the meantime, feel free to reach us on WhatsApp at <a href="https://wa.me/917204021323" style="color:#222653;font-weight:600">+91 72040 21323</a>.</p>
            <p style="margin-top:24px;color:#888;font-size:13px">— Team MR Events</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), {
      status: 200, headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/.netlify/functions/contact",
};
