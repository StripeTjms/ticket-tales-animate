
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Customer Support</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p><strong>Customer Support:</strong> +880 1700-000000</p>
              <p><strong>Email:</strong> support@busgo.com.bd</p>
              <p><strong>Working Hours:</strong> 24/7 Support</p>
              <p><strong>Head Office:</strong> Gulshan, Dhaka, Bangladesh</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I cancel my booking?</AccordionTrigger>
                <AccordionContent>
                  You can cancel your booking from the 'My Bookings' section. Cancellation charges may apply depending on how close to departure you cancel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I get a refund?</AccordionTrigger>
                <AccordionContent>
                  Refunds are processed automatically to your original payment method within 5-7 business days after cancellation approval.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I change my travel date?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can reschedule your trip from the 'My Bookings' section up to 24 hours before departure, subject to seat availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Support;
