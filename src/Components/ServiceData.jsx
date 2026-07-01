import {
  ClipboardCheck,
  HeartPulse,
  PackageCheck,
  Plane,
  RadioTower,
  Route,
  Settings2,
  ShieldCheck,
} from "lucide-react";

export const ServiceData = [
  {
    title: "Air Cargo Operations",
    description:
      "Secure cargo movement for commercial, humanitarian, urgent, and special cargo requirements.",
    href: "/airfreight",
    icon: PackageCheck,
  },
  {
    title: "Passenger Charter Services",
    description:
      "Flexible aircraft charter solutions for private, corporate, government, and mission-critical travel.",
    href: "/passenger",
    icon: Plane,
  },
  {
    title: "Humanitarian & Relief Flights",
    description:
      "Rapid-response aviation support for aid organizations, emergency programs, and relief cargo.",
    href: "/humanflight",
    icon: HeartPulse,
  },
  {
    title: "Aircraft Leasing & Management",
    description:
      "Aircraft solutions through ownership, lease, ACMI, and professional management arrangements.",
    href: "/aircraft",
    icon: Settings2,
  },
  {
    title: "Aviation Consultancy",
    description:
      "Professional support on aviation planning, compliance, safety, and operational strategy.",
    href: "/aviationconsultant",
    icon: ClipboardCheck,
  },
  {
    title: "Flight Operations Support",
    description:
      "Coordination for smooth flight planning, handling, route support, and mission execution.",
    href: "/flightsupport",
    icon: RadioTower,
  },
  {
    title: "Logistics Coordination",
    description:
      "Air logistics planning for cargo, people, operational resources, and ground movement.",
    href: "/logistics",
    icon: Route,
  },
  {
    title: "Special Mission Operations",
    description:
      "Tailored aviation support for urgent, remote, sensitive, or high-priority assignments.",
    href: "/specialmission",
    icon: ShieldCheck,
  },
];