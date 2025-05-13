
import React from 'react';
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Check, Trash2, CreditCard } from "lucide-react";
import { CardData } from './CardForm';

type SavedCardsProps = {
  cards: Array<CardData & { id: number }>;
  onSetDefault: (id: number) => void;
  onDelete: (id: number) => void;
};

const SavedCards = ({ cards, onSetDefault, onDelete }: SavedCardsProps) => {
  return (
    <CardContent>
      {cards.length > 0 ? (
        <div className="space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="flex items-center justify-between p-4 border rounded-md">
              <div className="flex items-center">
                <div className={`h-10 w-16 rounded-md flex items-center justify-center text-white font-bold mr-4 ${
                  card.type === "VISA" ? "bg-blue-600" : "bg-red-600"
                }`}>
                  {card.type}
                </div>
                <div>
                  <p className="font-medium">{card.number}</p>
                  <div className="flex text-sm text-gray-500">
                    <p>{card.name}</p>
                    <span className="mx-2">•</span>
                    <p>Expires {card.expiry}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {card.isDefault ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" /> Default
                  </span>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => onSetDefault(card.id)}
                  >
                    Set Default
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => onDelete(card.id)}
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
          <p className="text-gray-500">No cards saved yet</p>
        </div>
      )}
    </CardContent>
  );
};

export default SavedCards;
