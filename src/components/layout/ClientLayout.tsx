'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <Header isFixed={true} />
      <main className={`min-h-screen bg-gradient-to-r from-[#39A9E0] to-[#8BC53F] ${isHomePage ? 'pt-0' : 'pt-[3rem]'}`}>
        {children}
      </main>
      <Footer />
    </>
  );
} 