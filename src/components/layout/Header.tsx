'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

interface HeaderProps {
  isFixed?: boolean;
}

const Header = ({ isFixed = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`w-full bg-white shadow-md relative z-50 ${isFixed ? 'fixed top-0 left-0 right-0' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex flex-col md:flex-row justify-between items-center py-1 border-b">
          <div className="flex items-center space-x-4 mb-1 md:mb-0">
            <div className="flex items-center">
              <span className="text-brand-blue mr-2">
                <FaPhone size={16} />
              </span>
              <a href="tel:1300395852" className="text-gray-700 hover:text-brand-blue">1300 395 852</a>
            </div>
            <div className="flex items-center">
              <span className="text-brand-blue mr-2">
                <FaEnvelope size={16} />
              </span>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="text-gray-700 hover:text-brand-blue">contact@vitalitycommunitycare.com.au</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="/careers" className="text-gray-700 hover:text-brand-green font-medium">Career</Link>
            <Link href="/referral" className="text-gray-700 hover:text-brand-green font-medium">Referral</Link>
          </div>
        </div>

        {/* Logo and main nav */}
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <div className="relative h-14 w-44">
              <Image 
                src="/new-logo.png" 
                alt="Vitality Community Care Logo" 
                width={176} 
                height={56} 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-brand-blue"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-brand-green font-medium">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-700 hover:text-brand-green font-medium">About Us</Link></li>
              <li className="relative group">
                <Link href="/ndis" className="text-gray-700 hover:text-brand-green font-medium flex items-center">
                  NDIS
                  <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full pt-3 group-hover:block hidden">
                  <ul className="bg-white shadow-lg rounded-md p-3 z-10 min-w-52">
                    <li className="py-1"><Link href="/ndis/daily-living" className="text-gray-700 hover:text-brand-blue block">Daily Living</Link></li>
                    <li className="py-1"><Link href="/ndis/community-participation" className="text-gray-700 hover:text-brand-blue block">Community Participation</Link></li>
                    <li className="py-1 relative group/sub">
                      <Link href="/ndis/accommodation" className="text-gray-700 hover:text-brand-blue block flex items-center justify-between">
                        Accommodation
                        <FaChevronDown className="ml-1 text-xs transform -rotate-90" />
                      </Link>
                      <div className="absolute left-full top-0 pl-2 hidden group-hover/sub:block">
                        <ul className="bg-white shadow-lg rounded-md p-3 z-10 min-w-52">
                          <li className="py-1"><Link href="/ndis/accommodation/sil" className="text-gray-700 hover:text-brand-blue block">Supported Independent Living (SIL)</Link></li>
                          <li className="py-1"><Link href="/ndis/accommodation/respite-care" className="text-gray-700 hover:text-brand-blue block">Respite Care / STA</Link></li>
                        </ul>
                      </div>
                    </li>
                    <li className="py-1"><Link href="/ndis/transport" className="text-gray-700 hover:text-brand-blue block">Transport</Link></li>
                    <li className="py-1"><Link href="/ndis/support-coordination" className="text-gray-700 hover:text-brand-blue block">Support Coordination</Link></li>
                    <li className="py-1"><Link href="/ndis/cleaning" className="text-gray-700 hover:text-brand-blue block">Cleaning</Link></li>
                    <li className="py-1"><Link href="/ndis/early-childhood" className="text-gray-700 hover:text-brand-blue block">Early Childhood</Link></li>
                  </ul>
                </div>
              </li>
              <li className="relative group">
                <Link href="/aged-care" className="text-gray-700 hover:text-brand-green font-medium flex items-center">
                  Aged Care
                  <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full pt-3 group-hover:block hidden">
                  <ul className="bg-white shadow-lg rounded-md p-3 z-10 min-w-52">
                    <li className="py-1"><Link href="/aged-care/home-care-package" className="text-gray-700 hover:text-brand-blue block">Home Care Package</Link></li>
                    <li className="py-1"><Link href="/aged-care/chsp" className="text-gray-700 hover:text-brand-blue block">CHSP</Link></li>
                    <li className="py-1"><Link href="/aged-care/private-care" className="text-gray-700 hover:text-brand-blue block">Private Care</Link></li>
                  </ul>
                </div>
              </li>
              <li className="relative group">
                <Link href="/allied-health" className="text-gray-700 hover:text-brand-green font-medium flex items-center">
                  Allied Health
                  <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full pt-3 group-hover:block hidden">
                  <ul className="bg-white shadow-lg rounded-md p-3 z-10 min-w-52">
                    <li className="py-1"><Link href="/allied-health/physiotherapy" className="text-gray-700 hover:text-brand-blue block">Physiotherapy</Link></li>
                    <li className="py-1"><Link href="/allied-health/behaviour-support" className="text-gray-700 hover:text-brand-blue block">Behaviour Support</Link></li>
                    <li className="py-1"><Link href="/allied-health/psychology" className="text-gray-700 hover:text-brand-blue block">Psychology</Link></li>
                    <li className="py-1"><Link href="/allied-health/rehabilitation-counsellor" className="text-gray-700 hover:text-brand-blue block">Rehabilitation Counsellor</Link></li>
                    <li className="py-1"><Link href="/allied-health/dietitian" className="text-gray-700 hover:text-brand-blue block">Dietitian</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/contact-us" className="text-gray-700 hover:text-brand-green font-medium">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white w-full absolute z-40 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-700 hover:text-brand-green font-medium block py-2">Home</Link></li>
            <li><Link href="/about-us" className="text-gray-700 hover:text-brand-green font-medium block py-2">About Us</Link></li>
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <Link href="/ndis" className="text-gray-700 hover:text-brand-green font-medium">NDIS</Link>
                  <FaChevronDown className="text-xs text-gray-600" />
                </div>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/ndis/daily-living" className="text-gray-700 hover:text-brand-blue block py-1">Daily Living</Link></li>
                  <li><Link href="/ndis/community-participation" className="text-gray-700 hover:text-brand-blue block py-1">Community Participation</Link></li>
                  <li>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between py-1">
                        <Link href="/ndis/accommodation" className="text-gray-700 hover:text-brand-blue">Accommodation</Link>
                        <FaChevronDown className="text-xs text-gray-600" />
                      </div>
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><Link href="/ndis/accommodation/sil" className="text-gray-700 hover:text-brand-blue block py-1">Supported Independent Living (SIL)</Link></li>
                        <li><Link href="/ndis/accommodation/respite-care" className="text-gray-700 hover:text-brand-blue block py-1">Respite Care / STA</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li><Link href="/ndis/transport" className="text-gray-700 hover:text-brand-blue block py-1">Transport</Link></li>
                  <li><Link href="/ndis/support-coordination" className="text-gray-700 hover:text-brand-blue block py-1">Support Coordination</Link></li>
                  <li><Link href="/ndis/cleaning" className="text-gray-700 hover:text-brand-blue block py-1">Cleaning</Link></li>
                  <li><Link href="/ndis/early-childhood" className="text-gray-700 hover:text-brand-blue block py-1">Early Childhood</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <Link href="/aged-care" className="text-gray-700 hover:text-brand-green font-medium">Aged Care</Link>
                  <FaChevronDown className="text-xs text-gray-600" />
                </div>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/aged-care/home-care-package" className="text-gray-700 hover:text-brand-blue block py-1">Home Care Package</Link></li>
                  <li><Link href="/aged-care/chsp" className="text-gray-700 hover:text-brand-blue block py-1">CHSP</Link></li>
                  <li><Link href="/aged-care/private-care" className="text-gray-700 hover:text-brand-blue block py-1">Private Care</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <Link href="/allied-health" className="text-gray-700 hover:text-brand-green font-medium">Allied Health</Link>
                  <FaChevronDown className="text-xs text-gray-600" />
                </div>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/allied-health/physiotherapy" className="text-gray-700 hover:text-brand-blue block py-1">Physiotherapy</Link></li>
                  <li><Link href="/allied-health/behaviour-support" className="text-gray-700 hover:text-brand-blue block py-1">Behaviour Support</Link></li>
                  <li><Link href="/allied-health/psychology" className="text-gray-700 hover:text-brand-blue block py-1">Psychology</Link></li>
                  <li><Link href="/allied-health/rehabilitation-counsellor" className="text-gray-700 hover:text-brand-blue block py-1">Rehabilitation Counsellor</Link></li>
                  <li><Link href="/allied-health/dietitian" className="text-gray-700 hover:text-brand-blue block py-1">Dietitian</Link></li>
                </ul>
              </div>
            </li>
            <li><Link href="/contact-us" className="text-gray-700 hover:text-brand-green font-medium block py-2">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 