'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      // Get form data
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      // Handle resume file
      const resumeFile = (formElement.querySelector('#resume') as HTMLInputElement).files?.[0];
      let resumeBase64 = '';
      let resumeFileName = '';
      
      if (resumeFile) {
        resumeFileName = resumeFile.name;
        resumeBase64 = await convertFileToBase64(resumeFile);
      }
      
      // Convert form data to object
      const formDataObj = Object.fromEntries(formData.entries());
      
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formDataObj,
          resumeFileName,
          resumeBase64,
          isCareerApplication: true, // Flag to identify this is a career application
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setSubmitSuccess(true);
      formElement.reset();
    } catch (error) {
      setFormError('There was a problem submitting your application. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Convert file to base64 for sending in JSON
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const careers = [
    {
      title: "Support Worker",
      description: "Join our team of dedicated support workers providing direct care and assistance to our clients. We're looking for compassionate individuals who are committed to enhancing the independence and quality of life of the people we support.",
      requirements: ["Certificate III in Individual Support or equivalent", "Valid driver's license", "NDIS Worker Screening Check", "First Aid and CPR certification"],
      color: "#39A9E0"
    },
    {
      title: "Allied Health Professional",
      description: "We're seeking qualified allied health professionals to join our multidisciplinary team. You'll have the opportunity to make a meaningful difference in the lives of our clients through evidence-based interventions and person-centered care.",
      requirements: ["Relevant degree qualification", "AHPRA registration (if applicable)", "Experience working with people with disabilities", "Strong communication skills"],
      color: "#8BC53F"
    },
    {
      title: "Support Coordinator",
      description: "Help our clients navigate the NDIS and connect with appropriate services. This role requires excellent knowledge of the NDIS and strong relationship-building skills.",
      requirements: ["Experience in NDIS support coordination", "Knowledge of local service providers", "Strong organizational skills", "Problem-solving abilities"],
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
              Join Our Team
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
              Make a Difference
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              At Vitality Community Care, we're looking for passionate individuals who share our commitment to providing high-quality, person-centered care.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Work With Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              Vitality Community Care is more than just a workplace – it's a community of dedicated professionals who are passionate about making a positive difference in people's lives.
            </p>
            <p className="text-lg text-gray-600">
              We offer competitive salaries, ongoing professional development, flexible working arrangements, and a supportive team environment. Most importantly, we offer the opportunity to do meaningful work that truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Current Opportunities</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {careers.map((career, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <div className="p-8" style={{ borderLeft: `4px solid ${career.color}` }}>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: career.color }}>{career.title}</h3>
                  <p className="text-gray-600 mb-6">{career.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 mb-6 text-gray-600">
                    {career.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="#application-form" 
                    className="inline-flex items-center font-medium"
                    style={{ color: career.color }}
                  >
                    Apply for this Position <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Work With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Meaningful Work</h3>
              <p className="text-gray-600 text-center">
                Make a real difference in people's lives every day with work that is truly meaningful and rewarding.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #8BC53F' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Professional Growth</h3>
              <p className="text-gray-600 text-center">
                Access ongoing training, mentoring, and career development opportunities to help you grow professionally.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2" style={{ borderTop: '4px solid #39A9E0' }}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Supportive Team</h3>
              <p className="text-gray-600 text-center">
                Join a team that values collaboration, respect, and mutual support in achieving our shared mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/friends-having-fun-together.jpg" 
            alt="Join Vitality Community Care Team" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-lg mb-8">
              We're always looking for talented and passionate individuals. Fill out the application form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Submit Your Application Today</h2>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-8 mt-8">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Application Submitted!</h3>
                  <p className="text-gray-700 mb-6">Thank you for your interest in joining Vitality Community Care. We will review your application and contact you soon.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {formError && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <p className="text-red-700">{formError}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                    <select
                      id="position"
                      name="position"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                      required
                    >
                      <option value="">Please select a position</option>
                      {careers.map((career, index) => (
                        <option key={index} value={career.title}>{career.title}</option>
                      ))}
                      <option value="Other">Other (Please specify in message)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tell us more</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                      placeholder="Tell us about your experience, qualifications, and why you're interested in joining our team."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1 disabled:opacity-70"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Details'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 