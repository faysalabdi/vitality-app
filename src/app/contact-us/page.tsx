import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/common/ContactForm';
import { Metadata } from 'next';
import { LocalBusinessStructuredData } from '@/components/common/StructuredData';
import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="/psychology-support-person-wheelchair-woman-600nw-2167530617.webp" 
          alt="Contact Vitality Community Care" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Contact Us
            </h1>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              We're Here To Help
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl">
              We're here to help with any questions you might have about our services. Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-16 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#39A9E0]/10 text-[#39A9E0] mb-4">
                <FaPhone className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">For quick assistance:</p>
              <p className="font-semibold text-lg" style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}>+61 1300 395 852</p>
              <p className="text-gray-500 text-sm mt-2">Available Monday to Friday, 9am - 5pm AEST</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#8BC53F]/10 text-[#8BC53F] mb-4">
                <FaEnvelope className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message:</p>
              <p className="font-semibold text-lg" style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}>info@vitalitycommunitycare.com.au</p>
              <p className="text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#39A9E0]/10 text-[#39A9E0] mb-4">
                <FaMapMarkerAlt className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
              <p className="text-gray-600 mb-2">Visit our location:</p>
              <p className="font-semibold text-lg" style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}>123 Community Street, Melbourne VIC 3000, Australia</p>
              <p className="text-gray-500 text-sm mt-2">Open for appointments and walk-ins</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ 
                  background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                }}
              >
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ 
                  background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                }}
              >
                Find Us
              </h3>
              <div className="h-96 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] flex items-center justify-center">
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
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              <FaArrowLeft className="h-5 w-5 mr-2" />
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