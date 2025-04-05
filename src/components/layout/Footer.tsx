import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Who We Are</h3>
            <p className="text-gray-300 mb-4">
              We Vitality Community Care are a holistic care provider offering personalized and compassionate care services to enhance lives and foster community wellness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-brand-blue transition">
                  Our Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-brand-blue transition">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-brand-blue transition">
                  Work With Us
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-gray-300 hover:text-brand-blue transition">
                  Make a Referral
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ndis" className="text-gray-300 hover:text-brand-blue transition">
                  NDIS
                </Link>
              </li>
              <li>
                <Link href="/services/ndis#accommodation" className="text-gray-300 hover:text-brand-blue transition">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link href="/services/aged-care" className="text-gray-300 hover:text-brand-blue transition">
                  Aged Care
                </Link>
              </li>
              <li>
                <Link href="/services/allied-health" className="text-gray-300 hover:text-brand-blue transition">
                  Allied Health
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-brand-green">Contact Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-brand-blue">
                  <FaMapMarkerAlt size={18} />
                </span>
                <span className="text-gray-300">Melbourne, BC V5W 2G9</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-blue">
                  <FaPhone size={18} />
                </span>
                <a href="tel:1300395852" className="text-gray-300 hover:text-brand-blue transition">
                  1300 395 852
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-blue">
                  <FaEnvelope size={18} />
                </span>
                <a href="mailto:contact@vitalitycommunitycare.com.au" className="text-gray-300 hover:text-brand-blue transition">
                  contact@vitalitycommunitycare.com.au
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-brand-blue">
                  <FaClock size={18} />
                </span>
                <span className="text-gray-300">Mon to Sat: 9AM to 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} All Rights Reserved by Vitality Community Care. ABN 15 651 918 651
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 