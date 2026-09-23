"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import { cx } from "./primitives";

/** Row-style accordion (Nuova "news" / FAQ pattern). 200ms height transition via .acc-content. */
export function AccordionList({
  items,
  dark,
  defaultOpen,
}: {
  items: { q: ReactNode; a: ReactNode; id: string }[];
  dark?: boolean;
  defaultOpen?: string;
}) {
  return (
    <Accordion.Root type="single" collapsible defaultValue={defaultOpen} className="flex flex-col gap-3">
      {items.map((f) => (
        <Accordion.Item
          key={f.id}
          value={f.id}
          className={cx(
            "overflow-hidden rounded-2xl border transition-colors duration-150",
            dark
              ? "border-white/10 bg-white/[0.04] data-[state=open]:bg-white/[0.08]"
              : "border-rule bg-paper data-[state=open]:border-navy/25",
          )}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cx(
                "group flex w-full items-center justify-between gap-6 px-5 py-4 text-left text-body font-medium md:px-6",
                dark ? "text-white" : "text-navy",
              )}
            >
              {f.q}
              <span
                aria-hidden="true"
                className={cx(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-200 group-data-[state=open]:rotate-45",
                  dark ? "bg-white/10 text-white" : "bg-cream text-navy group-data-[state=open]:bg-navy group-data-[state=open]:text-white",
                )}
              >
                <Plus size={16} />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="acc-content">
            <div className={cx("max-w-2xl px-5 pb-5 text-small md:px-6", dark ? "text-white/75" : "text-graphite")}>{f.a}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
