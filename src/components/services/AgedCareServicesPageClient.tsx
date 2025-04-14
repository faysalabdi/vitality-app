'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// Structured data moved to server component
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the client-side logic and UI
export default function AgedCareServicesPageClient() {
  const title = "Aged Care Services";
  const subtitle = "Dignity & Independence";
  const description = "We provide compassionate aged care services that promote dignity, independence, and quality of life for seniors in the comfort of their own homes.";
  const heroImage = "/care-elderly-abstract-concept-vector-illustration-eldercare-senior-homesick-nursing-care-services-happy-wheelchair-home-support-retired-people-nursing-home-abstract-metaphor_335657-1407.avif"; // Path already points to /public/ (relative to it)
  const decorativeImage = "/AdobeStock_423741997-scaled-1.jpeg"; // Using image from /public/
  
  const agedCareServices = [
    // ... (same agedCareServices array as before) ...
    {
      id: 1,
      title: "Home Care Package",
      shortDescription: "Customized support services for older Australians living at home.",
      longDescription: "Our Home Care Package services provide government-funded support tailored to your individual needs, enabling you to live independently at home.", // Expanded description
      icon: "🏡",
      image: "/icons/care-elderly-abstract-concept-vector-illustration-eldercare-senior-homesick-nursing-care-services-happy-wheelchair-home-support-retired-people-nursing-home-abstract-metaphor_335657-1407.avif", // Updated path (already an icon)
      color: "#8BC53F"
    },
    {
      id: 2,
      title: "Commonwealth Home Support Programme",
      shortDescription: "Entry-level support services for independent living at home.",
      longDescription: "Our Commonwealth Home Support Programme (CHSP) services provide entry-level support for daily tasks to help you maintain your independence at home.", // Expanded description
      icon: "🇦🇺",
      image: "/icons/4472381.jpg", // Updated path
      color: "#39A9E0"
    },
    {
      id: 3,
      title: "Private Care",
      shortDescription: "Personalized care options outside of government-funded programs.",
      longDescription: "Our Private Care services offer flexible, personalized care options tailored to your specific needs, outside of government-funded programs.", // Expanded description
      icon: "👨‍⚕️",
      image: "/icons/3875275.jpg", // Updated path
      color: "#8BC53F"
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
              <Link 
                href="/contact-us"
                className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
              >
                <span>Contact Us</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
           {/* ... introduction content ... */}
           <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Aged Care Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Vitality Community Care, we understand the importance of maintaining independence and dignity as we age... allowing seniors to continue living in the comfort of their own homes while receiving the care they need.
              </p>
              <p className="text-lg text-gray-600">
                Whether you need assistance through a government-funded program... our team of compassionate care professionals is dedicated to enhancing your quality of life...
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview (gray bg) - Rebuilt with alternating layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16"> {/* Add spacing between service blocks */}
            {agedCareServices.map((service, index) => (
              <AnimatedSection key={service.id} variantType={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} delay={0.1}>
                <div 
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Column */}
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className={`relative aspect-video rounded-lg overflow-hidden mx-auto max-w-lg md:max-w-none`}>
                      <Image src={service.image} alt={service.title} fill className="object-contain"/>
                    </div>
                  </div>
                  {/* Text Column */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:justify-start mb-4">
                      <span className="text-3xl mr-4">{service.icon}</span>
                      <h3 className="text-2xl font-bold" style={{ color: service.color }}>{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 mx-auto md:mx-0 max-w-md">{service.longDescription}</p>
                    <Link 
                      href="/contact-us#contact-form"
                      className="inline-flex items-center font-medium"
                      style={{ color: service.color }}>
                      Inquire About This Service <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
           {/* ... why choose us content ... */}
           <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Vitality for Aged Care</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Person-Centered Care</h3> <p className="text-gray-600 text-center">We take the time to understand your individual needs...</p> </div></AnimatedSection>
                <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}> <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Highly Trained Staff</h3> <p className="text-gray-600 text-center">Our care professionals are thoroughly vetted...</p> </div></AnimatedSection>
                <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Flexible Services</h3> <p className="text-gray-600 text-center">We understand that care needs can change...</p> </div></AnimatedSection>
                <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}> <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Home-Based Care</h3> <p className="text-gray-600 text-center">We believe in the comfort of home...</p> </div></AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section (keep overlay) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-12 relative overflow-hidden">
          {/* ... CTA content ... */}
           <div className="absolute inset-0"><Image src="/icons/10624470.jpg" alt="Contact Vitality Community Care about Aged Care Services" fill className="object-cover opacity-20"/> <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div></div> <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Your Aged Care Needs?</h2> <p className="text-lg mb-8">Contact us today to learn more about our aged care services...</p> <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact-us" className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Contact Us <FaArrowRight className="ml-2" /></Link> <Link href="/referral" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Make a Referral <FaArrowRight className="ml-2" /></Link></div></div></div>
        </section>
      </AnimatedSection>

      {/* Back to Services Button (gray bg) */}
      <section className="py-8 bg-gray-50">
         {/* ... button content ... */}
         <div className="container mx-auto px-4"><div className="flex justify-center"><Link href="/services" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition duration-300"><FaArrowLeft className="mr-2" /> Back to All Services</Link></div></div>
      </section>
    </div>
  );
} 