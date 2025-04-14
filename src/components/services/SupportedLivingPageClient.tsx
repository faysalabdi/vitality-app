'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// Define the new color scheme
const primaryColor = '#14B8A6'; // Teal 600
const secondaryColor = '#0F766E'; // Teal 700
const accentColor = '#1E3A8A'; // Indigo 900
const lightBgColor = '#F0F9FF'; // Sky 50
const darkTextColor = '#1E293B'; // Slate 800
const lightTextColor = '#475569'; // Slate 600

// This component contains the client-side logic and UI for Supported Living
export default function SupportedLivingPageClient() {
  const title = "Supported Independent Living";
  const subtitle = "Your Home, Your Choice";
  const description = "We empower individuals to live more independently by providing tailored support within a safe and nurturing home environment. Achieve your goals with Vitality.";
  const heroImage = "/icons/7061505.jpg"; // Use the provided image

  // Define SIL-specific services
  const silServices = [
    {
      id: 1,
      title: "Personalised Living Plans",
      shortDescription: "Support tailored to individual goals and daily needs.",
      longDescription: "We work closely with you to develop a personalized plan that focuses on your strengths, preferences, and goals for independent living, covering everything from daily routines to skill development.",
      icon: "📝", // Placeholder icon
      image: "/icons/9467102.jpg", // Placeholder relevant image
      color: primaryColor
    },
    {
      id: 2,
      title: "Daily Living Assistance",
      shortDescription: "Help with everyday tasks to foster independence.",
      longDescription: "Our team provides respectful assistance with daily activities such as personal care, meal preparation, household chores, and medication management, helping you build confidence and autonomy.",
      icon: "🍳", // Placeholder icon
      image: "/icons/4512026.jpg", // Placeholder relevant image
      color: secondaryColor
    },
    {
      id: 3,
      title: "Community Engagement",
      shortDescription: "Support to connect with your local community.",
      longDescription: "We encourage and support participation in community activities, social events, hobbies, and employment or volunteer opportunities, fostering social connections and a sense of belonging.",
      icon: "🧑‍🤝‍🧑", // Placeholder icon
      image: "/icons/Girls bringing puppy to woman in wheelchair.jpg", // Placeholder relevant image
      color: accentColor
    }
  ];

  return (
    <div className="min-h-screen">
      {/* New Hero Section - Image on side */}
      <section className={`relative bg-gradient-to-r from-[${primaryColor}] to-[${secondaryColor}] text-white overflow-hidden py-20 md:py-28`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-100 mb-6 md:mb-8">
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 text-white/90">
                {description}
              </p>
              <Link
                href="/contact-us"
                className={`inline-flex items-center bg-white text-[${secondaryColor}] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit`}
              >
                <span>Get Started</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </motion.div>
            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl mx-auto max-w-lg md:max-w-none">
                <Image src={heroImage} alt={title} fill className="object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
           <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-3xl font-bold text-[${darkTextColor}] mb-6`}>Live Independently with the Right Support</h2>
              <p className={`text-lg text-[${darkTextColor}] mb-8`}>
                Vitality Community Care offers Supported Independent Living (SIL) designed around you. We provide assistance and skill-building opportunities within a supportive home environment, helping you achieve greater independence and participate fully in life.
              </p>
              <p className={`text-lg text-[${darkTextColor}]`}>
                Our dedicated team works with you to understand your needs and aspirations, creating a tailored support system that respects your choices and promotes your well-being.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview - Alternating Layout */}
      <section className={`py-16 bg-[${lightBgColor}]`}>
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {silServices.map((service, index) => (
              <AnimatedSection key={service.id} variantType={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} delay={0.1}>
                <div
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Column */}
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className={`relative aspect-video rounded-lg overflow-hidden mx-auto max-w-lg md:max-w-none shadow-md`}>
                      <Image src={service.image} alt={service.title} fill className="object-contain"/>
                    </div>
                  </div>
                  {/* Text Column */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:justify-start mb-4">
                      <span className="text-3xl mr-4">{service.icon}</span>
                      <h3 className="text-2xl font-bold" style={{ color: service.color }}>{service.title}</h3>
                    </div>
                    <p className={`text-[${darkTextColor}] mb-6 mx-auto md:mx-0 max-w-md`}>{service.longDescription}</p>
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

      {/* Why Choose Us Section */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
           <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl font-bold text-center text-[${darkTextColor}] mb-8`}>Why Choose Vitality for Supported Living</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Feature 1 */}
                <AnimatedSection variantType="zoomIn" delay={0.1}><div className={`bg-[${lightBgColor}] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full`} style={{ borderTop: `4px solid ${primaryColor}` }}> <div className={`w-12 h-12 rounded-full bg-[${primaryColor}]/10 flex items-center justify-center mb-4 mx-auto`}><svg className={`w-6 h-6 text-[${primaryColor}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div> <h3 className={`text-xl font-semibold text-[${darkTextColor}] mb-2 text-center`}>Person-Centred Approach</h3> <p className={`text-[${lightTextColor}] text-center`}>Your goals and choices are at the heart of everything we do.</p> </div></AnimatedSection>
                {/* Feature 2 */}
                <AnimatedSection variantType="zoomIn" delay={0.2}><div className={`bg-[${lightBgColor}] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full`} style={{ borderTop: `4px solid ${secondaryColor}` }}> <div className={`w-12 h-12 rounded-full bg-[${secondaryColor}]/10 flex items-center justify-center mb-4 mx-auto`}><svg className={`w-6 h-6 text-[${secondaryColor}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div> <h3 className={`text-xl font-semibold text-[${darkTextColor}] mb-2 text-center`}>Experienced Support Team</h3> <p className={`text-[${lightTextColor}] text-center`}>Our qualified staff are passionate about supporting independence.</p> </div></AnimatedSection>
                {/* Feature 3 */}
                <AnimatedSection variantType="zoomIn" delay={0.1}><div className={`bg-[${lightBgColor}] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full`} style={{ borderTop: `4px solid ${accentColor}` }}> <div className={`w-12 h-12 rounded-full bg-[${accentColor}]/10 flex items-center justify-center mb-4 mx-auto`}><svg className={`w-6 h-6 text-[${accentColor}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg></div> <h3 className={`text-xl font-semibold text-[${darkTextColor}] mb-2 text-center`}>Safe & Supportive Homes</h3> <p className={`text-[${lightTextColor}] text-center`}>We provide comfortable and accessible living environments.</p> </div></AnimatedSection>
                {/* Feature 4 */}
                <AnimatedSection variantType="zoomIn" delay={0.2}><div className={`bg-[${lightBgColor}] p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full`} style={{ borderTop: `4px solid ${primaryColor}` }}> <div className={`w-12 h-12 rounded-full bg-[${primaryColor}]/10 flex items-center justify-center mb-4 mx-auto`}><svg className={`w-6 h-6 text-[${primaryColor}]`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div> <h3 className={`text-xl font-semibold text-[${darkTextColor}] mb-2 text-center`}>Focus on Skill Building</h3> <p className={`text-[${lightTextColor}] text-center`}>We help you develop the skills needed for greater autonomy.</p> </div></AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-12 relative overflow-hidden">
           <div className="absolute inset-0"><Image src="/icons/Wavy_Lst-21_Single-01.jpg" alt="Contact Vitality Community Care about Supported Living" fill className="object-cover opacity-20"/> <div className={`absolute inset-0 bg-gradient-to-r from-[${primaryColor}]/90 to-[${accentColor}]/90`}></div></div>
           <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Your Independent Living Options</h2>
              <p className="text-lg mb-8">Contact us today to learn how our Supported Independent Living services can help you or your loved one achieve greater autonomy and quality of life.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact-us"
                  className={`bg-white text-[${primaryColor}] hover:bg-teal-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center`}>
                    Contact Us <FaArrowRight className="ml-2" />
                </Link>
                <Link href="/referral"
                  className={`bg-transparent text-white border-2 border-white hover:bg-white hover:text-[${accentColor}] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center`}>
                    Make a Referral <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
           </div>
        </section>
      </AnimatedSection>

      {/* Back to Services Button */}
      <section className={`py-8 bg-[${lightBgColor}]`}>
         <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link href="/services"
              className={`inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-[${darkTextColor}] bg-white hover:bg-gray-50 hover:shadow-md transition duration-300`}>
                <FaArrowLeft className="mr-2" /> Back to All Services
            </Link>
          </div>
         </div>
      </section>
    </div>
  );
} 