'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/common/AnimatedSection';
import FAQForm from '@/components/common/FAQForm';

const faqs = [
  {
    question: "What Services Do You Offer?",
    answer: "At Vitality Community Care, we offer a variety of services ranging from in-home care to specialized treatments for various medical conditions. Our aim is to provide personalized care tailored to meet your unique needs."
  },
  {
    question: "How Do I Get Started?",
    answer: "To begin, you can either call us at 1300 395 852 or fill out the contact form on our website. We'll arrange an initial consultation to discuss your needs and how best we can serve you."
  },
  {
    question: "Are Your Caregivers Trained?",
    answer: "Absolutely. All our caregivers go through rigorous training and are certified professionals. They are trained in both specialized services and general care to ensure the highest quality service."
  },
  {
    question: "Do You Offer 24/7 Support?",
    answer: "Yes, we do offer 24/7 support to ensure that you always have someone to turn to in case of an emergency or immediate need."
  },
  {
    question: "What Is the Cost?",
    answer: "Costs vary based on the services you require. After our initial consultation, we will provide you with a detailed pricing plan tailored to your needs."
  },
  {
    question: "Is Insurance Accepted?",
    answer: "We accept most types of insurance. However, it's best to check with us first to confirm whether your specific insurance plan is accepted."
  },
  {
    question: "How Quickly Can Services Begin?",
    answer: "Our services can often begin within 48 hours of your initial consultation, depending on your specific needs and our resource availability."
  },
  {
    question: "What Makes You Different?",
    answer: "At Vitality Community Care, what sets us apart is our commitment to personalized, compassionate care. Our extensive range of services allows us to provide comprehensive solutions for you."
  },
  {
    question: "Do You Conduct Background Checks on Caregivers?",
    answer: "Yes, the safety of our clients is our utmost priority. All caregivers undergo thorough background checks before joining our team."
  },
  {
    question: "Can I Change My Service Plan?",
    answer: "Of course! We understand that needs can change, so we offer the flexibility to adjust your service plan as necessary. Just reach out to us to discuss any changes you'd like to make."
  }
];

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
      >
        <span>{question}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-600 overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// This component contains the client-side logic and UI
export default function FAQPageClient() {
  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
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
              Got questions? We've got answers.
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              Learn more about how we can serve you best by browsing our frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Have a Question Section */}
      <AnimatedSection variantType="fadeInUp" delay={0.2}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Have A Question To Ask?</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <FAQForm />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
} 