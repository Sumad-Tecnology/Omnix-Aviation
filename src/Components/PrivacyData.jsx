import { CheckCircle2, Lock, Mail, Plane, ShieldCheck } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const privacySections = [
  {
    title: "Information We Collect",
    body: [
      "OMNIX Aviation Limited may collect information that you voluntarily provide when you contact us, request aviation services, submit a quotation request, communicate with our team, or use forms on our website.",
      "This may include your name, company name, email address, phone number, service requirements, passenger details, cargo information, travel routes, mission details, documentation information, and any other details needed to respond to your request.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information we collect to respond to inquiries, prepare service proposals, coordinate aviation support, process service requests, communicate with clients, and manage operational requirements.",
      "Your information may also be used to improve our services, maintain internal records, provide customer support, and ensure safe, efficient, and reliable service delivery.",
    ],
  },
  {
    title: "Aviation Service Coordination",
    body: [
      "Some OMNIX Aviation services require coordination with aircraft operators, ground handlers, logistics providers, airports, regulatory authorities, and other operational partners.",
      "When necessary, we may share relevant service information with trusted partners only for the purpose of planning, coordinating, or delivering the requested aviation service.",
    ],
  },
  {
    title: "Passenger and Cargo Information",
    body: [
      "For passenger charter, cargo operations, humanitarian flights, special missions, or logistics coordination, we may need passenger details, cargo descriptions, destination information, documentation, and timing requirements.",
      "Clients are responsible for ensuring that all information provided is accurate, complete, and lawful. Incorrect or incomplete information may affect service planning, availability, or delivery.",
    ],
  },
  {
    title: "Data Protection and Security",
    body: [
      "OMNIX Aviation Limited takes reasonable steps to protect personal, business, and operational information from unauthorized access, misuse, loss, disclosure, or alteration.",
      "While we work to protect your information, no online communication or digital storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Third-Party Service Providers",
    body: [
      "We may work with trusted third-party providers including aircraft operators, handling agents, logistics partners, airport service providers, payment processors, communication tools, hosting providers, and professional advisors.",
      "These third parties may only receive information necessary to support the requested service or business operation.",
    ],
  },
  {
    title: "Website Usage Information",
    body: [
      "Our website may collect basic technical information such as browser type, device information, pages visited, general location, and website interaction data.",
      "This information helps us understand website performance, improve user experience, and maintain website security.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    body: [
      "Our website may use cookies or similar technologies to improve functionality, analyze website traffic, and enhance user experience.",
      "You may control or disable cookies through your browser settings, but some parts of the website may not function properly without them.",
    ],
  },
  {
    title: "How Long We Keep Information",
    body: [
      "We keep information only for as long as needed to respond to inquiries, provide services, comply with legal or regulatory obligations, resolve disputes, and maintain business records.",
      "The retention period may vary depending on the type of information, service request, legal requirement, and operational need.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on applicable law, you may have the right to request access to your personal information, ask for corrections, request deletion, or object to certain uses of your information.",
      "To make a privacy-related request, you can contact OMNIX Aviation Limited using the contact details provided on this page.",
    ],
  },
  {
    title: "International Operations",
    body: [
      "Because aviation services may involve international routes, destinations, partners, and authorities, your information may be processed or shared across different countries where necessary for service coordination.",
      "We aim to handle such information responsibly and only share what is necessary for the requested aviation operation.",
    ],
  },
  {
    title: "Children’s Privacy",
    body: [
      "Our website and services are intended for business, organizational, and professional aviation-related use. We do not knowingly collect personal information from children through our website.",
      "If we become aware that information from a child has been submitted without proper consent, we will take appropriate steps to remove it where required.",
    ],
  },
  {
    title: "Updates to This Privacy Policy",
    body: [
      "OMNIX Aviation Limited may update this Privacy Policy from time to time to reflect changes in our services, operations, legal requirements, or privacy practices.",
      "The updated version will be posted on this page with the latest revision date.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy, how your information is handled, or wish to make a privacy-related request, you may contact OMNIX Aviation Limited through our official contact channels.",
    ],
  },
];

const quickPoints = [
  "We collect information needed to respond to service requests",
  "Client data may be used for aviation service coordination",
  "Information may be shared with trusted operational partners",
  "We aim to protect client and mission information responsibly",
];

function PrivacyData() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      <section className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Intro */}
          <div className="mb-14 max-w-4xl">
            <p className="text-sm font-semibold text-primary dark:text-accent">
              OMNIX Aviation Limited
            </p>

            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              This Privacy Policy explains how OMNIX Aviation Limited collects,
              uses, protects, and shares information when you use our website,
              contact our team, or request aviation support services.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            {/* Main Privacy Content */}
            <div>
              <div className="mb-10 border-b border-border pb-8">
                <p className="text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Last Updated:
                  </span>{" "}
                  January 2026
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  This Privacy Policy is prepared for general website and
                  service information. For official legal use, OMNIX Aviation
                  Limited should review this policy with a qualified legal
                  professional.
                </p>
              </div>

              <div className="space-y-11">
                {privacySections.map((section, index) => (
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
                  Privacy Summary
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
                  <Lock className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                  Data Protection
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  OMNIX Aviation Limited aims to handle client, passenger,
                  cargo, and mission information responsibly and securely.
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
                    Privacy Contact
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  info@omnixaviation.com
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/5">
                <div className="flex items-center gap-3">
                  <Plane className="h-5 w-5 text-primary dark:text-accent" />

                  <p className="text-sm font-semibold text-foreground">
                    Aviation Operations
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Some information may be needed to coordinate aircraft,
                  passengers, cargo, routes, destinations, and operational
                  partners.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </main>
  );
}

export default PrivacyData;