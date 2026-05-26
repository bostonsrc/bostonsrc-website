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

  // Replace this with your delivery provider or CRM integration.
  console.info("BSR contact submission", submission);

  return NextResponse.json(
    {
      message:
        "Your inquiry has been received. A member of the institution will review it and respond in due course."
    },
    { status: 200 }
  );
}
