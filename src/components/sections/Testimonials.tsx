'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "When our family faced a tough time, Vitality Community Care came to the rescue. The professional team not only gave us impeccable service but also showered love and comfort to my ailing mom. It's hard to find such a compassionate team nowadays.",
    name: "Emily Thompson",
    initials: "ET",
    bgColor: "bg-blue-500"
  },
  {
    id: 2,
    quote: "We were skeptical about in-home care at first, but Vitality Community Care dispelled all our worries. Their caregivers are not just professionals; they're caring individuals who really connected with my dad. It's been a life-changing experience for us. Highly recommended!",
    name: "Mark Williams",
    initials: "MW",
    bgColor: "bg-purple-500"
  },
  {
    id: 3,
    quote: "I've had different caregivers before, but nobody matches the level of care and kindness I've received from Vitality Community Care. They tailored the care to my needs and preferences, making me feel independent and valued. I never thought this could feel like home, but it does!",
    name: "Sarah Kim",
    initials: "SK",
    bgColor: "bg-green-500"
  },
  {
    id: 4,
    quote: "Being in the care of Vitality Community Care has genuinely enhanced my life. I appreciate the friendly faces and the conversations we have. It's comforting to know that I have people around me who truly care and go the extra mile to make me happy. They're simply the best!",
    name: "Brandon Lee",
    initials: "BL",
    bgColor: "bg-pink-500"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clients and their families love sharing stories about how we made a difference in their lives.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative h-[350px] md:h-[280px] overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg width="40" height="40" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 0C6.464 0 0 6.464 0 14.4C0 22.336 6.464 28.8 14.4 28.8L14.4 24C9.6 24 4.8 19.2 4.8 14.4C4.8 9.6 9.6 4.8 14.4 4.8C19.2 4.8 24 9.6 24 14.4V19.2C24 24 19.2 28.8 14.4 28.8V48H33.6V19.2C33.6 8.592 25.008 0 14.4 0ZM39.6 0C31.664 0 25.2 6.464 25.2 14.4C25.2 22.336 31.664 28.8 39.6 28.8V24C34.8 24 30 19.2 30 14.4C30 9.6 34.8 4.8 39.6 4.8C44.4 4.8 49.2 9.6 49.2 14.4V19.2C49.2 24 44.4 28.8 39.6 28.8V48H58.8V19.2C58.8 8.592 50.208 0 39.6 0Z" fill="#4299e1" fillOpacity="0.2"/>
                      </svg>
                    </div>
                    <p className="flex-grow text-gray-700 italic mb-6">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold ${testimonials[activeIndex].bgColor} mr-4`}>
                        {testimonials[activeIndex].initials}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {testimonials[activeIndex].name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-10 bg-white hover:bg-gray-100 text-blue-600 p-3 rounded-full shadow-md transition z-10 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-10 bg-white hover:bg-gray-100 text-blue-600 p-3 rounded-full shadow-md transition z-10 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 