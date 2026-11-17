import {
  Plane,
  Hotel,
  Bus,
  Ticket,
  PlaneTakeoff,
  PlaneLanding,
  Calendar,
  Users,
  Armchair,
  Globe,
  Star,
  Headphones,
  Shield,
  BadgePercent,
  CalendarCheck,
  Repeat,
  ArrowRight,
  Route,
  Briefcase,
  Luggage,
  Search,
  ShieldCheck,
} from "lucide-react";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import flight1 from "../assets/images/flight1.jpg";
import flight2 from "../assets/images/flight2.jpg";
import flight3 from "../assets/images/flight3.jpg";

const img = (id, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroes: [hero1, hero2, hero3, hero4],
};

export const IMAGEOFFLIGHT = {
  flights: [flight1, flight2, flight3],
};

export const FIELDS = {
  from: {
    id: "from",
    label: "From",
    icon: PlaneTakeoff,
    type: "text",
    placeholder: "City or airport",
  },
  to: {
    id: "to",
    label: "To",
    icon: PlaneLanding,
    type: "text",
    placeholder: "Where to?",
  },
  depart: {
    id: "depart",
    label: "Departure Date",
    icon: Calendar,
    type: "date",
  },
  return: { id: "return", label: "Return Date", icon: Calendar, type: "date" },
  pax: { id: "pax", label: "Passengers", icon: Users, type: "passengers" },
  class: {
    id: "class",
    label: "Class",
    icon: Armchair,
    type: "select",
    options: ["Economy", "Premium Economy", "Business", "First Class"],
  },
};

export const NAV_LINKS = [
  { label: "Flights", path: "/flights" },
  { label: "Hotels", path: "/hotel" },
  { label: "Buses", path: "/buses" },
];

export const TABS = [
  { label: "Flights", icon: Plane },
  { label: "Hotels", icon: Hotel },
  { label: "Bus", icon: Bus },
  { label: "Activities", icon: Ticket },
];

