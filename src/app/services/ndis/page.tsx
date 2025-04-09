import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ServiceStructuredData } from '@/components/common/StructuredData';
import AnimatedSection from '@/components/common/AnimatedSection';

// Define metadata for this page
export const metadata: Metadata = {
  title: 'NDIS Services | Vitality Community Care',
  description: 'Explore our comprehensive NDIS services including daily living support, community participation, accommodation, transport, and more. Registered NDIS provider in Melbourne.',
  keywords: [
    'NDIS provider Melbourne', 
    'disability support services', 
    'NDIS daily living support', 
    'NDIS community participation',
    'supported independent living'
  ],
  openGraph: {
    title: 'NDIS Services | Vitality Community Care',
    description: 'We offer a wide range of NDIS services, designed to help you achieve your goals and live independently.',
    url: 'https://vitalitycommunitycare.com.au/services/ndis',
    images: [
      {
        url: '/images/ndis-og.jpg', // Replace with actual image when available
        width: 1200,
        height: 630,
        alt: 'Vitality Community Care NDIS services',
      },
    ],
  },
};

export default function NDISServicesPage() {
  // NDIS services with detailed descriptions
  const ndisServices = [
    {
      id: 1,
      title: "Daily Living Support",
      shortDescription: "Assistance with everyday tasks to maintain independence and comfort at home.",
      longDescription: "Our Daily Living Support services help you with everyday tasks at home to maintain your independence and comfort. This includes assistance with personal care, meal preparation, household tasks, and medication management. Our skilled support workers are trained to respect your preferences while providing the necessary support.",
      icon: "🏠",
      image: "/disability-support-services-sm2.png",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Community Participation",
      shortDescription: "Supporting engagement in community activities and building social connections.",
      longDescription: "Our Community Participation services support you to engage in social and recreational activities in your community. We help you build connections, develop social skills, and participate in activities that interest you. From attending local events to joining clubs or classes, we support your active involvement in community life.",
      icon: "👥",
      image: "/friends-having-fun-together.jpg",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Accommodation",
      shortDescription: "Supported Independent Living (SIL) and Respite Care services.",
      longDescription: "Our Accommodation services include Supported Independent Living (SIL) for those who need assistance to live independently, and Short Term Accommodation (Respite Care) for temporary support. We create safe, comfortable living environments where you can develop skills for independent living while receiving the support you need.",
      icon: "🏘️",
      image: "/front-view-woman-girl-couch.jpg",
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Transport",
      shortDescription: "Safe and reliable transportation to appointments, activities, and more.",
      longDescription: "Our Transport services provide safe and reliable transportation to help you attend appointments, social activities, education, and work. Our drivers are trained to provide appropriate support and ensure your comfort and safety during travel, enhancing your independence and community access.",
      icon: "🚗",
      image: "/pwd-support.png",
      color: "#8BC53F"
    },
    {
      id: 5,
      title: "Support Coordination",
      shortDescription: "Help navigating the NDIS and connecting with the right service providers.",
      longDescription: "Our Support Coordination services help you navigate the NDIS and make the most of your plan. We assist you in understanding your plan, connecting with appropriate service providers, coordinating services, and resolving issues. Our support coordinators work with you to build your capacity to coordinate supports and participate in your community.",
      icon: "📋",
      image: "/psychology-support-person-wheelchair-woman-600nw-2167530617.webp",
      color: "#39A9E0"
    },
    {
      id: 6,
      title: "Cleaning",
      shortDescription: "Professional cleaning services to maintain a hygienic and comfortable living environment.",
      longDescription: "Our Cleaning services help maintain a hygienic and comfortable living environment. We provide regular cleaning services tailored to your needs, including general house cleaning, laundry, and specialized cleaning. Our professional cleaners ensure your living space is clean, organized, and conducive to your well-being.",
      icon: "✨",
      image: "/AdobeStock_423741997-scaled-1.jpeg",
      color: "#8BC53F"
    },
    {
      id: 7,
      title: "Early Childhood",
      shortDescription: "Specialized support for young children with developmental needs.",
      longDescription: "Our Early Childhood services provide specialized support for young children with developmental needs or disabilities. We offer early intervention therapies, developmental activities, and family support to promote your child's development and learning in their crucial early years. Our approach is family-centered, working with you to build your capacity to support your child's development.",
      icon: "👶",
      image: "/side-view-people-working-office.jpg",
      color: "#39A9E0"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              NDIS Services
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
              Supporting Your Journey
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              As a registered NDIS provider, we offer comprehensive services tailored to help you achieve your goals, increase independence, and enhance your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our NDIS Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                At Vitality Community Care, we understand that everyone's needs and goals are unique. Our NDIS services are designed to be flexible and tailored to your specific requirements. We work closely with you to understand your aspirations and create a support plan that helps you achieve them.
              </p>
              <p className="text-lg text-gray-600">
                As a registered NDIS provider, we're committed to delivering high-quality services that adhere to the NDIS Code of Conduct and Quality and Safeguarding Framework. Our team of skilled and compassionate professionals is dedicated to supporting you on your journey to greater independence and community participation.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {ndisServices.map((service, index) => (
              <AnimatedSection 
                key={service.id} 
                variantType={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} 
                delay={0.1}
                className="mb-16 last:mb-0"
              >
                <div 
                  id={service.title.toLowerCase().replace(/\s+/g, '-')}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS Eligibility */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">NDIS Eligibility & Funding</h2>
              
              <AnimatedSection delay={0.1} className="mb-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Are You Eligible for NDIS?</h3>
                  <p className="text-gray-600 mb-4">
                    To be eligible for NDIS funding, you generally need to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li>Be under 65 years of age when you apply</li>
                    <li>Be an Australian citizen, permanent resident, or protected special category visa holder</li>
                    <li>Have a permanent and significant disability that affects your ability to take part in everyday activities</li>
                    <li>Need support now to reduce your future needs</li>
                  </ul>
                  <p className="text-gray-600">
                    If you're unsure about your eligibility or need help applying for the NDIS, our team can provide guidance and support throughout the process.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>How to Use Your NDIS Funding</h3>
                  <p className="text-gray-600 mb-4">
                    Once you have an NDIS plan, you can choose how your supports are managed and which service providers you use. Your NDIS funding can be:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                    <li><strong>Self-managed:</strong> You manage all aspects of your supports and pay providers directly</li>
                    <li><strong>Plan-managed:</strong> A plan manager pays providers on your behalf and helps with financial administration</li>
                    <li><strong>NDIA-managed:</strong> The NDIS pays providers directly, and you must use NDIS-registered providers (like us)</li>
                    <li><strong>Combination:</strong> A mix of the above options</li>
                  </ul>
                  <p className="text-gray-600">
                    As a registered NDIS provider, we can work with all management types. Our team can help you understand how to make the most of your NDIS plan and funding.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection variantType="zoomIn">
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/psychology-support-person-wheelchair-woman-600nw-2167530617.webp" 
              alt="Contact Vitality Community Care about NDIS Services" 
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your NDIS Journey?</h2>
              <p className="text-lg mb-8">
                Contact us today to discuss how our NDIS services can support you in achieving your goals and living your best life.
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
        name="NDIS Services by Vitality Community Care"
        description="Comprehensive NDIS services including daily living support, community participation, accommodation, transport, support coordination, cleaning, and early childhood support. Registered NDIS provider in Melbourne."
        url="https://vitalitycommunitycare.com.au/services/ndis"
        serviceType="Disability Support Service, NDIS Provider"
        areaServed="Victoria, Australia"
      />
    </div>
  );
} 