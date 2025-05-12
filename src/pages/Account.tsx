
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Button } from "@/components/ui/button";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-4">Please login to view your account details</h2>
            <p className="text-gray-500 mb-6">Login to manage your profile, view booking history, and more.</p>
            <Button asChild>
              <a href="/login">Login Now</a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Account;
