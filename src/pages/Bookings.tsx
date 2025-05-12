
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Bookings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Bookings</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-6">You don't have any bookings yet.</p>
            <p className="text-gray-500">Book a bus ticket to see your bookings here.</p>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Bookings;
