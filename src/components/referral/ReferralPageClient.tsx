'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';
import ReferralForm from '@/components/common/ReferralForm';

// Removed Placeholder component
// const ReferralFormPlaceholder = () => ( ... );

// This component contains the client-side logic and UI
export default function ReferralPageClient() {
  const title = "Make a Referral";
  const subtitle = "Connect Someone with Care";
  const description = "Refer a participant to Vitality Community Care easily using our online form. Help connect individuals with the compassionate NDIS and aged care support they need.";
  const heroImage = "/referral-hero.jpg"; // Placeholder - Replace with relevant image
  const decorativeImage = "/connecting-people.jpg"; // Placeholder - Replace with relevant image

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
              <a 
                href="#referral-form-section" // Link to form section on this page
                className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
              >
                <span>Go to Referral Form</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </motion.div>
            
            {/* Right Column: Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[350px] md:h-[450px] hidden lg:block"
            >
              <div className="absolute -top-4 -right-8 w-48 h-48 bg-green-300/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 left-8 w-56 h-56 bg-white/10 rounded-full -z-10"></div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 className="absolute top-5 left-5 w-80 h-64 rounded-lg shadow-xl overflow-hidden"
              >
                {/* Replace with actual relevant images */} 
                <Image src={heroImage} alt={title} fill className="object-cover bg-gray-200" sizes="(max-width: 1024px) 0vw, 320px"/>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
                 animate={{ opacity: 1, scale: 1, rotate: 3 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="absolute bottom-5 right-5 w-64 h-48 rounded-lg shadow-xl overflow-hidden"
              >
                 <Image src={decorativeImage} alt="Connecting people" fill className="object-cover bg-gray-200" sizes="(max-width: 1024px) 0vw, 256px"/>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Information Section (Example - Add relevant content) */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Make a Referral</h2>
              <p className="text-lg text-gray-600 mb-8">
                Referring someone to our services is straightforward. Please ensure you have the participant's consent before submitting their details. Provide as much information as possible in the form below to help us understand their needs and goals.
              </p>
              {/* Add more info if needed: eligibility, process steps etc. */}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Referral Form Section (gray bg) */}
      <AnimatedSection variantType="fadeInUp" delay={0.2}>
        <section id="referral-form-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Referral Form</h2>
              {/* Use the actual ReferralForm component */}
              <ReferralForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
} 