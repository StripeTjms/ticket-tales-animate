
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Check, Trash2, CreditCard } from "lucide-react";
import { MobileAccountData } from './MobileBankingForm';

type SavedMobileAccountsProps = {
  accounts: Array<MobileAccountData & { id: number }>;
  onSetDefault: (id: number) => void;
  onDelete: (id: number) => void;
};

const SavedMobileAccounts = ({ accounts, onSetDefault, onDelete }: SavedMobileAccountsProps) => {
  return (
    <CardContent>
      {accounts.length > 0 ? (
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center">
                <div className={`h-10 w-16 rounded-md flex items-center justify-center text-white font-bold mr-4 ${
                  account.provider === "bKash" ? "bg-pink-600" : 
                  account.provider === "Nagad" ? "bg-orange-600" : "bg-green-600"
                }`}>
                  {account.provider}
                </div>
                <div>
                  <p className="font-medium">{account.number}</p>
                  <p className="text-sm text-gray-500">{account.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {account.isDefault ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" /> Default
                  </span>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onSetDefault(account.id)}
                  >
                    Set Default
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => onDelete(account.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6">
          <CreditCard className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No mobile banking accounts saved yet</p>
        </div>
      )}
    </CardContent>
  );
};

export default SavedMobileAccounts;
