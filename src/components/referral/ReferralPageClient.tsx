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