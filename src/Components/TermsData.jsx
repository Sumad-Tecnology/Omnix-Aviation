import {
  CheckCircle2,
  Mail,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const termsSections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the OMNIX Aviation Limited website, services, communications, or aviation support solutions, you agree to comply with these Terms of Service. If you do not agree with these terms, you should not use our website or request our services.",
      "These terms apply to all visitors, clients, partners, organizations, representatives, and users who interact with OMNIX Aviation Limited.",
    ],
  },
  {
    title: "Our Services",
    body: [
      "OMNIX Aviation Limited provides aviation-related solutions including air cargo operations, passenger charter services, humanitarian and relief flights, aircraft leasing and management, aviation consultancy, flight operations support, logistics coordination, and special mission operations.",
      "All services are subject to operational availability, safety requirements, regulatory conditions, aircraft availability, destination access, and mission-specific approvals.",
    ],
  },
  {
    title: "Service Requests and Quotations",
    body: [
      "Any service request submitted through our website, email, phone, or other communication channels is considered an inquiry and does not automatically confirm service availability.",
      "Quotations, schedules, aircraft options, routes, and operational plans may change based on availability, weather, permits, security conditions, documentation, third-party providers, and aviation regulations.",
    ],
  },
  {
    title: "Client Responsibilities",
    body: [
      "Clients are responsible for providing accurate mission details, passenger information, cargo details, documentation, destination requirements, timelines, and any other information needed for proper planning.",
      "OMNIX Aviation Limited is not responsible for delays, additional costs, or service limitations caused by incorrect, incomplete, delayed, or misleading information provided by the client.",
    ],
  },
  {
    title: "Cargo and Passenger Requirements",
    body: [
      "Clients requesting cargo services must provide accurate cargo type, weight, dimensions, value, handling requirements, destination details, and any special conditions related to the shipment.",
      "Clients requesting passenger charter services must provide accurate passenger details, travel documents, route preferences, timing, and any special travel requirements.",
      "OMNIX Aviation Limited reserves the right to refuse cargo, passengers, or missions that may violate safety standards, aviation regulations, legal requirements, or operational policies.",
    ],
  },
  {
    title: "Safety, Compliance, and Regulations",
    body: [
      "All OMNIX Aviation services are subject to aviation safety standards, operational procedures, regulatory requirements, destination approvals, and applicable laws.",
      "We may delay, modify, suspend, or cancel a service if safety, compliance, weather, security, documentation, aircraft availability, or operational conditions require it.",
    ],
  },
  {
    title: "Third-Party Providers and Partners",
    body: [
      "Some services may involve aircraft operators, ground handlers, logistics providers, regulatory authorities, airport services, and other third-party partners.",
      "OMNIX Aviation Limited works to coordinate services professionally, but certain aspects of the operation may depend on third-party availability, approvals, and performance.",
    ],
  },
  {
    title: "Payments, Fees, and Cancellations",
    body: [
      "Payment terms, deposits, invoices, cancellation conditions, and refund policies may vary depending on the service type, route, aircraft, mission requirements, and third-party provider terms.",
      "Any confirmed service may be subject to cancellation fees, operational costs, administrative fees, or non-refundable third-party charges where applicable.",
    ],
  },
  {
    title: "Website Use",
    body: [
      "You agree to use the OMNIX Aviation website only for lawful purposes. You must not attempt to damage, disrupt, misuse, copy, hack, or interfere with the website, its content, or its systems.",
      "All website content, including text, graphics, branding, layout, images, and service descriptions, belongs to OMNIX Aviation Limited unless otherwise stated.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "OMNIX Aviation Limited works to provide professional, safe, and reliable aviation support. However, we are not liable for delays, disruptions, losses, damages, or additional costs caused by weather, regulatory restrictions, security issues, force majeure events, aircraft availability, third-party actions, or client-provided misinformation.",
      "Nothing in these terms limits responsibilities that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Privacy and Data Protection",
    body: [
      "Information submitted to OMNIX Aviation Limited may be used to respond to inquiries, prepare service proposals, coordinate operations, communicate with clients, and support requested services.",
      "We aim to handle client information responsibly and only share necessary details with relevant operational partners when required to deliver the requested service.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "OMNIX Aviation Limited may update these Terms of Service from time to time. Updated terms will be posted on this page with the latest revision date.",
      "Continued use of our website or services after updates means you accept the revised terms.",
    ],
  },
];

const quickPoints = [
  "Professional aviation service coordination",
  "Subject to safety and regulatory requirements",
  "Client information must be accurate",
  "Service availability may depend on third parties",
];

function TermsData() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-4xl">
            <p className="text-sm font-semibold text-primary dark:text-accent">
              OMNIX Aviation Limited
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Please read these terms carefully before using our website or
              requesting aviation support services from OMNIX Aviation Limited.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            {/* Main Terms */}
            <div>
              <div className="mb-10 border-b border-border pb-8">
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Last Updated:
                  </span>{" "}
                  January 2026
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  These Terms of Service are prepared for general website and
                  service information. For legal accuracy and official use,
                  OMNIX Aviation Limited should review them with a qualified
                  legal professional.
                </p>
              </div>

              <div className="space-y-11">
                {termsSections.map((section, index) => (
                  <section key={section.title}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                        <span className="text-sm font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h2 className="font-heading text-2xl font-semibold leading-tight text-foreground">
                          {section.title}
                        </h2>

                        <div className="mt-4 space-y-4">
                          {section.body.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-sm leading-7 text-muted-foreground sm:text-base"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Key Terms Summary
                </h3>

                <div className="mt-5 space-y-4">
                  {quickPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary dark:text-accent" />

                      <p className="text-sm leading-6 text-muted-foreground">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-primary p-5 text-primary-foreground shadow-xl shadow-primary/15">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent">
                  <Plane className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                  Need Clarification?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Contact OMNIX Aviation Limited for questions about service
                  terms, aviation support, or operational requirements.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-white"
                >
                  Contact Our Team
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-muted p-5 dark:bg-card/60">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary dark:text-accent" />

                  <p className="text-sm font-semibold text-foreground">
                    Email Support
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  info@omnixaviation.com
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default TermsData;