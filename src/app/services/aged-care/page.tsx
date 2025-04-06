import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ServiceStructuredData } from '@/components/common/StructuredData';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'Aged Care Services | Vitality Community Care',
  description: 'Quality aged care services in Melbourne including Home Care Packages, CHSP, and private care options. Personalized support for seniors to maintain independence.',
  keywords: [
    'aged care services Melbourne', 
    'home care packages', 
    'Commonwealth Home Support Programme', 
    'senior care services',
    'in-home care for elderly'
  ],
  openGraph: {
    title: 'Aged Care Services | Vitality Community Care',
    description: 'Quality care services for seniors, ensuring comfort, dignity, and well-being in their golden years.',
    url: 'https://vitalitycommunitycare.com.au/services/aged-care',
    images: [
      {
        url: '/images/aged-care-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care aged care services',
      },
    ],
  },
};

export default function AgedCareServicesPage() {
  // Aged Care services with detailed descriptions
  const agedCareServices = [
    {
      id: 1,
      title: "Home Care Package",
      shortDescription: "Customized support services for older Australians living at home.",
      longDescription: "Our Home Care Package services provide government-funded support designed to help you continue living independently in your own home as you age. We offer all four levels of packages, from basic care needs to high-level care. Our services are tailored to your specific requirements and can include personal care, nursing, allied health, household tasks, social support, and more.",
      icon: "🏡",
      image: "/care-elderly-abstract-concept-vector-illustration-eldercare-senior-homesick-nursing-care-services-happy-wheelchair-home-support-retired-people-nursing-home-abstract-metaphor_335657-1407.avif",
      color: "#8BC53F"
    },
    {
      id: 2,
      title: "Commonwealth Home Support Programme",
      shortDescription: "Entry-level support services for independent living at home.",
      longDescription: "Our Commonwealth Home Support Programme (CHSP) services provide entry-level support to help you maintain your independence and continue living at home. These services are designed for older people who need some assistance with daily tasks or activities. Our CHSP services can include domestic assistance, personal care, social support, transport, home maintenance, and more.",
      icon: "🇦🇺",
      image: "/AdobeStock_423741997-scaled-1.jpeg",
      color: "#39A9E0"
    },
    {
      id: 3,
      title: "Private Care",
      shortDescription: "Personalized care options outside of government-funded programs.",
      longDescription: "Our Private Care services offer flexible, personalized care options that are not restricted by government funding guidelines. This means you can access the exact type and level of support you need, when you need it. Our private care services can include companion care, personal care, overnight care, respite care, and specialized care for conditions like dementia.",
      icon: "👨‍⚕️",
      image: "/friends-having-fun-together.jpg",
      color: "#8BC53F"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Aged Care Services
            </h1>
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Dignity & Independence
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              We provide compassionate aged care services that promote dignity, independence, and quality of life for seniors in the comfort of their own homes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Aged Care Services</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Vitality Community Care, we understand the importance of maintaining independence and dignity as we age. Our aged care services are designed to provide the right level of support, allowing seniors to continue living in the comfort of their own homes while receiving the care they need.
            </p>
            <p className="text-lg text-gray-600">
              Whether you need assistance through a government-funded program like a Home Care Package or CHSP, or prefer the flexibility of private care, our team of compassionate care professionals is dedicated to enhancing your quality of life and supporting your individual needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {agedCareServices.map((service, index) => (
              <div 
                key={service.id} 
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className={`mb-16 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative h-64 md:h-auto rounded-lg overflow-hidden ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{service.icon}</span>
                    <h3 className="text-2xl font-bold" style={{ color: service.color }}>{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.longDescription}</p>
                  <Link 
                    href="/contact-us" 
                    className="inline-flex items-center font-medium"
                    style={{ color: service.color }}
                  >
                    Inquire About This Service <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Vitality for Aged Care</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
                <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Person-Centered Care</h3>
                <p className="text-gray-600 text-center">
                  We take the time to understand your individual needs, preferences, and goals, creating personalized care plans that respect your dignity and independence.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
                <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Highly Trained Staff</h3>
                <p className="text-gray-600 text-center">
                  Our care professionals are thoroughly vetted, trained, and experienced in aged care, ensuring you receive the highest quality of service and support.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
                <div className="w-12 h-12 rounded-full bg-[#39A9E0]/10 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#39A9E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Flexible Services</h3>
                <p className="text-gray-600 text-center">
                  We understand that care needs can change, which is why we offer flexible care arrangements that can be adjusted to meet your evolving requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
                <div className="w-12 h-12 rounded-full bg-[#8BC53F]/10 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#8BC53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Home-Based Care</h3>
                <p className="text-gray-600 text-center">
                  We believe in the comfort of home. Our services are designed to help you maintain your independence in the familiar surroundings of your own home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/AdobeStock_423741997-scaled-1.jpeg" 
            alt="Contact Vitality Community Care about Aged Care Services" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Discuss Your Aged Care Needs?</h2>
            <p className="text-lg mb-8">
              Contact us today to learn more about our aged care services and how we can support you or your loved one's independence and quality of life.
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

      {/* Back to Services Button */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition duration-300"
            >
              <FaArrowLeft className="mr-2" /> Back to All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Add structured data for SEO */}
      <ServiceStructuredData 
        name="Aged Care Services by Vitality Community Care"
        description="Quality aged care services including Home Care Packages, Commonwealth Home Support Programme (CHSP), and private care options. We provide personalized support to help seniors maintain independence and quality of life."
        url="https://vitalitycommunitycare.com.au/services/aged-care"
        serviceType="Aged Care Service, Home Care Service"
        areaServed="Victoria, Australia"
      />
    </div>
  );
} 