const RECIPIENT = "lisharsh2002@gmail.com";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

function readField(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid form data." }, { status: 400 });
  }

  const data = (body ?? {}) as Partial<Record<keyof ContactPayload, unknown>>;
  const payload: ContactPayload = {
    firstName: readField(data.firstName, 80),
    lastName: readField(data.lastName, 80),
    email: readField(data.email, 160),
    phone: readField(data.phone, 40),
    message: readField(data.message, 4000),
  };

  if (!payload.firstName || !payload.lastName || !payload.message || !isEmail(payload.email)) {
    return Response.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const origin = request.headers.get("origin") || new URL(request.url).origin;

  const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin,
      Referer: request.headers.get("referer") || `${origin}/contact`,
    },
    body: JSON.stringify({
      "First Name": payload.firstName,
      "Last Name": payload.lastName,
      Email: payload.email,
      Phone: payload.phone || "Not provided",
      Message: payload.message,
      _replyto: payload.email,
      _subject: `New contact from ${payload.firstName} ${payload.lastName}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  const delivered = result?.success === true || result?.success === "true";
  if (!response.ok || !delivered) {
    return Response.json(
      { error: result?.message || "Could not send your message. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