export const STATS = [
  {
    icon: Globe,
    value: "530+",
    label: "Destinations",
    tone: "bg-sky-100 text-sky-600",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average rating",
    tone: "bg-orange-100 text-[#FF6B35]",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
    tone: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Shield,
    value: "Best price",
    label: "Guarantee",
    tone: "bg-blue-100 text-blue-700",
  },
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
  {
    name: "Botum Sakor",
    country: "Cambodia",
    price: "236,939 KHR",
    src: img("photo-1507525428034-b723cf961d3e", 900),
    flights: [
      {
        date: "Fri, 6 Nov",
        route: "KTI – DSY",
        airline: "Air Cambodia",
        stops: "Direct",
        tone: "bg-purple-700",
      },
      {
        date: "Sun, 8 Nov",
        route: "DSY – KTI",
        airline: "Air Cambodia",
        stops: "Direct",
        tone: "bg-purple-700",
      },
    ],
  },
  {
    name: "SeamReap",
    country: "Cambodia",
    price: "505,345 KHR",
    src: "https://i.pinimg.com/736x/97/06/69/970669f7e2d5cf3554036826787eb4c2.jpg",
    flights: [
      {
        date: "Tue, 12 Jan",
        route: "KTI – SRP",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
      {
        date: "Fri, 15 Jan",
        route: "SRP – KTI",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
    ],
  },
  {
    name: "Da Nang",
    country: "Vietnam",
    price: "578,172 KHR",
    src: img("photo-1559592413-7cec4d0cae2b", 900),
    flights: [
      {
        date: "Tue, 15 Dec",
        route: "KTI – DAD",
        airline: "Air Cambodia",
        stops: "Direct",
        tone: "bg-purple-700",
      },
      {
        date: "Sat, 19 Dec",
        route: "DAD – KTI",
        airline: "Air Cambodia",
        stops: "Direct",
        tone: "bg-purple-700",
      },
    ],
  },
  {
    name: "Tokyo",
    country: "Japan",
    price: "1,420,000 KHR",
    src: img("photo-1540959733332-eab4deabeeaf", 900),
    flights: [
      {
        date: "Mon, 18 Jan",
        route: "PNH – NRT",
        airline: "ANA",
        stops: "Direct",
        tone: "bg-red-600",
      },
      {
        date: "Sun, 24 Jan",
        route: "NRT – PNH",
        airline: "ANA",
        stops: "Direct",
        tone: "bg-red-600",
      },
    ],
  },
  {
    name: "Paris",
    country: "France",
    price: "2,890,500 KHR",
    src: img("photo-1502602898657-3e91760cbb34", 900),
    flights: [
      {
        date: "Wed, 10 Feb",
        route: "PNH – CDG",
        airline: "Air France",
        stops: "1 stop",
        tone: "bg-blue-800",
      },
      {
        date: "Thu, 18 Feb",
        route: "CDG – PNH",
        airline: "Air France",
        stops: "1 stop",
        tone: "bg-blue-800",
      },
    ],
  },
  {
    name: "Bali",
    country: "Indonesia",
    price: "689,400 KHR",
    src: img("photo-1537996194471-e657df975ab4", 900),
    flights: [
      {
        date: "Sat, 23 Jan",
        route: "PNH – DPS",
        airline: "AirAsia",
        stops: "Direct",
        tone: "bg-emerald-700",
      },
      {
        date: "Fri, 29 Jan",
        route: "DPS – PNH",
        airline: "AirAsia",
        stops: "Direct",
        tone: "bg-emerald-700",
      },
    ],
  },
  {
    name: "Singapore",
    country: "Singapore",
    price: "905,345 KHR",
    src: "https://i.pinimg.com/1200x/96/0f/1c/960f1cc2ce7eb460e3a6c7914a8bc215.jpg",
    flights: [
      {
        date: "Tue, 12 Jan",
        route: "KTI – SRP",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
      {
        date: "Fri, 15 Jan",
        route: "SRP – KTI",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
    ],
  },
  {
    name: "Naypyidaw ",
    country: "Myanmar",
    price: "508,345 KHR",
    src: "https://i.pinimg.com/1200x/84/a7/cb/84a7cb55b159d7965993c21837c366d4.jpg",
    flights: [
      {
        date: "Tue, 12 Jan",
        route: "KTI – SRP",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
      {
        date: "Fri, 15 Jan",
        route: "SRP – KTI",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
    ],
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    price: "895,345 KHR",
    src: "https://i.pinimg.com/1200x/cd/60/f4/cd60f439e6e3d2971d44b32e264c1d0b.jpg",
    flights: [
      {
        date: "Tue, 12 Jan",
        route: "KTI – SRP",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
      {
        date: "Fri, 15 Jan",
        route: "SRP – KTI",
        airline: "Khmer Airline",
        stops: "Direct",
        tone: "bg-[#0F172A]",
      },
    ],
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

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
  from: {
    id: "from",
    label: "From",
    icon: PlaneTakeoff,
    type: "text",
    placeholder: "City or airport",
  },
  to: {
    id: "to",
    label: "To",
    icon: PlaneLanding,
    type: "text",
    placeholder: "Where to?",
  },
  depart: {
    id: "depart",
    label: "Departure Date",
    icon: Calendar,
    type: "date",
  },
  return: { id: "return", label: "Return Date", icon: Calendar, type: "date" },
  pax: { id: "pax", label: "Passengers", icon: Users, type: "passengers" },
  class: {
    id: "class",
    label: "Class",
    icon: Armchair,
    type: "select",
    options: ["Economy", "Premium Economy", "Business", "First Class"],
  },
};

export const COUNTRIES = [
  {
    name: "Cambodia",
    price: "126,547 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/de/c9/b1/dec9b1ce92938974c93cf3beffa8e385.jpg",
  },
  {
    name: "Japan",
    price: "284,0056 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/74/99/02/7499026cb7c601e4f114635b6d090e3a.jpg",
  },
  {
    name: "China",
    price: "306,329 KHR",
    stops: "Direct",
    src: img("photo-1508804185872-d7badad00f7d"),
  },
  {
    name: "Vietnam",
    price: "311,406 KHR",
    stops: "Direct",
    src: img("photo-1528127269322-539801943592"),
  },
  {
    name: "Singapore",
    price: "403,240 KHR",
    stops: "Direct",
    src: img("photo-1525625293386-3f8f99389edd"),
  },
  {
    name: "Malaysia",
    price: "417,235 KHR",
    stops: "Direct",
    src: img("photo-1596422846543-75c6fc197f07"),
  },
  {
    name: "France",
    price: "311,4006 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/8b/97/1a/8b971a47e429f9d86fc025f6ca8d1b77.jpg",
  },
  {
    name: "Indonesia",
    price: "403,240 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/19/26/cd/1926cde18d90044e03a876d04d0f7603.jpg",
  },
  {
    name: "Dubai",
    price: "417,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/d9/ba/48/d9ba48881acf24fb0a07dd844b8cefd1.jpg",
  },
  {
    name: "Maldives",
    price: "311,0406 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/ea/69/2f/ea692f7fc92af229090dd87a1e4e9330.jpg",
  },
  {
    name: "Cape Town",
    price: "483,240 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/5a/e9/e6/5ae9e6a7e059e7e689c7b69db1a30f5e.jpg",
  },
  {
    name: "Seoul",
    price: "897,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/91/fb/c6/91fbc6ec1c47707221a9dca3a81995d7.jpg",
  },
  {
    name: "Bacelona",
    price: "417,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/33/a6/49/33a6492e49cf29df63dba970706636f5.jpg",
  },
  {
    name: "Rome",
    price: "456,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/37/11/b1/3711b1300b93c45220b43b541d304a3b.jpg",
  },
  {
    name: "Amsterdam",
    price: "567,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/25/22/bf/2522bf67f59cd6f36f7e2ad142f5ec6c.jpg",
  },
  {
    name: "Prague",
    price: "417,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/f2/60/cb/f260cb365784cfcd4679c056fe7d56ef.jpg",
  },
  {
    name: "Veinna",
    price: "1217,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/00/83/eb/0083eb52dcbebf4ca27715a95662e39f.jpg",
  },
  {
    name: "Istanbul",
    price: "126,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/66/52/db/6652db827f5725f3524d58e9c95d591c.jpg",
  },
  {
    name: "Zurich",
    price: "127,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/c1/3a/b0/c13ab0fb6a855fe96290bfd81d8c204f.jpg",
  },
  {
    name: "Kyoto",
    price: "1217,0305 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/93/38/60/9338600c44ce90fee5e6a1013f322497.jpg",
  },
  {
    name: "Lisbon",
    price: "917,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/8d/98/39/8d9839af31276f96640a2ec80dd1ef2f.jpg",
  },
  {
    name: "Hong Kong",
    price: "137,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/ac/98/33/ac9833eb194f46c1c81fd71405c21ec0.jpg",
  },
  {
    name: "Queenstown",
    price: "1217,6735 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/cd/ef/42/cdef429523018954d7ece8ff07fff93c.jpg",
  },
  {
    name: "Rio de Janeiro",
    price: "4534,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/18/96/5f/18965fa718ec2f0c25140abf74597591.jpg",
  },
  {
    name: "Munich",
    price: "1244,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/15/f6/85/15f685a86973e78b3d96eae3a40af031.jpg",
  },
  {
    name: "Copenhagen",
    price: "134,0535 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/fb/a4/10/fba4108d56657456e3d3a948e38ee036.jpg",
  },
  {
    name: "Edinburgh",
    price: "1124,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/05/38/6a/05386a4309f85e30559e39245742ce6b.jpg",
  },
  {
    name: "Marrakech",
    price: "344,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/5b/6a/5c/5b6a5c863e1f3df7d7fdd009f76330be.jpg",
  },
  {
    name: "Cairo",
    price: "134,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/71/c5/65/71c56553c1b110e75f5c790bfc42e160.jpg",
  },
  {
    name: "Vancouver",
    price: "345,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/44/14/26/4414260850292f1b1f6e4ed53f3a8fc7.jpg",
  },
  {
    name: "Los Angeles",
    price: "67,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/c4/ae/6c/c4ae6cf63e58c47dc7dd5f7b7ee1275d.jpg",
  },
  {
    name: "Osaka",
    price: "454,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/736x/79/85/b9/7985b9c85da7f6fc262948af8c959ae5.jpg",
  },
  {
    name: "Bora Bora",
    price: "6709,0235 KHR",
    stops: "Direct",
    src: "https://i.pinimg.com/1200x/a0/d7/46/a0d7466b55ac17767b279b871b884e42.jpg",
  },
];

export const FILTERS = ["Stops", "Flight budget", "Trip style", "Continents"];