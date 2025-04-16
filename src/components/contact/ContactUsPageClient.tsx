'use client';

import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/common/ContactForm'; // Assuming this is already client-safe
// Structured data moved to server component
import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the client-side logic and UI
export default function ContactUsPageClient() {
  const title = "Contact Us";
  const subtitle = "Get In Touch Today!";
  const description = "Whether it's a quick query or a detailed discussion about your care needs, we're here to help. Reach out via phone, email, or our contact form.";
  const heroImage = "/side-view-people-working-office.jpg"; // Example image 1
  const decorativeImage = "/psychology-support-person-wheelchair-woman-600nw-2167530617.webp"; // Example image 2

  const locations = [
    // ... (same locations array as before) ...
    {
      name: "Melbourne (Head Office)",
      address: "Corporate One, 84 Hotham St, Preston, 3072",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7184717234925!2d145.00292261532142!3d-37.74288297976448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644eaa1c060af%3A0x98cc04c01173ac0a!2s84%20Hotham%20St%2C%20Preston%20VIC%203072%2C%20Australia!5e0!3m2!1sen!2sus!4v1625732457847!5m2!1sen!2sus"
    },
    {
      name: "Perth (Western Australia)",
      address: "2232B Albany Hwy, Gosnells, 6110 WA",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.8974768356496!2d115.9981142152158!3d-31.989844981214967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bae72220f687%3A0xa1d25c03d552050a!2s2232B%20Albany%20Hwy%2C%20Gosnells%20WA%206110%2C%20Australia!5e0!3m2!1sen!2sus!4v1625732657847!5m2!1sen!2sus"
    },
    {
      name: "Adelaide (South Australia)",
      address: "33 Warwick St, Walkerville, 5081 SA",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.1125120541237!2d138.61006101526677!3d-34.89908078038534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c9465e2bc51b%3A0xf03365545ba3900!2s33%20Warwick%20St%2C%20Walkerville%20SA%205081%2C%20Australia!5e0!3m2!1sen!2sus!4v1625732757847!5m2!1sen!2sus"
    },
    {
      name: "Brisbane (Queensland)",
      address: "477 Boundary St, Spring Hill, 4000 QLD",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0799052559104!2d153.02222731511986!3d-27.45774688289534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0c28fab137%3A0xf02a35bd7207340!2s477%20Boundary%20St%2C%20Spring%20Hill%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2sus!4v1625732957847!5m2!1sen!2sus"
    },
    {
      name: "Sydney (NSW)",
      address: "8 Parramatta Square, Parramatta, 2150 NSW",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.006809583709!2d151.00290001523977!3d-33.81429078066829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3167a1f1df1%3A0x1d017d69037a07c0!2sParramatta%20Square%2C%20Parramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2sus!4v1625733057847!5m2!1sen!2sus"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* New Hero Section */}
      <section className="relative bg-[#39A9E0] text-white overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Left Column: Text */}
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {title}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8">
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 text-white/90">
                {description}
              </p>
              {/* Optional: Add a CTA if needed */}
               <a 
                 href="#contact-form" // Link to form section on this page
                 className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
               >
                 <span>Send a Message</span>
                 <FaArrowRight className="ml-2 text-sm" />
               </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          {/* ... contact info cards content ... */}
           <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">          
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#39A9E0]/10 text-[#39A9E0] mb-4"><FaPhone className="h-5 w-5" /></div> <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Phone</h3> <p className="font-semibold text-lg" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block', }}>1300 395 852</p> </div></AnimatedSection>
                <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}> <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#8BC53F]/10 text-[#8BC53F] mb-4"><FaClock className="h-5 w-5" /></div> <h3 className="text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3> <p className="font-semibold text-lg" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block', }}>Mon – Sun: 9 am to 5 pm</p> </div></AnimatedSection>
                <AnimatedSection variantType="zoomIn" delay={0.3}><div className="bg-gray-50 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#39A9E0]/10 text-[#39A9E0] mb-4"><FaEnvelope className="h-5 w-5" /></div> <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Email</h3> <p className="font-semibold text-lg" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block', }}>contact@vitalitycommunitycare.com.au</p> </div></AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Locations Section (gray bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-12 bg-gray-50">
           {/* ... locations content ... */}
            <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Locations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {locations.map((location, index) => (
                  <AnimatedSection key={index} variantType="zoomIn" delay={index * 0.1}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                      <div className="h-[300px] w-full flex-shrink-0"><iframe src={location.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" title={`Map to ${location.name}`}></iframe></div>
                      <div className="p-6 flex-grow"><h3 className="text-xl font-semibold mb-2" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>{location.name}</h3> <p className="text-gray-600">{location.address}</p></div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Contact Form Section (white bg) */}
      <AnimatedSection variantType="fadeInUp" delay={0.2}>
        <section id="contact-form" className="py-16 bg-white">
          {/* ... form content ... */}
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Let's Get In Touch</h2>
              <p className="text-center text-gray-600 mb-12">If you have questions or want to discuss your needs, feel free to contact us. We're eager to hear from you and help.</p>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
} 