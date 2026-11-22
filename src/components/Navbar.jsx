import React,{useState} from 'react'
import Logo from './Logo';
import { NAV_LINKS } from '../constants/homeConstants';
import { Search,Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import RegisterPopup from './RegisterPopup';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [registerOpen,setRegisterOpen] = useState(false);
  return (
    <header className="absolute top-4 left-0 z-50 w-full">
      <nav
        aria-label="Main"
        className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#0F172A]/30 px-5 py-3 backdrop-blur-xl lg:px-8"
      >
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({isActive}) => 
                    `text-sm font-medium transition-colors duration-300 ${isActive
                      ? 'text-[#FF6B35]' : 'text-white/85 hover:text-[#FF6B35]'
                    }` 
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full text-white/85 transition-all duration-300 hover:bg-white/15">
            <Search className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setRegisterOpen(true)}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#FF6B35]">
            Register
          </button>
          <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0F172A] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FF6B35] hover:text-white">
            Login
          </button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/20 bg-[#0F172A]/90 p-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="block rounded-2xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-full border border-white/30 py-3 text-sm font-semibold text-white">Register</button>
            <button className="flex-1 rounded-full bg-white py-3 text-sm font-semibold text-[#0F172A]">Sign In</button>
          </div>
        </div>
      )}
      <RegisterPopup
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />
    </header>

    
  );
}

export default Navbar
