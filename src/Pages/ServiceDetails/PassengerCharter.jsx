import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function PassengerCharter() {
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
        title="Passenger Charter Services"
        eyebrow="OMNIX Aviation Service"
        description="Flexible, private, and professionally coordinated passenger charter solutions for executive travel, corporate teams, government delegations, NGOs, and mission-based movement."
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Passenger Charter Overview"
        title="Flexible Passenger Charter Support for Business, Missions, and Private Travel"
        paragraphs={[
          "OMNIX Aviation provides passenger charter services for clients who require reliable, flexible, and professionally coordinated air travel. This service is suitable for executive travel, corporate teams, government delegations, NGO personnel, mission staff, and private clients.",
          "Whether the journey requires privacy, direct routing, urgent scheduling, or access to destinations not easily served by regular flights, OMNIX helps coordinate the right charter solution from planning to completion.",
        ]}
        image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Passenger charter services"
        activeService="Passenger Charter"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Flexible, Private, and Reliable Passenger Movement"
        description="OMNIX Aviation helps clients move passengers with comfort, privacy, flexible timing, and professional aviation coordination."
        benefits={[
          {
            title: "Flexible Scheduling",
            description:
              "Flight planning built around your timing, destination, and mission requirements.",
          },
          {
            title: "Private Travel",
            description:
              "Suitable for executive, corporate, government, NGO, and private passenger movement.",
          },
          {
            title: "Direct Routing",
            description:
              "Support for direct access to destinations where scheduled flights may not be suitable.",
          },
          {
            title: "Professional Coordination",
            description:
              "Passenger movement is coordinated from request to flight completion.",
          },
          {
            title: "Mission-Based Support",
            description:
              "Ideal for teams, delegations, field missions, and urgent operational travel.",
          },
          {
            title: "Reliable Travel Support",
            description:
              "Clear communication and dependable coordination throughout the journey.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Passenger Charter Process"
        title="A Simple Process From Travel Request to Flight Completion"
        description="OMNIX Aviation follows a clear process to coordinate passenger charter services safely, professionally, and according to client needs."
        steps={[
          {
            title: "Travel Request",
            description:
              "The client shares passenger number, route, travel date, timing, and mission requirements.",
          },
          {
            title: "Requirement Review",
            description:
              "OMNIX reviews passenger needs, destination, schedule, privacy, and operational details.",
          },
          {
            title: "Charter Planning",
            description:
              "The team prepares the most suitable passenger charter option for the journey.",
          },
          {
            title: "Coordination",
            description:
              "Aircraft, schedule, passenger handling, route, and operational support are coordinated.",
          },
          {
            title: "Flight Execution",
            description:
              "The passenger movement is supported professionally and according to the agreed plan.",
          },
          {
            title: "Follow-Up",
            description:
              "OMNIX confirms completion and supports return travel or future flight requirements.",
          },
        ]}
      />
    </main>
  );
}

export default PassengerCharter;