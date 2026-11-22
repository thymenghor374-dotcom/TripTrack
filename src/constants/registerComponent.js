import GoogleIcon from '../components/GoogleIcon';
import FacebookIcon from '../components/FacebookIcon';
import AppleIcon from '../components/AppleIcon';
import { Lock,ShieldCheck,Zap } from 'lucide-react';

export const img = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const DESTINATIONS = [
  { name: "Bali", price: "from $689", src: img("photo-1537996194471-e657df975ab4", 300), pos: "left-6 top-[38%]", delay: 0 },
  { name: "Kyoto", price: "from $812", src: img("photo-1493976040374-85c8e12f0c0e", 300), pos: "right-6 top-[48%]", delay: 1.2 },
  { name: "Swiss Alps", price: "from $945", src: img("photo-1530122037265-a5f1f91d3b99", 300), pos: "left-12 bottom-[24%]", delay: 2.2 },
];

export const HERO = img("photo-1570077188670-e3a8d69ac5ff", 1600);

export const SOCIALS = [
  { label: "Continue with Google", Icon: GoogleIcon },
  { label: "Continue with Facebook", Icon: FacebookIcon },
  { label: "Continue with Apple", Icon: AppleIcon },
];
export const TRUST_FEATURES = ["Secure account", "Instant booking", "24/7 customer support"];
export const TRUST_BADGES = [
  { icon: Lock, label: "Secure Authentication" },
  { icon: ShieldCheck, label: "Privacy Protected" },
  { icon: Zap, label: "Fast Registration" },
];

export const list = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } };
export const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };