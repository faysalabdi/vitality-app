'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const HeroIntroSection = () => {
  // Content derived from first HeroCarousel slide and IntroSection
  const title = "Nurturing Lives For";
  const subtitle = "A Better Tomorrow.";
  const heroDescription = "At Vitality Community Care, we believe in the power of nurturing. Our comprehensive services aim to create a brighter future for you and your loved ones.";
  const cta = { text: "Contact Us Today", link: "/contact-us" };
  const introText1 = "From personalised care plans to compassionate, skilled professionals, we're committed to understanding and meeting your unique needs.";
  const introText2 = "Registered with NDIS, we offer a comprehensive range of customizable services that allow you to live your best life and make the most of your plan.";
  const introText3 = "Contact us today, and let's embark on a journey to better health and smashing goals.";

  // Single hero image
  const heroImage = {
    src: "/Support-Worker-Branding.png",
    alt: "Support worker helping elderly person with tablet"
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#39A9E0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
              {title}
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8">
              {subtitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl text-white/90">
              {heroDescription}
            </p>
            <Link 
              href={cta.link} 
              className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
            >
              <span>{cta.text}</span>
              <FaArrowRight className="ml-2 text-sm" />
            </Link>

            <div className="mt-12 md:mt-16 max-w-xl text-white/80 space-y-4 text-base md:text-lg">
              <p>{introText1}</p>
              <p>{introText2}</p>
              <p>{introText3}</p>
            </div>
          </motion.div>

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
                src={heroImage.src}
                alt={heroImage.alt}
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 