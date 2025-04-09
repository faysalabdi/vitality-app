'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Personal Care Support',
    description: 'Assistance with daily activities including hygiene, dressing, meal preparation, and medication management, all delivered with dignity and respect for your independence.',
    imageUrl: '/Disabled-man-with-support-worker.jpeg',
    link: '/services#personal-care',
    features: ['Showering & Personal Hygiene', 'Meal Preparation', 'Medication Management', 'Mobility Support']
  },
  {
    id: 2,
    title: 'Community Participation',
    description: 'Support to engage in social activities, access community facilities, and build connections that enrich your life and promote inclusion.',
    imageUrl: '/AdobeStock_466433264+(1)-640w.webp',
    link: '/services#community',
    features: ['Social Events', 'Recreational Activities', 'Educational Programs', 'Cultural Engagements']
  },
  {
    id: 3,
    title: 'Supported Independent Living',
    description: 'Comprehensive support in your home environment, helping you develop skills for independent living while providing necessary assistance.',
    imageUrl: '/ormond-victoria-australia-march-17-600nw-2438632631.webp',
    link: '/services#independent-living',
    features: ['Household Management', 'Budgeting Skills', 'Shopping Assistance', 'Life Skills Development']
  },
  {
    id: 4,
    title: 'Therapy Services',
    description: 'Professional therapy services including occupational therapy, speech therapy, and physiotherapy to support your physical and developmental needs.',
    imageUrl: '/psychology-support-person-wheelchair-woman-600nw-2167530617.webp',
    link: '/services#therapy',
    features: ['Occupational Therapy', 'Physiotherapy', 'Speech Therapy', 'Behavioral Support']
  },
  {
    id: 5,
    title: 'Respite Care',
    description: 'Short-term support services that provide family caregivers with temporary relief while ensuring your care needs continue to be met with the highest standards.',
    imageUrl: '/disabled-boy-in-wheelchair-holding-mothers-hand-on-path-picture-id1041472750.jpeg',
    link: '/services#respite',
    features: ['In-Home Respite', 'Community-Based Respite', 'Emergency Respite', 'Planned Breaks']
  },
  {
    id: 6,
    title: 'Support Coordination',
    description: 'Expert assistance in navigating the NDIS, connecting with suitable service providers, and ensuring your support plan meets your changing needs and goals.',
    imageUrl: '/ndis-01.webp',
    link: '/services#coordination',
    features: ['NDIS Plan Management', 'Service Provider Liaison', 'Goal Setting Support', 'Plan Reviews']
  }
];

const ExpandedServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the full range of specialized support services designed to enhance your quality of life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-700 mb-4 flex-grow">{service.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.link}
                  className="mt-auto inline-flex items-center font-medium text-[#39A9E0] hover:text-[#2d8ac0]"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-[#39A9E0] text-white font-medium rounded-md hover:bg-[#2d8ac0] transition duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpandedServicesSection; 