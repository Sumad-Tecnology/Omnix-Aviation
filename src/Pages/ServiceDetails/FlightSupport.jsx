import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function FlightSupport() {
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
        title="Flight Operations Support"
        eyebrow="OMNIX Aviation Service"
        description="Reliable flight planning, route coordination, ground handling support, documentation assistance, and operational coordination for smooth aviation missions."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Flight Support Overview"
        title="Professional Flight Operations Support From Planning to Completion"
        paragraphs={[
          "OMNIX Aviation provides flight operations support for clients who need professional coordination before, during, and after flight missions. This service supports route planning, ground handling coordination, documentation assistance, flight preparation, and operational communication.",
          "For flights that require careful planning, complex routing, destination support, or multi-party coordination, OMNIX helps keep the operation organized, efficient, and professionally managed.",
        ]}
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Flight operations support"
        activeService="Flight Support"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Smooth, Organized, and Reliable Flight Operations"
        description="OMNIX Aviation supports flight missions with professional coordination, clear communication, and operational attention from start to finish."
        benefits={[
          {
            title: "Better Flight Planning",
            description:
              "Support for route, timing, destination, and operational preparation.",
          },
          {
            title: "Reduced Delays",
            description:
              "Coordination designed to reduce avoidable delays and operational confusion.",
          },
          {
            title: "Ground Support Coordination",
            description:
              "Assistance with handling, destination support, and operational partners.",
          },
          {
            title: "Documentation Support",
            description:
              "Support for required information, operational documents, and coordination needs.",
          },
          {
            title: "Clear Communication",
            description:
              "Reliable updates and communication throughout the flight support process.",
          },
          {
            title: "Mission Confidence",
            description:
              "Professional support for charter, cargo, humanitarian, corporate, and special missions.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Flight Support Process"
        title="A Clear Process From Flight Requirement to Mission Completion"
        description="OMNIX Aviation follows a clear support process to coordinate flight operations smoothly and professionally."
        steps={[
          {
            title: "Flight Requirement",
            description:
              "The client shares route, timing, aircraft, passengers, cargo, and support needs.",
          },
          {
            title: "Operational Review",
            description:
              "OMNIX reviews destination, schedule, handling, documentation, and mission requirements.",
          },
          {
            title: "Flight Planning",
            description:
              "The team prepares a practical coordination plan for the flight operation.",
          },
          {
            title: "Partner Coordination",
            description:
              "Handling, ground support, documentation, and communication are coordinated.",
          },
          {
            title: "Flight Support",
            description:
              "OMNIX supports the mission during preparation and execution.",
          },
          {
            title: "Completion Follow-Up",
            description:
              "The operation is reviewed, completion is confirmed, and next steps are supported.",
          },
        ]}
      />
    </main>
  );
}

export default FlightSupport;