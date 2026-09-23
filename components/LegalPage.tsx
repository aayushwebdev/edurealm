import type { ReactNode } from "react";
import { Detail, DetailStack } from "@/components/Detail";
import { PageHero, Ph, ReviewBanner } from "@/components/ui";

/**
 * Structure for legal pages. Section outlines come from the content strategist draft (FRAMEWORK);
 * final legal wording needs real legal review — India's DPDP Act has specific requirements.
 */
export function LegalPage({
  path,
  label,
  title,
  sections,
}: {
  path: string;
  label: string;
  title: ReactNode;
  sections: { title: string; known?: ReactNode }[];
}) {
  return (
    <>
      <ReviewBanner>Legal review required before publish (DPDP Act)</ReviewBanner>
      <PageHero crumbs={[{ href: path, label }]} tag={label} title={title} lead={<Ph>effective date</Ph>} />
      <DetailStack>
        {sections.map((s, i) => (
          <Detail key={s.title} index={i} title={s.title}>
            {s.known && <p>{s.known}</p>}
            <Ph block>final legal wording — legal review</Ph>
          </Detail>
        ))}
      </DetailStack>
    </>
  );
}
