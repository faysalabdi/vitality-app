'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Care Coordinator',
    bio: 'With over 10 years of experience in disability support, Sarah ensures our clients receive personalized care that meets their unique needs.',
    imagePath: '/disability_support_worker_1.jpg',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'NDIS Specialist',
    bio: 'Michael helps our clients navigate the NDIS system and maximize their plans to achieve their goals and improve quality of life.',
    imagePath: '/NDIS_support_worker_article_image_-_web.png',
  },
  {
    id: 3,
    name: 'Rachel Chen',
    role: 'Support Worker Lead',
    bio: 'Rachel trains and mentors our support workers, ensuring they deliver compassionate, high-quality care to every client.',
    imagePath: '/Supportworker-min.jpeg',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Community Engagement',
    bio: 'David builds partnerships with local organizations to create inclusive opportunities for our clients to participate in community life.',
    imagePath: '/2023-disability-support-worker.jpg',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated professionals are committed to providing exceptional care and support
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id} 
              variants={item}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/about-us" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Learn More About Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 