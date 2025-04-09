'use client';

import { useState, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    try {
      const formData = new FormData(e.currentTarget);
      const formDataObj = Object.fromEntries(formData.entries());

      // TODO: Add file handling if needed for referral documents

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formDataObj,
          formType: 'Referral', // Identify form source
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit referral');
      }

      setSubmitSuccess(true);
      formRef.current?.reset();
      
    } catch (error: any) {
      setFormError(error.message || 'There was a problem submitting your referral. Please try again.');
      console.error('Referral Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8 bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-green-600">Referral Submitted Successfully!</h3>
        <p className="text-gray-700 mb-6">Thank you for submitting the referral. Our team will review the details and be in touch shortly.</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1"
        >
          Make Another Referral
        </button>
      </div>
    );
  }

  // Define consistent input styles
  const inputStyles = "w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      {formError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{formError}</p>
        </div>
      )}

      {/* Referrer Information */}
      <fieldset className="space-y-4">
        <legend className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Referrer Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input id="referrerName" name="referrerName" type="text" required className={inputStyles} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="referrerOrganization" className="block text-sm font-medium text-gray-700 mb-1">Organization (Optional)</label>
            <input id="referrerOrganization" name="referrerOrganization" type="text" className={inputStyles} placeholder="Your organization" />
          </div>
          <div>
            <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input id="referrerEmail" name="referrerEmail" type="email" required className={inputStyles} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input id="referrerPhone" name="referrerPhone" type="tel" required className={inputStyles} placeholder="Your phone number" />
          </div>
        </div>
      </fieldset>

      {/* Participant Information */}
      <fieldset className="space-y-4 pt-4 border-t">
        <legend className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Participant Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="participantName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input id="participantName" name="participantName" type="text" required className={inputStyles} placeholder="Participant's full name" />
          </div>
          <div>
            <label htmlFor="participantDOB" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
            <input id="participantDOB" name="participantDOB" type="date" required className={inputStyles} />
          </div>
          <div>
            <label htmlFor="participantEmail" className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
            <input id="participantEmail" name="participantEmail" type="email" className={inputStyles} placeholder="participant@example.com" />
          </div>
           <div>
            <label htmlFor="participantPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
            <input id="participantPhone" name="participantPhone" type="tel" className={inputStyles} placeholder="Participant's phone number" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="participantAddress" className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
            <input id="participantAddress" name="participantAddress" type="text" className={inputStyles} placeholder="Participant's address" />
          </div>
          <div>
            <label htmlFor="ndisNumber" className="block text-sm font-medium text-gray-700 mb-1">NDIS Number (Optional)</label>
            <input id="ndisNumber" name="ndisNumber" type="text" className={inputStyles} placeholder="NDIS Number if applicable" />
          </div>
        </div>
      </fieldset>

      {/* Service Needs */}
      <fieldset className="space-y-4 pt-4 border-t">
        <legend className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Service Needs</legend>
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Service Type Required *</label>
          <select id="serviceType" name="serviceType" required className={inputStyles}>
            <option value="">Select service type...</option>
            <option value="ndis-daily-living">NDIS - Daily Living Support</option>
            <option value="ndis-community">NDIS - Community Participation</option>
            <option value="ndis-accommodation">NDIS - Accommodation</option>
            <option value="ndis-transport">NDIS - Transport</option>
            <option value="ndis-coordination">NDIS - Support Coordination</option>
            <option value="ndis-cleaning">NDIS - Cleaning</option>
            <option value="ndis-early-childhood">NDIS - Early Childhood</option>
            <option value="aged-care-hcp">Aged Care - Home Care Package</option>
            <option value="aged-care-chsp">Aged Care - CHSP</option>
            <option value="aged-care-private">Aged Care - Private Care</option>
            <option value="allied-physio">Allied Health - Physiotherapy</option>
            <option value="allied-behaviour">Allied Health - Behaviour Support</option>
            <option value="allied-psychology">Allied Health - Psychology</option>
            <option value="allied-rehab">Allied Health - Rehabilitation Counsellor</option>
            <option value="allied-dietitian">Allied Health - Dietitian</option>
            <option value="other">Other (Please specify below)</option>
          </select>
        </div>
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information / Reason for Referral *</label>
          <textarea id="additionalInfo" name="additionalInfo" rows={4} required className={inputStyles} placeholder="Please provide details about the participant's needs, goals, or reason for referral."></textarea>
        </div>
      </fieldset>

      {/* Consent */}
      <fieldset className="pt-4 border-t">
         <legend className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Consent</legend>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="consent" name="consent" type="checkbox" required className="h-4 w-4 text-[#39A9E0] border-gray-300 rounded bg-white focus:ring-[#39A9E0] focus:ring-offset-0" />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="font-medium text-gray-700">Consent to Share Information *</label>
            <p className="text-gray-500">I confirm that I have the participant's (or their legal guardian's) consent to share their information with Vitality Community Care for the purpose of this referral and potential service provision.</p>
          </div>
        </div>
      </fieldset>

      <div className="flex justify-end pt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting Referral...' : (
            <>
              Submit Referral
              <FaArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
} 