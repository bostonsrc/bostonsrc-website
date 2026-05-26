"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { status: "idle"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState: SubmissionState = {
  status: "idle",
  message: ""
};

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setState(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          affiliation: formData.get("affiliation"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website")
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "We could not submit your inquiry at this time.");
      }

      setState({
        status: "success",
        message: data.message || "Your inquiry has been received."
      });
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not submit your inquiry at this time."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="contact-form__honeypot"
        name="website"
        tabIndex={-1}
        type="text"
      />
      <div className="form-grid">
        <label>
          Full name
          <input name="name" required type="text" />
        </label>
        <label>
          Professional email
          <input name="email" required type="email" />
        </label>
        <label>
          Institution or affiliation
          <input name="affiliation" required type="text" />
        </label>
        <label>
          Subject
          <input name="subject" required type="text" />
        </label>
        <label className="form-grid__full">
          Message
          <textarea name="message" required rows={7} />
        </label>
      </div>
      <div className="form-actions">
        <button className="button" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit inquiry"}
        </button>
        {state.message ? (
          <p
            className={
              state.status === "success" ? "form-message form-message--success" : "form-message"
            }
            role="status"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
