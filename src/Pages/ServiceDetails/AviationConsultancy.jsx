import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function AviationConsultancy() {
  const relatedServices = [
     { title: "Air Cargo Operations", href: "/airfreight" },
    { title: "Passenger Charter", href: "/passenger" },
    {
      title: "Humanitarian Flights",
      href: "/humanflight",
    },
    {
      title: "Aircraft Leasing",
      href: "/aircraft",
    },
    {
      title: "Flight Support",
      href: "/flightsupport",
    },
    {
      title: "Logistics Coordination",
      href: "/logistics",
    },
    {
      title: "Special Missions",
      href: "/specialmission",
    },
    {
      title: "Aviation Consultancy",
      href: "/aviationconsultant",
    },
  ];

  return (
    <main>
      <ServiceDetailHero
        title="Aviation Consultancy"
        eyebrow="OMNIX Aviation Service"
        description="Professional aviation advisory support for planning, compliance, safety, operations, business setup, route development, and strategic aviation decisions."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Aviation Consultancy Overview"
        title="Professional Aviation Guidance for Better Planning and Smarter Decisions"
        paragraphs={[
          "OMNIX Aviation provides consultancy support for clients who need expert guidance in aviation operations, planning, compliance, safety, route development, and aviation business solutions. This service helps clients improve decisions, reduce operational risk, and build stronger aviation strategies.",
          "Whether the client is an aviation operator, investor, corporate organization, government body, NGO, or logistics provider, OMNIX offers practical aviation advisory support aligned with real operational needs.",
        ]}
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Aviation consultancy"
        activeService="Aviation Consultancy"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Better Aviation Planning, Compliance, and Operational Direction"
        description="OMNIX Aviation supports clients with practical advisory services that improve planning, reduce risk, and strengthen aviation decisions."
        benefits={[
          {
            title: "Expert Guidance",
            description:
              "Professional aviation advice based on operational, planning, and business needs.",
          },
          {
            title: "Better Planning",
            description:
              "Support for route, fleet, service, business, and operational planning.",
          },
          {
            title: "Compliance Support",
            description:
              "Guidance for aviation requirements, procedures, and regulatory awareness.",
          },
          {
            title: "Risk Reduction",
            description:
              "Advisory support that helps clients identify challenges before they become problems.",
          },
          {
            title: "Strategic Direction",
            description:
              "Practical recommendations for aviation projects, investments, and operations.",
          },
          {
            title: "Operational Improvement",
            description:
              "Support for improving aviation processes, coordination, and service delivery.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Consultancy Process"
        title="A Clear Process From Aviation Challenge to Practical Recommendation"
        description="OMNIX Aviation follows a professional consultancy process to understand client objectives and provide useful aviation guidance."
        steps={[
          {
            title: "Consultancy Request",
            description:
              "The client shares the aviation challenge, project, operation, or business objective.",
          },
          {
            title: "Assessment",
            description:
              "OMNIX reviews operational, regulatory, safety, planning, or business requirements.",
          },
          {
            title: "Advisory Planning",
            description:
              "The team prepares recommendations based on the client’s needs and objectives.",
          },
          {
            title: "Strategy Support",
            description:
              "OMNIX supports planning, compliance direction, operational improvement, or business strategy.",
          },
          {
            title: "Implementation Guidance",
            description:
              "The client receives practical guidance for applying the recommended solution.",
          },
          {
            title: "Follow-Up Support",
            description:
              "OMNIX supports clarification, next-stage advisory, or additional planning needs.",
          },
        ]}
      />
    </main>
  );
}

export default AviationConsultancy;