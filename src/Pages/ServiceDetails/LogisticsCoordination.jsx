import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function LogisticsCoordination() {
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
        title="Logistics Coordination"
        eyebrow="OMNIX Aviation Service"
        description="Integrated aviation logistics coordination for cargo, passengers, ground support, mission resources, partner communication, and end-to-end operational movement."
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Logistics Coordination Overview"
        title="Integrated Aviation Logistics Support for Cargo, People, and Missions"
        paragraphs={[
          "OMNIX Aviation provides logistics coordination for clients who need connected aviation and ground support solutions. This service helps coordinate cargo movement, passenger movement, project logistics, mission resources, ground support, and operational partners.",
          "When a mission involves multiple moving parts, OMNIX helps simplify the process by bringing aviation planning, logistics coordination, and communication together in one reliable support structure.",
        ]}
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Logistics coordination"
        activeService="Logistics Coordination"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Connected, Organized, and Reliable Mission Logistics"
        description="OMNIX Aviation helps clients coordinate cargo, passengers, ground support, and aviation requirements in one streamlined solution."
        benefits={[
          {
            title: "End-to-End Coordination",
            description:
              "Support from planning to completion across aviation and logistics needs.",
          },
          {
            title: "Cargo and Passenger Movement",
            description:
              "Coordination for missions involving both people and cargo movement.",
          },
          {
            title: "Simplified Operations",
            description:
              "A structured approach that reduces confusion across multiple service providers.",
          },
          {
            title: "Partner Communication",
            description:
              "Support for communication between clients, aircraft operators, handlers, and logistics partners.",
          },
          {
            title: "Flexible Planning",
            description:
              "Logistics support adapted to destination, timing, cargo type, and mission requirements.",
          },
          {
            title: "Reliable Follow-Up",
            description:
              "Clear tracking and support until the operation is completed.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Logistics Process"
        title="A Simple Process From Logistics Request to Mission Completion"
        description="OMNIX Aviation follows a clear process to coordinate aviation-linked logistics with professionalism and reliability."
        steps={[
          {
            title: "Logistics Request",
            description:
              "The client shares cargo, passengers, destinations, timing, and operational needs.",
          },
          {
            title: "Requirement Review",
            description:
              "OMNIX reviews all movement, route, partner, and coordination requirements.",
          },
          {
            title: "Logistics Planning",
            description:
              "The team creates a coordinated aviation and logistics support plan.",
          },
          {
            title: "Partner Coordination",
            description:
              "Aircraft, ground support, handling, and delivery partners are coordinated.",
          },
          {
            title: "Mission Execution",
            description:
              "The logistics movement is supported professionally according to the plan.",
          },
          {
            title: "Completion Review",
            description:
              "OMNIX confirms completion and supports any next operational steps.",
          },
        ]}
      />
    </main>
  );
}

export default LogisticsCoordination;