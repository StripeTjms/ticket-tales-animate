
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { 
  MapPin, 
  Bus, 
  Clock, 
  Calendar,
  Ticket, 
  Filter,
  Search 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Comprehensive bus routes data for Bangladesh
const allRoutes = [
  { 
    id: 1, 
    from: "Dhaka", 
    to: "Chittagong", 
    duration: "5-6", 
    distance: "264",
    departureTime: "08:00 AM", 
    arrivalTime: "02:00 PM", 
    busType: "AC", 
    busClass: "Business", 
    facilities: ["WiFi", "USB Charging", "Reclining Seats", "Refreshments"],
    price: "1200", 
    availableSeats: 12
  },
  { 
    id: 2, 
    from: "Dhaka", 
    to: "Chittagong", 
    duration: "5-6", 
    distance: "264",
    departureTime: "09:30 AM", 
    arrivalTime: "03:30 PM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "800", 
    availableSeats: 8
  },
  { 
    id: 3, 
    from: "Dhaka", 
    to: "Chittagong", 
    duration: "6-7", 
    distance: "264",
    departureTime: "10:00 PM", 
    arrivalTime: "04:30 AM", 
    busType: "Non-AC", 
    busClass: "Economy", 
    facilities: ["Basic Seating"],
    price: "700", 
    availableSeats: 20
  },
  { 
    id: 4, 
    from: "Dhaka", 
    to: "Cox's Bazar", 
    duration: "7-8", 
    distance: "390",
    departureTime: "08:00 AM", 
    arrivalTime: "04:00 PM", 
    busType: "AC", 
    busClass: "Business", 
    facilities: ["WiFi", "USB Charging", "Reclining Seats", "Entertainment System", "Refreshments"],
    price: "1800", 
    availableSeats: 15
  },
  { 
    id: 5, 
    from: "Dhaka", 
    to: "Cox's Bazar", 
    duration: "8-9", 
    distance: "390",
    departureTime: "09:00 PM", 
    arrivalTime: "05:30 AM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "1400", 
    availableSeats: 10
  },
  { 
    id: 6, 
    from: "Dhaka", 
    to: "Sylhet", 
    duration: "4-5", 
    distance: "244",
    departureTime: "07:00 AM", 
    arrivalTime: "12:00 PM", 
    busType: "AC", 
    busClass: "Business", 
    facilities: ["WiFi", "USB Charging", "Reclining Seats", "Refreshments"],
    price: "900", 
    availableSeats: 18
  },
  { 
    id: 7, 
    from: "Dhaka", 
    to: "Sylhet", 
    duration: "5-6", 
    distance: "244",
    departureTime: "10:00 PM", 
    arrivalTime: "03:30 AM", 
    busType: "Non-AC", 
    busClass: "Economy", 
    facilities: ["Basic Seating"],
    price: "600", 
    availableSeats: 22
  },
  { 
    id: 8, 
    from: "Chittagong", 
    to: "Cox's Bazar", 
    duration: "2-3", 
    distance: "153",
    departureTime: "09:00 AM", 
    arrivalTime: "12:00 PM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "700", 
    availableSeats: 16
  },
  { 
    id: 9, 
    from: "Chittagong", 
    to: "Cox's Bazar", 
    duration: "3-4", 
    distance: "153",
    departureTime: "03:00 PM", 
    arrivalTime: "07:00 PM", 
    busType: "Non-AC", 
    busClass: "Economy", 
    facilities: ["Basic Seating"],
    price: "400", 
    availableSeats: 25
  },
  { 
    id: 10, 
    from: "Dhaka", 
    to: "Rajshahi", 
    duration: "5-6", 
    distance: "270",
    departureTime: "10:00 AM", 
    arrivalTime: "04:00 PM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "950", 
    availableSeats: 14
  },
  { 
    id: 11, 
    from: "Dhaka", 
    to: "Rajshahi", 
    duration: "6-7", 
    distance: "270",
    departureTime: "11:00 PM", 
    arrivalTime: "05:30 AM", 
    busType: "Non-AC", 
    busClass: "Economy", 
    facilities: ["Basic Seating"],
    price: "700", 
    availableSeats: 20
  },
  { 
    id: 12, 
    from: "Dhaka", 
    to: "Khulna", 
    duration: "6-7", 
    distance: "333",
    departureTime: "08:30 AM", 
    arrivalTime: "03:30 PM", 
    busType: "AC", 
    busClass: "Business", 
    facilities: ["WiFi", "USB Charging", "Reclining Seats", "Refreshments"],
    price: "1100", 
    availableSeats: 11
  },
  { 
    id: 13, 
    from: "Dhaka", 
    to: "Khulna", 
    duration: "7-8", 
    distance: "333",
    departureTime: "10:30 PM", 
    arrivalTime: "06:00 AM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "850", 
    availableSeats: 17
  },
  { 
    id: 14, 
    from: "Dhaka", 
    to: "Barisal", 
    duration: "5-6", 
    distance: "292",
    departureTime: "09:00 AM", 
    arrivalTime: "03:00 PM", 
    busType: "AC", 
    busClass: "Standard", 
    facilities: ["USB Charging", "Reclining Seats"],
    price: "900", 
    availableSeats: 19
  },
  { 
    id: 15, 
    from: "Dhaka", 
    to: "Rangpur", 
    duration: "6-7", 
    distance: "330",
    departureTime: "08:00 AM", 
    arrivalTime: "03:00 PM", 
    busType: "AC", 
    busClass: "Business", 
    facilities: ["WiFi", "USB Charging", "Reclining Seats", "Refreshments"],
    price: "1050", 
    availableSeats: 13
  }
];

// Available bus categories
const busCategories = ["All", "AC", "Non-AC"];
const busClasses = ["All", "Business", "Standard", "Economy"];

const BusRoutes = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    busType: "All",
    busClass: "All"
  });
  
  const [filteredRoutes, setFilteredRoutes] = useState(allRoutes);
  
  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setSearchParams(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  
  // Search function to filter routes
  const handleSearch = () => {
    let results = [...allRoutes];
    
    // Filter by origin city
    if (searchParams.from) {
      results = results.filter(route => 
        route.from.toLowerCase().includes(searchParams.from.toLowerCase())
      );
    }
    
    // Filter by destination city
    if (searchParams.to) {
      results = results.filter(route => 
        route.to.toLowerCase().includes(searchParams.to.toLowerCase())
      );
    }
    
    // Filter by bus type
    if (searchParams.busType !== "All") {
      results = results.filter(route => route.busType === searchParams.busType);
    }
    
    // Filter by bus class
    if (searchParams.busClass !== "All") {
      results = results.filter(route => route.busClass === searchParams.busClass);
    }
    
    setFilteredRoutes(results);
    
    if (results.length === 0) {
      toast.info("No routes found matching your search criteria.");
    } else {
      toast.success(`Found ${results.length} routes matching your criteria.`);
    }
  };
  
  // Function to handle booking
  const handleBooking = (routeId: number) => {
    // In a real app, this would navigate to a booking page with route ID
    toast.success("Redirecting to seat selection...");
    navigate(`/bookings?routeId=${routeId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-8 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Bus Routes in Bangladesh</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <MapPin className="h-5 w-5" />
              </div>
              <Input
                placeholder="From"
                className="pl-10"
                name="from"
                value={searchParams.from}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <MapPin className="h-5 w-5" />
              </div>
              <Input
                placeholder="To"
                className="pl-10"
                name="to"
                value={searchParams.to}
                onChange={handleSearchChange}
              />
            </div>
            
            <div>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
                  <Bus className="h-4 w-4" />
                </span>
                <select 
                  className="flex-1 rounded-r-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  onChange={(e) => handleFilterChange('busType', e.target.value)}
                  value={searchParams.busType}
                >
                  {busCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-500">
                  <Filter className="h-4 w-4" />
                </span>
                <select 
                  className="flex-1 rounded-r-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  onChange={(e) => handleFilterChange('busClass', e.target.value)}
                  value={searchParams.busClass}
                >
                  {busClasses.map((busClass) => (
                    <option key={busClass} value={busClass}>{busClass}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <Button 
                onClick={handleSearch} 
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
              >
                <Search className="h-4 w-4 mr-2" /> Search Routes
              </Button>
            </div>
          </div>
        </div>
        
        {/* Search Results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
          <h2 className="text-xl font-semibold p-4 border-b">Available Routes</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Bus Type</TableHead>
                  <TableHead>Departure</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Amenities</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Available</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRoutes.length > 0 ? filteredRoutes.map((route) => (
                  <TableRow key={route.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium">
                      {route.from} to {route.to}
                      <div className="text-xs text-gray-500">{route.busClass} Class</div>
                    </TableCell>
                    <TableCell>{route.distance} km</TableCell>
                    <TableCell>
                      <span className={`inline-block px-2 py-1 rounded text-xs ${route.busType === 'AC' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                        {route.busType}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{route.departureTime}</div>
                      <div className="text-xs text-gray-500">{route.arrivalTime}</div>
                    </TableCell>
                    <TableCell>{route.duration} hrs</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {route.facilities.slice(0, 2).map((facility, idx) => (
                          <span key={idx} className="inline-block px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                            {facility}
                          </span>
                        ))}
                        {route.facilities.length > 2 && (
                          <span className="inline-block px-2 py-0.5 bg-gray-100 rounded-full text-xs">+{route.facilities.length - 2}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">৳{route.price}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`${Number(route.availableSeats) < 10 ? 'text-amber-600' : 'text-green-600'}`}>
                        {route.availableSeats} seats
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="bg-brand-red hover:bg-brand-red/90"
                        onClick={() => handleBooking(route.id)}
                      >
                        <Ticket className="h-4 w-4 mr-1" />
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={9} className="h-24 text-center text-gray-500">
                      No routes found. Try adjusting your search criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default BusRoutes;
