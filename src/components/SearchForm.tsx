
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Bus, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const popularCities = [
  "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", 
  "Barisal", "Rangpur", "Cox's Bazar", "Comilla", "Mymensingh"
];

const SearchForm = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date>();
  const [showFromCities, setShowFromCities] = useState(false);
  const [showToCities, setShowToCities] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if we have required fields
    if (!fromCity) {
      toast.error("Please select a departure city");
      return;
    }
    
    if (!toCity) {
      toast.error("Please select a destination city");
      return;
    }
    
    if (!date) {
      toast.error("Please select a travel date");
      return;
    }
    
    console.log({ fromCity, toCity, date: date ? format(date, 'yyyy-MM-dd') : '' });
    
    // Navigate to routes page with search params
    navigate(`/routes?from=${fromCity}&to=${toCity}&date=${format(date, 'yyyy-MM-dd')}`);
    toast.success("Searching for available buses...");
  };

  const handleFromCitySelect = (city: string) => {
    setFromCity(city);
    setShowFromCities(false);
  };

  const handleToCitySelect = (city: string) => {
    setToCity(city);
    setShowToCities(false);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white rounded-2xl shadow-lg p-3 md:p-4 flex flex-col md:flex-row gap-3 animate-fade-in"
    >
      <div className="flex-1 relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <Bus className="h-5 w-5" />
        </div>
        <Popover open={showFromCities} onOpenChange={setShowFromCities}>
          <PopoverTrigger asChild>
            <Input
              placeholder="From"
              className="pl-10"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              onClick={() => setShowFromCities(true)}
            />
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 max-h-[300px] overflow-y-auto">
            <div className="p-2">
              <p className="text-sm font-medium mb-2 text-gray-500">Popular Cities</p>
              <div className="grid grid-cols-1 gap-1">
                {popularCities.map(city => (
                  <Button
                    key={city}
                    variant="ghost"
                    className="justify-start font-normal text-gray-700"
                    onClick={() => handleFromCitySelect(city)}
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-none hidden md:flex items-center justify-center">
        <ArrowRight className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="flex-1 relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <Bus className="h-5 w-5" />
        </div>
        <Popover open={showToCities} onOpenChange={setShowToCities}>
          <PopoverTrigger asChild>
            <Input
              placeholder="To"
              className="pl-10"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              onClick={() => setShowToCities(true)}
            />
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 max-h-[300px] overflow-y-auto">
            <div className="p-2">
              <p className="text-sm font-medium mb-2 text-gray-500">Popular Cities</p>
              <div className="grid grid-cols-1 gap-1">
                {popularCities.map(city => (
                  <Button
                    key={city}
                    variant="ghost"
                    className="justify-start font-normal text-gray-700"
                    onClick={() => handleToCitySelect(city)}
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <Button type="submit" size="lg" className="bg-brand-red hover:bg-brand-red/90">
        SEARCH BUSES
      </Button>
    </form>
  );
};

export default SearchForm;
