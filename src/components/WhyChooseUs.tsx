
import React from 'react';
import { ShieldCheck, Clock, Headphones, Ticket } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-brand-red" />,
    title: "Safety First",
    description: "We ensure every bus partner follows strict safety protocols for your secure journey."
  },
  {
    icon: <Ticket className="h-10 w-10 text-brand-red" />,
    title: "Guaranteed Tickets",
    description: "Book with confidence with our guaranteed reservation and instant confirmation."
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-red" />,
    title: "24/7 Booking",
    description: "Our platform is available round the clock for your convenience."
  },
  {
    icon: <Headphones className="h-10 w-10 text-brand-red" />,
    title: "Customer Support",
    description: "Our dedicated team is available to assist you throughout your journey."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide the best bus ticket booking experience with premium features and excellent customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-red-50 p-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
