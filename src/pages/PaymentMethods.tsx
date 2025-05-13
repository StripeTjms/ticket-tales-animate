
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import our new components
import LoginRequired from '@/components/payment/LoginRequired';
import CardForm, { CardData } from '@/components/payment/CardForm';
import MobileBankingForm, { MobileAccountData } from '@/components/payment/MobileBankingForm';
import SavedCards from '@/components/payment/SavedCards';
import SavedMobileAccounts from '@/components/payment/SavedMobileAccounts';
import PaymentSecurity from '@/components/payment/PaymentSecurity';
import PaymentTips from '@/components/payment/PaymentTips';

// Mock saved payment methods
const savedCards = [
  {
    id: 1,
    type: "VISA",
    number: "•••• •••• •••• 4242",
    name: "Ahmed Rahman",
    expiry: "03/2026",
    isDefault: true
  },
  {
    id: 2,
    type: "Mastercard",
    number: "•••• •••• •••• 5555",
    name: "Ahmed Rahman",
    expiry: "12/2025",
    isDefault: false
  }
];

const savedMobileBanking = [
  {
    id: 1,
    provider: "bKash",
    number: "+8801712345678",
    name: "Ahmed Rahman",
    isDefault: true
  },
  {
    id: 2,
    provider: "Nagad",
    number: "+8801812345678",
    name: "Ahmed Rahman",
    isDefault: false
  }
];

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // For a real app, you would implement actual authentication
  // For now, we'll simulate a login check
  
  const [cards, setCards] = useState(savedCards);
  const [mobileAccounts, setMobileAccounts] = useState(savedMobileBanking);
  
  const handleAddCard = (cardData: CardData) => {
    const newCard = {
      ...cardData,
      id: cards.length + 1,
    };
    
    setCards([...cards, newCard]);
  };
  
  const handleAddMobileAccount = (accountData: MobileAccountData) => {
    const newAccount = {
      ...accountData,
      id: mobileAccounts.length + 1,
    };
    
    setMobileAccounts([...mobileAccounts, newAccount]);
  };
  
  const setDefaultCard = (id: number) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
    toast.success("Default card updated");
  };
  
  const setDefaultMobileAccount = (id: number) => {
    setMobileAccounts(mobileAccounts.map(account => ({
      ...account,
      isDefault: account.id === id
    })));
    toast.success("Default mobile banking account updated");
  };
  
  const deleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
    toast.success("Card deleted successfully");
  };
  
  const deleteMobileAccount = (id: number) => {
    setMobileAccounts(mobileAccounts.filter(account => account.id !== id));
    toast.success("Mobile banking account deleted successfully");
  };
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <LoginRequired onLogin={() => setIsLoggedIn(true)} />
        <Footer />
        <Toaster position="top-right" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Methods</h1>
        <p className="text-gray-600 mb-8">Manage your saved payment methods for faster checkout</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="cards">
              <TabsList className="mb-6">
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Banking</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cards">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Cards</CardTitle>
                    <CardDescription>Your saved credit and debit cards</CardDescription>
                  </CardHeader>
                  <SavedCards 
                    cards={cards} 
                    onSetDefault={setDefaultCard} 
                    onDelete={deleteCard} 
                  />
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Add New Card</CardTitle>
                    <CardDescription>
                      Your card details are secured using industry-standard encryption
                    </CardDescription>
                  </CardHeader>
                  <CardForm onAddCard={handleAddCard} />
                </Card>
              </TabsContent>
              
              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Banking</CardTitle>
                    <CardDescription>Your saved mobile banking accounts</CardDescription>
                  </CardHeader>
                  <SavedMobileAccounts 
                    accounts={mobileAccounts} 
                    onSetDefault={setDefaultMobileAccount} 
                    onDelete={deleteMobileAccount} 
                  />
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Add Mobile Banking</CardTitle>
                    <CardDescription>
                      Add your mobile banking account for faster payments
                    </CardDescription>
                  </CardHeader>
                  <MobileBankingForm onAddAccount={handleAddMobileAccount} />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <PaymentSecurity />
            <div className="mt-6">
              <PaymentTips />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default PaymentMethods;
