
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About BusGo</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              BusGo is Bangladesh's premier online bus ticketing platform, revolutionizing the way people book their travel across the country.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to make bus travel simple, accessible, and enjoyable for everyone. We're committed to connecting travelers with the best bus operators across Bangladesh, ensuring safe, comfortable, and on-time journeys.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Our Story</h2>
            <p className="mb-6">
              Founded in 2020, BusGo emerged from a simple idea: to digitize Bangladesh's bus ticketing system and make travel planning hassle-free. What began as a startup with connections to just a handful of routes has now grown into the country's most trusted bus ticketing platform, serving millions of travelers annually.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Why Choose BusGo?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Largest network of bus operators across Bangladesh</li>
              <li>Secure, fast, and reliable booking process</li>
              <li>Multiple payment options for your convenience</li>
              <li>24/7 customer support for any assistance</li>
              <li>Best price guarantee with exclusive offers and discounts</li>
              <li>User-friendly platform with real-time seat selection</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a future where every bus journey in Bangladesh begins with BusGo. We're continuously innovating and expanding our services to enhance the travel experience, making transportation more efficient and accessible for everyone in the country.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <p className="mb-6">
              Behind BusGo is a team of passionate professionals dedicated to transforming the travel industry in Bangladesh. Our diverse team combines expertise in technology, customer service, and the transport sector to deliver an exceptional booking experience.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default AboutUs;
