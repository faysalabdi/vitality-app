'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  isFixed?: boolean;
}

const Header = ({ isFixed = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  // Header classes with solid blue background, no shadow
  const headerClasses = `w-full relative z-50 ${isFixed ? 'fixed top-0 left-0 right-0' : ''} transition-colors duration-300 bg-[#39A9E0]`;
  const textClasses = 'text-white';
  const iconColorClasses = 'text-white';
  const hoverTextClasses = 'hover:text-gray-200';
  const hoverBrandGreenClasses = 'hover:text-gray-200';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        {/* Logo and main nav - Reduced vertical padding to py-1 */}
        <div className="flex justify-between items-center py-1">
          <Link href="/">
            <div className="relative h-14 w-44">
              <Image 
                src="/images/logo.png" 
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
              className="text-white hover:text-brand-blue"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center font-sans text-lg">
              <li><Link href="/" className={`font-medium ${pathname === '/' ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>Home</Link></li>
              <li><Link href="/about-us" className={`font-medium ${pathname === '/about-us' ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>About Us</Link></li>
              
              {/* Services Dropdown (Simplified & Highlighted) */}
              <li className="relative group">
                <Link href="/services" className={`font-medium flex items-center ${pathname.startsWith('/services') ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>
                  Services
                  <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
                  {/* Simplified dropdown content */}
                  <ul className="bg-white shadow-lg rounded-md p-3 z-10 min-w-52">
                    <li className="py-1">
                      <Link href="/services/ndis" className="text-gray-700 hover:text-brand-blue block">
                        NDIS
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/aged-care" className="text-gray-700 hover:text-brand-blue block">
                        Aged Care
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/services/allied-health" className="text-gray-700 hover:text-brand-blue block">
                        Allied Health
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li><Link href="/services/supported-living" className={`font-medium ${pathname === '/services/supported-living' ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>Supported Living</Link></li>
              <li><Link href="/careers" className={`font-medium ${pathname === '/careers' ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>Career</Link></li>
              <li><Link href="/referral" className={`font-medium ${pathname === '/referral' ? 'text-blue-800' : 'text-white hover:text-brand-green'}`}>Referral</Link></li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="bg-white text-[#39A9E0] hover:bg-gray-100 font-medium px-4 py-2 rounded-md transition-colors duration-300 text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white w-full absolute z-40 shadow-lg transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li><Link href="/" className={`font-medium block py-2 ${pathname === '/' ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>Home</Link></li>
            <li><Link href="/about-us" className={`font-medium block py-2 ${pathname === '/about-us' ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>About Us</Link></li>
            
            {/* Mobile Services Section (Simplified & Highlighted) */}
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between py-2">
                  <Link href="/services" className={`font-medium ${pathname.startsWith('/services') ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>Services</Link>
                  <button 
                    onClick={toggleServicesMenu}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${mobileServicesOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                </div>
                {/* Simplified mobile dropdown content */}
                <ul className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <li>
                     <Link href="/services/ndis" className="text-gray-700 hover:text-brand-blue block py-1">NDIS</Link>
                  </li>
                  <li>
                    <Link href="/services/aged-care" className="text-gray-700 hover:text-brand-blue block py-1">Aged Care</Link>
                  </li>
                  <li>
                    <Link href="/services/allied-health" className="text-gray-700 hover:text-brand-blue block py-1">Allied Health</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li><Link href="/services/supported-living" className={`font-medium block py-2 ${pathname === '/services/supported-living' ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>Supported Living</Link></li>
            <li><Link href="/careers" className={`font-medium block py-2 ${pathname === '/careers' ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>Career</Link></li>
            <li><Link href="/referral" className={`font-medium block py-2 ${pathname === '/referral' ? 'text-blue-800' : 'text-gray-700 hover:text-brand-green'}`}>Referral</Link></li>
            <li>
              <Link 
                href="/contact-us" 
                className="bg-[#39A9E0] text-white hover:bg-brand-blue font-medium px-4 py-2 rounded-md transition-colors duration-300 inline-block mt-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 