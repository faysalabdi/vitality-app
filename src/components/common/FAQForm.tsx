'use client';

import { useState } from 'react';

export default function FAQForm() {
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
      const formDataObj = Object.fromEntries(formData.entries());

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formDataObj,
          formType: 'FAQ Question', // Identify form source
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send question');
      }

      setSubmitSuccess(true);
      formElement.reset();
    } catch (error: any) {
      setFormError(error.message || 'There was a problem submitting your question. Please try again.');
      console.error('FAQ Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-bold mb-4" style={{ 
          background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block'
        }}>Question Submitted!</h3>
        <p className="text-gray-700 mb-6">Thank you for your question. We will get back to you shortly.</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1"
        >
          Ask Another Question
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {formError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p>{formError}</p>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
          required
        />
      </div>

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
        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Your Question</label>
        <textarea
          id="question"
          name="question"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg transition duration-300 hover:-translate-y-1 disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Your Question'}
        </button>
      </div>
    </form>
  );
} 