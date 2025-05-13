
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                How do I book a ticket on BusGo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Booking a ticket on BusGo is simple. Just enter your departure city, destination, and travel date in the search form. Select your preferred bus from the available options, choose your seat, fill in passenger details, and complete the payment. You'll receive an e-ticket via email and SMS.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We accept various payment methods including credit/debit cards (Visa, Mastercard, American Express), mobile banking (bKash, Nagad, Rocket), and internet banking options from most major Bangladesh banks.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                How can I cancel my ticket?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                You can cancel your ticket from the "My Bookings" section. Log in to your account, find your booking, and click on "Cancel Ticket." Please note that cancellation charges may apply depending on the operator's policy and how close to departure you cancel.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                How do I get a refund for a cancelled ticket?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Refunds are processed automatically to your original payment method within 5-7 business days after cancellation. The refund amount depends on the bus operator's cancellation policy and timing of cancellation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Can I change my travel date after booking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, you can reschedule your trip from the "My Bookings" section up to 24 hours before departure, subject to seat availability. Some operators may charge a rescheduling fee.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                Is my personal information secure with BusGo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, we take data security very seriously. We use industry-standard encryption protocols to protect all personal and payment information. Your data is never shared with third parties without your consent.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">
                Do I need to create an account to book tickets?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                While it's not mandatory, creating an account offers many benefits like faster checkout, easy access to booking history, and special promotions. You can also book as a guest if you prefer.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-semibold">
                What happens if my bus is delayed or cancelled?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                In case of delays or cancellations, you'll be notified immediately via SMS and email. You'll be offered the option to reschedule or get a full refund according to the operator's policy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left font-semibold">
                How early should I arrive at the bus terminal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We recommend arriving at least 30 minutes before the scheduled departure time to allow for boarding procedures. During peak travel periods or in major cities, it's advisable to arrive 45-60 minutes early.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left font-semibold">
                Can I book tickets for someone else?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, you can book tickets for friends, family, or colleagues. Just make sure to enter their correct details during the booking process, as some operators may verify passenger identity before boarding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default FAQ;
