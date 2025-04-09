import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { LocalBusinessStructuredData } from '@/components/common/StructuredData';
import { FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '@/components/common/AnimatedSection';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'About Us | Vitality Community Care',
  description: 'Learn about Vitality Community Care\'s mission, values, and dedicated team. We provide compassionate NDIS and aged care services across Victoria.',
  openGraph: {
    title: 'About Vitality Community Care | Our Mission & Values',
    description: 'Founded in 2015, Vitality Community Care is committed to providing personalized care that respects each individual\'s dignity and uniqueness.',
    url: 'https://vitalitycommunitycare.com.au/about-us',
    images: [
      {
        url: '/images/about-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care team',
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
        <Image 
          src="/pwd-support.png" 
          alt="About Vitality Community Care" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="relative h-full flex items-start pt-16 sm:pt-24 md:pt-32 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                About Us
              </h1>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
                style={{ 
                  background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}
              >
                Our Story & Values
              </h2>
              <p className="text-white text-base md:text-lg mb-6 max-w-md">
                Empowering individuals to live their best lives through compassionate and personalized care.
              </p>
            </div>
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
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
                  <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Person-Centered</h4>
                  <p className="text-gray-600 text-center">
                    We recognize that every individual is unique with their own needs, preferences, and goals. Our care is tailored to honor each person's individuality.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
                  <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Compassion</h4>
                  <p className="text-gray-600 text-center">
                    We approach our work with genuine care, empathy, and kindness. We're not just service providers; we're companions on our clients' journeys.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
                  <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Quality</h4>
                  <p className="text-gray-600 text-center">
                    We are committed to excellence in everything we do. From our highly trained staff to our carefully designed care plans, quality is at the heart of our service.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
                  <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Flexibility</h4>
                  <p className="text-gray-600 text-center">
                    We understand that needs change, and we adapt accordingly. Our flexible approach ensures that care evolves as our clients' circumstances and preferences evolve.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
                  <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Community</h4>
                  <p className="text-gray-600 text-center">
                    We believe in the power of connection. We work to foster meaningful relationships and help our clients maintain and build connections within their communities.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
                  <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">Empowerment</h4>
                  <p className="text-gray-600 text-center">
                    We aim to help individuals gain the confidence, skills, and support they need to live as independently as possible and achieve their personal goals.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#39A9E0] to-[#8BC53F] flex items-center justify-center text-white text-2xl font-bold">
                      JD
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Hamza Abdiwahab</h3>
                  <p className="mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    fontWeight: 'bold'
                  }}>Founder & CEO</p>
                  <p className="text-gray-600 mb-4">
                    Hamza founded Vitality Community Care with a vision to transform care services through a person-centered approach.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#39A9E0] to-[#8BC53F] flex items-center justify-center text-white text-2xl font-bold">
                      JS
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Azhaar Abdiwahab</h3>
                  <p className="mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    fontWeight: 'bold'
                  }}>Clinical Director</p>
                  <p className="text-gray-600 mb-4">
                    Azhaar brings her extensive background as a registered nurse and healthcare administrator to ensure our clinical practices meet the highest standards of care.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#39A9E0] to-[#8BC53F] flex items-center justify-center text-white text-2xl font-bold">
                      SC
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Faysal Abdiwahab</h3>
                  <p className="mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block',
                    fontWeight: 'bold'
                  }}>NDIS Services Manager</p>
                  <p className="text-gray-600 mb-4">
                    Faysal specializes in NDIS service delivery and has dedicated her career to advocating for the rights and needs of people with disabilities.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Certifications & Accreditations</h2>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <AnimatedSection delay={0.1}>
                <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                  <div 
                    className="font-bold text-xl text-center"
                    style={{ 
                      background: 'linear-gradient(90deg, #39A9E0, #39A9E0)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    NDIS Registered Provider
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                  <div 
                    className="font-bold text-xl text-center"
                    style={{ 
                      background: 'linear-gradient(90deg, #8BC53F, #8BC53F)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Aged Care Quality Standards Certified
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="w-40 h-40 flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                  <div 
                    className="font-bold text-xl text-center"
                    style={{ 
                      background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    ISO 9001 Quality Management
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/friends-having-fun-together.jpg" 
              alt="Experience the Vitality difference" 
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Vitality Difference?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss how we can support you or your loved one with compassionate, personalized care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact-us" 
                  className="bg-white text-[#39A9E0] hover:bg-blue-50 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center"
                >
                  Contact Us <FaArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/referral" 
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#8BC53F] font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 flex items-center justify-center"
                >
                  Make a Referral <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Add structured data for SEO */}
      <LocalBusinessStructuredData 
        name="Vitality Community Care"
        description="Vitality Community Care provides personalized NDIS, aged care, and allied health services in Australia. Established in 2015, we're committed to empowering individuals to live their best lives through compassionate care."
        url="https://vitalitycommunitycare.com.au/about-us"
        telephone="+61 1300 395 852"
        address={{
          streetAddress: "123 Community Street",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU",
        }}
      />
    </div>
  );
} 