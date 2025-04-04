'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/AdobeStock_423741997-scaled-1.jpeg",
      title: "Nurturing Lives For",
      subtitle: "A Better Tomorrow.",
      description: "At Vitality Community Care, we believe in the power of nurturing. Our comprehensive services aim to create a brighter future for you and your loved ones.",
      cta: { text: "Contact Us Today", link: "/contact-us" }
    },
    {
      image: "/front-view-woman-girl-couch.jpg",
      title: "Your Partner In",
      subtitle: "Community Wellness.",
      description: "Vitality Community Care is your trusted partner in wellness. We offer tailored solutions to meet your needs and your unique health and lifestyle requirements.",
      cta: { text: "Read About Us", link: "/about-us" }
    },
    {
      image: "/friends-having-fun-together.jpg",
      title: "Making A",
      subtitle: "Difference In Lives",
      description: "We're more than just a service provider; we change lives. Vitality Community Care enriches lives, one person at a time.",
      cta: { text: "Referral", link: "/referral" }
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Slide background images */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image 
            src={slide.image} 
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
      ))}
      
      {/* Slide content */}
      <div className="relative h-full flex items-start pt-16 sm:pt-24 md:pt-32 z-10">
        <div className="container mx-auto px-4">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`max-w-lg transition-opacity duration-700 absolute ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {slide.title}
              </h1>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
                style={{ 
                  background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                {slide.subtitle}
              </h2>
              <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-md">
                {slide.description}
              </p>
              
              <Link 
                href={slide.cta.link} 
                className="btn btn-primary flex items-center hover:shadow-lg hover:-translate-y-1"
              >
                <span>{slide.cta.text}</span>
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>
      
      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index 
                ? 'w-8 bg-gradient-to-r from-[#39A9E0] to-[#8BC53F]' 
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}; 