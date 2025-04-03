import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitality Community Care | NDIS & Aged Care Provider in Australia",
  description: "Vitality Community Care provides personalized NDIS, aged care, and allied health services in Australia. Compassionate support for daily living, community participation, and mental health services.",
  keywords: [
    "NDIS provider", 
    "aged care services", 
    "disability support", 
    "community care Australia", 
    "mental health services",
    "allied health professionals",
    "home care packages",
    "NDIS Melbourne",
    "daily living support",
    "community participation",
    "aged care Victoria",
    "disability support services"
  ],
  authors: [{ name: "Vitality Community Care" }],
  creator: "Vitality Community Care",
  publisher: "Vitality Community Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vitalitycommunitycare.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vitality Community Care | NDIS & Aged Care Provider",
    description: "Compassionate and personalized NDIS, aged care, and allied health services in Australia. Supporting individuals to live their best lives.",
    url: "https://vitalitycommunitycare.com.au",
    siteName: "Vitality Community Care",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg", // Replace with actual image once available
        width: 1200,
        height: 630,
        alt: "Vitality Community Care - Nurturing lives for a better tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitality Community Care | NDIS & Aged Care Provider",
    description: "Compassionate and personalized NDIS, aged care, and allied health services in Australia.",
    images: ["/images/twitter-image.jpg"], // Replace with actual image once available
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
