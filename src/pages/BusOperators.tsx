
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bus, Star, Search, MapPin } from "lucide-react";

// Mock data for bus operators
const operators = [
  {
    id: 1,
    name: "Hanif Enterprise",
    logo: "https://via.placeholder.com/100x50?text=Hanif",
    rating: 4.7,
    routes: 124,
    baseLocation: "Dhaka",
    description: "One of Bangladesh's largest and most reliable bus operators with services across the country.",
    busTypes: ["AC", "Non-AC", "Sleeper"],
    featured: true
  },
  {
    id: 2,
    name: "Shyamoli Paribahan",
    logo: "https://via.placeholder.com/100x50?text=Shyamoli",
    rating: 4.5,
    routes: 87,
    baseLocation: "Dhaka",
    description: "Offering premium bus services between major cities in Bangladesh with a focus on comfort and safety.",
    busTypes: ["AC", "Non-AC", "Business Class"],
    featured: true
  },
  {
    id: 3,
    name: "Green Line Paribahan",
    logo: "https://via.placeholder.com/100x50?text=GreenLine",
    rating: 4.8,
    routes: 62,
    baseLocation: "Dhaka",
    description: "Premium luxury bus service with modern amenities and experienced drivers.",
    busTypes: ["AC", "Business Class", "Sleeper"],
    featured: true
  },
  {
    id: 4,
    name: "Sohag Paribahan",
    logo: "https://via.placeholder.com/100x50?text=Sohag",
    rating: 4.6,
    routes: 93,
    baseLocation: "Dhaka",
    description: "Comfortable travel solutions connecting major districts across Bangladesh.",
    busTypes: ["AC", "Non-AC"],
    featured: false
  },
  {
    id: 5,
    name: "Ena Transport",
    logo: "https://via.placeholder.com/100x50?text=Ena",
    rating: 4.4,
    routes: 75,
    baseLocation: "Dhaka",
    description: "Reliable bus services with modern fleet and customer-friendly staff.",
    busTypes: ["AC", "Non-AC", "Sleeper"],
    featured: false
  },
  {
    id: 6,
    name: "Desh Travels",
    logo: "https://via.placeholder.com/100x50?text=DeshTravels",
    rating: 4.3,
    routes: 52,
    baseLocation: "Chittagong",
    description: "Specialized in routes connecting Chittagong with other parts of Bangladesh.",
    busTypes: ["AC", "Non-AC"],
    featured: false
  },
  {
    id: 7,
    name: "Nabil Paribahan",
    logo: "https://via.placeholder.com/100x50?text=Nabil",
    rating: 4.2,
    routes: 48,
    baseLocation: "Sylhet",
    description: "Popular choice for travel to and from Sylhet with good connectivity.",
    busTypes: ["AC", "Non-AC"],
    featured: false
  },
  {
    id: 8,
    name: "Soudia Coach Service",
    logo: "https://via.placeholder.com/100x50?text=Soudia",
    rating: 4.5,
    routes: 39,
    baseLocation: "Dhaka",
    description: "Luxury coach service with emphasis on passenger comfort and safety.",
    busTypes: ["AC", "Sleeper"],
    featured: false
  }
];

const BusOperators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOperators = operators.filter(operator => 
    operator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    operator.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    operator.baseLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bus Operators</h1>
        <p className="text-gray-600 mb-8">Discover Bangladesh's top bus operators and their services</p>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by operator name or location..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {filteredOperators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOperators.map((operator) => (
              <Card key={operator.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{operator.name}</CardTitle>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" /> {operator.baseLocation}
                      </div>
                    </div>
                    <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500 mr-1" /> 
                      <span className="text-sm font-medium">{operator.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{operator.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {operator.busTypes.map(type => (
                      <Badge key={type} variant="outline" className="bg-gray-50">
                        {type}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Bus className="h-3.5 w-3.5 mr-1" />
                    <span>{operator.routes} active routes</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3">
                  <Button variant="outline" className="w-full">View Routes</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No bus operators found matching your search.</p>
          </div>
        )}
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default BusOperators;
