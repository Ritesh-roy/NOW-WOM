import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, Send, Database, CalendarCheck, ClipboardList,
  RefreshCw, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/fhir")({
  head: () => ({
    meta: [
      { title: "FHIR Workflow — Healthcare Interoperability | WOM Solutions" },
      { name: "description", content: "Understand the FHIR-powered referral workflow from GP to specialist — secure, standardised, and real-time clinical data exchange." },
    ],
  }),
  component: FhirPage,
});

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
  resource: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    n: "01",
    icon: Stethoscope,
    title: "Patient Visits the GP",
    body: "The patient consults their general practitioner with a clinical concern. The GP performs an initial assessment, captures vitals, history and presenting symptoms inside the EHR.",
    resource: "FHIR Resource: Patient · Encounter · Observation",
    bullets: [
      "Patient demographics created or verified",
      "Encounter opened with chief complaint",
      "Vitals and symptoms recorded as Observations",
    ],
  },
  {
    n: "02",
    icon: Send,
    title: "GP Issues a Referral",
    body: "The GP determines specialist care is required and generates a structured electronic referral. A ServiceRequest is created with priority, reason for referral and supporting clinical context.",
    resource: "FHIR Resource: ServiceRequest · Practitioner",
    bullets: [
      "ServiceRequest with intent = order",
      "Priority and clinical reason attached",
      "Routed to the receiving specialist or facility",
    ],
  },
  {
    n: "03",
    icon: Database,
    title: "Clinical Data Travels via FHIR",
    body: "The patient's relevant medical record is bundled and securely transmitted to the specialist's system through standardised FHIR APIs over TLS, authenticated with OAuth 2.0 / SMART on FHIR.",
    resource: "FHIR Resource: Bundle · DocumentReference · Consent",
    bullets: [
      "Allergies, conditions and medications",
      "Recent labs, imaging and reports",
      "Patient consent recorded and enforced",
    ],
  },
  {
    n: "04",
    icon: CalendarCheck,
    title: "Specialist Schedules the Appointment",
    body: "The specialist's practice triages the referral and books an Appointment. Confirmation is sent automatically to the patient and back to the GP system for visibility.",
    resource: "FHIR Resource: Appointment · Slot · Schedule",
    bullets: [
      "Slot allocated based on urgency",
      "Patient notified via SMS or email",
      "Appointment status synced to GP",
    ],
  },
  {
    n: "05",
    icon: ClipboardList,
    title: "Specialist Consultation & Treatment",
    body: "The specialist reviews the shared record, examines the patient, orders investigations and initiates treatment. Diagnoses, procedures and prescriptions are documented in real time.",
    resource: "FHIR Resource: Condition · Procedure · MedicationRequest",
    bullets: [
      "Diagnosis recorded as Condition",
      "Procedures and tests captured",
      "Prescriptions issued electronically",
    ],
  },
  {
    n: "06",
    icon: RefreshCw,
    title: "Outcome Sent Back to the GP",
    body: "Once the consultation concludes, a discharge summary and updated clinical findings are pushed back to the GP's EHR through FHIR — closing the referral loop without manual paperwork.",
    resource: "FHIR Resource: Composition · DiagnosticReport",
    bullets: [
      "Structured discharge summary delivered",
      "Lab and imaging results attached",
      "Follow-up plan visible to the GP",
    ],
  },
  {
    n: "07",
    icon: CheckCircle2,
    title: "Care Loop Closed",
    body: "Both providers now hold a synchronised, longitudinal record of the patient. The GP can coordinate follow-up, monitor adherence and continue holistic primary care with full context.",
    resource: "FHIR Resource: CarePlan · CareTeam",
    bullets: [
      "Single source of truth across providers",
      "Continuity of care maintained",
      "Audit trail preserved for compliance",
    ],
  },
];

function FhirPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <div aria-hidden className="absolute inset-0 bg-gradient-hero" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <HeartPulse className="h-3.5 w-3.5" /> Healthcare Interoperability
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            The <span className="text-gradient-gold">FHIR</span> Workflow
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fast Healthcare Interoperability Resources (FHIR) is the global standard
            that lets clinical systems exchange patient data securely and in real time —
            from the GP's room to the specialist and back.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#workflow"
              className="btn-gold group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Explore FHIR Workflow
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#faq"
              className="btn-ghost inline-flex items-center gap-2 rounded-full border border-[color:var(--glass-border)] px-7 py-3.5 text-sm font-semibold"
            >
              Read the FAQ
            </a>
          </div>
        </div>

        {/* Flow illustration */}
        <div className="relative mx-auto mt-16 max-w-4xl px-6">
          <div className="glass overflow-hidden rounded-3xl p-6 shadow-elegant sm:p-10">
            <FlowIllustration />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="workflow" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--gold)]">
            Patient Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            From GP to Specialist — Powered by FHIR
          </h2>
          <p className="mt-4 text-muted-foreground">
            A 7-step end-to-end clinical workflow showing how interoperable
            standards eliminate paperwork and keep every provider in sync.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="card-premium group relative rounded-2xl border border-[color:var(--glass-border)] bg-card p-7"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--gold)]">
                    Step {s.n}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="mt-4 space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg border border-[color:var(--glass-border)] bg-[color:var(--navy-deep)]/40 px-3 py-2 font-mono text-[11px] tracking-wide text-[color:var(--gold-soft)]">
                {s.resource}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Why FHIR */}
      <section className="px-6 pb-20">
        <div className="card-premium mx-auto max-w-4xl rounded-3xl border border-[color:var(--glass-border)] bg-card p-8 shadow-elegant sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]">
                Why FHIR
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                A common language for healthcare systems
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                FHIR replaces brittle, custom integrations with a standardised RESTful
                API and modular clinical resources. The result: faster referrals,
                fewer errors, lower integration cost, and a single longitudinal record
                that follows the patient — securely and with full consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-hero p-10 text-center shadow-elegant sm:p-14">
          <div aria-hidden className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-radial-gold)" }} />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to modernise your clinical workflow?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Talk to our team about implementing FHIR-based interoperability
              across your hospital, clinic or referral network.
            </p>
            <a
              href="/contact"
              className="btn-gold group mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--gold)]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quick answers about referrals, appointments and how FHIR enables
              secure data sharing between providers.
            </p>
          </div>

          <div className="card-premium mt-12 rounded-2xl border border-[color:var(--glass-border)] bg-card p-2 shadow-elegant sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-[color:var(--glass-border)] last:border-b-0"
                >
                  <AccordionTrigger className="px-4 py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
    a: "A referral is a formal request from your GP asking a specialist to evaluate your condition. It ensures the specialist receives the right clinical context and your relevant medical history before the consultation begins.",
  },
  {
    q: "How does FHIR help with appointments?",
    a: "FHIR allows the GP's system and the specialist's system to exchange appointment details, demographics and clinical notes in a standardised format. This removes manual paperwork and reduces scheduling errors.",
  },
  {
    q: "Is my health data secure when shared via FHIR?",
    a: "Yes. FHIR uses modern security standards including OAuth 2.0, SMART on FHIR, TLS encryption and granular access controls. Only authorised providers involved in your care can access the data they are permitted to view.",
  },
  {
    q: "What information is shared between the GP and the specialist?",
    a: "Typically demographics, allergies, current medications, recent lab results, imaging reports and the reason for referral. The specialist sends back findings, diagnosis and treatment plan after the visit.",
  },
  {
    q: "Do I need to carry my reports physically?",
    a: "No. When both providers use FHIR-enabled systems, your records flow electronically. You simply attend the appointment and the specialist already has everything needed to begin care.",
  },
  {
    q: "How quickly is the GP updated after a specialist visit?",
    a: "Updates can be transmitted almost immediately once the specialist finalises their notes, keeping the primary care record accurate and helping the GP coordinate follow-up without delay.",
  },
];

function FlowIllustration() {
  const nodes = [
    { icon: Stethoscope, label: "Patient" },
    { icon: HeartPulse, label: "GP Doctor" },
    { icon: Database, label: "FHIR API" },
    { icon: ClipboardList, label: "Specialist" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--navy-deep)] shadow-gold sm:h-20 sm:w-20">
              <n.icon className="h-7 w-7 sm:h-9 sm:w-9" />
            </div>
            <span className="mt-2 text-xs font-semibold text-foreground sm:text-sm">
              {n.label}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <ArrowRight className="h-5 w-5 shrink-0 text-[color:var(--gold)] sm:h-6 sm:w-6" />
          )}
        </div>
      ))}
    </div>
  );
}