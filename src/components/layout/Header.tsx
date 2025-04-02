'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 border-b">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <span className="text-blue-700 mr-2">
                <FaPhone size={16} />
              </span>
              <a href="tel:1300395852" className="text-gray-700 hover:text-blue-600">1300 395 852</a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-700 mr-2">
                <FaEnvelope size={16} />
              </span>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="text-gray-700 hover:text-blue-600">contact@vitalitycommunitycare.com.au</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium">Career</Link>
            <Link href="/referral" className="text-gray-700 hover:text-blue-600 font-medium">Referral</Link>
          </div>
        </div>

        {/* Logo and main nav */}
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="relative h-16 w-48">
              <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl font-bold text-blue-700">Vitality</h1>
                <p className="text-sm text-gray-600">Community Care</p>
              </div>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link></li>
              <li className="relative group">
                <Link href="/ndis" className="text-gray-700 hover:text-blue-600 font-medium">NDIS</Link>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 z-10 min-w-48 mt-2">
                  <li className="py-1"><Link href="/ndis/daily-living" className="text-gray-700 hover:text-blue-600 block">Daily Living</Link></li>
                  <li className="py-1"><Link href="/ndis/community-participation" className="text-gray-700 hover:text-blue-600 block">Community Participation</Link></li>
                  <li className="py-1 relative group/sub">
                    <Link href="/ndis/accommodation" className="text-gray-700 hover:text-blue-600 block">Accommodation</Link>
                    <ul className="absolute hidden group-hover/sub:block left-full top-0 bg-white shadow-lg rounded-md p-4 z-10 min-w-48">
                      <li className="py-1"><Link href="/ndis/accommodation/sil" className="text-gray-700 hover:text-blue-600 block">Supported Independent Living (SIL)</Link></li>
                      <li className="py-1"><Link href="/ndis/accommodation/respite-care" className="text-gray-700 hover:text-blue-600 block">Respite Care / STA</Link></li>
                    </ul>
                  </li>
                  <li className="py-1"><Link href="/ndis/transport" className="text-gray-700 hover:text-blue-600 block">Transport</Link></li>
                  <li className="py-1"><Link href="/ndis/support-coordination" className="text-gray-700 hover:text-blue-600 block">Support Coordination</Link></li>
                  <li className="py-1"><Link href="/ndis/cleaning" className="text-gray-700 hover:text-blue-600 block">Cleaning</Link></li>
                  <li className="py-1"><Link href="/ndis/early-childhood" className="text-gray-700 hover:text-blue-600 block">Early Childhood</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <Link href="/aged-care" className="text-gray-700 hover:text-blue-600 font-medium">Aged Care</Link>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 z-10 min-w-48 mt-2">
                  <li className="py-1"><Link href="/aged-care/home-care-package" className="text-gray-700 hover:text-blue-600 block">Home Care Package</Link></li>
                  <li className="py-1"><Link href="/aged-care/chsp" className="text-gray-700 hover:text-blue-600 block">CHSP</Link></li>
                  <li className="py-1"><Link href="/aged-care/private-care" className="text-gray-700 hover:text-blue-600 block">Private Care</Link></li>
                </ul>
              </li>
              <li className="relative group">
                <Link href="/allied-health" className="text-gray-700 hover:text-blue-600 font-medium">Allied Health</Link>
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 z-10 min-w-48 mt-2">
                  <li className="py-1"><Link href="/allied-health/physiotherapy" className="text-gray-700 hover:text-blue-600 block">Physiotherapy</Link></li>
                  <li className="py-1"><Link href="/allied-health/behaviour-support" className="text-gray-700 hover:text-blue-600 block">Behaviour Support</Link></li>
                  <li className="py-1"><Link href="/allied-health/psychology" className="text-gray-700 hover:text-blue-600 block">Psychology</Link></li>
                  <li className="py-1"><Link href="/allied-health/rehabilitation-counsellor" className="text-gray-700 hover:text-blue-600 block">Rehabilitation Counsellor</Link></li>
                  <li className="py-1"><Link href="/allied-health/dietitian" className="text-gray-700 hover:text-blue-600 block">Dietitian</Link></li>
                </ul>
              </li>
              <li><Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white w-full absolute z-20 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-medium block py-2">Home</Link></li>
            <li><Link href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium block py-2">About Us</Link></li>
            <li>
              <div className="flex flex-col">
                <Link href="/ndis" className="text-gray-700 hover:text-blue-600 font-medium block py-2">NDIS</Link>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/ndis/daily-living" className="text-gray-700 hover:text-blue-600 block py-1">Daily Living</Link></li>
                  <li><Link href="/ndis/community-participation" className="text-gray-700 hover:text-blue-600 block py-1">Community Participation</Link></li>
                  <li>
                    <div className="flex flex-col">
                      <Link href="/ndis/accommodation" className="text-gray-700 hover:text-blue-600 block py-1">Accommodation</Link>
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><Link href="/ndis/accommodation/sil" className="text-gray-700 hover:text-blue-600 block py-1">Supported Independent Living (SIL)</Link></li>
                        <li><Link href="/ndis/accommodation/respite-care" className="text-gray-700 hover:text-blue-600 block py-1">Respite Care / STA</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li><Link href="/ndis/transport" className="text-gray-700 hover:text-blue-600 block py-1">Transport</Link></li>
                  <li><Link href="/ndis/support-coordination" className="text-gray-700 hover:text-blue-600 block py-1">Support Coordination</Link></li>
                  <li><Link href="/ndis/cleaning" className="text-gray-700 hover:text-blue-600 block py-1">Cleaning</Link></li>
                  <li><Link href="/ndis/early-childhood" className="text-gray-700 hover:text-blue-600 block py-1">Early Childhood</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <Link href="/aged-care" className="text-gray-700 hover:text-blue-600 font-medium block py-2">Aged Care</Link>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/aged-care/home-care-package" className="text-gray-700 hover:text-blue-600 block py-1">Home Care Package</Link></li>
                  <li><Link href="/aged-care/chsp" className="text-gray-700 hover:text-blue-600 block py-1">CHSP</Link></li>
                  <li><Link href="/aged-care/private-care" className="text-gray-700 hover:text-blue-600 block py-1">Private Care</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <Link href="/allied-health" className="text-gray-700 hover:text-blue-600 font-medium block py-2">Allied Health</Link>
                <ul className="pl-4 mt-2 space-y-2">
                  <li><Link href="/allied-health/physiotherapy" className="text-gray-700 hover:text-blue-600 block py-1">Physiotherapy</Link></li>
                  <li><Link href="/allied-health/behaviour-support" className="text-gray-700 hover:text-blue-600 block py-1">Behaviour Support</Link></li>
                  <li><Link href="/allied-health/psychology" className="text-gray-700 hover:text-blue-600 block py-1">Psychology</Link></li>
                  <li><Link href="/allied-health/rehabilitation-counsellor" className="text-gray-700 hover:text-blue-600 block py-1">Rehabilitation Counsellor</Link></li>
                  <li><Link href="/allied-health/dietitian" className="text-gray-700 hover:text-blue-600 block py-1">Dietitian</Link></li>
                </ul>
              </div>
            </li>
            <li><Link href="/contact-us" className="text-gray-700 hover:text-blue-600 font-medium block py-2">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 