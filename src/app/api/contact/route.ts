import nodemailer from "nodemailer";

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const oneLine = (s: unknown, max: number) =>
  String(s ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fail = (error: "validation" | "rate" | "server", status: number) =>
  Response.json({ ok: false, error }, { status });

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("validation", 400);
  }

  if (oneLine(body.website, 200)) return Response.json({ ok: true });

  const firstName = oneLine(body.firstName, 80);
  const lastName = oneLine(body.lastName, 80);
  const email = oneLine(body.email, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const consent = body.consent === true;

  if (!firstName || !lastName || !EMAIL_RE.test(email) || !message || !consent) {
    return fail("validation", 400);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return fail("rate", 429);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("Contact form: SMTP environment variables are missing");
    return fail("server", 500);
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fullName = `${firstName} ${lastName}`;

  try {
    await transporter.sendMail({
      from: `"Envision Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${fullName.replace(/"/g, "")}" <${email}>`,
      subject: `New website enquiry from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(fullName)}<br><strong>Email:</strong> ${escapeHtml(
        email
      )}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return fail("server", 500);
  }
}
