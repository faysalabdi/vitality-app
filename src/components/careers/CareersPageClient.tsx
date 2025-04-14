'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

// This component contains the client-side logic and UI
export default function CareersPageClient() {
  const title = "Careers";
  const subtitle = "Join Our Team Today!";
  const description = "Explore rewarding career opportunities at Vitality Community Care and become part of a team dedicated to making a positive impact.";
  const heroImage = "/company_Shirt.png"; // Example image 1
  const decorativeImage = "/friends-having-fun-together.jpg"; // Example image 2

  // Form state and handlers (copied from original page.tsx)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    try {
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      const resumeFile = (formElement.querySelector('#resume') as HTMLInputElement).files?.[0];
      let resumeBase64 = '';
      let resumeFileName = '';
      if (resumeFile) {
        resumeFileName = resumeFile.name;
        resumeBase64 = await convertFileToBase64(resumeFile);
      }
      const formDataObj = Object.fromEntries(formData.entries());
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formDataObj, resumeFileName, resumeBase64, isCareerApplication: true }),
      });
      if (!response.ok) { throw new Error('Failed to send email'); }
      setSubmitSuccess(true);
      formElement.reset();
    } catch (error) { setFormError('There was a problem submitting your application. Please try again.'); console.error('Form submission error:', error); }
     finally { setIsSubmitting(false); }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const careers = [
    // ... (same careers array as before) ...
     {
      title: "Support Worker",
      description: "Join our team of dedicated support workers...",
      requirements: ["Certificate III in Individual Support or equivalent", "Valid driver's license", "NDIS Worker Screening Check", "First Aid and CPR certification"],
      color: "#39A9E0"
    },
    {
      title: "Allied Health Professional",
      description: "We're seeking qualified allied health professionals...",
      requirements: ["Relevant degree qualification", "AHPRA registration (if applicable)", "Experience working with people with disabilities", "Strong communication skills"],
      color: "#8BC53F"
    },
    {
      title: "Support Coordinator",
      description: "Help our clients navigate the NDIS...",
      requirements: ["Experience in NDIS support coordination", "Knowledge of local service providers", "Strong organizational skills", "Problem-solving abilities"],
      color: "#39A9E0"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Updated Hero Section */}
      <section className="relative bg-[#39A9E0] text-white overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
             <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {title}
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-300 mb-6 md:mb-8">
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 text-white/90">
                {description}
              </p>
              <a 
                href="#application-form" // Link to form on this page
                className="inline-flex items-center bg-white text-[#39A9E0] hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 hover:-translate-y-1 text-base md:text-lg w-fit"
              >
                <span>Apply Today</span>
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </motion.div>
            
            {/* Right Column: Single Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center items-center"
            >
              {/* Full hero image without cropping or borders */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg"
              >
                <Image 
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          {/* ... why work with us content ... */}
           <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Work With Us?</h2>
              <div className="mb-12"><p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto text-center">At Vitality Community Care, we understand that every member of our team plays a crucial part... we seek more than just industry knowledge... we're on the lookout for genuine warmth...</p><p className="text-lg text-gray-600 mb-0 max-w-4xl mx-auto text-center">Vitality Community Care is more than just a workplace – it's a community... We offer competitive salaries, ongoing professional development, flexible working arrangements, and a supportive team environment.</p></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
                 <AnimatedSection variantType="zoomIn" delay={0.1}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}><h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Competitive Wages</h3><p className="text-gray-600 text-center">We nurture your growth...</p></div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.2}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}><h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">A Sense of Belonging</h3><p className="text-gray-600 text-center">Find your place and feel truly welcome...</p></div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.3}><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #39A9E0' }}><h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Work-Life Balance</h3><p className="text-gray-600 text-center">We don't confine you to the traditional 9-5...</p></div></AnimatedSection>
                 <AnimatedSection variantType="zoomIn" delay={0.1} className="md:col-start-2"><div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full" style={{ borderTop: '4px solid #8BC53F' }}><h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Hands-on Training</h3><p className="text-gray-600 text-center">Worry not—our on-the-job training...</p></div></AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Current Opportunities (gray bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-gray-50">
          {/* ... current opportunities content ... */}
           <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Opportunities</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {careers.map((career, index) => (
                <AnimatedSection key={index} variantType="fadeInLeft" delay={index * 0.1}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-8" style={{ borderLeft: `4px solid ${career.color}` }}>
                       <h3 className="text-2xl font-bold mb-3" style={{ color: career.color }}>{career.title}</h3>
                       <p className="text-gray-600 mb-6">{career.description}</p>
                       <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                       <ul className="list-disc pl-5 mb-6 text-gray-600">{career.requirements.map((req, i) => (<li key={i}>{req}</li>))}</ul>
                       <Link href="#application-form" className="inline-flex items-center font-medium" style={{ color: career.color }}>Apply for this Position <FaArrowRight className="ml-2" /></Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section (keep overlay) */}
      <AnimatedSection variantType="zoomIn">
        <section className="py-12 relative overflow-hidden">
          {/* ... CTA content ... */}
           <div className="absolute inset-0"><Image src="/friends-having-fun-together.jpg" alt="Join Vitality Community Care Team" fill className="object-cover opacity-20"/> <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div></div> <div className="container mx-auto px-4 relative z-10"><div className="max-w-4xl mx-auto text-center text-white"><h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Team?</h2> <p className="text-lg mb-8">We're always looking for talented and passionate individuals...</p></div></div>
        </section>
      </AnimatedSection>

      {/* Application Form Section (white bg) */}
      <AnimatedSection variantType="fadeInUp">
        <section id="application-form" className="py-16 bg-white">
          {/* ... form content ... */}
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Submit Your Application Today</h2>
              <div className="bg-gray-50 rounded-lg shadow-md p-8 mt-8">
                {submitSuccess ? (<div className="text-center py-8"><h3 className="text-2xl font-bold mb-4" style={{ background: 'linear-gradient(90deg, #39A9E0, #8BC53F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', display: 'inline-block' }}>Application Submitted!</h3><p className="text-gray-700 mb-6">Thank you... We will review your application and contact you soon.</p><button onClick={() => setSubmitSuccess(false)} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1">Submit Another Application</button></div>
                ) : (<form className="space-y-6" onSubmit={handleSubmit}>{formError && (<div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"><p>{formError}</p></div>)} <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label><input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required/></div><div><label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label><input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required /></div></div> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required /></div><div><label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required /></div></div> <div><label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label><select id="position" name="position" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required><option value="">Please select a position</option>{careers.map((career, index) => (<option key={index} value={career.title}>{career.title}</option>))}<option value="Other">Other (Please specify in message)</option></select></div> <div><label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label><input type="file" id="resume" name="resume" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" required /></div> <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us more</label><textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent" placeholder="Tell us about your experience, qualifications, and why you're interested..."></textarea></div> <div className="flex justify-center"><button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1 disabled:opacity-70" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Details'}</button></div></form>)}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
} 