
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Bus, Clock, User, MapPin } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Mock trip data
const trips = [
  {
    id: "BK00123",
    from: "Dhaka",
    to: "Chittagong",
    date: "2025-05-08",
    departureTime: "10:30 AM",
    arrivalTime: "4:30 PM",
    seats: ["A1", "A2"],
    operator: "Hanif Enterprise",
    busType: "AC",
    fare: 1800,
    status: "Completed"
  },
  {
    id: "BK00118",
    from: "Chittagong",
    to: "Cox's Bazar",
    date: "2025-04-15",
    departureTime: "9:00 AM",
    arrivalTime: "1:00 PM",
    seats: ["B3"],
    operator: "Green Line",
    busType: "AC",
    fare: 1000,
    status: "Completed"
  },
  {
    id: "BK00112",
    from: "Dhaka",
    to: "Sylhet",
    date: "2025-03-22",
    departureTime: "11:00 PM",
    arrivalTime: "5:00 AM",
    seats: ["C4", "C5", "C6"],
    operator: "Shyamoli",
    busType: "Sleeper",
    fare: 2400,
    status: "Completed"
  },
  {
    id: "BK00098",
    from: "Dhaka",
    to: "Rajshahi",
    date: "2025-02-10",
    departureTime: "8:30 AM",
    arrivalTime: "3:30 PM",
    seats: ["D7", "D8"],
    operator: "Sohag",
    busType: "AC",
    fare: 1600,
    status: "Cancelled"
  },
  {
    id: "BK00089",
    from: "Sylhet",
    to: "Dhaka",
    date: "2025-01-05",
    departureTime: "9:30 PM",
    arrivalTime: "4:30 AM",
    seats: ["E9"],
    operator: "Ena",
    busType: "Non-AC",
    fare: 700,
    status: "Completed"
  },
];

// Upcoming trips
const upcomingTrips = [
  {
    id: "BK00135",
    from: "Dhaka",
    to: "Khulna",
    date: "2025-05-25",
    departureTime: "8:00 AM",
    arrivalTime: "3:00 PM",
    seats: ["A3", "A4"],
    operator: "Hanif Enterprise",
    busType: "AC",
    fare: 1500,
    status: "Confirmed"
  },
  {
    id: "BK00142",
    from: "Dhaka",
    to: "Cox's Bazar",
    date: "2025-06-10",
    departureTime: "10:00 PM",
    arrivalTime: "8:00 AM",
    seats: ["B5"],
    operator: "Green Line",
    busType: "Sleeper",
    fare: 2200,
    status: "Confirmed"
  }
];

