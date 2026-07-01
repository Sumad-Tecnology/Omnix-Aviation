import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function AircraftLeasing() {
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
        title="Aircraft Leasing & Management"
        eyebrow="OMNIX Aviation Service"
        description="Flexible aircraft leasing, availability, and management support for operators, governments, companies, NGOs, and mission-based aviation clients."
        image="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Aircraft Leasing Overview"
        title="Flexible Aircraft Solutions for Operational and Mission-Based Needs"
        paragraphs={[
          "OMNIX Aviation provides aircraft leasing and management support for clients who need reliable aircraft availability, operational flexibility, or professional aircraft management coordination. This service supports short-term, long-term, and mission-based aviation requirements.",
          "Whether a client needs aircraft access for recurring operations, fleet support, project missions, or aviation expansion, OMNIX helps coordinate practical aircraft solutions aligned with operational goals.",
        ]}
        image="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Aircraft leasing and management"
        activeService="Aircraft Leasing"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Flexible Aircraft Access and Professional Management Support"
        description="OMNIX Aviation helps clients access aircraft solutions with practical coordination, operational planning, and aviation management support."
        benefits={[
          {
            title: "Flexible Aircraft Access",
            description:
              "Support for short-term, long-term, and mission-based aircraft requirements.",
          },
          {
            title: "Operational Flexibility",
            description:
              "Aircraft solutions planned around route, mission, timing, and operational needs.",
          },
          {
            title: "Reduced Complexity",
            description:
              "Professional coordination helps simplify aircraft sourcing and management planning.",
          },
          {
            title: "Fleet Support",
            description:
              "Suitable for clients needing fleet expansion, backup aircraft, or recurring availability.",
          },
          {
            title: "Management Coordination",
            description:
              "Support for operational planning, compliance coordination, and client advisory.",
          },
          {
            title: "Mission-Ready Solutions",
            description:
              "Aircraft support aligned with commercial, humanitarian, corporate, and special missions.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Aircraft Leasing Process"
        title="A Simple Process From Aircraft Requirement to Operational Support"
        description="OMNIX Aviation follows a structured process to understand aircraft requirements and coordinate suitable leasing or management solutions."
        steps={[
          {
            title: "Aircraft Requirement",
            description:
              "The client shares aircraft type, mission purpose, duration, route, and operational needs.",
          },
          {
            title: "Requirement Review",
            description:
              "OMNIX reviews the leasing or management requirement and identifies key operational factors.",
          },
          {
            title: "Solution Planning",
            description:
              "The team prepares the most suitable aircraft leasing or management approach.",
          },
          {
            title: "Coordination",
            description:
              "Aircraft availability, lease structure, documentation, and operational planning are coordinated.",
          },
          {
            title: "Operational Support",
            description:
              "The aircraft solution is supported according to the agreed mission or service period.",
          },
          {
            title: "Ongoing Follow-Up",
            description:
              "OMNIX continues supporting the client based on operational requirements and next steps.",
          },
        ]}
      />
    </main>
  );
}

export default AircraftLeasing;