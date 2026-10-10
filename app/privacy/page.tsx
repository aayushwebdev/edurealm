import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { CONTACT, HELPLINES } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How eduRealm collects, uses, protects and shares personal data, including the data of students and parents.",
};

const UPDATED = "10 October 2026";
const mail = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          eduRealm (&ldquo;eduRealm&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an ethical education consultancy in India. We run
          student wellbeing and suicide prevention awareness programs, coaching-tactics awareness sessions for parents, career guidance,
          skill-building workshops, the Zubuntu eduRealm Olympiad (ZEO), services for schools and colleges, and scholarship and
          community programs with CSR, NGO and government partners.
        </p>
        <p>
          For the personal data we collect, eduRealm is the &ldquo;Data Fiduciary&rdquo; under India&rsquo;s Digital Personal Data
          Protection Act, 2023 (&ldquo;DPDP Act&rdquo;). You can reach us at {mail} or write to us at {CONTACT.address}.
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <p>
        This policy explains how we handle personal data when you visit our website, fill in a form, download a resource, book a
        session or workshop, register for ZEO, apply for or receive a scholarship, or work with us as a school, company, NGO or
        government partner. It applies whether you are a student, a parent or guardian, a teacher, or a representative of an
        organisation.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Contact and booking forms:</strong> your name, email address, phone number, the role you write as (parent,
            school, company or NGO/government), your organisation if relevant, and your message.
          </li>
          <li>
            <strong>Free resources:</strong> your email address only. We never ask for a phone number to send a resource.
          </li>
          <li>
            <strong>School and partnership enquiries:</strong> the institution or organisation name, board or sector, city or
            districts, and the contact person&rsquo;s details.
          </li>
          <li>
            <strong>ZEO registration:</strong> the student&rsquo;s name, grade, school and district, and a parent or guardian&rsquo;s
            name and contact details. Schools registering students in bulk share the same information.
          </li>
          <li>
            <strong>Scholarship verification:</strong> only if you apply for or are nominated for a scholarship, details needed to
            confirm eligibility, such as proof of enrolment and family income or hardship documents (for example, an income
            certificate, ration card, or an NGO caseworker&rsquo;s attestation).
          </li>
          <li>
            <strong>Sessions and counselling:</strong> what you choose to tell us when booking or during a session. We do not ask for
            medical records.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>
          When you use the website, our hosting provider records basic technical information such as your IP address, browser,
          device type, and the pages requested. This is used to keep the site secure and working. We do not use advertising cookies,
          tracking pixels, or third-party advertising networks.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's personal data",
    body: (
      <>
        <p>
          Many of the people our work is for are under 18. Under the DPDP Act, we treat anyone under 18 as a child and handle their
          data with extra care:
        </p>
        <ul>
          <li>We collect a child&rsquo;s personal data only with the verifiable consent of a parent or lawful guardian.</li>
          <li>
            When a program runs through a school, the school collects parental consent before we work with students, and we receive
            only what is needed to deliver the program.
          </li>
          <li>We never track, profile or monitor the behaviour of children, and we never show children targeted advertising.</li>
          <li>
            We never name or identify a child in a case study, report or publication without separate, written consent from the
            family. Consent to take part in a session is never treated as consent to be featured publicly.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    body: (
      <>
        <ul>
          <li>To reply to your enquiry and route it to the right team.</li>
          <li>To plan and deliver sessions, workshops, counselling, career guidance and institutional services you have asked for.</li>
          <li>To run ZEO: registration, the assessment, report cards, results, recognition, and mentorship.</li>
          <li>To verify scholarship eligibility, disburse funds toward education costs, and follow up on how students are supported.</li>
          <li>To send the free resources you request, and occasional updates only if you have agreed to receive them.</li>
          <li>To keep the website secure, fix problems, and improve how it works.</li>
          <li>To meet our legal, accounting and regulatory obligations.</li>
        </ul>
        <p>
          <strong>We do not sell personal data.</strong> We do not use it for advertising, and we take no commission from any coaching
          institute, school vendor or third party to share it.
        </p>
      </>
    ),
  },
  {
    id: "wellbeing",
    title: "Wellbeing sessions and sensitive information",
    body: (
      <>
        <p>
          Our wellbeing and suicide prevention programs are educational and preventive. They are not therapy, diagnosis or crisis care.
          What participants share in a session stays within the session, with one exception: if a facilitator believes a student may
          be at risk of harm, our duty of care means we will raise that concern privately with the school&rsquo;s designated point of
          contact, who follows the school&rsquo;s own safeguarding process with the family. We tell every group about this before a
          session begins.
        </p>
        <p>
          If you or someone you know needs immediate help, call the free Government of India helplines{" "}
          {HELPLINES.map((h, i) => (
            <span key={h.name}>
              {i > 0 && " or "}
              <a href={`tel:${h.tel}`}>
                {h.name} {h.number}
              </a>
            </span>
          ))}
          , or the national emergency number 112.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we are allowed to use it",
    body: (
      <p>
        We process personal data on the basis of your consent, which you give when you submit a form, register, or book with us, and
        which you can withdraw at any time. In limited cases the DPDP Act allows processing for &ldquo;legitimate uses&rdquo; without
        separate consent, for example where you have voluntarily shared data for a specific purpose, to comply with a law or court
        order, or to respond to a medical emergency or a threat to someone&rsquo;s safety.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We share personal data only when needed, and only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run the website and communicate with you, such as our website host and email
            provider. They may process data only on our instructions and must keep it secure.
          </li>
          <li>
            <strong>Partner schools,</strong> for programs delivered at their campus, limited to what is needed for that program.
          </li>
          <li>
            <strong>CSR and funding partners,</strong> who receive scholarship and impact reports. A named student appears in a report
            only with the family&rsquo;s consent; otherwise we share anonymised or aggregated figures.
          </li>
          <li>
            <strong>Authorities,</strong> when the law requires it or to protect someone&rsquo;s safety.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect and store it",
    body: (
      <p>
        We use reasonable security safeguards to protect personal data from unauthorised access, loss or misuse, and we limit access to
        people who need it to do their work. Our website and some service providers may store data on servers outside India. Any such
        transfer is made only in line with the DPDP Act and any restrictions notified by the Government of India.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <ul>
        <li>Enquiries and booking messages: up to two years after our last contact with you.</li>
        <li>Resource download emails: until you unsubscribe or ask us to delete them.</li>
        <li>ZEO records: for the Olympiad cycle, and afterwards only what is needed to issue certificates and confirm results.</li>
        <li>
          Scholarship, payment and partnership records: for as long as Indian law requires us to keep them, for example for accounting
          and CSR compliance.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the DPDP Act, you have the right to:</p>
        <ul>
          <li>Ask what personal data we hold about you and how it is being used.</li>
          <li>Correct, complete or update your data.</li>
          <li>Ask us to erase your data, unless we must keep it by law.</li>
          <li>Withdraw your consent at any time. This does not affect processing already carried out.</li>
          <li>Have your grievance addressed, and nominate someone to exercise your rights if you are unable to.</li>
        </ul>
        <p>
          Parents and lawful guardians can exercise these rights on behalf of a child. To make a request, email {mail}. We will
          respond as soon as reasonably possible and within the timelines set by law.
        </p>
      </>
    ),
  },
  {
    id: "grievance",
    title: "Grievances",
    body: (
      <p>
        If you have a concern about how we handle your personal data, write to our Grievance Officer at {mail} or {CONTACT.address}. If
        you are not satisfied with our response, you may approach the Data Protection Board of India.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        The website uses only the cookies and similar storage needed for it to work, such as remembering basic settings. We do not use
        advertising or cross-site tracking cookies.
      </p>
    ),
  },
  {
    id: "links",
    title: "Other websites",
    body: (
      <p>
        Our website may link to other websites, such as government helplines or partner organisations. We are not responsible for their
        privacy practices, so please read their policies.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our programs or the law change. The &ldquo;last updated&rdquo; date at the top shows when it was
        last revised. If we make significant changes that affect how we use your data, we will let you know where appropriate.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        Questions about this policy or your data? Email {mail} or write to eduRealm, {CONTACT.address}.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalPage
      label="Privacy Policy"
      title={
        <>
          Privacy <em>Policy</em>
        </>
      }
      lead="How we collect, use and protect personal data, especially the data of students and their families."
      updated={UPDATED}
      sections={SECTIONS}
    />
  );
}
