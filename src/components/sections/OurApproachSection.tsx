'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const approaches = [
  {
    id: 1,
    title: 'Person-Centered Care',
    description: 'We put you at the center of everything we do, ensuring support is tailored to your unique needs, preferences, and goals.',
    iconSrc: '/icons/group.jpg',
  },
  {
    id: 2,
    title: 'Cultural Sensitivity',
    description: 'We respect and embrace diverse backgrounds, providing inclusive care that honors your cultural identity and preferences.',
    iconSrc: '/icons/11201843.jpg',
  },
  {
    id: 3,
    title: 'Holistic Support',
    description: 'We consider all aspects of your wellbeing – physical, emotional, social, and spiritual – to provide truly comprehensive care.',
    iconSrc: '/icons/puppy.jpg',
  },
  {
    id: 4,
    title: 'Empowerment Focus',
    description: 'We aim to build your skills and confidence, supporting your journey toward greater independence and community participation.',
    iconSrc: '/icons/4001240.jpg',
  },
  {
    id: 5,
    title: 'Consistent Quality',
    description: 'We maintain high standards through ongoing training, regular reviews, and a commitment to continuous improvement.',
    iconSrc: '/icons/11434480.jpg',
  },
  {
    id: 6,
    title: 'Community Connection',
    description: 'We build partnerships with local organizations to create inclusive opportunities for meaningful community participation.',
    iconSrc: '/icons/Wavy_Lst-21_Single-01.jpg',
  }
];

const OurApproachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional care guided by these core principles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="relative w-16 h-16 mb-4 md:mb-0 md:mr-4 overflow-hidden rounded-full">
                  <Image
                    src={approach.iconSrc}
                    alt={approach.title}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#39A9E0] text-center md:text-left">
                  {approach.title}
                </h3>
              </div>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/about-us" 
            className="inline-block px-6 py-3 bg-[#39A9E0] text-white font-medium rounded-md hover:bg-[#2d8ac0] transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection; 