import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Vitality Community Care',
  description: 'Find answers to common questions about our NDIS, aged care, and allied health services. Learn about eligibility, funding, service options, and more.',
  keywords: [
    'NDIS FAQs', 
    'aged care questions', 
    'disability support FAQ', 
    'allied health services questions',
    'NDIS funding help'
  ],
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What services does Vitality Community Care provide?",
          answer: "Vitality Community Care provides a comprehensive range of services including NDIS supports, aged care services, and allied health services. Our offerings include daily living support, community participation, accommodation services, transport, support coordination, cleaning, early childhood support, home care packages, CHSP, private care, physiotherapy, behavior support, psychology, rehabilitation counselling, and dietitian services."
        },
        {
          question: "What areas do you service?",
          answer: "We primarily service the Melbourne metropolitan area and surrounding regions in Victoria. Please contact us to discuss your specific location and service needs."
        },
        {
          question: "How do I get started with Vitality Community Care?",
          answer: "Getting started is easy. You can contact us by phone at 1300 395 852, email us at contact@vitalitycommunitycare.com.au, or complete the contact form on our website. One of our team members will reach out to discuss your needs and guide you through the process."
        }
      ]
    },
    {
      title: "NDIS Questions",
      faqs: [
        {
          question: "Is Vitality Community Care a registered NDIS provider?",
          answer: "Yes, Vitality Community Care is a registered NDIS provider. This means we meet the NDIS Quality and Safeguarding Framework requirements and can provide services to participants with NDIA-managed funding."
        },
        {
          question: "How do I know if I'm eligible for the NDIS?",
          answer: "To be eligible for the NDIS, you generally need to be under 65 years of age, be an Australian citizen or permanent resident, and have a permanent and significant disability that affects your ability to take part in everyday activities. For specific eligibility requirements, visit the NDIS website or contact us for assistance."
        },
        {
          question: "Can you help me with my NDIS plan?",
          answer: "Yes, our Support Coordination service can help you understand and implement your NDIS plan. We can assist with connecting you to appropriate service providers, coordinating your supports, and maximizing the benefits of your plan."
        }
      ]
    },
    {
      title: "Aged Care Questions",
      faqs: [
        {
          question: "What aged care services do you offer?",
          answer: "We offer Home Care Packages, Commonwealth Home Support Programme (CHSP) services, and private care options. These services are designed to help older Australians maintain their independence and continue living comfortably in their own homes."
        },
        {
          question: "How do I access a Home Care Package?",
          answer: "To access a Home Care Package, you need to be assessed by the Aged Care Assessment Team (ACAT). This can be arranged through My Aged Care by calling 1800 200 422. Once you have been approved for a package, you can choose Vitality Community Care as your service provider."
        },
        {
          question: "Can I get aged care services while I'm waiting for a Home Care Package?",
          answer: "Yes, while waiting for a Home Care Package, you may be eligible for services through the Commonwealth Home Support Programme (CHSP) or you can access our services privately. Contact us to discuss your options."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image 
          src="/AdobeStock_423741997-scaled-1.jpeg" 
          alt="Frequently Asked Questions - Vitality Community Care" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Frequently Asked Questions
            </h1>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              We're Here to Help
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl">
              Find answers to commonly asked questions about our services, eligibility, funding, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  <span style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>
                    {category.title}
                  </span>
                </h2>
                
                <div className="space-y-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-gray-50 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1" style={{ borderLeft: `4px solid ${faqIndex % 2 === 0 ? '#39A9E0' : '#8BC53F'}` }}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/front-view-woman-girl-couch.jpg" 
            alt="Contact Vitality Community Care" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Didn't Find Your Answer?</h2>
            <p className="text-lg mb-8">
              Our team is ready to answer any additional questions you may have. Feel free to reach out to us.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#39A9E0] hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              Contact Us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 