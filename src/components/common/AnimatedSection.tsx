'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.1 // Trigger animation when 10% of the element is visible
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true }); // triggerOnce ensures animation runs only once

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below and invisible
    visible: { 
      opacity: 1, 
      y: 0, // Move to original position and fade in
      transition: { 
        duration: 0.6, // Animation duration
        delay: delay,   // Optional delay
        ease: 'easeOut' // Easing function
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 