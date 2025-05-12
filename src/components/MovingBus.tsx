
import React from 'react';
import { Bus } from "lucide-react";

const MovingBus: React.FC = () => {
  return (
    <div className="absolute bottom-[15%] left-0 animate-move-right">
      <div className="relative">
        <Bus className="h-10 w-10 text-brand-red" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/10 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default MovingBus;
