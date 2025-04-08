'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
};

const locationOptions = ['VIC', 'NSW', 'QLD', 'SA', 'WA'];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitSuccess(false);
      setErrorMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Have an Enquiry?</h3>
      <p className="text-gray-600 mb-6">Don't hesitate to reach out. We're always here to listen and help you with what you need.</p>
      
      {submitSuccess === true && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}
      
      {submitSuccess === false && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded-md bg-white text-gray-800 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className={`w-full p-3 border rounded-md bg-white text-gray-800 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            {...register('phone', { required: true })}
          />
          {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md bg-white text-gray-800 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email', { 
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            })}
          />
          {errors.email?.type === 'required' && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="text-red-500 text-sm">Please enter a valid email</span>
          )}
        </div>
        
        <div>
          <div className="mb-2 text-gray-800">Your Location:</div>
          <div className="flex flex-wrap gap-4">
            {locationOptions.map((location, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`location-${location}`}
                  value={location}
                  className="mr-2 h-4 w-4 accent-[#39A9E0]"
                  {...register('location', { required: true })}
                />
                <label htmlFor={`location-${location}`} className="text-gray-800">{location}</label>
              </div>
            ))}
          </div>
          {errors.location && <span className="text-red-500 text-sm">Please select your location</span>}
        </div>
        
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className={`w-full p-3 border rounded-md bg-white text-gray-800 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] hover:shadow-lg text-white font-semibold py-3 px-4 rounded-md transition duration-300 disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Your Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 