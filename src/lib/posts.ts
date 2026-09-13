import crmImg from "@/assets/portfolio-crm.jpg";
import ghlImg from "@/assets/portfolio-gohighlevel.jpg";
import aiImg from "@/assets/portfolio-ai-agent.jpg";

export type PostSection = { heading: string; body: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  img: string;
  intro: string;
  sections: PostSection[];
  takeaways: string[];
};

export const posts: Post[] = [
  {
    slug: "crm-automation-small-business",
    title: "CRM Automation for Small Business: The System That Follows Up So You Don't Have To",
    metaTitle: "CRM Automation for Small Business: A Practical Guide | ProdigyPro",
    metaDescription:
      "Learn how CRM automation captures every lead, follows up in seconds and books appointments on autopilot. A practical setup guide for small businesses.",
    keywords:
      "CRM automation, small business CRM, automated follow-up, lead nurturing automation, sales pipeline automation",
    category: "CRM Automation",
    date: "Sep 8, 2026",
    read: "9 min",
    excerpt:
      "Most small businesses lose 40%+ of their leads to slow follow-up. Here's how CRM automation fixes the leak — and exactly what to automate first.",
    img: crmImg,
    intro:
      "The average small business takes over 24 hours to respond to a new lead. By then, the lead has already booked with a competitor. CRM automation isn't about fancy software — it's about making sure every inquiry gets an instant, personal response, every time, without you lifting a finger.",
    sections: [
      {
        heading: "Why manual follow-up quietly kills growth",
        body: [
          "When a lead fills in your form or sends a message, their intent is at its peak for about five minutes. After an hour, the odds of qualifying that lead drop by more than 10x. Manual follow-up — checking the inbox when you get a chance — means most leads never hear from you while they still care.",
          "The fix isn't working harder. It's letting your CRM respond the second a lead arrives: a personalized text, an email with your booking link, and a task created for your team if the lead replies.",
        ],
      },
      {
        heading: "The five automations every small business needs",
        body: [
          "1. Instant lead response — an SMS and email fire within 60 seconds of any form fill, call, or DM.",
          "2. Speed-to-lead routing — hot leads get assigned to the right person with a notification, not buried in a shared inbox.",
          "3. Nurture sequences — leads who don't book immediately enter a 7–14 day email/SMS sequence that answers objections and re-offers the booking link.",
          "4. No-show recovery — missed appointments automatically get a rebooking message instead of being written off.",
          "5. Review requests — after a job is marked complete, a timed message asks for a Google review while the experience is fresh.",
        ],
      },
      {
        heading: "What to look for in a CRM",
        body: [
          "Ignore feature checklists. A small business CRM needs four things: two-way SMS and email in one inbox, visual pipeline stages, workflow automation you can edit without a developer, and a calendar that syncs with your booking links. Everything else is decoration.",
          "This is exactly why we build on GoHighLevel for most clients — it bundles all four into one login, so you're not paying for five disconnected tools.",
        ],
      },
      {
        heading: "A realistic 14-day rollout",
        body: [
          "Days 1–3: import your contacts, connect your phone number and calendar, and map your pipeline stages.",
          "Days 4–7: turn on instant lead response and build your first nurture sequence.",
          "Days 8–14: layer in no-show recovery and review requests, then watch the reporting dashboard for the first week. Most clients see response time drop from hours to under a minute, and bookings climb within the first month.",
        ],
      },
    ],
    takeaways: [
      "Respond to every lead in under 60 seconds with automated SMS + email.",
      "Automate nurture, no-show recovery and review requests before anything else.",
      "Choose a CRM that combines messaging, pipeline, automation and calendar in one.",
    ],
  },
  {
    slug: "gohighlevel-setup-guide",
    title: "GoHighLevel in 2026: How to Turn It From an Expensive Login Into a Growth Machine",
    metaTitle: "GoHighLevel Setup Guide: Workflows That Actually Book Jobs | ProdigyPro",
    metaDescription:
      "A field-tested GoHighLevel setup guide: the pipelines, workflows, snapshots and automations that turn GHL into an appointment-booking machine for your business.",
    keywords:
      "GoHighLevel setup, GoHighLevel workflows, GHL automation, GoHighLevel for agencies, GHL snapshot",
    category: "GoHighLevel",
    date: "Sep 1, 2026",
    read: "11 min",
    excerpt:
      "GoHighLevel is powerful — and overwhelming. This is the exact setup framework we use to take clients from a blank sub-account to a fully automated booking system.",
    img: ghlImg,
    intro:
      "GoHighLevel can run your entire sales and marketing operation — but out of the box it does nothing. The difference between a $97/month expense and a machine that books jobs while you sleep is the setup. Here's the framework we use on every client build.",
    sections: [
      {
        heading: "Start with the pipeline, not the features",
        body: [
          "Before touching workflows, define your pipeline stages: New Lead → Contacted → Qualified → Booked → Showed → Won/Lost. Every automation you build exists to move a contact from one stage to the next. If an automation doesn't move a stage, delete it.",
          "This single discipline keeps your GHL account clean as it grows, and makes reporting actually meaningful.",
        ],
      },
      {
        heading: "The core workflow stack",
        body: [
          "Speed-to-lead workflow: trigger on form submit or inbound call → wait 60 seconds → send SMS + email → notify your team → create an opportunity in the pipeline.",
          "Appointment confirmation workflow: booking trigger → instant confirmation → reminder 24 hours before → reminder 1 hour before → no-show branch with an automatic rebooking link.",
          "Long-term nurture workflow: leads older than 7 days without a booking enter a value-first email sequence with a call-to-action every third message.",
          "These three workflows alone recover more revenue than most businesses' entire ad budget.",
        ],
      },
      {
        heading: "Conversations: one inbox to rule everything",
        body: [
          "Connect Google Business Profile chat, Facebook/Instagram DMs, SMS and email into the GHL Conversations tab. When every message lands in one inbox, nothing gets missed — and your AI chatbot or team can reply from a single screen.",
          "Enable the missed-call text-back feature too: when you can't answer, GHL texts the caller automatically. For local service businesses this alone is worth the subscription.",
        ],
      },
      {
        heading: "Snapshots: build once, deploy forever",
        body: [
          "Once your pipelines, workflows, calendars and email templates are dialed in, save the whole configuration as a snapshot. New locations, new team members, or seasonal campaigns start from a proven template instead of a blank page.",
          "We maintain industry-tuned snapshots for home services, clinics, agencies and coaches — which is why a ProdigyPro build goes live in days, not months.",
        ],
      },
      {
        heading: "Mistakes that make GHL feel broken",
        body: [
          "Over-automating on day one — launch three workflows, prove they work, then expand.",
          "Skipping A2P 10DLC registration — unregistered numbers get SMS messages silently blocked.",
          "Ignoring the reporting dashboard — if you can't see cost-per-booking, you're flying blind.",
        ],
      },
    ],
    takeaways: [
      "Design the pipeline first; every workflow should move a lead between stages.",
      "Launch speed-to-lead, appointment and nurture workflows before anything else.",
      "Save proven setups as snapshots so growth never means starting over.",
    ],
  },
  {
    slug: "ai-agents-customer-service",
    title: "AI Agents & Chatbots: How to Answer Every Customer in Seconds, 24/7",
    metaTitle: "AI Agents for Customer Service: The 2026 Playbook | ProdigyPro",
    metaDescription:
      "How AI agents and chatbots qualify leads, answer questions and book appointments 24/7 — in your brand voice. Real setup advice, not hype.",
    keywords:
      "AI agents for business, customer service chatbot, AI chatbot lead qualification, AI appointment booking, conversational AI",
    category: "AI Agents",
    date: "Aug 24, 2026",
    read: "8 min",
    excerpt:
      "AI agents have crossed the line from gimmick to genuine team member. Here's what they can realistically handle today — and how to deploy one without annoying your customers.",
    img: aiImg,
    intro:
      "Your customers message at 11pm. They ask the same ten questions. They want to book without waiting for a callback. An AI agent handles all three — instantly, in your brand voice — and hands off to a human the moment it should. Here's how to do it right.",
    sections: [
      {
        heading: "What an AI agent actually is (and isn't)",
        body: [
          "A modern AI agent isn't a rigid phone menu or a 'press 1 for sales' bot. It's a conversational assistant trained on your services, pricing, FAQs and booking rules. It understands free-text questions, gives accurate answers, and takes action — checking calendar availability, collecting contact details, updating your CRM.",
          "What it isn't: a replacement for your team. The best deployments handle the repetitive 70% of conversations so humans can focus on the nuanced 30%.",
        ],
      },
      {
        heading: "The four jobs to hand to an AI agent first",
        body: [
          "1. Instant answers — hours, pricing ranges, service areas, process questions. No more leads lost to a slow reply.",
          "2. Lead qualification — the agent asks budget, timeline and needs, then tags and routes the contact in your CRM automatically.",
          "3. Appointment booking — connected to your live calendar, the agent offers real time slots and confirms bookings on the spot.",
          "4. After-hours coverage — nights and weekends are when your competitors' phones go to voicemail. Yours doesn't have to.",
        ],
      },
      {
        heading: "Training it on your brand voice",
        body: [
          "The difference between a helpful agent and an annoying one is training data. Feed it your website copy, past email replies, service sheets and a short 'voice guide' — formal or friendly, emoji or never, short answers or detailed.",
          "Then set hard boundaries: what it may promise, when it must hand off to a human, and which topics (complaints, refunds, legal) always escalate. A well-bounded agent builds trust; an unbounded one erodes it.",
        ],
      },
      {
        heading: "Measuring whether it's working",
        body: [
          "Track three numbers weekly: response time (should be seconds), self-served rate (percentage of conversations resolved without a human — 60–75% is healthy), and booked appointments attributed to the agent.",
          "Our clients typically see 60–70% of routine inquiries fully self-served within the first month, with after-hours bookings becoming a meaningful new revenue stream.",
        ],
      },
    ],
    takeaways: [
      "Deploy AI agents for instant answers, qualification, booking and after-hours coverage.",
      "Train on your real documents and set firm escalation boundaries.",
      "Measure response time, self-served rate and attributed bookings — not vanity metrics.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
