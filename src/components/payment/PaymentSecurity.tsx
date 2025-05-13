
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PaymentSecurity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Security</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="font-medium mb-2">Secure Encryption</h3>
          <p className="text-sm text-gray-600">We use industry-standard encryption to protect your payment information. Your details are never stored on our servers in plain text.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="font-medium mb-2">Verified Transactions</h3>
          <p className="text-sm text-gray-600">All payments are verified using 2-factor authentication to prevent unauthorized transactions.</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md border">
          <h3 className="font-medium mb-2">Safe Mobile Banking</h3>
          <p className="text-sm text-gray-600">We integrate directly with trusted mobile banking providers in Bangladesh to ensure safe and reliable transactions.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSecurity;
