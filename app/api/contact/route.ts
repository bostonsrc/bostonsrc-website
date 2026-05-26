import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  affiliation?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function asCleanString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatPlainText(submission: {
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
}) {
  return [
    "New inquiry from the Boston Scientific Research Center website",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Affiliation: ${submission.affiliation}`,
    `Subject: ${submission.subject}`,
    "",
    "Message:",
    submission.message
  ].join("\n");
}

function formatHtml(submission: {
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
}) {
  const messageHtml = escapeHtml(submission.message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #0d1b2a; line-height: 1.7;">
      <h2 style="margin: 0 0 16px;">New BSR website inquiry</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
      <p style="margin: 0 0 8px;"><strong>Affiliation:</strong> ${escapeHtml(submission.affiliation)}</p>
      <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${escapeHtml(submission.subject)}</p>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #d7dde4;">
        <p style="margin: 0 0 10px;"><strong>Message</strong></p>
        <p style="margin: 0;">${messageHtml}</p>
      </div>
    </div>
  `.trim();
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ message: "Your inquiry has been received." }, { status: 200 });
  }

  const submission = {
    name: asCleanString(payload.name, 120),
    email: asCleanString(payload.email, 120),
    affiliation: asCleanString(payload.affiliation, 180),
    subject: asCleanString(payload.subject, 160),
    message: asCleanString(payload.message, 5000)
  };

  if (
    !submission.name ||
    !submission.email ||
    !submission.affiliation ||
    !submission.subject ||
    !submission.message
  ) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!isEmail(submission.email)) {
    return NextResponse.json(
      { message: "Please provide a valid professional email address." },
      { status: 400 }
    );
  }

  if (submission.message.length < 30) {
    return NextResponse.json(
      { message: "Please provide a more detailed message so we can review your inquiry." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Boston Scientific Research Center <noreply@bostonsrc.org>";
  const toEmail = process.env.CONTACT_TO_EMAIL || "office@bostonsrc.org";

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Contact delivery is not configured yet. Please add the RESEND_API_KEY before using the inquiry form."
      },
      { status: 503 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "bostonsrc-website/1.0",
      "Idempotency-Key": crypto.randomUUID()
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `BSR Inquiry: ${submission.subject}`,
      html: formatHtml(submission),
      text: formatPlainText(submission),
      headers: {
        "Reply-To": submission.email
      }
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    console.error("Resend email send failed", errorText);

    return NextResponse.json(
      {
        message:
          "We could not deliver your inquiry at this time. Please try again shortly or email office@bostonsrc.org directly."
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      message:
        "Your inquiry has been received. A member of the center will review it and respond in due course."
    },
    { status: 200 }
  );
}
