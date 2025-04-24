'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const CertificationsSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - 0.5;
        return newValue <= -100 * (certifications.length -1) ? 0 : newValue;
      });
    };

    const animation = setInterval(animate, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Certifications & Accreditations</h2>
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex transition-transform duration-100 ease-linear"
            style={{ transform: `translateX(${translateX}%)` }}
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
                      className={`w-48 h-48 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2`}
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
          </div>
      </div>
    </section>
  );
};