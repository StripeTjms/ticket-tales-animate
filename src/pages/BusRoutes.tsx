
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { MapPin } from 'lucide-react';

const popularRoutes = [
  { from: "Dhaka", to: "Chittagong", duration: "5-6", price: "700-1200" },
  { from: "Dhaka", to: "Cox's Bazar", duration: "7-8", price: "1200-1800" },
  { from: "Dhaka", to: "Sylhet", duration: "4-5", price: "600-900" },
  { from: "Chittagong", to: "Cox's Bazar", duration: "2-3", price: "400-700" },
  { from: "Dhaka", to: "Rajshahi", duration: "5-6", price: "700-1000" },
  { from: "Dhaka", to: "Khulna", duration: "6-7", price: "800-1100" }
];

const Routes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Popular Bus Routes in Bangladesh</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-brand-red" />
                <h3 className="font-medium text-lg">{route.from} to {route.to}</h3>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Duration: {route.duration} hours</span>
                <span>৳ {route.price} BDT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Routes;
