'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      setIsSubmitting(false);
      setFormSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact information */}
            <div className="bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] p-8 md:p-10 text-white md:w-2/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Your Custom Care Plan, Contact Us Today!</h2>
              
              <div className="space-y-6 mt-8">
                <div>
                  <p className="text-white/80 mb-1">Email us at</p>
                  <a href="mailto:faysalrulz123@gmail.com" className="text-white hover:underline block font-medium">
                  contact@vitalitycommunitycare.com.au
                  </a>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Call us at</p>
                  <a href="tel:1300395852" className="text-white hover:underline block font-medium">
                    1300 395 852
                  </a>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Visit us at</p>
                  <address className="text-white not-italic">
                    Melbourne, Victoria
                  </address>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Operating hours</p>
                  <p className="text-white">Mon to Sat: 9AM to 5PM</p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-8 md:p-10 md:w-3/5">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's create a personalised care plan for you</h3>
              <p className="text-gray-600 mb-6">Get in touch with us to discuss how we can support you with a care plan tailored just for you!</p>
              
              {formSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md flex items-center mb-6">
                  <span className="mr-2">✓</span>
                  Thank you for your message! We'll be in touch soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Your Phone Number" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  >
                    <option value="" disabled>Select Service:</option>
                    <option value="ndis">NDIS Support</option>
                    <option value="aged-care">Aged Care</option>
                    <option value="allied-health">Allied Health</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <select 
                    name="location" 
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  >
                    <option value="" disabled>Your Location:</option>
                    <option value="VIC">VIC</option>
                    <option value="NSW">NSW</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                  </select>
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#39A9E0] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#39A9E0] hover:bg-[#2d8ac0] text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Get Tailored Care Today</span>
                      <FaPaperPlane className="ml-2" size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 