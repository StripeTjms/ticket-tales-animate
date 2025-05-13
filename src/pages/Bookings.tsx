import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { Bus, Calendar, Clock, MapPin, Ticket, User } from 'lucide-react';

// All bus routes (same as in BusRoutes.tsx)
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

// Generate bus seats layout
const generateSeatsLayout = () => {
  // Create a 10x4 layout (40 seats)
  const layout = [];
  const totalRows = 10;
  const seatsPerRow = 4;
  
  for (let row = 1; row <= totalRows; row++) {
    const rowSeats = [];
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      // Skip aisle seats (2nd seat in each row)
      if (seat === 2) continue;
      
      const seatNumber = String.fromCharCode(64 + seat) + row; // A1, B1, C1, etc.
      const randomStatus = Math.random() < 0.3; // 30% chance of being booked
      
      rowSeats.push({
        id: seatNumber,
        number: seatNumber,
        isBooked: randomStatus,
        price: seat === 4 ? "premium" : "regular" // Last seat in row is premium
      });
    }
    layout.push(rowSeats);
  }
  
  return layout;
};

const Bookings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [routeId, setRouteId] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [seats, setSeats] = useState<any[][]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [bookingStep, setBookingStep] = useState(1);
  
  // Handle query params to get routeId
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('routeId');
    
    if (id) {
      const numId = parseInt(id);
      setRouteId(numId);
      
      // Find the selected route
      const route = allRoutes.find(r => r.id === numId);
      if (route) {
        setSelectedRoute(route);
        // Generate seats layout
        setSeats(generateSeatsLayout());
      }
    }
  }, [location]);
  
  // Handle seat selection
  const toggleSeatSelection = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      // Limit to 4 seats per booking
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        toast.error("You can select a maximum of 4 seats per booking.");
      }
    }
  };
  
  // Calculate total price
  const calculateTotalPrice = () => {
    if (!selectedRoute) return 0;
    
    const basePrice = parseInt(selectedRoute.price);
    let total = 0;
    
    // Count premium seats
    let premiumSeats = 0;
    
    seats.flat().forEach(seat => {
      if (selectedSeats.includes(seat.id)) {
        if (seat.price === "premium") {
          premiumSeats++;
        }
      }
    });
    
    // Regular seats
    const regularSeats = selectedSeats.length - premiumSeats;
    
    // Calculate total (premium seats cost 20% more)
    total = (regularSeats * basePrice) + (premiumSeats * (basePrice * 1.2));
    
    return Math.round(total);
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassengerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle booking confirmation
  const handleBookingConfirm = () => {
    if (!passengerDetails.name || !passengerDetails.email || !passengerDetails.phone) {
      toast.error("Please fill in all passenger details.");
      return;
    }
    
    // In a real app, this would submit the booking to a backend
    toast.success("Booking successful! Your tickets have been reserved.");
    
    // Mock saving the booking data
    const bookingData = {
      routeId: selectedRoute?.id,
      route: `${selectedRoute?.from} to ${selectedRoute?.to}`,
      departureTime: selectedRoute?.departureTime,
      arrivalTime: selectedRoute?.arrivalTime,
      busType: selectedRoute?.busType,
      busClass: selectedRoute?.busClass,
      seats: selectedSeats,
      passenger: passengerDetails,
      totalPrice: calculateTotalPrice(),
      bookingDate: new Date().toISOString()
    };
    
    console.log("Booking data:", bookingData);
    
    // Reset form and navigate to success page
    setTimeout(() => {
      navigate("/"); // Redirect to home
    }, 2000);
  };
  
  // Handle back to routes
  const handleBackToRoutes = () => {
    navigate("/routes");
  };
  
  // If no route is selected, show empty state
  if (!selectedRoute) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Bookings</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-6">You don't have any bookings yet.</p>
              <Button onClick={handleBackToRoutes} className="bg-brand-red hover:bg-brand-red/90">
                Search for Bus Routes
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
      
      <div className="container max-w-7xl mx-auto py-8 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Your Ticket</h1>
        
        {/* Route Details Card */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Bus className="mr-2 h-5 w-5 text-brand-red" />
                {selectedRoute.from} to {selectedRoute.to}
              </span>
              <span className="text-lg font-normal text-gray-600">
                {selectedRoute.busClass} Class • {selectedRoute.busType}
              </span>
            </CardTitle>
            <CardDescription className="flex flex-wrap gap-4 mt-2">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Departure: {selectedRoute.departureTime}
              </span>
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Arrival: {selectedRoute.arrivalTime}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Duration: {selectedRoute.duration} hours
              </span>
              <span className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                Distance: {selectedRoute.distance} km
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedRoute.facilities.map((facility: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {facility}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Booking Steps */}
        <div className="flex justify-between mb-8">
          <Button 
            variant={bookingStep === 1 ? "default" : "outline"}
            className={bookingStep === 1 ? "bg-brand-red hover:bg-brand-red/90" : ""}
            onClick={() => setBookingStep(1)}
          >
            1. Select Seats
          </Button>
          <Button 
            variant={bookingStep === 2 ? "default" : "outline"}
            className={bookingStep === 2 ? "bg-brand-red hover:bg-brand-red/90" : ""}
            onClick={() => {
              if (selectedSeats.length > 0) {
                setBookingStep(2);
              } else {
                toast.error("Please select at least one seat to continue.");
              }
            }}
          >
            2. Passenger Details
          </Button>
          <Button 
            variant={bookingStep === 3 ? "default" : "outline"}
            className={bookingStep === 3 ? "bg-brand-red hover:bg-brand-red/90" : ""}
            onClick={() => {
              if (selectedSeats.length > 0) {
                if (passengerDetails.name && passengerDetails.email && passengerDetails.phone) {
                  setBookingStep(3);
                } else {
                  toast.error("Please fill in all passenger details to continue.");
                  setBookingStep(2);
                }
              } else {
                toast.error("Please select at least one seat to continue.");
                setBookingStep(1);
              }
            }}
          >
            3. Confirm Booking
          </Button>
        </div>
        
        {/* Step 1: Seat Selection */}
        {bookingStep === 1 && (
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>
            <p className="mb-6 text-gray-600">Select up to 4 seats. Premium seats (marked with a star) cost 20% more.</p>
            
            <div className="flex mb-4 gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-red"></div>
                <span className="text-sm">Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-500"></div>
                <span className="text-sm">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-xs">★</div>
                <span className="text-sm">Premium (+20%)</span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 mb-6">
              <div className="w-full h-10 bg-gray-300 rounded flex items-center justify-center mb-8">
                FRONT OF BUS
              </div>
              
              <div className="grid grid-cols-4 gap-6">
                {seats.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.map((seat) => (
                      <button
                        key={seat.id}
                        disabled={seat.isBooked}
                        className={`h-10 rounded flex items-center justify-center ${
                          seat.isBooked 
                            ? 'bg-gray-500 text-white cursor-not-allowed'
                            : selectedSeats.includes(seat.id)
                              ? 'bg-brand-red text-white' 
                              : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                        onClick={() => !seat.isBooked && toggleSeatSelection(seat.id)}
                      >
                        {seat.number}
                        {seat.price === "premium" && <span className="ml-1 text-xs">★</span>}
                      </button>
                    ))}
                    {rowIndex % 2 === 0 && <div className="col-span-2"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Selected Seats: {selectedSeats.join(", ") || "None"}</p>
                <p className="text-gray-600">Base Price: ৳{selectedRoute.price} per seat</p>
              </div>
              <Button 
                onClick={() => {
                  if (selectedSeats.length > 0) {
                    setBookingStep(2);
                  } else {
                    toast.error("Please select at least one seat to continue.");
                  }
                }}
                className="bg-brand-red hover:bg-brand-red/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 2: Passenger Details */}
        {bookingStep === 2 && (
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Passenger Details</h2>
            
            <div className="space-y-4 max-w-xl">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User className="h-4 w-4" />
                  </div>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Enter your full name" 
                    className="pl-10"
                    value={passengerDetails.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={passengerDetails.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  placeholder="Enter your phone number"
                  value={passengerDetails.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setBookingStep(1)}>
                Back
              </Button>
              <Button 
                onClick={() => {
                  if (passengerDetails.name && passengerDetails.email && passengerDetails.phone) {
                    setBookingStep(3);
                  } else {
                    toast.error("Please fill in all passenger details.");
                  }
                }}
                className="bg-brand-red hover:bg-brand-red/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 3: Booking Confirmation */}
        {bookingStep === 3 && (
          <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
            
            <Card className="mb-6">
              <CardContent className="p-0">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableHead className="w-1/3">Route</TableHead>
                      <TableCell>{selectedRoute.from} to {selectedRoute.to}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Bus Type</TableHead>
                      <TableCell>{selectedRoute.busType} • {selectedRoute.busClass} Class</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Departure</TableHead>
                      <TableCell>{selectedRoute.departureTime}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Arrival</TableHead>
                      <TableCell>{selectedRoute.arrivalTime}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Selected Seats</TableHead>
                      <TableCell>{selectedSeats.join(", ")}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Passenger</TableHead>
                      <TableCell>{passengerDetails.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Contact</TableHead>
                      <TableCell>{passengerDetails.email} • {passengerDetails.phone}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Total Price:</span>
                <span className="font-bold text-brand-red">৳{calculateTotalPrice()} BDT</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Includes base fare, taxes, and premium seat charges (if applicable).
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and cancellation policy.
                </Label>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setBookingStep(2)}>
                Back
              </Button>
              <Button 
                onClick={handleBookingConfirm}
                className="bg-brand-red hover:bg-brand-red/90"
              >
                <Ticket className="mr-2 h-4 w-4" />
                Confirm Booking
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Bookings;
