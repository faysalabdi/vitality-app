'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// Structured data moved to server component
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the client-side logic and UI
export default function AlliedHealthServicesPageClient() {
  const title = "Allied Health Services";
  const subtitle = "Expert Professional Care";
  const description = "Our team of qualified allied health professionals provides specialized services to improve your health, wellbeing, and quality of life.";
  const heroImage = "/NDIS-and-the-Healing-Power-of-Remedial-Massage-and-Myotherapy.jpg"; // Using image from /public/
  const decorativeImage = "/side-view-people-working-office.jpg"; // Using image from /public/

  const alliedHealthServices = [
    // ... (same alliedHealthServices array as before) ...
    {
      id: 1,
      title: "Physiotherapy",
      shortDescription: "Physical therapy to improve movement, function, and quality of life.",
      longDescription: "Our Physiotherapy services help improve your movement, function, and quality of life through targeted exercises, manual therapy, and education.", // Expanded description
      icon: "💪",
      image: "/icons/4232156.jpg", // Updated path
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Behaviour Support",
      shortDescription: "Professional support to address behavioral challenges and develop positive strategies.",
      longDescription: "Our Behaviour Support services help individuals who may display behaviors of concern by developing positive strategies and support plans.", // Expanded description
      icon: "🧠",
      image: "/icons/5018555.jpg", // Updated path (already an icon)
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Psychology",
      shortDescription: "Mental health support for emotional well-being and psychological resilience.",
      longDescription: "Our Psychology services provide professional mental health support, counseling, and therapy to improve emotional well-being and resilience.", // Expanded description
      icon: "🧩",
      image: "/icons/6276064.jpg", 
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Rehabilitation Counsellor",
      shortDescription: "Guidance and support for individuals recovering from injury or managing disability.",
      longDescription: "Our Rehabilitation Counselling services provide guidance and support to help individuals return to work or daily life after injury or disability.", // Expanded description
      icon: "🤲",
      image: "/icons/6974035.jpg",
      color: "#8BC53F"
    },
    {
      id: 5,
      title: "Dietitian",
      shortDescription: "Expert nutrition advice tailored to individual health needs and goals.",
      longDescription: "Our Dietitian services provide expert nutrition advice and personalized meal plans to support your health goals and manage dietary needs.", // Expanded description
      icon: "🥗",
      image: "/icons/7985393.jpg", 
      color: "#39A9E0"
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
                href="/contact-us#form"
                className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
              >
                <span>Enquire Now</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          {/* ... intro content ... */}
           <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Allied Health Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Vitality Community Care, we provide a range of high-quality allied health services delivered by qualified professionals... help you achieve your health and wellbeing goals.
              </p>
              <p className="text-lg text-gray-600">
                Whether you require support through the NDIS... our allied health professionals are committed to providing evidence-based interventions...
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview (gray bg) - Rebuilt with alternating layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16"> {/* Add spacing between service blocks */}
            {alliedHealthServices.map((service, index) => (
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

      {/* Our Approach (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          {/* ... our approach content ... */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Approach to Allied Health</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Comprehensive Assessment</h3> <p className="text-gray-600 text-center">We begin with a thorough assessment...</p> </div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}> <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Person-Centered Care</h3> <p className="text-gray-600 text-center">We place you at the center of all decision-making...</p> </div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}> <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Evidence-Based Practice</h3> <p className="text-gray-600 text-center">Our interventions are grounded in the latest research...</p> </div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}> <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div> <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Collaborative Approach</h3> <p className="text-gray-600 text-center">We work as a multidisciplinary team...</p> </div></AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section (keep overlay) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-12 relative overflow-hidden">
          {/* ... CTA content ... */}
           <div className="absolute inset-0"><Image src="/icons/pwd-support.png" alt="Contact Vitality Community Care about Allied Health Services" fill className="object-cover opacity-20"/> <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div></div> <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Access Our Allied Health Services?</h2> <p className="text-lg mb-8">Contact us today to discuss how our allied health professionals can support...</p> <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact-us" className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Contact Us <FaArrowRight className="ml-2" /></Link> <Link href="/referral" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Make a Referral <FaArrowRight className="ml-2" /></Link></div></div></div>
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