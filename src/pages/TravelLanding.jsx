import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import SearchCard from '../components/SearchCard';
import Features from '../components/Features';
import Destinations from '../components/Destinations';
import PromoBanner from '../components/PromoBanner';
import Footer from '../components/Footer';
import { body } from '../constants/homeConstants';

const TravelLanding = () => {
  return (
    <div className="scroll-smooth bg-white antialiased" style={{ ...body, scrollBehavior: "smooth" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');`}</style>
      <Navbar />
      <main>
        <Hero />
        <SearchCard />
        <Stats />
        <Features />
        <Destinations />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}

export default TravelLanding
