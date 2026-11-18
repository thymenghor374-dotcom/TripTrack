import React from 'react'
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SearchCard from '../components/SearchCard';
import Features from '../components/Features';
import Destinations from '../components/Destinations';
import PromoBanner from '../components/PromoBanner';
import { body } from '../constants/homeConstants';
import FAQ from '../components/FAQ';

const TravelLanding = () => {
  return (
    <div className="scroll-smooth bg-white antialiased" style={{ ...body, scrollBehavior: "smooth" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');`}</style>
      <main>
        <Hero />
        <SearchCard />
        <Stats />
        <Features />
        <Destinations />
        <FAQ/>
        <PromoBanner />
      </main>
    </div>
  );
}

export default TravelLanding
