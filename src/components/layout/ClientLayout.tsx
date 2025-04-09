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
      {/* Removed top padding as HeroIntroSection is now the first element */}
      <main className={`min-h-screen bg-[#39A9E0]`}>
        {children}
      </main>
      <Footer />
    </>
  );
} 