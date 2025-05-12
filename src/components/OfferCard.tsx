
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface OfferCardProps {
  title: string;
  validity: string;
  couponCode: string;
  badgeText: string;
  imageSrc: string;
  color: string;
}

const OfferCard = ({ title, validity, couponCode, badgeText, imageSrc, color }: OfferCardProps) => {
  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    toast.success("Coupon code copied to clipboard");
  };
  
  return (
    <Card className={`card-hover overflow-hidden border-card-border`}>
      <div className={`h-2 ${color}`}></div>
      <CardContent className="pt-6 pb-3 px-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
            <img 
              src={imageSrc} 
              alt={badgeText} 
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">{badgeText}</Badge>
            <h3 className="text-sm font-medium mb-1">{title}</h3>
            <p className="text-xs text-gray-500">{validity}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 pt-0 pb-4 flex justify-between">
        <div className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">
          {couponCode}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-500 hover:text-brand-red p-1 h-auto"
          onClick={copyCode}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;