const TripHistory = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // For a real app, you would implement actual authentication
  // For now, we'll simulate a login check
  
  const filteredTrips = trips.filter(trip => 
    trip.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.operator.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredUpcoming = upcomingTrips.filter(trip => 
    trip.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.operator.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <div className="container max-w-7xl mx-auto py-16 px-6 flex-1 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Required</h1>
            <p className="text-gray-600 mb-6">Please login to view your trip history.</p>
            <div className="flex flex-col space-y-4">
              <Button onClick={() => setIsLoggedIn(true)}>
                Login Now
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
        
        <Footer />
        <Toaster position="top-right" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Trips</h1>
        <p className="text-gray-600 mb-8">View and manage your past and upcoming trips</p>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search trips by destination, operator..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
            <TabsTrigger value="past">Past Trips</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {filteredUpcoming.length > 0 ? (
              <div className="space-y-6">
                {filteredUpcoming.map((trip) => (
                  <Card key={trip.id} className="overflow-hidden">
                    <div className={`h-2 w-full ${trip.status === 'Confirmed' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-100">{trip.status}</Badge>
                          <CardTitle className="text-xl flex items-center gap-2">
                            {trip.from} <span className="text-gray-400">to</span> {trip.to}
                          </CardTitle>
                          <CardDescription className="mt-1">Booking ID: {trip.id}</CardDescription>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <p className="text-lg font-semibold">৳{trip.fare}</p>
                          <p className="text-sm text-gray-500">{trip.busType}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="flex items-center mb-1">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm text-gray-500">Date</span>
                          </div>
                          <p>{trip.date}</p>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm text-gray-500">Time</span>
                          </div>
                          <p>{trip.departureTime} - {trip.arrivalTime}</p>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <Bus className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm text-gray-500">Bus Operator</span>
                          </div>
                          <p>{trip.operator}</p>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-gray-500" />
                          <span className="mr-2">Seats:</span>
                          {trip.seats.map(seat => (
                            <Badge key={seat} variant="outline" className="mr-1">{seat}</Badge>
                          ))}
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-3">
                          <Button variant="outline">View Details</Button>
                          <Button variant="outline" className="text-red-500 border-red-200">Cancel Trip</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <Bus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No upcoming trips found</h3>
                <p className="mt-2 text-gray-500">
                  {searchTerm ? "Try adjusting your search" : "Book your next journey with us today!"}
                </p>
                <Button className="mt-6" onClick={() => navigate('/')}>Book a Trip</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {filteredTrips.filter(trip => trip.status === 'Completed').length > 0 ? (
              <div className="space-y-6">
                {filteredTrips
                  .filter(trip => trip.status === 'Completed')
                  .map((trip) => (
                    <Card key={trip.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <Badge className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100">{trip.status}</Badge>
                            <CardTitle className="text-xl flex items-center gap-2">
                              {trip.from} <span className="text-gray-400">to</span> {trip.to}
                            </CardTitle>
                            <CardDescription className="mt-1">Booking ID: {trip.id}</CardDescription>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <p className="text-lg font-semibold">৳{trip.fare}</p>
                            <p className="text-sm text-gray-500">{trip.busType}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center mb-1">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Date</span>
                            </div>
                            <p>{trip.date}</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Time</span>
                            </div>
                            <p>{trip.departureTime} - {trip.arrivalTime}</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Bus className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Bus Operator</span>
                            </div>
                            <p>{trip.operator}</p>
                          </div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="mr-2">Seats:</span>
                            {trip.seats.map(seat => (
                              <Badge key={seat} variant="outline" className="mr-1">{seat}</Badge>
                            ))}
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No past trips found</h3>
                <p className="mt-2 text-gray-500">
                  {searchTerm ? "Try adjusting your search" : "Your completed journeys will appear here"}
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="cancelled">
            {filteredTrips.filter(trip => trip.status === 'Cancelled').length > 0 ? (
              <div className="space-y-6">
                {filteredTrips
                  .filter(trip => trip.status === 'Cancelled')
                  .map((trip) => (
                    <Card key={trip.id}>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <Badge className="mb-2 bg-red-100 text-red-800 hover:bg-red-100">{trip.status}</Badge>
                            <CardTitle className="text-xl flex items-center gap-2">
                              {trip.from} <span className="text-gray-400">to</span> {trip.to}
                            </CardTitle>
                            <CardDescription className="mt-1">Booking ID: {trip.id}</CardDescription>
                          </div>
                          <div className="mt-4 md:mt-0 text-right">
                            <p className="text-lg font-semibold">৳{trip.fare}</p>
                            <p className="text-sm text-gray-500">{trip.busType}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="flex items-center mb-1">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Date</span>
                            </div>
                            <p>{trip.date}</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Time</span>
                            </div>
                            <p>{trip.departureTime} - {trip.arrivalTime}</p>
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Bus className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm text-gray-500">Bus Operator</span>
                            </div>
                            <p>{trip.operator}</p>
                          </div>
                        </div>
                        
                        <Separator className="my-4" />
                        
                        <div className="flex flex-wrap items-center justify-between">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="mr-2">Seats:</span>
                            {trip.seats.map(seat => (
                              <Badge key={seat} variant="outline" className="mr-1">{seat}</Badge>
                            ))}
                          </div>
                          <div className="mt-4 md:mt-0">
                            <Button variant="outline">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No cancelled trips</h3>
                <p className="mt-2 text-gray-500">
                  {searchTerm ? "Try adjusting your search" : "You have no cancelled bookings"}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default TripHistory;
