import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function SpecialMissions() {
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
        title="Special Mission Operations"
        eyebrow="OMNIX Aviation Service"
        description="Tailored aviation solutions for urgent, sensitive, remote, high-priority, and mission-specific operational requirements."
        image="https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Special Missions Overview"
        title="Tailored Aviation Support for Complex and High-Priority Missions"
        paragraphs={[
          "OMNIX Aviation provides special mission operations for clients who require customized aviation support beyond standard services. This may include urgent missions, remote destination access, sensitive operations, VIP movement, special cargo, emergency requirements, or high-priority assignments.",
          "Every special mission is different. OMNIX helps assess the requirement, plan the right aviation solution, coordinate the operational details, and support the mission with professionalism and confidentiality.",
        ]}
        image="https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Special mission operations"
        activeService="Special Missions"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Urgent, Sensitive, and Mission-Specific Aviation Needs"
        description="OMNIX Aviation supports special missions with careful planning, flexible coordination, and mission-focused execution."
        benefits={[
          {
            title: "Tailored Planning",
            description:
              "Each solution is planned around the mission objective, urgency, and operational requirements.",
          },
          {
            title: "Fast Response",
            description:
              "Support for high-priority missions where speed and coordination matter.",
          },
          {
            title: "Remote Access",
            description:
              "Aviation coordination for difficult, remote, or mission-specific destinations.",
          },
          {
            title: "Sensitive Coordination",
            description:
              "Professional handling of confidential, VIP, or sensitive operational needs.",
          },
          {
            title: "Flexible Solutions",
            description:
              "Aircraft and operational support adapted to the unique mission requirement.",
          },
          {
            title: "Reliable Execution",
            description:
              "Clear communication and dependable support from planning to completion.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Special Mission Process"
        title="A Clear Process From Mission Request to Final Execution"
        description="OMNIX Aviation follows a careful process to coordinate special mission operations with accuracy, flexibility, and professionalism."
        steps={[
          {
            title: "Mission Request",
            description:
              "The client shares the special mission need, destination, urgency, and requirements.",
          },
          {
            title: "Mission Assessment",
            description:
              "OMNIX reviews risk, timing, sensitivity, destination access, and aircraft needs.",
          },
          {
            title: "Custom Planning",
            description:
              "The team prepares a tailored aviation solution for the mission.",
          },
          {
            title: "Coordination",
            description:
              "Aircraft, route, handling, logistics, and partner support are coordinated.",
          },
          {
            title: "Mission Execution",
            description:
              "The mission is supported professionally according to the approved plan.",
          },
          {
            title: "Final Follow-Up",
            description:
              "OMNIX confirms completion and supports any additional mission requirements.",
          },
        ]}
      />
    </main>
  );
}

export default SpecialMissions;