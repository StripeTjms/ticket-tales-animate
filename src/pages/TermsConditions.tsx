
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Welcome to BusGo. Please read these terms and conditions carefully before using our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using BusGo's website, mobile application, or any other services offered by BusGo (collectively, the "Services"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. User Account</h2>
            <p className="mb-4">
              2.1. To use certain features of the Services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            <p className="mb-4">
              2.2. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p className="mb-4">
              2.3. You are solely responsible for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Booking and Payment</h2>
            <p className="mb-4">
              3.1. BusGo acts as an intermediary between you and the bus operators. When you book a ticket through our Services, you enter into a direct contractual relationship with the bus operator.
            </p>
            <p className="mb-4">
              3.2. Payments made through our Services are secure and processed by our payment partners. By making a payment, you authorize us to charge the specified amount to your chosen payment method.
            </p>
            <p className="mb-4">
              3.3. All prices listed on our Services are in Bangladeshi Taka (BDT) and include applicable taxes unless stated otherwise.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Cancellation and Refund Policy</h2>
            <p className="mb-4">
              4.1. Cancellation policies vary by bus operator. The specific cancellation policy applicable to your booking will be displayed during the booking process.
            </p>
            <p className="mb-4">
              4.2. Refunds, when applicable, will be processed within 5-7 business days to the original payment method.
            </p>
            <p className="mb-4">
              4.3. BusGo reserves the right to charge a service fee for processing cancellations and refunds.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Limitations of Liability</h2>
            <p className="mb-4">
              5.1. BusGo is not responsible for any delays, cancellations, or other issues related to the bus services provided by the operators.
            </p>
            <p className="mb-4">
              5.2. We strive to provide accurate information about routes, schedules, and fares, but we cannot guarantee the accuracy of all information provided by bus operators.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              6.1. All content and materials available on our Services, including but not limited to text, graphics, logos, button icons, images, and software, are the property of BusGo or its content suppliers and are protected by copyright and trademark laws.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Modification of Terms</h2>
            <p className="mb-4">
              7.1. BusGo reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p className="mb-4">
              8.1. These Terms and Conditions shall be governed by and construed in accordance with the laws of Bangladesh.
            </p>
            
            <p className="mt-8">
              Last updated: May 13, 2025
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default TermsConditions;
