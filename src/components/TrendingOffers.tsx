
import React from 'react';
import { Button } from "@/components/ui/button";
import OfferCard from './OfferCard';

const offerData = [
  {
    title: "Save up to Rs 250 on bus tickets",
    validity: "Valid till 31 May",
    couponCode: "FIRST",
    badgeText: "BUS",
    imageSrc: "/placeholder.svg",
    color: "bg-blue-500"
  },
  {
    title: "Save up to Rs. 300 in AP, Telangana routes",
    validity: "Valid till 31 May",
    couponCode: "SUPERHIT",
    badgeText: "BUS",
    imageSrc: "/placeholder.svg",
    color: "bg-green-500"
  },
  {
    title: "Save up to Rs 300 on Chartered Bus",
    validity: "Valid till 31 May",
    couponCode: "CHARTERED15",
    badgeText: "BUS",
    imageSrc: "/placeholder.svg", 
    color: "bg-red-700"
  },
  {
    title: "Save 25% up to Rs 100 on fares",
    validity: "Valid till 31 May",
    couponCode: "RBNEW",
    badgeText: "BUS",
    imageSrc: "/placeholder.svg",
    color: "bg-emerald-500"
  }
];

const TrendingOffers = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">TRENDING OFFERS</h2>
          <Button variant="ghost" className="text-brand-red">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerData.map((offer, index) => (
            <div 
              key={offer.couponCode} 
              className="opacity-0 animate-slide-up" 
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingOffers;
