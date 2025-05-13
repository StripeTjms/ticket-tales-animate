
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto py-16 px-6 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              At BusGo, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or any of our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, gender, and date of birth.</li>
              <li><strong>Account Information:</strong> Username, password, and profile details.</li>
              <li><strong>Transaction Information:</strong> Payment details, booking history, and travel preferences.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Location Information:</strong> With your consent, we may collect your precise location data to provide location-based services.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To process and confirm your bookings</li>
              <li>To provide customer support and respond to your inquiries</li>
              <li>To send transactional messages and booking confirmations</li>
              <li>To improve our services and develop new features</li>
              <li>To detect and prevent fraudulent activities</li>
              <li>To send promotional offers and marketing communications (with your consent)</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Bus Operators:</strong> To process your bookings and provide the services you requested.</li>
              <li><strong>Payment Processors:</strong> To process your payments securely.</li>
              <li><strong>Service Providers:</strong> Who help us operate our business and provide services.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information (subject to certain exceptions)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@busgo.com.bd<br />
              Phone: +880 1700-000000<br />
              Address: Gulshan, Dhaka, Bangladesh
            </p>
            
            <p className="mt-8">
              Last updated: May 13, 2025
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default PrivacyPolicy;
