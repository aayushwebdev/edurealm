"use client";

import { useSearchParams } from "next/navigation";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Building2, CheckCircle2, Clock, Landmark, Mail, MessageSquareText, Phone, School, User, Users, type LucideIcon } from "lucide-react";
import { EMAIL_RE } from "@/components/forms/Field";
import { cx } from "@/components/ui";
import { RESPONSE_BY_ROLE } from "@/content/pages/contact";

const ROLES: { v: "parent" | "school" | "company" | "ngo"; l: string; icon: LucideIcon }[] = [
  { v: "parent", l: "Parent", icon: Users },
  { v: "school", l: "School", icon: School },
  { v: "company", l: "Company", icon: Building2 },
  { v: "ngo", l: "NGO/Government", icon: Landmark },
];
type Role = (typeof ROLES)[number]["v"];

const TOPICS: Record<string, string> = {
  zeo: "ZEO 2026 registration",
  compass: "Booking Compass",
  workshop: "Booking a Cognitive Skill Workshop",
  bootcamp: "Booking a Founders' Bootcamp seat",
  partnership: "Partnership enquiry",
  proposal: "Proposal request",
};

/** Indian or international number: 10–15 digits, optional +, spaces, dashes. */
const PHONE_RE = /^\+?[\d\s-]{10,18}$/;
const MAX_MESSAGE = 1000;

type Values = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const inputCls = (error?: string) =>
  cx(
    "min-h-13 w-full rounded-2xl border bg-cream py-3 pr-4 pl-11 text-body text-navy outline-none transition-[border-color,background-color,box-shadow] duration-150 placeholder:text-gray/80",
    "focus:border-brand focus:bg-paper focus:shadow-[0_0_0_4px_rgb(25_167_230_/_0.15)]",
    error ? "border-red-600" : "border-rule",
  );

