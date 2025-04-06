'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: '/AdobeStock_423741997-scaled-1.jpeg',
    alt: 'Support worker helping client',
    category: 'support'
  },
  {
    id: 2,
    src: '/AdobeStock_466433264+(1)-640w.webp',
    alt: 'Community participation activity',
    category: 'community'
  },
  {
    id: 3,
    src: '/Disabled-man-with-support-worker.jpeg',
    alt: 'One-on-one support session',
    category: 'support'
  },
  {
    id: 4,
    src: '/AdobeStock_494741010-1024x683-landscape-8160e91d7b535a395c294ede638f822d-lcp1fhwr5gd7-min-landscape-9e2ac4c2cd085155a84066e8fc567a26-lcp1fhwr5gd7.jpeg',
    alt: 'Family support services',
    category: 'family'
  },
  {
    id: 5,
    src: '/disabled-boy-in-wheelchair-holding-mothers-hand-on-path-picture-id1041472750.jpeg',
    alt: 'Inclusive outdoor activities',
    category: 'community'
  },
  {
    id: 6,
    src: '/iStock-1351794371.jpg',
    alt: 'Professional care team meeting',
    category: 'team'
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'support', label: 'Support Services' },
  { id: 'community', label: 'Community Activities' },
  { id: 'family', label: 'Family Support' },
  { id: 'team', label: 'Our Team' }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we're making a difference in our community
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={image.id}
              className="relative h-64 rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Modal for enlarged image (simplified) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1200}
                height={800}
                style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '90vh' }}
              />
              <button 
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 