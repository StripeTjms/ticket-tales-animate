
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

type LoginRequiredProps = {
  onLogin: () => void;
};

const LoginRequired = ({ onLogin }: LoginRequiredProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-7xl mx-auto py-16 px-6 flex-1 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Required</h1>
        <p className="text-gray-600 mb-6">Please login to manage your payment methods.</p>
        <div className="flex flex-col space-y-4">
          <Button onClick={onLogin}>
            Login Now
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginRequired;
