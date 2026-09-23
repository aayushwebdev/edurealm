"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_RE, Field, errProps, inputCls } from "@/components/forms/Field";
import { cx } from "@/components/ui";

/** Request a proposal — school name, board, strength, city, need. */
const FIELDS = [
  { k: "school", label: "School name", auto: "organization" },
  { k: "board", label: "Board", auto: "off" },
  { k: "strength", label: "Student strength", auto: "off", inputMode: "numeric" as const },
  { k: "city", label: "City", auto: "address-level2" },
  { k: "email", label: "Your email", auto: "email", type: "email" },
] as const;

type Key = (typeof FIELDS)[number]["k"] | "need";

export function ProposalForm() {
  const [v, setV] = useState<Record<Key, string>>({ school: "", board: "", strength: "", city: "", email: "", need: "" });
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [done, setDone] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    (Object.keys(v) as Key[]).forEach((k) => {
      if (!v[k].trim()) next[k] = "Required.";
    });
    if (v.email && !EMAIL_RE.test(v.email)) next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`p-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    // TODO: wire endpoint — POST proposal request to the schools inbox.
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className="rounded-card bg-mist p-6">
        Thanks. We&rsquo;ve received the request for <strong>{v.school}</strong>.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 md:grid-cols-2">
      {FIELDS.map((f) => (
        <Field key={f.k} id={`p-${f.k}`} label={f.label} error={errors[f.k]}>
          <input
            id={`p-${f.k}`}
            type={"type" in f ? f.type : "text"}
            inputMode={"inputMode" in f ? f.inputMode : undefined}
            autoComplete={f.auto}
            className={inputCls}
            value={v[f.k]}
            onChange={(e) => setV((s) => ({ ...s, [f.k]: e.target.value }))}
            {...errProps(`p-${f.k}`, errors[f.k])}
          />
        </Field>
      ))}
      <div className="md:col-span-2">
        <Field id="p-need" label="What do you need?" error={errors.need}>
          <textarea
            id="p-need"
            rows={4}
            className={cx(inputCls, "py-3")}
            value={v.need}
            onChange={(e) => setV((s) => ({ ...s, need: e.target.value }))}
            {...errProps("p-need", errors.need)}
          />
        </Field>
      </div>
      <div>
        <button type="submit" className="min-h-12 rounded-full bg-navy px-8 text-small font-medium text-white transition-colors duration-150 hover:bg-navy-800">
          Request a proposal
        </button>
      </div>
    </form>
  );
}
