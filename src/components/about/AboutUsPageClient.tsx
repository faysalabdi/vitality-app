'use client';

import Link from 'next/link';
import Image from 'next/image';
// Metadata is handled in the server component
import { LocalBusinessStructuredData } from '@/components/common/StructuredData'; // Keep this if needed client-side, otherwise move to page.tsx
import { FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the actual page content and client-side logic
export default function AboutUsPageClient() {
  // Page specific content
  const title = "About Us";
  const subtitle = "Our Story & Values";
  const description = "Empowering individuals to live their best lives through compassionate and personalized care.";
  const heroImage = "/icons/7921929.jpg"; 
  const decorativeImage = "/ndis-01.webp";

  return (
    <div className="min-h-screen">
      {/* Merged Hero/Intro Section */}
      <section className="relative bg-[#39A9E0] text-white overflow-hidden py-20 md:py-28"> 
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {title}
              </h1>
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8"
              >
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl text-white/90">
                {description}
              </p>
            </motion.div>

            {/* Right Column: Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[350px] md:h-[450px] hidden lg:block" 
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-green-300/20 rounded-full -z-10"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-0 left-0 w-80 h-64 rounded-lg shadow-xl overflow-hidden"
              >
                 <Image 
                    src={heroImage} 
                    alt="Person with disability receiving support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0vw, 320px"
                  />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-0 right-0 w-64 h-48 rounded-lg shadow-xl overflow-hidden"
              >
                 <Image 
                    src={decorativeImage} 
                    alt="Friends together"
                    fill
                    className="object-cover"
                     sizes="(max-width: 1024px) 0vw, 256px"
                  />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                 {/* ... story paragraphs ... */}
                 <p className="text-gray-600 mb-6">
                  Vitality Community Care was founded with a simple yet powerful vision: to create a care service that truly puts people first. Our journey began when our founders recognized a gap in the healthcare system – many existing services were focused on delivering standardized care, often overlooking the unique needs and preferences of individuals.
                </p>
                <p className="text-gray-600 mb-6">
                  Established in 2015, we set out to build a different kind of care organization. We started small, with just a handful of dedicated caregivers serving our local community in Melbourne. What set us apart from the beginning was our unwavering commitment to personalized care and genuine human connection.
                </p>
                <p className="text-gray-600">
                  Today, Vitality Community Care has grown into a trusted provider of NDIS and Aged Care services across Victoria, but our core values remain unchanged. Every decision we make is guided by our dedication to enhancing the dignity, independence, and quality of life of every person we serve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission and Values */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
           {/* ... Mission and Values content ... */}
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Mission & Values</h2>
            
            <div className="mb-16">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h3 
                  className="text-2xl font-semibold mb-4"
                  style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}
                >
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600">
                  To empower individuals to live their best lives by providing compassionate, personalized care that respects their dignity, celebrates their uniqueness, and helps them achieve their personal goals.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}>
                  <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                     <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Person-Centered</h4>
                  <p className="text-gray-600 text-center">We recognize that every individual is unique... tailored to honor each person's individuality.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}>
                   <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Compassion</h4>
                  <p className="text-gray-600 text-center">We approach our work with genuine care... companions on our clients' journeys.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}>
                   <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Quality</h4>
                  <p className="text-gray-600 text-center">We are committed to excellence... quality is at the heart of our service.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}>
                   <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Flexibility</h4>
                  <p className="text-gray-600 text-center">We understand that needs change... circumstances and preferences evolve.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}>
                   <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Community</h4>
                  <p className="text-gray-600 text-center">We believe in the power of connection... connections within their communities.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}>
                   <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto"><svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Empowerment</h4>
                  <p className="text-gray-600 text-center">We aim to help individuals gain confidence... achieve their personal goals.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
           {/* ... Certifications content ... */}
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Certifications & Accreditations</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <AnimatedSection delay={0.1}>
                <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"><div className="font-bold text-xl text-center" style={{ background: 'linear-gradient(90deg, #39A9E0, #39A9E0)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>NDIS Registered Provider</div></div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                 <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"><div className="font-bold text-xl text-center" style={{ background: 'linear-gradient(90deg, #8BC53F, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Aged Care Quality Standards Certified</div></div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                 <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"><div className="font-bold text-xl text-center" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>ISO 9001 Quality Management</div></div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-12 relative overflow-hidden">
           {/* ... CTA content ... */}
            <div className="absolute inset-0"><Image src="/friends-having-fun-together.jpg" alt="Experience the Vitality difference" fill className="object-cover opacity-20"/> <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div></div> <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Vitality Difference?</h2> <p className="text-lg mb-8">Contact us today to discuss how we can support you or your loved one...</p> <div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact-us" className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Contact Us <FaArrowRight className="ml-2" /></Link> <Link href="/referral" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center">Make a Referral <FaArrowRight className="ml-2" /></Link></div></div></div>
        </section>
      </AnimatedSection>

      {/* Add structured data for SEO - Should be in the server component */}
      {/* <LocalBusinessStructuredData { ... } /> */}
    </div>
  );
} 