'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding the NDIS and How It Can Help You',
    excerpt: 'A comprehensive guide to navigating the National Disability Insurance Scheme and maximizing your benefits.',
    date: 'April 10, 2023',
    category: 'NDIS Resources',
    imagePath: '/ndis-01.webp',
    link: '/faq'
  },
  {
    id: 2,
    title: 'The Importance of Person-Centered Care',
    excerpt: 'Learn how our personalized approach to care puts you at the center of all decisions and empowers your independence.',
    date: 'March 22, 2023',
    category: 'Care Insights',
    imagePath: '/psychology-support-person-wheelchair-woman-600nw-2167530617.webp',
    link: '/services'
  },
  {
    id: 3,
    title: 'Community Participation: Breaking Barriers',
    excerpt: 'Discover how we\'re helping our clients engage with their communities and build meaningful connections.',
    date: 'February 15, 2023',
    category: 'Success Stories',
    imagePath: '/ormond-victoria-australia-march-17-600nw-2438632631.webp',
    link: '/about-us'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resources, tips, and stories to help you navigate disability and aged care
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.imagePath}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={post.link}
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
                >
                  Read More
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
            href="/faq"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            View All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 