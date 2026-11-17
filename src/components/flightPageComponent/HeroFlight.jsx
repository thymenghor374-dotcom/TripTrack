import React,{useState,useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGEOFFLIGHT,stagger,fadeUp,body,heading } from '../../constants/homeConstants';
import { ArrowRight,MapPin } from 'lucide-react';

const HeroFlight = () => {
  const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % IMAGEOFFLIGHT.flights.length);
      }, 2000);

      return () => clearInterval(timer);
    }, []);
  return (
    <section id="top" className="relative flex min-h-[760px] items-center overflow-hidden lg:min-h-[840px]">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={IMAGEOFFLIGHT.flights[currentImage]}
          alt="Travel destination"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/50 to-[#0F172A]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-6 pb-48 pt-40 lg:px-12"
      >
        <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md" style={body}>
          <MapPin className="h-4 w-4 text-[#FF6B35]" /> Book your destination
        </motion.p>
        <motion.h1 variants={fadeUp} style={heading} className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Book Journeys <br /> Made <span className="text-[#FF6B35]">Simple</span>
        </motion.h1>
        <motion.p variants={fadeUp} style={body} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Flights, stays and unforgettable experiences from Santorini to Kyoto, all in one place and always at the best price.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#destinations" style={body} className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/30">
            Explore Destinations <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#deals" style={body} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md">
            View Deals
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroFlight
