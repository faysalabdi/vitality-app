'use client';

import { motion } from 'framer-motion';

const features = [
  { title: 'Personalized Care', description: 'Tailored to individual needs' },
  { title: 'Expert Staff', description: 'Highly trained professionals' },
  { title: 'Quality Care', description: 'Gold standard services' },
  { title: '24/7 Support', description: 'Always available when needed' },
  { title: 'Community Focus', description: 'Integrated local approach' },
  { title: 'Family Support', description: 'We care for caregivers too' },
  { title: 'Innovative', description: 'Modern care techniques' },
  { title: 'Flexible Scheduling', description: 'Care that fits your life' },
  { title: 'Transparent', description: 'Clear communication always' },
  { title: 'Safe Space', description: 'Security and comfort priority' },
  { title: 'Person Centric', description: 'You come first in all we do' },
  { title: 'Flexible', description: 'Adaptable to changing needs' }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-blue-600 mb-2">Here Are The</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Top Reasons To Trust Vitality</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Trust is at the core of what we do. Our expertise is backed by years of experience, dedicated staff, and countless success stories. Experience peace of mind and quality care with us.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 