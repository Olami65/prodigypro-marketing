import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeo({
      title: "Privacy Policy | ProdigyPro Marketing",
      description:
        "How ProdigyPro Marketing collects, uses and protects your personal information across our website, CRM automation and marketing services.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly — such as your name, email address, phone number and project details when you submit a form, book a call or contact us — as well as basic usage data (pages visited, device and browser type) that helps us improve the website experience.",
  },
  {
    title: "How we use your information",
    body: "We use your information to respond to enquiries, deliver proposals and services, schedule and confirm strategy calls, send relevant follow-ups, and improve our marketing systems. We do not sell your personal information to third parties.",
  },
  {
    title: "CRM, automation & communication",
    body: "When you submit a form or book a call, your details may be stored in our CRM and used to send email or SMS follow-ups related to your enquiry. You can opt out of marketing messages at any time by replying STOP to a text or using the unsubscribe link in any email.",
  },
  {
    title: "Cookies & analytics",
    body: "We may use cookies and analytics tools to understand how visitors use the site and to measure campaign performance. You can disable cookies in your browser settings; the site will still function, though some features may be limited.",
  },
  {
    title: "Third-party services",
    body: "We work with trusted platforms — such as scheduling, CRM, analytics and advertising tools — that process data on our behalf under their own privacy policies. We only share the minimum information required to deliver the service you requested.",
  },
  {
    title: "Data security & retention",
    body: "We apply reasonable technical and organisational safeguards to protect your information and retain it only as long as needed to provide services, meet legal obligations or resolve disputes.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time. To make a request, email support@prodigypro-marketing.com and we will respond within a reasonable timeframe.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this policy from time to time. The latest version will always be published on this page, and material changes will be highlighted where appropriate.",
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="section-frame page-intro text-center">
        <span className="eyebrow reveal">Legal</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl md:text-6xl reveal">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground reveal" style={{ animationDelay: "0.1s" }}>
          Last updated: September 2026. Your privacy matters — here’s exactly how ProdigyPro Marketing handles your information.
        </p>
      </section>

      <section className="section-frame pb-24">
        <div className="mx-auto grid max-w-3xl gap-5">
          {sections.map((s, i) => (
            <article key={s.title} className="premium-card p-6 md:p-8 reveal" style={{ animationDelay: `${i * 0.05}s` }}>
              <h2 className="text-lg font-semibold md:text-xl">
                {i + 1}. {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
            </article>
          ))}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Questions? Email <a href="mailto:support@prodigypro-marketing.com" className="text-primary hover:underline">support@prodigypro-marketing.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
