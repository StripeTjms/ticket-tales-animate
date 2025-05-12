
import React from 'react';
import SearchForm from './SearchForm';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      <HeroBackground />
      
      <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 animate-fade-in">
          India's No. 1 Online Bus Ticket Booking Site
        </h1>
        <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Book your bus tickets with ease. Travel safely and comfortably with verified operators across the country.
        </p>
        
        <div className="max-w-4xl mx-auto w-full">
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
