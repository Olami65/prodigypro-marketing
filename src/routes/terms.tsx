import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeo({
      title: "Terms of Service | ProdigyPro Marketing",
      description:
        "The terms that govern working with ProdigyPro Marketing — scope of services, payments, timelines, intellectual property and responsibilities.",
      path: "/terms",
    }),
  component: TermsPage,
});

const sections = [
  {
    title: "Services",
    body: "ProdigyPro Marketing provides digital marketing services including CRM automation, GoHighLevel implementation, AI agents and chatbots, funnels, websites, SEO and paid growth. The exact scope, deliverables and timeline for any engagement are defined in a written proposal or agreement accepted by both parties.",
  },
  {
    title: "Quotes & payments",
    body: "Pricing is provided per project or as a monthly retainer. Project work typically requires a deposit before work begins, with the balance due on delivery. Retainers are billed monthly in advance. Late payments may pause work until the account is current.",
  },
  {
    title: "Client responsibilities",
    body: "You agree to provide timely access to the accounts, content, brand assets and approvals reasonably required to deliver the work. Delays in providing these may extend the project timeline. You confirm you have the rights to any materials you supply to us.",
  },
  {
    title: "Timelines & revisions",
    body: "Estimated timelines are provided in good faith and depend on scope and client responsiveness. Each project includes a reasonable number of revision rounds as defined in the proposal; additional revisions or scope changes may be quoted separately.",
  },
  {
    title: "Intellectual property",
    body: "Upon full payment, you own the final deliverables created specifically for your project. We retain the right to showcase non-confidential work in our portfolio unless otherwise agreed in writing, and to reuse general methodologies, frameworks and know-how.",
  },
  {
    title: "Results disclaimer",
    body: "We build systems to proven standards and optimise for measurable outcomes, but marketing results depend on factors outside our control — including market conditions, offer strength and ad spend. We do not guarantee specific revenue, ranking or lead-volume figures.",
  },
  {
    title: "Confidentiality",
    body: "Both parties agree to keep non-public business information shared during the engagement confidential, and not to disclose it to third parties except as required to deliver the services or by law.",
  },
  {
    title: "Cancellation",
    body: "Either party may end a retainer with 30 days’ written notice. Project work already completed or in progress is billable. Deposits are non-refundable once work has commenced.",
  },
  {
    title: "Limitation of liability",
    body: "To the maximum extent permitted by law, our total liability for any claim arising from our services is limited to the amount paid to us for the services giving rise to the claim.",
  },
  {
    title: "Contact",
    body: "For any questions about these terms, contact us at support@prodigypro-marketing.com or call +1 (579) 796-4824.",
  },
];

function TermsPage() {
  return (
    <>
      <section className="section-frame page-intro text-center">
        <span className="eyebrow reveal">Legal</span>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl md:text-6xl reveal">
          Terms of Service
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground reveal" style={{ animationDelay: "0.1s" }}>
          Last updated: September 2026. The ground rules for working with ProdigyPro Marketing.
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
