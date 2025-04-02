'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
};

const serviceOptions = [
  'Daily Living Support',
  'Community Participation',
  'Accommodation',
  'Transport',
  'Support Coordination',
  'Cleaning',
  'Early Childhood',
  'Home Care Package',
  'CHSP',
  'Private Care',
  'Physiotherapy',
  'Behaviour Support',
  'Psychology',
  'Rehabilitation Counselling',
  'Dietitian',
  'Other'
];

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
      // In a real implementation, you would send this data to your server or a form service
      // For demonstration, we're simulating a successful submission
      console.log('Form data:', data);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>
        
        <div>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            {...register('phone', { required: true })}
          />
          {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
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
          <select
            className={`w-full p-3 border rounded-md bg-white ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            {...register('service', { required: true })}
            defaultValue=""
          >
            <option value="" disabled>Select Service:</option>
            {serviceOptions.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <span className="text-red-500 text-sm">Please select a service</span>}
        </div>
        
        <div>
          <select
            className={`w-full p-3 border rounded-md bg-white ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
            {...register('location', { required: true })}
            defaultValue=""
          >
            <option value="" disabled>Your Location:</option>
            {locationOptions.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          {errors.location && <span className="text-red-500 text-sm">Please select your location</span>}
        </div>
        
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className={`w-full p-3 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300 disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Your Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 