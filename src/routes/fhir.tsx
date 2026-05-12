import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, Send, Database, CalendarCheck, ClipboardList,
  RefreshCw, CheckCircle2, ArrowRight, MessageCircle, HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fhir")({
  head: () => ({
    meta: [
      { title: "FHIR kya hai? — Simple Hindi Explainer" },
      { name: "description", content: "FHIR ko aasan Hindi mein samjhein — GP se specialist tak patient ka journey, referral, appointment aur treatment update." },
    ],
  }),
  component: FhirPage,
});

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
  quote?: string;
  bullets?: string[];
};

const steps: Step[] = [
  {
    n: "01",
    icon: Stethoscope,
    title: "Patient GP doctor ke paas gaya",
    body: "GP matlab aapka normal family doctor — pehla doctor jisko aap milte ho.",
    quote: "Mere chest mein pain hai.",
  },
  {
    n: "02",
    icon: Send,
    title: "GP ne specialist ko referral bheja",
    body: "GP bolta hai ki specialist ko dikhana chahiye, aur ek referral bhej deta hai.",
    quote: "Ye patient ko check karo.",
  },
  {
    n: "03",
    icon: Database,
    title: "Patient ki details specialist tak",
    body: "Software automatically patient ka pura record specialist ko bhej deta hai. Yahi kaam FHIR karta hai.",
    bullets: ["Naam", "Problem", "Reports", "Medicines"],
  },
  {
    n: "04",
    icon: CalendarCheck,
    title: "Specialist ne appointment di",
    body: "Patient ko date aur time mil jata hai.",
    quote: "Kal 5 baje aa jao.",
  },
  {
    n: "05",
    icon: ClipboardList,
    title: "Specialist ne patient ko check kiya",
    body: "Doctor zaroori kadam uthata hai aur treatment shuru karta hai.",
    bullets: ["Test karta hai", "Treatment deta hai", "Medicine likhta hai"],
  },
  {
    n: "06",
    icon: RefreshCw,
    title: "Specialist ne GP ko update bheja",
    body: "Saari information wapas GP ke system mein chali jati hai.",
    quote: "Patient ko ye problem thi aur ye treatment diya.",
  },
  {
    n: "07",
    icon: CheckCircle2,
    title: "Case complete",
    body: "Ab GP aur specialist dono ke system mein same updated data aa jata hai. Patient ka pura record ek jagah safe hai.",
  },
];

function FhirPage() {
  return (
    <div className="bg-[#F4F8FC] text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, #DCEBFB 0%, transparent 70%), linear-gradient(180deg, #EAF4FF 0%, #F4F8FC 100%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 shadow-sm backdrop-blur">
            <HeartPulse className="h-3.5 w-3.5" /> Healthcare · Simple Hindi
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            FHIR <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">kya hai?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            FHIR ek standard hai jo hospital aur doctor ke software ko aapas mein
            medical data share karne deta hai.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#workflow"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/30 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/40"
            >
              Explore FHIR Workflow
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Floating illustration */}
        <div className="relative mx-auto mt-14 max-w-3xl px-6">
          <div className="overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-sky-200/60 sm:p-10">
            <FlowIllustration />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="workflow" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Patient Journey</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            GP se specialist tak — ek simple flow
          </h2>
          <p className="mt-4 text-slate-600">
            7 aasaan steps mein samjhein ki patient ka data kaise safely move karta hai.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group relative rounded-2xl border border-sky-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md shadow-sky-300/50">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-600">Step {s.n}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.body}</p>
              {s.bullets && (
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {b}
                    </li>
                  ))}
                </ul>
              )}
              {s.quote && (
                <div className="mt-4 rounded-xl border-l-4 border-sky-400 bg-sky-50/70 px-4 py-3 text-sm italic text-slate-700">
                  “{s.quote}”
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Simple explanation */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/60 p-8 shadow-xl shadow-emerald-100/50 sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-300">
              <MessageCircle className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Aasan Shabdon Mein
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                FHIR = Medical data ka WhatsApp
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                FHIR ek standard hai jo hospital aur doctor ke software ko{" "}
                <span className="font-semibold text-emerald-700">WhatsApp jaisa</span>{" "}
                data share karne deta hai. Bas fark itna hai ki WhatsApp messages bhejta
                hai, aur FHIR <span className="font-semibold text-sky-700">medical data</span>{" "}
                bhejta hai — safe, structured aur instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-sky-600 via-sky-600 to-emerald-500 p-10 text-center shadow-2xl shadow-sky-300/50 sm:p-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to dive deeper?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sky-50">
            FHIR workflow ko detail mein samjhein aur dekhein kaise ye healthcare ko
            simple banata hai.
          </p>
          <a
            href="#workflow"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-sky-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore FHIR Workflow
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-600">
              Quick answers about referrals, appointments, and how FHIR enables
              secure data sharing between healthcare providers.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-sky-100 bg-white p-2 shadow-sm sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-sky-100 last:border-b-0"
                >
                  <AccordionTrigger className="px-4 py-5 text-left text-base font-semibold text-slate-900 hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    q: "What is a referral and why is it needed?",
    a: "A referral is a formal request from your GP (general practitioner) asking a specialist to evaluate your condition. It ensures the specialist receives the right clinical context and your relevant medical history before the consultation.",
  },
  {
    q: "How does FHIR help with appointments?",
    a: "FHIR allows the GP's system and the specialist's system to exchange appointment details, patient demographics, and clinical notes in a standardized format. This removes manual paperwork and reduces scheduling errors.",
  },
  {
    q: "Is my health data secure when shared via FHIR?",
    a: "Yes. FHIR uses modern security standards including OAuth 2.0, TLS encryption, and granular access controls. Only authorized providers involved in your care can access the specific data they are permitted to view.",
  },
  {
    q: "What information is shared between the GP and the specialist?",
    a: "Typically your demographics, allergies, current medications, recent lab results, imaging reports, and the reason for referral. The specialist sends back their findings, diagnosis, and treatment plan after the visit.",
  },
  {
    q: "Do I need to carry my reports physically?",
    a: "No. When both providers use FHIR-enabled systems, your records flow electronically between them. You can simply attend your appointment and the specialist already has everything needed to begin care.",
  },
  {
    q: "How quickly is the GP updated after a specialist visit?",
    a: "Updates can be transmitted almost immediately once the specialist finalizes their notes. This keeps your primary care record accurate and helps your GP coordinate any follow-up care without delay.",
  },
];

function FlowIllustration() {
  const nodes = [
    { icon: Stethoscope, label: "Patient", color: "from-sky-500 to-sky-600" },
    { icon: HeartPulse, label: "GP Doctor", color: "from-emerald-500 to-emerald-600" },
    { icon: Database, label: "FHIR", color: "from-amber-500 to-orange-500" },
    { icon: ClipboardList, label: "Specialist", color: "from-violet-500 to-purple-600" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <div
              className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${n.color} text-white shadow-lg sm:h-20 sm:w-20`}
            >
              <n.icon className="h-7 w-7 sm:h-9 sm:w-9" />
            </div>
            <span className="mt-2 text-xs font-semibold text-slate-700 sm:text-sm">
              {n.label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <ArrowRight className="h-5 w-5 shrink-0 text-sky-400 sm:h-6 sm:w-6" />
          )}
        </div>
      ))}
    </div>
  );
}