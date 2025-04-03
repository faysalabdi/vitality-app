import Link from 'next/link';
import ContactForm from '@/components/common/ContactForm';
import { Metadata } from 'next';
import { LocalBusinessStructuredData } from '@/components/common/StructuredData';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'Contact Us | Vitality Community Care',
  description: 'Get in touch with Vitality Community Care. Contact us for NDIS and aged care services in Melbourne, Victoria. Phone: 1300 395 852.',
  openGraph: {
    title: 'Contact Vitality Community Care | NDIS & Aged Care Provider',
    description: 'Reach out to our team for personalized care services. Multiple ways to contact us - phone, email, or visit our Melbourne office.',
    url: 'https://vitalitycommunitycare.com.au/contact-us',
    images: [
      {
        url: '/images/contact-us-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care contact information',
      },
    ],
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help with any questions you might have about our services. Reach out to us through any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">For quick assistance:</p>
              <p className="text-blue-600 font-semibold text-lg">+61 1300 395 852</p>
              <p className="text-gray-500 text-sm mt-2">Available Monday to Friday, 9am - 5pm AEST</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message:</p>
              <p className="text-blue-600 font-semibold text-lg">info@vitalitycommunitycare.com.au</p>
              <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
              <p className="text-gray-600 mb-2">Visit our location:</p>
              <p className="text-blue-600 font-semibold text-lg">123 Community Street, Melbourne VIC 3000, Australia</p>
              <p className="text-gray-500 text-sm mt-2">Open for appointments and walk-ins</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Find Us</h3>
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <p className="text-xl font-semibold mb-4">Map will be integrated here</p>
                    <p>123 Community Street, Melbourne VIC 3000, Australia</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Operating Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Add structured data for the contact page */}
      <LocalBusinessStructuredData 
        name="Vitality Community Care"
        description="Contact Vitality Community Care for NDIS and aged care services in Melbourne, Victoria. Our team is available via phone, email, or in-person at our Melbourne office."
        url="https://vitalitycommunitycare.com.au/contact-us"
        telephone="+61 1300 395 852"
        address={{
          streetAddress: "123 Community Street",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU",
        }}
        openingHours={[
          "Monday-Friday 09:00-17:00",
          "Saturday 10:00-14:00",
          "Sunday Closed",
        ]}
      />
    </div>
  );
} 