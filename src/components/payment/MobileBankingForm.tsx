
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

// Form schema for mobile banking
const mobileFormSchema = z.object({
  provider: z.string().min(1, { message: "Provider is required" }),
  mobileNumber: z.string().min(11, { message: "Valid mobile number is required" }).max(15),
  accountName: z.string().min(2, { message: "Account name is required" }),
  saveAccount: z.boolean().default(true)
});

type MobileBankingFormProps = {
  onAddAccount: (account: MobileAccountData) => void;
};

export type MobileAccountData = {
  provider: string;
  number: string;
  name: string;
  isDefault: boolean;
};

const MobileBankingForm = ({ onAddAccount }: MobileBankingFormProps) => {
  const form = useForm<z.infer<typeof mobileFormSchema>>({
    resolver: zodResolver(mobileFormSchema),
    defaultValues: {
      provider: "",
      mobileNumber: "",
      accountName: "",
      saveAccount: true
    }
  });
  
  const onSubmit = (values: z.infer<typeof mobileFormSchema>) => {
    console.log(values);
    toast.success("Mobile banking account added successfully!");
    
    // Create mobile account data
    const newAccount: MobileAccountData = {
      provider: values.provider,
      number: values.mobileNumber,
      name: values.accountName,
      isDefault: false
    };
    
    onAddAccount(newAccount);
    form.reset();
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
  );
};

export default MobileBankingForm;
