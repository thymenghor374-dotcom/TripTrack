import React,{useState} from 'react'
import SearchSummary from '../components/flightPageComponent/SearchSummary'
import HeroFlight from '../components/flightPageComponent/HeroFlight'
import { body } from '../constants/homeConstants'
import SortChips from '../components/flightPageComponent/SortChips'
import { heading } from '../constants/homeConstants'
import { SlidersHorizontal } from 'lucide-react'
import FilterPanel from '../components/flightPageComponent/FilterPanel'
import PromoStrip from '../components/flightPageComponent/PromoStrip'
import FilterDrawer from '../components/flightPageComponent/FilterDrawer'
import { FLIGHTS } from '../constants/flightConstant'
import { motion } from 'framer-motion'
import { stagger } from '../constants/homeConstants'
import FlightCard from '../components/flightPageComponent/FlightCard'
import FeaturedDestination from '../components/flightPageComponent/FeaturedDestination'


const Flights = () => {    
  const [drawer, setDrawer] = useState(false);  
  const [activeSort, setActiveSort] = useState("Best");
  const sortedFlights = [...FLIGHTS].sort((a,b) => {
    if (a.badge === activeSort) return -1;
    if (b.badge === activeSort) return 1;
    return 0;
  });
  return (
    <div className="scroll-smooth bg-white antialiased" style={{ ...body, scrollBehavior: "smooth" }}>
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');`}</style>
      <main>
      <HeroFlight/>
      <SearchSummary />
      <FeaturedDestination/>
       <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 style={heading} className="text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">New York to Paris</h1>
              <p className="mt-1 text-sm text-[#64748B]">124 flights found · Prices shown per traveler</p>
            </div>
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition-all duration-300 hover:shadow-lg md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 text-[#FF6B35]" /> Filters
            </button>
          </div>
          <div className="mt-6"><SortChips 
            active={activeSort}
            setActive={setActiveSort}
          /></div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr] lg:px-12">
          <aside className="hidden self-start md:sticky md:top-24 md:block" aria-label="Filters">
            <FilterPanel />
          </aside>
          <motion.div variants={stagger} 
            initial="hidden" 
            animate="show" 
            className="flex flex-col gap-6">
            {sortedFlights.map((f) => (
              <FlightCard 
              key={f.airline}
              f={f} 
              activeSort={activeSort}
             />
             ))}
          </motion.div>
        </div>
 
        <PromoStrip />
      </main>

      <FilterDrawer open={drawer} onClose={() => setDrawer(false)} />
    </div>
  )
}

export default Flights
