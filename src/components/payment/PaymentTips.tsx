
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PaymentTips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Tips</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-gray-600">
        <div className="flex items-start">
          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            1
          </div>
          <p>Never share your OTP or PIN with anyone, including BusGo customer support.</p>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            2
          </div>
          <p>Check that you're on the official busgo.com.bd website before entering payment details.</p>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            3
          </div>
          <p>We support all major banks in Bangladesh for seamless payments.</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <Button variant="outline" asChild className="w-full">
          <Link to="/contact">Contact Support</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentTips;
