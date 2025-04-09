'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const benefits = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Scheduling',
    description: 'Work hours that fit your lifestyle with part-time and full-time opportunities available.',
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Career Development',
    description: 'Ongoing training and clear pathways for career advancement within our organization.',
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Supportive Team',
    description: 'Join a diverse, inclusive team that values collaboration and mutual support.',
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Competitive Pay',
    description: 'Receive fair compensation that recognizes your skills and contribution.',
  }
];

const roles = [
  {
    id: 1,
    title: 'Support Workers',
    responsibilities: 'Provide direct care and assistance to clients in their homes or in community settings.',
  },
  {
    id: 2,
    title: 'Care Coordinators',
    responsibilities: 'Oversee client care plans and coordinate services to ensure high-quality support.',
  },
  {
    id: 3,
    title: 'NDIS Specialists',
    responsibilities: 'Help clients navigate the NDIS and maximize their benefits under the scheme.',
  }
];

const WorkWithUsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Work With Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our team of passionate professionals making a difference in people's lives
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Work With Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex">
                  <div className="mr-4 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="/side-view-people-working-office.jpg"
              alt="Team members collaborating"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-600/20"></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Current Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div 
                key={role.id} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-[#39A9E0] mb-3">{role.title}</h4>
                <p className="text-gray-600 mb-4">{role.responsibilities}</p>
                <Link
                  href="/careers"
                  className="inline-flex items-center text-[#39A9E0] font-medium hover:text-[#2d8ac0]"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="text-center mt-12">
          <Link
            href="/careers"
            className="inline-block px-6 py-3 bg-[#39A9E0] text-white font-medium rounded-md hover:bg-[#2d8ac0] transition duration-300"
          >
            View All Career Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection; 