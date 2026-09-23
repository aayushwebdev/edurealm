import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of use" };

/* Structure only. */
export default function Terms() {
  return (
    <LegalPage
      path="/terms"
      label="Terms of use"
      title={
        <>
          Terms of <em>use</em>
        </>
      }
      sections={[
        {
          title: "What this site is and isn’t",
          known:
            "Informational and enquiry-based. Booking a session doesn’t happen through the site itself — it happens through follow-up.",
        },
        {
          title: "No guarantee of outcomes",
          known: "No program we run guarantees an outcome. We never guarantee a rank.",
        },
        {
          title: "Not medical or clinical advice",
          known: "Mind Before Marks is educational and preventive. Not therapy. Not diagnosis. Not crisis care.",
        },
        {
          title: "Intellectual property",
          known: "The site’s content, including the Informed Choice materials, isn’t for redistribution or resale.",
        },
        { title: "Governing law and jurisdiction" },
      ]}
    />
  );
}
