'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Removed Metadata import
// Removed ServiceStructuredData import for now, can be added back if needed client-side or kept in server page.tsx

// Client Component containing the page UI and logic
export default function ServicesPageClient() {
  // Page specific content for Hero
  const title = "Our Services";
  const subtitle = "Tailored to Your Needs";
  const description = "At Vitality Community Care, we offer a wide range of personalized services, designed to meet your unique needs and help you live your best life.";
  const heroImage = "/NDIS-1.png"; 

  const mainServices = [
    {
      id: 1,
      title: "NDIS Services",
      description: "Personalized support for individuals with disabilities, helping them achieve their goals and live independently.",
      image: "/pwd-support.png",
      link: "/services/ndis",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Aged Care",
      description: "Quality care services for seniors, ensuring comfort, dignity, and well-being in their golden years.",
      image: "/care-elderly-abstract-concept-vector-illustration-eldercare-senior-homesick-nursing-care-services-happy-wheelchair-home-support-retired-people-nursing-home-abstract-metaphor_335657-1407.avif",
      link: "/services/aged-care",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Allied Health",
      description: "Professional therapeutic services from specialists in various health disciplines for optimal recovery and wellness.",
      image: "/NDIS-and-the-Healing-Power-of-Remedial-Massage-and-Myotherapy.jpg",
      link: "/services/allied-health",
      color: "#39A9E0"
    }
  ];

  // NDIS services (copied from original page.tsx)
  const ndisServices = [
    {
      id: 1,
      title: "Daily Living Support",
      description: "Assistance with everyday tasks to maintain independence and comfort at home.",
      icon: "🏠",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Community Participation",
      description: "Supporting engagement in community activities and building social connections.",
      icon: "👥",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Accommodation",
      description: "Supported Independent Living (SIL) and Respite Care services.",
      icon: "🏘️",
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Transport",
      description: "Safe and reliable transportation to appointments, activities, and more.",
      icon: "🚗",
      color: "#8BC53F"
    },
    {
      id: 5,
      title: "Support Coordination",
      description: "Help navigating the NDIS and connecting with the right service providers.",
      icon: "📋",
      color: "#39A9E0"
    },
    {
      id: 6,
      title: "Cleaning",
      description: "Professional cleaning services to maintain a hygienic and comfortable living environment.",
      icon: "✨",
      color: "#8BC53F"
    },
    {
      id: 7,
      title: "Early Childhood",
      description: "Specialized support for young children with developmental needs.",
      icon: "👶",
      color: "#39A9E0"
    }
  ];

  // Aged Care services (copied from original page.tsx)
  const agedCareServices = [
    {
      id: 1,
      title: "Home Care Package",
      description: "Customized support services for older Australians living at home.",
      icon: "🏡",
      color: "#8BC53F"
    },
    {
      id: 2,
      title: "Commonwealth Home Support Programme",
      description: "Entry-level support services for independent living at home.",
      icon: "🇦🇺",
      color: "#39A9E0"
    },
    {
      id: 3,
      title: "Private Care",
      description: "Personalized care options outside of government-funded programs.",
      icon: "👨‍⚕️",
      color: "#8BC53F"
    }
  ];

  // Allied Health services (copied from original page.tsx)
  const alliedHealthServices = [
    {
      id: 1,
      title: "Physiotherapy",
      description: "Physical therapy to improve movement, function, and quality of life.",
      icon: "💪",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Behaviour Support",
      description: "Professional support to address behavioral challenges and develop positive strategies.",
      icon: "🧠",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Psychology",
      description: "Mental health support for emotional well-being and psychological resilience.",
      icon: "🧩",
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Rehabilitation Counsellor",
      description: "Guidance and support for individuals recovering from injury or managing disability.",
      icon: "🤲",
      color: "#8BC53F"
    },
    {
      id: 5,
      title: "Dietitian",
      description: "Expert nutrition advice tailored to individual health needs and goals.",
      icon: "🥗",
      color: "#39A9E0"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Standard Inner Page Hero Section */}
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
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8"
              >
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl text-white/90">
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
            
            {/* Right Column: Single Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              {/* Full hero image without cropping or borders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg"
              >
                <Image 
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NDIS Services */}
      <section id="ndis-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">NDIS Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Registered with NDIS, we offer a comprehensive range of customizable services that allow you to live your best life and make the most of your plan.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ndisServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <span className="text-3xl mb-4">{service.icon}</span>
                  <h3 className="text-lg mb-2 text-gray-700">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/ndis"
              className="inline-flex items-center justify-center bg-[#39A9E0] hover:bg-[#2a7fa9] text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300"
            >
              Learn More about NDIS Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aged Care Services */}
      <section id="aged-care-services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Aged Care Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Quality care services for seniors, ensuring comfort, dignity, and well-being in their golden years.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {agedCareServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <span className="text-3xl mb-4">{service.icon}</span>
                  <h3 className="text-lg mb-2 text-gray-700">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/aged-care"
              className="inline-flex items-center justify-center bg-[#8BC53F] hover:bg-[#6a9b30] text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300"
            >
              Learn More about Aged Care Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Allied Health Services */}
      <section id="allied-health-services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Allied Health Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional therapeutic services from specialists in various health disciplines for optimal recovery and wellness.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {alliedHealthServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <span className="text-3xl mb-4">{service.icon}</span>
                  <h3 className="text-lg mb-2 text-gray-700">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/allied-health"
              className="inline-flex items-center justify-center bg-[#39A9E0] hover:bg-[#2a7fa9] text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-300"
            >
              Learn More about Allied Health Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section (copied from original page.tsx) */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/side-view-people-working-office.jpg" 
            alt="Contact Vitality Community Care" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how we can tailor our services to meet your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact-us" 
                className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                Contact Us <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/referral" 
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                Make a Referral <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data can be handled in the server component */}
    </div>
  );
} 