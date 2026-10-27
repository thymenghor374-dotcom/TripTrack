import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter, FaYoutube } from 'react-icons/fa';
import { body, heading, NAV_LINKS } from '../constants/homeConstants';
import Logo from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  const socials = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaYoutube, label: "YouTube" },
  ];
  return (
    <footer className="bg-[#0F172A] text-white" style={body}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            Premium travel booking for flights, hotels and unforgettable experiences worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a key={label} href="#top" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-[#FF6B35]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Explore">
          <h3 style={heading} className="mb-5 font-bold">Explore</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className='text-sm font-medium text-white/85 transition-colors duration-300 hover:text-[#FF6B35]'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <h3 style={heading} className="mb-5 font-bold">Company</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {["About us", "Careers", "Press", "Help centre"].map((l) => (
              <li key={l}><a href="#top" className="transition-colors hover:text-[#FF6B35]">{l}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 style={heading} className="mb-5 font-bold">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#FF6B35]" /> +1 (555) 012-3456</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#FF6B35]" /> hello@voyara.com</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#FF6B35]" /> 120 Harbour Street, Lisbon</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 Voyara. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
