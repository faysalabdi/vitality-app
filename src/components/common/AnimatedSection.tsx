'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Define possible animation types
type AnimationVariant = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  variantType?: AnimationVariant;
}

// Define the animation variants
const animationVariants: Record<AnimationVariant, Variants> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.1,
  variantType = 'fadeInUp' 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const selectedVariants = animationVariants[variantType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: selectedVariants.hidden,
        visible: { 
          ...selectedVariants.visible, 
          transition: { 
            duration: 0.6, 
            delay: delay, 
            ease: 'easeOut' 
          } 
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 