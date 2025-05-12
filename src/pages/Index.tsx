
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrendingOffers from '@/components/TrendingOffers';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <HeroSection />
      <TrendingOffers />
      <WhyChooseUs />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
