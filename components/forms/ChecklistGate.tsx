"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "@/components/ui/primitives";

/** Email gate only. No phone number requested. */
export function ChecklistGate({
  resource = "The 12 Questions Checklist",
  cta = "Get the free checklist",
  sentLine,
  dark,
}: {
  resource?: string;
  cta?: string;
  sentLine?: string;
  dark?: boolean;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    // TODO: wire endpoint — send { email, resource } to the mailing/PDF delivery service.
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className={cx("rounded-2xl px-4 py-3 text-small", dark ? "bg-white/10 text-white" : "bg-mist text-navy")}>
        Thanks. {sentLine ?? `${resource} is on its way to`} <strong>{email}</strong>.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div
        className={cx(
          "flex items-center gap-2 rounded-full p-1.5 pl-5 ring-1",
          dark ? "bg-white/[0.06] ring-white/15 focus-within:ring-gold" : "bg-paper ring-rule focus-within:ring-navy",
        )}
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cx(
            "min-w-0 flex-1 bg-transparent py-2 text-small outline-none",
            dark ? "text-white placeholder:text-white/40" : "text-navy placeholder:text-gray",
          )}
        />
        <button
          type="submit"
          className={cx(
            "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 text-small font-medium transition-colors duration-150",
            dark ? "bg-gold text-navy hover:bg-[#f2c64f]" : "bg-navy text-white hover:bg-navy-800",
          )}
        >
          {cta}
          <ArrowRight size={15} aria-hidden="true" />
        </button>
      </div>
      {error && (
        <p id={`${id}-err`} className={cx("mt-2 pl-5 text-small", dark ? "text-[#ffb4a8]" : "text-red-800")}>
          {error}
        </p>
      )}
    </form>
  );
}
