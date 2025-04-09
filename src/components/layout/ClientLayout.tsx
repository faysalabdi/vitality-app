'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import { usePathname } from 'next/navigation'; // No longer needed for padding

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // const pathname = usePathname(); // No longer needed
  // const isHomePage = pathname === '/'; // No longer needed

  return (
    <>
      <Header isFixed={false} /> {/* Set isFixed to false */}
      {/* Added top padding to account for non-fixed header height */}
      <main className={`min-h-screen bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] pt-28`}>
        {children}
      </main>
      <Footer />
    </>
  );
} 