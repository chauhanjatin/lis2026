import { readFileSync } from "fs";
import { join } from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RECIPIENT = "info@libertyinfoscience.com";

function envValue(name: string) {
  const fromProcess = process.env[name]?.trim();
  if (fromProcess) return fromProcess;
  try {
    const text = readFileSync(join(process.cwd(), ".env.local"), "utf8");
    const line = text.split(/\r?\n/).find((row) => row.startsWith(`${name}=`));
    return line?.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
  } catch {
    return "";
  }
}

function oneLine(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/[\r\n]/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (oneLine(body._gotcha, 200)) {
    return Response.json({ ok: true });
  }

  const firstName = oneLine(body.firstName, 80);
  const lastName = oneLine(body.lastName, 80);
  const email = oneLine(body.email, 120);
  const phone = oneLine(body.phone, 40);
  const message = String(body.message ?? "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, 5000);

  if (!firstName || !lastName || !email || !message) {
    return Response.json(
      { ok: false, error: "Please fill in every required field." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Enter a valid email address." }, { status: 422 });
  }

  const user = envValue("GMAIL_USER") || RECIPIENT;
  const pass = (envValue("GMAIL_APP_PASSWORD") || "").replace(/\s+/g, "");
  if (!pass) {
    return Response.json(
      {
        ok: false,
        error:
          "Local email is not configured. Add the mailbox password for info@libertyinfoscience.com to .env.local.",
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: envValue("SMTP_HOST") || "mail.libertyinfoscience.com",
      port: Number(envValue("SMTP_PORT") || 465),
      secure: (envValue("SMTP_PORT") || "465") !== "587",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Liberty Info Science <${user}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New contact from ${firstName} ${lastName}`,
      text: [
        `First name: ${firstName}`,
        `Last name: ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (error) {
    const response = error instanceof Error ? error.message : "";
    const rejected = /535|auth|invalid login|incorrect authentication/i.test(response);
    console.error("Contact mail failed:", response.slice(0, 300));
    return Response.json(
      {
        ok: false,
        error: rejected
          ? "The mailbox password was rejected. Update GMAIL_APP_PASSWORD in .env.local and try again."
          : "Could not send your message. Please try again.",
      },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
