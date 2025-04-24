
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      id: 1,
      name: 'AHPRA',
      image: '/ndis.webp',
      description: 'Australian Health Practitioner Regulation Agency'
    },
    {
      id: 2,
      name: 'Medicare',
      image: '/ndis.webp',
      description: 'Medicare Registered Provider'
    },
    {
      id: 3,
      name: 'NDIS',
      image: '/ndis.webp',
      description: 'Registered NDIS Provider'
    },
    {
      id: 4,
      name: 'NDIS Certified',
      image: '/ndis.webp',
      description: 'NDIS Quality and Safeguards Certified'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Certifications & Accreditations</h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="min-w-full flex justify-center items-center gap-8 px-4"
              >
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                  {certifications.map((item, index) => (
                    <div
                      key={index}
                      className={`w-48 h-48 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2
                        ${index === currentIndex ? 'scale-105' : 'scale-95 opacity-70'}`}
                    >
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
