import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";


function AirFreight() {
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
        title="Air Cargo Operations"
        eyebrow="OMNIX Aviation Service"
        description="Safe, reliable, and time-efficient air cargo solutions for urgent shipments, commercial cargo, humanitarian supplies, and mission-critical freight."
        image="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Air Cargo Overview"
        title="Reliable Air Cargo Support for Urgent and Mission-Critical Freight"
        paragraphs={[
          "OMNIX Aviation provides air cargo operations for clients who need fast, secure, and professionally coordinated cargo movement. This service supports commercial shipments, urgent freight, relief supplies, high-value items, and special cargo requirements.",
          "Whether the cargo is moving for business, humanitarian response, government operations, or private needs, OMNIX helps coordinate the right aviation solution from planning to delivery.",
        ]}
        image="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Air cargo operations"
        activeService="Air Cargo Operations"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Fast, Secure, and Reliable Cargo Movement"
        description="OMNIX Aviation helps clients move cargo with professional planning, dependable coordination, and mission-focused aviation support."
        benefits={[
          {
            title: "Fast Cargo Movement",
            description:
              "Support for urgent, time-sensitive, and mission-critical cargo requirements.",
          },
          {
            title: "Secure Handling",
            description:
              "Cargo coordination focused on safe handling, careful planning, and reliable movement.",
          },
          {
            title: "Flexible Solutions",
            description:
              "Aviation options planned around cargo type, destination, timing, and urgency.",
          },
          {
            title: "Reliable Coordination",
            description:
              "Clear communication and operational support from request to mission completion.",
          },
          {
            title: "Professional Support",
            description:
              "Suitable for commercial cargo, humanitarian supplies, high-value items, and special cargo needs.",
          },
          {
            title: "Mission Ready",
            description:
              "Support for remote destinations, urgent requirements, and high-priority operations.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Air Cargo Process"
        title="A Simple Process From Cargo Request to Delivery"
        description="From the first request to final confirmation, OMNIX Aviation follows a clear process to coordinate safe and reliable air cargo support."
        steps={[
          {
            title: "Cargo Request",
            description:
              "The client shares cargo type, weight, volume, origin, destination, and urgency.",
          },
          {
            title: "Requirement Review",
            description:
              "OMNIX reviews the cargo details, route, timing, and operational requirements.",
          },
          {
            title: "Solution Planning",
            description:
              "The team identifies the most suitable air cargo solution for the mission.",
          },
          {
            title: "Coordination",
            description:
              "Aircraft, handling, documentation, destination support, and route details are coordinated.",
          },
          {
            title: "Operation Execution",
            description:
              "The cargo movement is supported safely, professionally, and according to the mission plan.",
          },
          {
            title: "Completion Follow-Up",
            description:
              "OMNIX confirms service completion and supports any next operational steps.",
          },
        ]}
      />
    </main>
  );
}

export default AirFreight;