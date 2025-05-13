
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Message sent! We'll get back to you soon.");
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Type your message here..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-red mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@busgo.com.bd</p>
                    <p className="text-gray-600">support@busgo.com.bd</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-red mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+880 1700-000000</p>
                    <p className="text-gray-600">+880 2-9999999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-red mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-gray-600">House #123, Road #7A</p>
                    <p className="text-gray-600">Gulshan-1, Dhaka-1212</p>
                    <p className="text-gray-600">Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-red mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-6">Regional Offices</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Chittagong</p>
                  <p className="text-gray-600">GEC Circle, Chittagong</p>
                  <p className="text-gray-600">+880 1700-000001</p>
                </div>
                
                <div>
                  <p className="font-medium">Sylhet</p>
                  <p className="text-gray-600">Zindabazar, Sylhet</p>
                  <p className="text-gray-600">+880 1700-000002</p>
                </div>
                
                <div>
                  <p className="font-medium">Khulna</p>
                  <p className="text-gray-600">KDA Avenue, Khulna</p>
                  <p className="text-gray-600">+880 1700-000003</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Contact;
