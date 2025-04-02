import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/common/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Vitality Community Care</h1>
            <p className="text-lg text-gray-600 mb-6">
              From personalised care plans to compassionate, skilled professionals, we're committed to understanding and meeting your unique needs.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Registered with NDIS, we offer a comprehensive range of customizable services that allow you to live your best life and make the most of your plan.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today, and let's embark on a journey to better health and smashing goals.
            </p>
            <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Refer?</h2>
              <p className="text-lg text-blue-100">Submit Participant Details Here.</p>
            </div>
            <Link 
              href="/referral" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Make a Referral
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Person-centric section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Person-Centric Mental Health Solutions</h2>
              <p className="text-gray-600 mb-6">
                At Vitality Community Care, our commitment to person-centric care is the heartbeat of our services. We believe that each individual is unique, with distinct needs, preferences, and aspirations. Our approach is not just about providing care; it's about understanding the goals of every person we serve. We tailor our services to enrich the dignity, independence, and individuality of each client.
              </p>
              <p className="text-gray-600">
                From personalized care plans that reflect specific requirements to fostering a warm and inclusive environment, we prioritize the well-being and happiness of every individual. At Vitality Community Care, we don't just see clients; we see people with rich stories and vibrant lives, and our mission is to empower them to live those lives to the fullest.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700">
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting independence section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700">
                  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Supporting Your Journey To Independence</h2>
              <p className="text-gray-600 mb-6">
                At Vitality Community Care, we understand that life is busy. That's why we offer flexible scheduling options to fit your needs. Whether you prefer weekdays or weekends, day or evening, we've got you covered. Our goal is to make your driving education as convenient as possible.
              </p>
              <p className="text-gray-600">
                We even provide pick-up services at your home, school, or work, so you can easily fit lessons into your day. With us, you won't have to compromise your commitments to become a skilled, confident driver. Choose us for a hassle-free learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <Features />

      {/* Experience the difference */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience The Vitality Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover unparalleled care that goes beyond the basics. At Vitality Community Care, we treat every individual like family, offering personalized services that enrich lives. Feel the difference a compassionate and dedicated team can make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Personalized care plans tailored to individual needs.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Highly trained, compassionate caregivers you can trust.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Affordable pricing without compromising on quality.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible scheduling to fit your family's needs.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">A focus on mental well-being, not just physical.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full transparency and open communication with families.</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">State-of-the-art technology for efficient healthcare.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">A strong community focus for holistic care.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 availability for peace of mind.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Family-owned with a strong community reputation.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-disciplinary team for comprehensive care.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Culturally sensitive services for diverse needs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <Testimonials />

      {/* Contact section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="w-24 h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-blue-600 font-bold text-lg">NDIS</div>
            </div>
            <div className="w-24 h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-green-600 font-bold text-lg">Medicare</div>
            </div>
            <div className="w-24 h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
              <div className="text-purple-600 font-bold text-lg">APHRA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Your Custom Care Plan, Contact Us Today!</h2>
            </div>
            <Link 
              href="/contact-us" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Contact With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
