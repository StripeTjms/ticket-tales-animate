import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CreditCard, Trash2, Check } from "lucide-react";

// Form schema for card
const cardFormSchema = z.object({
  cardName: z.string().min(2, { message: "Card name is required" }),
  cardNumber: z.string().min(16, { message: "Valid card number is required" }).max(19),
  expiryMonth: z.string().min(2, { message: "Required" }),
  expiryYear: z.string().min(2, { message: "Required" }),
  cvv: z.string().min(3, { message: "CVV is required" }).max(4),
  saveCard: z.boolean().default(true)
});

// Form schema for mobile banking
const mobileFormSchema = z.object({
  provider: z.string().min(1, { message: "Provider is required" }),
  mobileNumber: z.string().min(11, { message: "Valid mobile number is required" }).max(15),
  accountName: z.string().min(2, { message: "Account name is required" }),
  saveAccount: z.boolean().default(true)
});

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
  
  const cardForm = useForm<z.infer<typeof cardFormSchema>>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      saveCard: true
    }
  });
  
  const mobileForm = useForm<z.infer<typeof mobileFormSchema>>({
    resolver: zodResolver(mobileFormSchema),
    defaultValues: {
      provider: "",
      mobileNumber: "",
      accountName: "",
      saveAccount: true
    }
  });
  
  const onCardSubmit = (values: z.infer<typeof cardFormSchema>) => {
    console.log(values);
    toast.success("Card added successfully!");
    cardForm.reset();
    
    // Simulate adding a card
    const newCard = {
      id: cards.length + 1,
      type: values.cardNumber.startsWith("4") ? "VISA" : "Mastercard",
      number: "•••• •••• •••• " + values.cardNumber.slice(-4),
      name: values.cardName,
      expiry: `${values.expiryMonth}/${values.expiryYear}`,
      isDefault: false
    };
    
    setCards([...cards, newCard]);
  };
  
  const onMobileSubmit = (values: z.infer<typeof mobileFormSchema>) => {
    console.log(values);
    toast.success("Mobile banking account added successfully!");
    mobileForm.reset();
    
    // Simulate adding a mobile banking account
    const newAccount = {
      id: mobileAccounts.length + 1,
      provider: values.provider,
      number: values.mobileNumber,
      name: values.accountName,
      isDefault: false
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
        
        <div className="container max-w-7xl mx-auto py-16 px-6 flex-1 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Required</h1>
            <p className="text-gray-600 mb-6">Please login to manage your payment methods.</p>
            <div className="flex flex-col space-y-4">
              <Button onClick={() => setIsLoggedIn(true)}>
                Login Now
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Return to Home
              </Button>
            </div>
          </div>
        </div>
        
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
                                  onClick={() => setDefaultCard(card.id)}
                                >
                                  Set Default
                                </Button>
                              )}
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => deleteCard(card.id)}
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
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Add New Card</CardTitle>
                    <CardDescription>
                      Your card details are secured using industry-standard encryption
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...cardForm}>
                      <form onSubmit={cardForm.handleSubmit(onCardSubmit)} className="space-y-6">
                        <FormField
                          control={cardForm.control}
                          name="cardName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name on Card</FormLabel>
                              <FormControl>
                                <Input placeholder="As it appears on card" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={cardForm.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="1234 5678 9012 3456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={cardForm.control}
                            name="expiryMonth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Month</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM" maxLength={2} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={cardForm.control}
                            name="expiryYear"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Year</FormLabel>
                                <FormControl>
                                  <Input placeholder="YY" maxLength={2} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={cardForm.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <Input type="password" placeholder="123" maxLength={4} {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={cardForm.control}
                          name="saveCard"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Save this card for future payments
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full">Save Card</Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Banking</CardTitle>
                    <CardDescription>Your saved mobile banking accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {mobileAccounts.length > 0 ? (
                      <div className="space-y-4">
                        {mobileAccounts.map((account) => (
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
                                  onClick={() => setDefaultMobileAccount(account.id)}
                                >
                                  Set Default
                                </Button>
                              )}
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => deleteMobileAccount(account.id)}
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
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Add Mobile Banking</CardTitle>
                    <CardDescription>
                      Add your mobile banking account for faster payments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...mobileForm}>
                      <form onSubmit={mobileForm.handleSubmit(onMobileSubmit)} className="space-y-6">
                        <FormField
                          control={mobileForm.control}
                          name="provider"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Provider</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                >
                                  <option value="">Select provider</option>
                                  <option value="bKash">bKash</option>
                                  <option value="Nagad">Nagad</option>
                                  <option value="Rocket">Rocket</option>
                                  <option value="Upay">Upay</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={mobileForm.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+8801XXXXXXXXX" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={mobileForm.control}
                          name="accountName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Account Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Name on account" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={mobileForm.control}
                          name="saveAccount"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Save this account for future payments
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full">Save Account</Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
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
            
            <Card className="mt-6">
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
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default PaymentMethods;
