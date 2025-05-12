
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Help Center</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6">How can we help you?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Booking Assistance</h3>
              <p className="text-gray-600">Having trouble with your booking? Our team is available 24/7 to help you with any issues.</p>
              <p className="font-medium">Call: +880 1700-000000</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Technical Support</h3>
              <p className="text-gray-600">Experiencing technical difficulties with our website or app? Contact our tech support team.</p>
              <p className="font-medium">Email: tech@busgo.com.bd</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Feedback</h3>
              <p className="text-gray-600">We value your feedback and continuously strive to improve our services.</p>
              <p className="font-medium">Email: feedback@busgo.com.bd</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Business Inquiries</h3>
              <p className="text-gray-600">For partnerships and business opportunities.</p>
              <p className="font-medium">Email: business@busgo.com.bd</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Help;
