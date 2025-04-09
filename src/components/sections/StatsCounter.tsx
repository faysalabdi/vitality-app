'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, label, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#39A9E0]">
        {count}{suffix}
      </div>
      <div className="mt-2 text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to exceptional care and support
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <Counter end={5000} label="Hours of Care Delivered" suffix="+" />
          <Counter end={250} label="Satisfied Clients" suffix="+" />
          <Counter end={40} label="Dedicated Team Members" suffix="+" />
          <Counter end={15} label="Years of Experience" suffix="+" />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter; 