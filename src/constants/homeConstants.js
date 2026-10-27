import { Plane,Hotel,Bus,Ticket,PlaneTakeoff,PlaneLanding,Calendar,
  Users,Armchair,Globe,Star,Headphones,Shield,BadgePercent,CalendarCheck,Repeat,ArrowRight,
  Route,Briefcase,Luggage,Search,ShieldCheck
 } from "lucide-react";
 import hero1 from "../assets/images/hero1.jpg";
 import hero2 from "../assets/images/hero2.jpg";
 import hero3 from "../assets/images/hero3.jpg";
 import hero4 from "../assets/images/hero4.jpg";

const img = (id, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroes: [
    hero1,hero2,hero3,hero4
  ],
};
 
export const NAV_LINKS = [
   {label:"Flights", path:"/flights"},
   {label:"Hotels", path:"/hotel"},
   {label:"Buses", path:"/buses"}
  ];
 
export const TABS = [
  { label: "Flights", icon: Plane },
  { label: "Hotels", icon: Hotel },
  { label: "Bus", icon: Bus },
  { label: "Activities", icon: Ticket },
];
 
export const FIELDS = [
  { id: "from", label: "From", icon: PlaneTakeoff, type: "text", placeholder: "City or airport" },
  { id: "to", label: "To", icon: PlaneLanding, type: "text", placeholder: "Where to?" },
  { id: "depart", label: "Departure", icon: Calendar, type: "date" },
  { id: "return", label: "Return", icon: Calendar, type: "date" },
  { id: "pax", label: "Passengers", icon: Users, type: "select", options: ["1 Adult", "2 Adults", "2 Adults, 1 Child", "4 Adults"] },
  { id: "class", label: "Class", icon: Armchair, type: "select", options: ["Economy", "Premium Economy", "Business", "First"] },
];
 
export const STATS = [
  { icon: Globe, value: "530+", label: "Destinations", tone: "bg-sky-100 text-sky-600" },
  { icon: Star, value: "4.9", label: "Average rating", tone: "bg-orange-100 text-[#FF6B35]" },
  { icon: Headphones, value: "24/7", label: "Support", tone: "bg-emerald-100 text-emerald-600" },
  { icon: Shield, value: "Best price", label: "Guarantee", tone: "bg-blue-100 text-blue-700" },
];
 
export const FEATURES = [
  {
    icon: Search,
    title: "Smart Flight Search",
    text: "Compare flights from hundreds of airlines in seconds to find the best prices and schedules for your journey.",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    text: "Book flights quickly with a simple, secure checkout process and receive instant booking confirmation.",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Payments",
    text: "Your payments and personal information are protected with industry-leading security and trusted payment methods.",
    tone: "bg-violet-100 text-violet-600",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    text: "Our travel experts are available anytime to help with bookings, changes, cancellations, and travel questions.",
    tone: "bg-amber-100 text-amber-600",
  },
];
 
export const DESTINATIONS = [
  { name: "Tokyo", tours: 128, src: img("photo-1540959733332-eab4deabeeaf", 900) },
  { name: "Paris", tours: 164, src: img("photo-1502602898657-3e91760cbb34", 900) },
  { name: "Bali", tours: 96, src: img("photo-1537996194471-e657df975ab4", 900) },
  { name: "New York", tours: 142, src: img("photo-1496442226666-8d4d0e62e6e9", 900) },
  { name: "Maldives", tours: 58, src: img("photo-1514282401047-d79a71a590e8", 900) },
  { name: "Cappadocia", tours: 72, src: "https://i.pinimg.com/1200x/b4/65/2c/b4652c99435c1418aedd9d3f4395ceb5.jpg" },
];
 
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
 
export const heading = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
export const body = { fontFamily: "'Inter', sans-serif" };

export const TRIP_TYPES = [
  { id: "return", label: "Return", icon: Repeat },
  { id: "one-way", label: "One Way", icon: ArrowRight },
  { id: "multi-city", label: "Multi-city", icon: Route },
];
 
export const BAGS = [
  { id: "cabin", label: "Cabin Bag", icon: Briefcase },
  { id: "checked", label: "Checked Bag", icon: Luggage },
];

export const FIELD_DEFS = {
  from: { id: "from", label: "From", icon: PlaneTakeoff, type: "text", placeholder: "City or airport" },
  to: { id: "to", label: "To", icon: PlaneLanding, type: "text", placeholder: "Where to?" },
  depart: { id: "depart", label: "Departure Date", icon: Calendar, type: "date" },
  return: { id: "return", label: "Return Date", icon: Calendar, type: "date" },
  pax: { id: "pax", label: "Passengers", icon: Users, type: "passengers" },
  class: { id: "class", label: "Class", icon: Armchair, type: "select", options: ["Economy", "Premium Economy", "Business", "First"] },
};