/** Label + input with a leading icon; the error is wired via aria-describedby. */
function IconField({ id, label, icon: Icon, error, children }: { id: string; label: string; icon: LucideIcon; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-small font-medium text-navy">
        {label} <span aria-hidden="true" className="text-brand-600">*</span>
      </label>
      <div className="relative mt-2">
        <Icon size={18} aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-navy/45" />
        {children}
      </div>
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-small text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

/** One form, routed by role: Parent · School · Company · NGO/Government. Name, email and phone are required. */
export function ContactForm() {
  const uid = useId();
  const params = useSearchParams();
  const initialRole = (ROLES.find((r) => r.v === params.get("role"))?.v ?? "parent") as Role;
  const topic = TOPICS[params.get("topic") ?? ""];

  const [role, setRole] = useState<Role>(initialRole);
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const err = (k: keyof Values) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `c-${k}-err` } : {});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!EMAIL_RE.test(values.email)) next.email = "Enter a valid email address.";
    if (!PHONE_RE.test(values.phone.trim()) || values.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number (at least 10 digits).";
    if (!values.message.trim()) next.message = "Tell us briefly what you need.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`c-${first}`)?.focus();
      return;
    }
    // TODO: wire endpoint — POST { role, topic, ...values } to the routing inbox for `role`.
    setDone(true);
  }

  if (done) {
    return (
      <div role="status" className="flex flex-col items-start gap-5 rounded-3xl bg-brand-tint p-8 md:p-10">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-ink">
          <CheckCircle2 size={28} aria-hidden="true" />
        </span>
        <div>
          <p className="text-d4 font-medium text-navy">Thanks, {values.name.trim().split(" ")[0]}.</p>
          <p className="mt-2 text-body text-graphite">
            Your message has been sent to our {ROLES.find((r) => r.v === role)?.l.toLowerCase()} team. We typically respond
            within {RESPONSE_BY_ROLE[role]}.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setValues({ name: "", email: "", phone: "", message: "" });
            setDone(false);
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/20 px-5 text-small font-medium text-navy hover:border-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      {topic && (
        <p className="inline-flex items-center gap-2 rounded-full bg-brand-tint px-4 py-2 text-small text-navy">
          <span className="font-medium">Topic:</span> {topic}
        </p>
      )}

      {/* Role picker — radio cards */}
      <fieldset>
        <legend className="text-small font-medium text-navy">
          I&rsquo;m writing as a&hellip; <span aria-hidden="true" className="text-brand-600">*</span>
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ROLES.map((r) => {
            const on = role === r.v;
            return (
              <label
                key={r.v}
                className={cx(
                  "relative flex cursor-pointer flex-col items-start gap-3 rounded-2xl border p-4 transition-[border-color,background-color,box-shadow] duration-150",
                  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue",
                  on ? "border-brand bg-brand-tint shadow-[0_0_0_3px_rgb(25_167_230_/_0.18)]" : "border-rule bg-paper hover:border-brand/60",
                )}
              >
                <input type="radio" name={`${uid}-role`} value={r.v} checked={on} onChange={() => setRole(r.v)} className="sr-only" />
                <span className={cx("grid h-10 w-10 place-items-center rounded-full transition-colors duration-150", on ? "bg-brand text-brand-ink" : "bg-mist text-blue")}>
                  <r.icon size={18} aria-hidden="true" />
                </span>
                <span className="text-small font-medium text-navy">{r.l}</span>
                <span
                  aria-hidden="true"
                  className={cx(
                    "absolute top-3 right-3 h-4 w-4 rounded-full border-2 transition-colors duration-150",
                    on ? "border-brand bg-brand shadow-[inset_0_0_0_2px_white]" : "border-rule",
                  )}
                />
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <IconField id="c-name" label="Full name" icon={User} error={errors.name}>
          <input id="c-name" autoComplete="name" required placeholder="Your name" className={inputCls(errors.name)} value={values.name} onChange={set("name")} {...err("name")} />
        </IconField>
        <IconField id="c-email" label="Email" icon={Mail} error={errors.email}>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputCls(errors.email)}
            value={values.email}
            onChange={set("email")}
            {...err("email")}
          />
        </IconField>
        <div className="md:col-span-2">
          <IconField id="c-phone" label="Phone" icon={Phone} error={errors.phone}>
            <input
              id="c-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              placeholder="+91 98765 43210"
              className={inputCls(errors.phone)}
              value={values.phone}
              onChange={set("phone")}
              {...err("phone")}
            />
          </IconField>
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="c-message" className="text-small font-medium text-navy">
            Message <span aria-hidden="true" className="text-brand-600">*</span>
          </label>
          <span className="text-micro text-gray">
            {values.message.length}/{MAX_MESSAGE}
          </span>
        </div>
        <div className="relative mt-2">
          <MessageSquareText size={18} aria-hidden="true" className="pointer-events-none absolute top-4 left-4 text-navy/45" />
          <textarea
            id="c-message"
            rows={5}
            required
            maxLength={MAX_MESSAGE}
            placeholder="Tell us who it's for, and what you need."
            className={cx(inputCls(errors.message), "resize-y py-3.5")}
            value={values.message}
            onChange={set("message")}
            {...err("message")}
          />
        </div>
        {errors.message && (
          <p id="c-message-err" className="mt-1.5 text-small text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-small text-graphite">
          <Clock size={16} aria-hidden="true" className="shrink-0 text-blue" />
          <span>
            We typically respond within <strong className="font-medium text-navy">{RESPONSE_BY_ROLE[role]}</strong>.
          </span>
        </p>
        <button
          type="submit"
          className="group/btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-navy pr-1.5 pl-7 text-small font-medium text-white transition-colors duration-150 hover:bg-navy-800"
        >
          Send message
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-full bg-brand text-brand-ink transition-transform duration-150 group-hover/btn:-rotate-45">
            <ArrowRight size={16} />
          </span>
        </button>
      </div>
      <p className="text-micro text-gray">
        <span aria-hidden="true" className="text-brand-600">*</span> Required. We use these details only to reply to you.
      </p>
    </form>
  );
}
