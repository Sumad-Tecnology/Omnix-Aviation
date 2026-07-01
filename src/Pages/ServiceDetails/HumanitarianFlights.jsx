import ServiceDetailHero from "../../Components/ServiceDetail/ServiceDetailHero";
import ServiceOverviewWithSidebar from "../../Components/ServiceDetail/ServiceOverviewWithSidebar";
import ServiceBenefits from "../../Components/ServiceDetail/ServiceBenefits";
import ServiceProcess from "../../Components/ServiceDetail/ServiceProcess";

function HumanitarianFlights() {
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
        title="Humanitarian & Relief Flights"
        eyebrow="OMNIX Aviation Service"
        description="Mission-ready aviation support for humanitarian organizations, emergency response, relief cargo, NGO operations, UN missions, and remote-area access."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
      />

      <ServiceOverviewWithSidebar
        eyebrow="Humanitarian Flights Overview"
        title="Reliable Aviation Support for Humanitarian and Relief Missions"
        paragraphs={[
          "OMNIX Aviation supports humanitarian and relief flight operations for organizations responding to urgent, sensitive, or remote missions. This service is designed for emergency response, relief cargo movement, NGO and UN operations, medical support coordination, and access to hard-to-reach destinations.",
          "In humanitarian operations, timing, coordination, and reliability are critical. OMNIX helps clients plan and coordinate aviation support that keeps relief missions moving safely and efficiently.",
        ]}
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Humanitarian and relief flights"
        activeService="Humanitarian Flights"
        relatedServices={relatedServices}
      />

      <ServiceBenefits
        eyebrow="Key Benefits"
        title="Designed for Emergency Response, Relief Support, and Remote Missions"
        description="OMNIX Aviation helps humanitarian clients coordinate urgent air support with speed, care, and mission-focused planning."
        benefits={[
          {
            title: "Rapid Response",
            description:
              "Support for urgent humanitarian missions where time and coordination are critical.",
          },
          {
            title: "Remote Access",
            description:
              "Aviation coordination for locations that may be difficult to reach by road or regular transport.",
          },
          {
            title: "Relief Cargo Support",
            description:
              "Movement support for supplies, equipment, emergency materials, and humanitarian cargo.",
          },
          {
            title: "Mission-Focused Planning",
            description:
              "Solutions planned around urgency, destination, cargo, passengers, and operational needs.",
          },
          {
            title: "NGO and UN Support",
            description:
              "Suitable for NGOs, UN-related missions, relief operators, and emergency teams.",
          },
          {
            title: "Dependable Coordination",
            description:
              "Clear communication and operational support throughout the relief mission.",
          },
        ]}
      />

      <ServiceProcess
        eyebrow="Our Humanitarian Flight Process"
        title="A Clear Process From Mission Request to Relief Support"
        description="OMNIX Aviation follows a practical process to support humanitarian missions with careful planning and dependable coordination."
        steps={[
          {
            title: "Mission Request",
            description:
              "The client shares emergency details, destination, cargo, passengers, timeline, and mission purpose.",
          },
          {
            title: "Mission Assessment",
            description:
              "OMNIX reviews urgency, location access, cargo needs, passenger movement, and operational requirements.",
          },
          {
            title: "Relief Flight Planning",
            description:
              "The team prepares a suitable aviation support plan for the humanitarian mission.",
          },
          {
            title: "Coordination",
            description:
              "Aircraft, route, handling, cargo, passengers, and partner support are coordinated.",
          },
          {
            title: "Mission Execution",
            description:
              "The humanitarian or relief flight support is delivered according to mission needs.",
          },
          {
            title: "Mission Follow-Up",
            description:
              "OMNIX confirms completion and supports any additional response or follow-up requirements.",
          },
        ]}
      />
    </main>
  );
}

export default HumanitarianFlights;