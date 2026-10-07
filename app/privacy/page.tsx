import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = { title: "Privacy policy" };

/* Structure from the content strategist draft. Name the actual email tool once chosen. */
export default function Privacy() {
  return (
    <LegalPage
      path="/privacy"
      label="Privacy policy"
      title={
        <>
          Privacy <em>policy</em>
        </>
      }
      sections={[
        {
          title: "What we collect",
          known:
            "Name, email, role, message content. Only what's submitted through a form, nothing collected passively beyond standard site analytics.",
        },
        {
          title: "Why we collect it",
          known: "To respond to enquiries, to send requested resources, and to process partnership or proposal requests.",
        },
        {
          title: "Who we share it with",
          known: "Nobody, except where required by law, or a named service provider such as an email-sending tool.",
        },
        { title: "How long we keep it, and how to request deletion" },
        {
          title: "Contact us about your data",
          known: (
            <>
              Email{" "}
              <a href={`mailto:${CONTACT.email}`} className="font-medium text-navy underline underline-offset-4">
                {CONTACT.email}
              </a>
              , or write to us at {CONTACT.address}.
            </>
          ),
        },
      ]}
    />
  );
}
