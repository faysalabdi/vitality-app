'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// Structured data moved to server component
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the client-side logic and UI
export default function NDISServicesPageClient() {
  const title = "NDIS Services";
  const subtitle = "Supporting Your Journey";
  const description = "As a registered NDIS provider, we offer comprehensive services tailored to help you achieve your goals, increase independence, and enhance your quality of life.";
  const heroImage = "/psychology-support-person-wheelchair-woman-600nw-2167530617.webp"; // Example image 1
  const decorativeImage = "/disability-support-services-sm2.png"; // Example image 2

  const ndisServices = [
    // ... (same ndisServices array as before) ...
     {
      id: 1,
      title: "Daily Living Support",
      shortDescription: "Assistance with everyday tasks to maintain independence and comfort at home.",
      longDescription: "Our Daily Living Support services help you with everyday tasks at home...",
      icon: "🏠",
      image: "/disability-support-services-sm2.png",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Community Participation",
      shortDescription: "Supporting engagement in community activities and building social connections.",
      longDescription: "Our Community Participation services support you to engage in social and recreational activities...",
      icon: "👥",
      image: "/friends-having-fun-together.jpg",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Accommodation",
      shortDescription: "Supported Independent Living (SIL) and Respite Care services.",
      longDescription: "Our Accommodation services include Supported Independent Living (SIL)...",
      icon: "🏘️",
      image: "/front-view-woman-girl-couch.jpg",
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Transport",
      shortDescription: "Safe and reliable transportation to appointments, activities, and more.",
      longDescription: "Our Transport services provide safe and reliable transportation...",
      icon: "🚗",
      image: "/pwd-support.png",
      color: "#8BC53F"
    },
    {
      id: 5,
      title: "Support Coordination",
      shortDescription: "Help navigating the NDIS and connecting with the right service providers.",
      longDescription: "Our Support Coordination services help you navigate the NDIS...",
      icon: "📋",
      image: "/psychology-support-person-wheelchair-woman-600nw-2167530617.webp",
      color: "#39A9E0"
    },
    {
      id: 6,
      title: "Cleaning",
      shortDescription: "Professional cleaning services to maintain a hygienic and comfortable living environment.",
      longDescription: "Our Cleaning services help maintain a hygienic and comfortable living environment...",
      icon: "✨",
      image: "/AdobeStock_423741997-scaled-1.jpeg",
      color: "#8BC53F"
    },
    {
      id: 7,
      title: "Early Childhood",
      shortDescription: "Specialized support for young children with developmental needs.",
      longDescription: "Our Early Childhood services provide specialized support for young children...",
      icon: "👶",
      image: "/side-view-people-working-office.jpg",
      color: "#39A9E0"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* New Hero Section */}
      <section className="relative bg-[#39A9E0] text-white overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {title}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8">
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl text-white/90">
                {description}
              </p>
              {/* Optional: Add a CTA if needed */}
              <Link 
                href="/referral"
                className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
              >
                <span>Make a Referral</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </motion.div>
            
            {/* Right Column: Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[350px] md:h-[450px] hidden lg:block"
            >
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-green-300/20 rounded-full -z-10"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full -z-10"></div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                 animate={{ opacity: 1, scale: 1, rotate: 3 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 className="absolute top-0 right-0 w-80 h-64 rounded-lg shadow-xl overflow-hidden"
              >
                <Image src={heroImage} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 0vw, 320px"/>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                 animate={{ opacity: 1, scale: 1, rotate: -6 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="absolute bottom-0 left-0 w-64 h-48 rounded-lg shadow-xl overflow-hidden"
              >
                <Image src={decorativeImage} alt="Support services" fill className="object-cover" sizes="(max-width: 1024px) 0vw, 256px"/>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section (from original page, now with white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white"> {/* Added bg-white */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our NDIS Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Vitality Community Care, we understand that everyone's needs and goals are unique. Our NDIS services are designed to be flexible and tailored to your specific requirements. We work closely with you to understand your aspirations and create a support plan that helps you achieve them.
              </p>
              <p className="text-lg text-gray-600">
                As a registered NDIS provider, we're committed to delivering high-quality services that adhere to the NDIS Code of Conduct and Quality and Safeguarding Framework. Our team of skilled and compassionate professionals is dedicated to supporting you on your journey to greater independence and community participation.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview (now with gray bg) */}
      <section className="py-16 bg-gray-50"> {/* Added bg-gray-50 */}
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {ndisServices.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                variantType={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} 
                delay={0.1}
                className="mb-16 last:mb-0"
              >
                <div 
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                   {/* ... service item content ... */}
                   <div className={`relative h-64 md:h-auto rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <Image src={service.image} alt={service.title} fill className="object-cover"/>
                    </div>
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{service.icon}</span>
                        <h3 className="text-2xl font-bold" style={{ color: service.color }}>{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.longDescription}</p>
                      <Link 
                        href="/contact-us#contact-form"
                        className="inline-flex items-center font-medium"
                        style={{ color: service.color }}
                      >
                        Inquire About This Service <FaArrowRight className="ml-2" />
                      </Link>
                    </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS Eligibility (now with white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white"> {/* Added bg-white */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">NDIS Eligibility & Funding</h2>
              <AnimatedSection delay={0.1} className="mb-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  {/* ... eligibility content ... */}
                  <h3 className="text-xl font-semibold mb-4" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>Are You Eligible for NDIS?</h3>
                  <p className="text-gray-600 mb-4">To be eligible for NDIS funding, you generally need to:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4"><li>Be under 65 years of age when you apply</li><li>Be an Australian citizen, permanent resident, or protected special category visa holder</li><li>Have a permanent and significant disability that affects your ability to take part in everyday activities</li><li>Need support now to reduce your future needs</li></ul>
                  <p className="text-gray-600">If you're unsure about your eligibility or need help applying for the NDIS, our team can provide guidance and support throughout the process.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                   {/* ... funding content ... */}
                   <h3 className="text-xl font-semibold mb-4" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>How to Use Your NDIS Funding</h3>
                   <p className="text-gray-600 mb-4">Once you have an NDIS plan, you can choose how your supports are managed...</p>
                   <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4"><li><strong>Self-managed:</strong> You manage all aspects...</li><li><strong>Plan-managed:</strong> A plan manager pays providers...</li><li><strong>NDIA-managed:</strong> The NDIS pays providers directly...</li><li><strong>Combination:</strong> A mix of the above options</li></ul>
                   <p className="text-gray-600">As a registered NDIS provider, we can work with all management types...</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section (keep original overlay) */}
      <AnimatedSection variantType="zoomIn">
        <section className="py-12 relative overflow-hidden">
          {/* ... CTA content ... */}
           <div className="absolute inset-0"><Image src="/psychology-support-person-wheelchair-woman-600nw-2167530617.webp" alt="Contact Vitality Community Care about NDIS Services" fill className="object-cover opacity-20"/> <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div></div> <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your NDIS Journey?</h2> <p className="text-lg mb-8">Contact us today to discuss how our NDIS services can support you...</p> <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact-us" className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Contact Us <FaArrowRight className="ml-2" /></Link> <Link href="/referral" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Make a Referral <FaArrowRight className="ml-2" /></Link></div></div></div>
        </section>
      </AnimatedSection>

      {/* Back to Services Button (now with gray bg) */}
      <section className="py-8 bg-gray-50"> {/* Added bg-gray-50 */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition duration-300"
            >
              <FaArrowLeft className="mr-2" /> Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 