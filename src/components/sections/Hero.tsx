'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Nurturing Lives For',
    subtitle: 'A Better Tomorrow.',
    description: 'At Vitality Community Care, we believe in the power of nurturing. Our comprehensive services aim to create a brighter future for you and your loved ones.',
    action: {
      label: 'Contact Us Today',
      url: '/contact-us'
    },
    gradientClass: 'bg-gradient-to-r from-blue-600 to-purple-600',
  },
  {
    id: 2,
    title: 'Your Partner In',
    subtitle: 'Community Wellness.',
    description: 'Vitality Community Care is your trusted partner in wellness. We offer tailored solutions to meet your unique health and lifestyle needs.',
    action: {
      label: 'Read About Us',
      url: '/about-us'
    },
    gradientClass: 'bg-gradient-to-r from-green-600 to-blue-500',
  },
  {
    id: 3,
    title: 'Making A Difference',
    subtitle: 'In Lives',
    description: "We're more than just a service provider; we change lives. Vitality Community Care enriches lives, one person at a time.",
    action: {
      label: 'Referral',
      url: '/referral'
    },
    gradientClass: 'bg-gradient-to-r from-purple-600 to-pink-500',
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[650px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative h-full w-full ${slides[currentSlide].gradientClass}`}
        >
          {/* Pattern overlay for visual interest */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
            <div className="container mx-auto">
              <div className="max-w-lg">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-200 mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-white text-lg mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Link 
                    href={slides[currentSlide].action.url} 
                    className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
                  >
                    {slides[currentSlide].action.label}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-blue-300 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 