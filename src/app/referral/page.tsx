'use client';

import Link from 'next/link';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

export default function ReferralPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Collect form data
      const formData = new FormData(e.currentTarget);
      const formDataObj = Object.fromEntries(formData.entries());
      
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formDataObj,
          isReferral: true, // Flag to identify this is a referral form
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setFormSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      e.currentTarget.reset();
      
      // Hide success message after some time
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Make a Referral
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
              We're Here to Support You
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              Complete the form below to refer someone to our services. We'll respond promptly to ensure they receive the care they need.
            </p>
          </div>
        </div>
      </section>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] py-6 px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Referral Form</h2>
              <p className="text-white mt-2">Please fill out the information below</p>
            </div>
            
            <div className="p-8">
              {formSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md flex items-center mb-6">
                  <span className="mr-2">✓</span>
                  Thank you for your referral! We'll be in touch soon.
                </div>
              )}
            
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Referrer Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Referrer Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="referrerName"
                        name="referrerName"
                        type="text"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerOrganization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        id="referrerOrganization"
                        name="referrerOrganization"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Your organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="referrerEmail"
                        name="referrerEmail"
                        type="email"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        id="referrerPhone"
                        name="referrerPhone"
                        type="tel"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Participant Information */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Participant Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="participantName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        id="participantName"
                        name="participantName"
                        type="text"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantDOB" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input
                        id="participantDOB"
                        name="participantDOB"
                        type="date"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="participantEmail"
                        name="participantEmail"
                        type="email"
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="participant@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        id="participantPhone"
                        name="participantPhone"
                        type="tel"
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's phone number"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="participantAddress" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        id="participantAddress"
                        name="participantAddress"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's address"
                      />
                    </div>
                    <div>
                      <label htmlFor="ndisNumber" className="block text-sm font-medium text-gray-700 mb-1">NDIS Number</label>
                      <input
                        id="ndisNumber"
                        name="ndisNumber"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="NDIS Number if applicable"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xl font-semibold mb-4" style={{ 
                    background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline-block'
                  }}>Service Needs</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type Required</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                      >
                        <option value="">Select service type</option>
                        <option value="daily-living">Daily Living Support</option>
                        <option value="community">Community Participation</option>
                        <option value="mental-health">Mental Health Support</option>
                        <option value="other">Other (please specify)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm bg-white text-gray-800 focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Please provide any additional details about the participant's needs, goals, or other relevant information"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#39A9E0] border-gray-300 rounded bg-white focus:ring-[#39A9E0]"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="font-medium text-gray-700">Consent to Share Information</label>
                      <p className="text-gray-500">I confirm that I have the participant's consent to share their information with Vitality Community Care for the purpose of service provision.</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <Link 
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition duration-300"
                  >
                    <FaArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Submitting...' : (
                      <>
                        Submit Referral
                        <FaArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 