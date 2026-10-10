import type { ReactNode } from "react";
import { Container, PageHero } from "@/components/ui";

export type LegalSection = { id: string; title: string; body: ReactNode };

/**
 * Layout for legal documents: centred hero, a sticky contents list on desktop, and numbered
 * sections with readable long-form typography.
 */
export function LegalPage({
  label,
  title,
  lead,
  updated,
  sections,
}: {
  path?: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero tag={label} title={title} lead={lead}>
        <p className="mt-5 rounded-full border border-rule bg-paper/80 px-4 py-1.5 text-micro text-graphite">Last updated: {updated}</p>
      </PageHero>
      <Container className="grid gap-10 pb-16 md:pb-24 lg:grid-cols-[15rem_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-micro font-semibold tracking-wide text-blue uppercase">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-rule">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-0.5 pl-4 text-small text-graphite hover:border-navy hover:text-navy">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <article className="max-w-3xl">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-rule py-8 first:pt-0 last:border-0">
              <h2 className="text-d4 text-navy">
                <span className="mr-2 font-mono text-d5 text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="mt-4 space-y-3 text-body text-graphite [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4 [&_h3]:mt-5 [&_h3]:text-d5 [&_h3]:font-medium [&_h3]:text-navy [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
