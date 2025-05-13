
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Form schema for card
const cardFormSchema = z.object({
  cardName: z.string().min(2, { message: "Card name is required" }),
  cardNumber: z.string().min(16, { message: "Valid card number is required" }).max(19),
  expiryMonth: z.string().min(2, { message: "Required" }),
  expiryYear: z.string().min(2, { message: "Required" }),
  cvv: z.string().min(3, { message: "CVV is required" }).max(4),
  saveCard: z.boolean().default(true)
});

type CardFormProps = {
  onAddCard: (card: CardData) => void;
};

export type CardData = {
  type: string;
  number: string;
  name: string;
  expiry: string;
  isDefault: boolean;
};

const CardForm = ({ onAddCard }: CardFormProps) => {
  const form = useForm<z.infer<typeof cardFormSchema>>({
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
  
  const onSubmit = (values: z.infer<typeof cardFormSchema>) => {
    console.log(values);
    toast.success("Card added successfully!");
    
    // Create card data
    const newCard: CardData = {
      type: values.cardNumber.startsWith("4") ? "VISA" : "Mastercard",
      number: "•••• •••• •••• " + values.cardNumber.slice(-4),
      name: values.cardName,
      expiry: `${values.expiryMonth}/${values.expiryYear}`,
      isDefault: false
    };
    
    onAddCard(newCard);
    form.reset();
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
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
          control={form.control}
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
          control={form.control}
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
  );
};

export default CardForm;
