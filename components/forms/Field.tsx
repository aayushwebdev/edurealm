import type { ReactNode } from "react";

/* Form fields: 8px radius. Error text is always paired with aria-describedby. */

export const inputCls =
  "min-h-12 w-full rounded-field border border-rule bg-cream px-4 py-2 text-body text-navy outline-none transition-colors duration-150 placeholder:text-gray focus:border-navy focus:bg-paper aria-[invalid]:border-red-700";

export function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  hint?: ReactNode;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-small font-medium text-navy">
        {label}
        {optional && <span className="ml-1 font-normal text-gray">(optional)</span>}
      </label>
      {hint && <p className="mt-0.5 text-micro text-gray">{hint}</p>}
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-err`} className="mt-1 text-small text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

export function errProps(id: string, error?: string) {
  return error ? { "aria-invalid": true as const, "aria-describedby": `${id}-err` } : {};
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
