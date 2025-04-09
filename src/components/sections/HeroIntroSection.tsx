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

  const images = [
    { src: "/AdobeStock_423741997-scaled-1.jpeg", alt: "Caregiver assisting elderly person", className: "absolute top-0 left-0 w-64 h-48 rounded-lg shadow-lg transform -rotate-6" },
    { src: "/front-view-woman-girl-couch.jpg", alt: "Woman and girl on couch", className: "absolute bottom-0 right-0 w-72 h-56 rounded-lg shadow-lg transform rotate-3" },
    { src: "/friends-having-fun-together.jpg", alt: "Friends having fun", className: "absolute top-1/2 left-1/2 w-56 h-40 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 rotate-1" },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            className="relative h-[400px] md:h-[500px] hidden lg:block"
          >
            <div className="absolute top-10 right-10 w-32 h-32 bg-green-300/30 rounded-full -z-10"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full -z-10"></div>
            
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={img.className}
              >
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 