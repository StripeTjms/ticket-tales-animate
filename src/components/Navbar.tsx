
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Bus, User, PhoneCall } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Bus className="h-6 w-6 text-brand-red" />
            <span className="font-bold text-xl text-gray-800">BusGo</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-brand-red transition-colors">Home</Link>
          <Link to="/bookings" className="text-gray-600 hover:text-brand-red transition-colors">Bookings</Link>
          <Link to="/routes" className="text-gray-600 hover:text-brand-red transition-colors">Routes</Link>
          <Link to="/support" className="text-gray-600 hover:text-brand-red transition-colors">Support</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2" asChild>
            <Link to="/help">
              <PhoneCall className="h-4 w-4" /> Help
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2" asChild>
            <Link to="/account">
              <User className="h-4 w-4" /> Account
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
