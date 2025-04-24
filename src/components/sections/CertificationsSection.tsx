"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const CertificationsSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      id: 1,
      name: "AHPRA",
      image: "/Aphra.webp",
    },
    {
      id: 2,
      name: "Medicare",
      image: "/Medicare.webp",
    },
    {
      id: 3,
      name: "NDIS Quality and Safeguards Commission",
      image: "/NDIS-Certified-Vitality-NDIS.webp",
    },
    {
      id: 4,
      name: "Registered NDIS Provider",
      image: "/Registered-NDIS-Provider.webp",
    },
  ];

  useEffect(() => {
    const animate = () => {
      setTranslateX((prev) => {
        const newValue = prev - 0.5;
        return newValue <= -100 * (certifications.length - 1) ? 0 : newValue;
      });
    };

    const animation = setInterval(animate, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Certifications & Accreditations
        </h2>
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
                      className="w-48 h-48 flex items-center justify-center"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={100}
                        className="object-contain"
                      />
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
