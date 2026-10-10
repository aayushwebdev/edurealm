import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT, HELPLINES } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the eduRealm website and our programs and services.",
};

const UPDATED = "10 October 2026";
const mail = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Accepting these terms",
    body: (
      <p>
        These Terms of Use apply to the eduRealm website and to any program, session or service you enquire about or book through it.
        By using the website, you agree to these terms and to our <Link href="/privacy">Privacy Policy</Link>. If you do not agree,
        please do not use the website.
      </p>
    ),
  },
  {
    id: "about",
    title: "About eduRealm and this website",
    body: (
      <p>
        eduRealm is an ethical education consultancy in India. This website explains our work and lets you contact us, download free
        resources, and register interest in our programs. Information on the website is general. The exact scope, schedule, format and
        fees of any program are confirmed with you in writing before it begins.
      </p>
    ),
  },
  {
    id: "minors",
    title: "Students and minors",
    body: (
      <p>
        Students under 18 should use the website with a parent or guardian. Bookings, registrations and payments for a student must be
        made by a parent, lawful guardian, or the student&rsquo;s school. Where we collect a child&rsquo;s personal data, we do so only
        with verifiable parental consent, as described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our programs and services",
    body: (
      <>
        <p>Our work includes:</p>
        <ul>
          <li>Parent awareness and student suicide prevention sessions.</li>
          <li>Coaching-tactics awareness sessions for parents and schools.</li>
          <li>Career guidance and one-on-one counselling.</li>
          <li>Skill-building workshops and summer bootcamps.</li>
          <li>The Zubuntu eduRealm Olympiad (ZEO).</li>
          <li>Curriculum design, teacher training, campus drives and industry links for institutions.</li>
          <li>Scholarship and community programs with CSR, NGO and government partners.</li>
        </ul>
        <p>
          We may update, pause or change programs from time to time. Anything confirmed with you in a written proposal, quote or
          agreement will be honoured as agreed.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    title: "No guaranteed outcomes",
    body: (
      <p>
        We never guarantee a rank, exam score, admission, scholarship, job or any other specific result. Our guidance is advisory: we
        help students and families understand their options and strengths, and every decision remains theirs. Promising results is
        exactly the kind of sales tactic our work exists to warn against.
      </p>
    ),
  },
  {
    id: "not-medical",
    title: "Not a medical or emergency service",
    body: (
      <p>
        Our wellbeing and suicide prevention programs are educational and preventive. They are not therapy, medical advice, diagnosis
        or crisis care, and they do not replace a qualified mental health professional. In an emergency, call 112. For free, confidential
        support, call the Government of India helplines{" "}
        {HELPLINES.map((h, i) => (
          <span key={h.name}>
            {i > 0 && " or "}
            <a href={`tel:${h.tel}`}>
              {h.name} {h.number}
            </a>
          </span>
        ))}
        .
      </p>
    ),
  },
  {
    id: "zeo",
    title: "The Zubuntu eduRealm Olympiad (ZEO)",
    body: (
      <ul>
        <li>Participation is subject to the rules published for each Olympiad cycle, including eligibility, fees, dates and format.</li>
        <li>Registration details must be accurate. Parents, guardians or schools register students under 18.</li>
        <li>We may disqualify a participant for malpractice, impersonation or breaking the rules.</li>
        <li>Results are final once published, subject to any review process announced for that cycle.</li>
        <li>
          Scholarships, devices and other rewards depend on verification of eligibility and on available sponsor funding, and are given
          toward education rather than as cash.
        </li>
      </ul>
    ),
  },
  {
    id: "bookings",
    title: "Bookings, fees and cancellations",
    body: (
      <p>
        Fees, payment terms, cancellation and refund terms for any paid program are set out in writing, in a quote, proposal or
        agreement, before you pay. If something is non-refundable, we will say so clearly and in advance. Many of our parent awareness
        sessions and resources are free.
      </p>
    ),
  },
  {
    id: "independence",
    title: "Our independence",
    body: (
      <p>
        We take no commission from any coaching institute, school vendor or other third party, and we do not recommend any institute in
        exchange for payment. Any mention of an organisation on our website is not an endorsement unless we say so.
      </p>
    ),
  },
  {
    id: "conduct",
    title: "Using the website responsibly",
    body: (
      <>
        <p>When you use the website, you agree not to:</p>
        <ul>
          <li>Give false information, or submit someone else&rsquo;s details without their permission.</li>
          <li>Use the website for anything unlawful, harmful, harassing or misleading.</li>
          <li>Try to break, overload, scrape or gain unauthorised access to the website or its systems.</li>
          <li>Copy or republish our materials for commercial use without written permission.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our content and materials",
    body: (
      <p>
        The eduRealm name and logo, website content, and program materials (including checklists, guides and workshop content) belong to
        eduRealm or are used with permission. You may download and share our free resources for personal, non-commercial educational use,
        as long as you keep them unchanged and credit eduRealm. Reselling them, or using them in paid programs, requires our written
        permission.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Links and partners",
    body: (
      <p>
        The website may link to other sites, such as government helplines and partner organisations. We do not control those sites and
        are not responsible for their content or practices. Programs delivered with partners may also be subject to the partner&rsquo;s
        own terms, which we will share with you.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        We work hard to keep the website accurate and up to date, but it is provided &ldquo;as is&rdquo;. We do not promise that it will
        always be available or free of errors. Information on the website is general guidance and is not legal, financial or medical
        advice.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent permitted by law, eduRealm is not liable for any indirect or consequential loss arising from your use of the
        website. For any paid service, our total liability is limited to the fees you paid us for that service. Nothing in these terms
        limits any liability that cannot be limited under Indian law.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        If you misuse the website or break these terms, and that causes a claim against eduRealm, you agree to compensate us for the
        reasonable losses and costs that result.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The &ldquo;last updated&rdquo; date at the top shows the current version.
        Continuing to use the website after a change means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the courts at Gautam Buddha
        Nagar, Uttar Pradesh.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about these terms? Email {mail} or write to eduRealm, {CONTACT.address}.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <LegalPage
      label="Terms of Use"
      title={
        <>
          Terms of <em>Use</em>
        </>
      }
      lead="The terms that apply when you use our website and our programs and services."
      updated={UPDATED}
      sections={SECTIONS}
    />
  );
}
