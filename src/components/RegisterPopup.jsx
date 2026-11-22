import React,{useState,useEffect,useRef} from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { body,heading } from '../constants/filterComponent';
import { X,User,Mail,Check,Lock } from 'lucide-react';
import HeroRegister from './HeroRegister';
import FieldRegister from './FieldRegister';
import { TRUST_BADGES,SOCIALS,list,item } from '../constants/registerComponent';



const RegisterPopup = ({ open, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(true);
  const isOpen = open ?? internalOpen;
  const close = onClose ?? (() => setInternalOpen(false));

  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const submit = (e) => {
    e.preventDefault();
    if (loading) return; // visual loading state only
    setLoading(true);
    timer.current = setTimeout(() => setLoading(false), 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
          style={body}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-title"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="relative flex max-h-[94vh] w-full max-w-[1020px] flex-col overflow-y-auto rounded-3xl border border-[#E5E7EB] bg-white shadow-2xl shadow-slate-900/25 lg:h-[min(780px,94vh)] lg:flex-row lg:overflow-hidden"
          >
            <motion.button
              type="button"
              onClick={close}
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.92 }}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/85 text-[#64748B] shadow-md backdrop-blur-md transition-colors duration-300 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <HeroRegister/>

            {/* form panel */}
            <div className="bg-white px-6 py-8 sm:px-10 lg:flex-1 lg:overflow-y-auto lg:px-12 lg:py-10">
              <motion.form
                onSubmit={submit}
                noValidate
                variants={list}
                initial="hidden"
                animate="show"
                className="mx-auto w-full max-w-md"
                aria-busy={loading}
              >
                <motion.div variants={item}>
                  <h1 id="register-title" style={heading} className="text-3xl font-extrabold tracking-tight text-[#0F172A]">Create Account</h1>
                  <p className="mt-2 text-[15px] text-[#64748B]">Start your next adventure today.</p>
                </motion.div>

                <div className="mt-7 grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FieldRegister id="first-name" label="First Name" icon={User} autoComplete="given-name" />
                    <FieldRegister id="last-name" label="Last Name" icon={User} autoComplete="family-name" />
                  </div>
                  <FieldRegister id="email" label="Email Address" type="email" icon={Mail} autoComplete="email" />
                  <FieldRegister id="password" label="Password" icon={Lock} autoComplete="new-password" withToggle />
                  <FieldRegister id="confirm-password" label="Confirm Password" icon={Lock} autoComplete="new-password" withToggle />
                </div>

                <motion.div variants={item} className="mt-5 flex items-start gap-3">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={agreed}
                    aria-labelledby="terms-text"
                    onClick={() => setAgreed((v) => !v)}
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                      agreed ? "border-[#FF6B35] bg-[#FF6B35]" : "border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    <motion.span initial={false} animate={{ scale: agreed ? 1 : 0, opacity: agreed ? 1 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 28 }}>
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                    </motion.span>
                  </button>
                  <p id="terms-text" className="text-sm leading-relaxed text-[#64748B]">
                    I agree to the{" "}
                    <a href="#terms" className="font-semibold text-[#FF6B35] hover:underline">Terms of Service</a> and{" "}
                    <a href="#privacy" className="font-semibold text-[#FF6B35] hover:underline">Privacy Policy</a>.
                  </p>
                </motion.div>

                <motion.button
                  variants={item}
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? undefined : { y: -3, scale: 1.02, boxShadow: "0 14px 40px rgba(255,107,53,0.5)" }}
                  whileTap={loading ? undefined : { scale: 0.98 }}
                  className="mt-6 flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FF6B35] text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-colors duration-300 hover:bg-[#F55A24] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>

                <motion.div variants={item} className="my-6 flex items-center gap-4" role="separator" aria-label="or continue with">
                  <span className="h-px flex-1 bg-[#E5E7EB]" />
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#94A3B8]">OR CONTINUE WITH</span>
                  <span className="h-px flex-1 bg-[#E5E7EB]" />
                </motion.div>

                <motion.div variants={item} className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {SOCIALS.map(({ label, Icon }) => (
                    <motion.button
                      key={label}
                      type="button"
                      aria-label={label}
                      title={label}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white text-sm font-semibold text-[#0F172A] shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                    >
                      <Icon />
                      <span className="sm:hidden">{label}</span>
                    </motion.button>
                  ))}
                </motion.div>

                <motion.p variants={item} className="mt-6 text-center text-sm text-[#64748B]">
                  Already have an account?{" "}
                  <a
                    href="#sign-in"
                    className="relative font-semibold text-[#FF6B35] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#FF6B35] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100"
                  >
                    Sign In
                  </a>
                </motion.p>

                <motion.ul variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#EEF0F3] pt-6">
                  {TRUST_BADGES.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B]">
                      <Icon className="h-4 w-4 text-emerald-500" aria-hidden="true" /> {label}
                    </li>
                  ))}
                </motion.ul>

                <motion.p variants={item} className="mt-4 text-center text-xs leading-relaxed text-[#94A3B8]">
                  By creating an account, you agree to our Terms and Privacy Policy.
                </motion.p>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RegisterPopup
