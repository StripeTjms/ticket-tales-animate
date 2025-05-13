
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart, 
  Pie, 
  Cell
} from "recharts";
import { useNavigate } from 'react-router-dom';

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 25000 },
  { month: 'Feb', revenue: 32000 },
  { month: 'Mar', revenue: 28000 },
  { month: 'Apr', revenue: 34000 },
  { month: 'May', revenue: 40000 },
  { month: 'Jun', revenue: 45000 },
  { month: 'Jul', revenue: 51000 },
];

const bookingsData = [
  { day: 'Sun', bookings: 120 },
  { day: 'Mon', bookings: 180 },
  { day: 'Tue', bookings: 150 },
  { day: 'Wed', bookings: 210 },
  { day: 'Thu', bookings: 240 },
  { day: 'Fri', bookings: 280 },
  { day: 'Sat', bookings: 260 },
];

const busTypeData = [
  { name: 'AC', value: 45 },
  { name: 'Non-AC', value: 30 },
  { name: 'Sleeper', value: 15 },
  { name: 'Business', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentBookings = [
  { id: 'BK00123', customer: 'Md. Rahman', route: 'Dhaka to Chittagong', date: '2025-05-12', seats: 2, amount: 1800, status: 'Completed' },
  { id: 'BK00122', customer: 'Ayesha Khan', route: 'Dhaka to Cox\'s Bazar', date: '2025-05-12', seats: 3, amount: 3600, status: 'Completed' },
  { id: 'BK00121', customer: 'Karim Ahmed', route: 'Dhaka to Sylhet', date: '2025-05-11', seats: 1, amount: 800, status: 'Completed' },
  { id: 'BK00120', customer: 'Farida Begum', route: 'Chittagong to Dhaka', date: '2025-05-11', seats: 2, amount: 1800, status: 'Cancelled' },
  { id: 'BK00119', customer: 'Jasim Uddin', route: 'Dhaka to Rajshahi', date: '2025-05-10', seats: 4, amount: 3200, status: 'Completed' },
];

const busOperators = [
  { id: 1, name: 'Hanif Enterprise', routes: 124, buses: 220, activeBookings: 1842 },
  { id: 2, name: 'Shyamoli Paribahan', routes: 87, buses: 160, activeBookings: 1358 },
  { id: 3, name: 'Green Line', routes: 62, buses: 95, activeBookings: 964 },
  { id: 4, name: 'Sohag Paribahan', routes: 93, buses: 175, activeBookings: 1230 },
  { id: 5, name: 'Ena Transport', routes: 75, buses: 130, activeBookings: 980 },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // For a real app, you would implement actual authentication
  // For now, we'll simulate a login check
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <div className="container max-w-7xl mx-auto py-16 px-6 flex-1 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Login Required</h1>
            <p className="text-gray-600 mb-6">You need to be logged in as an administrator to access this dashboard.</p>
            <div className="flex flex-col space-y-4">
              <Button onClick={() => setIsLoggedIn(true)}>
                Login as Admin
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
      
      <div className="container max-w-7xl mx-auto py-8 px-6 flex-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, Admin User</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline">Export Reports</Button>
            <Button>Add New Route</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue (This Month)</CardDescription>
              <CardTitle className="text-2xl">৳235,400</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">↑ 12.5% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Bookings (This Month)</CardDescription>
              <CardTitle className="text-2xl">3,842</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-600">↑ 8.2% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Bus Routes</CardDescription>
              <CardTitle className="text-2xl">126</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-600">+3 new routes added</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Bus Operators</CardDescription>
              <CardTitle className="text-2xl">24</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-600">+2 new this month</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="operators">Operators</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={revenueData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`৳${value}`, 'Revenue']} />
                        <Bar dataKey="revenue" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Daily Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={bookingsData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="bookings" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Seats</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.customer}</TableCell>
                          <TableCell>{booking.route}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.seats}</TableCell>
                          <TableCell>৳{booking.amount}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              booking.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {booking.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking Management</CardTitle>
                <CardDescription>View and manage all bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 py-8 text-center">
                  Full booking management interface would be implemented here in a real application.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="operators">
            <Card>
              <CardHeader>
                <CardTitle>Bus Operators</CardTitle>
                <CardDescription>Manage all registered bus operators</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Operator Name</TableHead>
                      <TableHead>Routes</TableHead>
                      <TableHead>Buses</TableHead>
                      <TableHead>Active Bookings</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {busOperators.map((operator) => (
                      <TableRow key={operator.id}>
                        <TableCell className="font-medium">{operator.name}</TableCell>
                        <TableCell>{operator.routes}</TableCell>
                        <TableCell>{operator.buses}</TableCell>
                        <TableCell>{operator.activeBookings}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="routes">
            <Card>
              <CardHeader>
                <CardTitle>Route Management</CardTitle>
                <CardDescription>Manage all bus routes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 py-8 text-center">
                  Full route management interface would be implemented here in a real application.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default AdminDashboard;
