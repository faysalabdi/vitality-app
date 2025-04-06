'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ReferralPage() {
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
              Connect People with Care
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              Submit participant details to connect them with our personalized support services
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
              <form className="space-y-6">
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
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerOrganization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        id="referrerOrganization"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Your organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="referrerEmail"
                        type="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        id="referrerPhone"
                        type="tel"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
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
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantDOB" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                      <input
                        id="participantDOB"
                        type="date"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantEmail" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="participantEmail"
                        type="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="participant@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="participantPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        id="participantPhone"
                        type="tel"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's phone number"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="participantAddress" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        id="participantAddress"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="Participant's address"
                      />
                    </div>
                    <div>
                      <label htmlFor="ndisNumber" className="block text-sm font-medium text-gray-700 mb-1">NDIS Number</label>
                      <input
                        id="ndisNumber"
                        type="text"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                        placeholder="NDIS Number if applicable"
                      />
                    </div>
                    <div>
                      <label htmlFor="fundingType" className="block text-sm font-medium text-gray-700 mb-1">Funding Type</label>
                      <select
                        id="fundingType"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
                      >
                        <option value="">Select funding type</option>
                        <option value="ndis">NDIS</option>
                        <option value="medicare">Medicare</option>
                        <option value="private">Private</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Service Needs */}
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
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
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
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#39A9E0] focus:ring-[#39A9E0]"
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
                        type="checkbox"
                        className="h-4 w-4 text-[#39A9E0] border-gray-300 rounded focus:ring-[#39A9E0]"
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
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1"
                  >
                    Submit Referral
                    <FaArrowRight className="ml-2 h-4 w-4" />
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