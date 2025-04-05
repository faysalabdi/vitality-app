import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vitality Community Care',
  description: 'Vitality Community Care privacy policy. Learn about how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <Image 
          src="/pwd-support.png" 
          alt="Privacy Policy - Vitality Community Care" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Privacy Policy
            </h1>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Your Privacy Matters
            </h2>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Vitality Community Care is committed to protecting your privacy and maintaining the security of any personal information received from you. We strictly adhere to the requirements of the privacy legislation in Australia, including the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
              </p>
              <p className="text-gray-600">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you engage with our services, visit our website, or interact with us in any way.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Information you provide directly to us when you engage with our services, such as your name, address, contact details, date of birth, and health information</li>
                <li>Information about your service preferences and needs</li>
                <li>Information from third parties, such as referrals from healthcare professionals or other service providers</li>
                <li>Information collected through our website, including cookies and analytics data</li>
              </ul>
              <p className="text-gray-600">
                We only collect personal information that is necessary for our functions and activities as a care provider.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>To provide and maintain our services</li>
                <li>To process and fulfill your service requests</li>
                <li>To communicate with you about your services, including appointments and changes</li>
                <li>To improve our services and develop new ones</li>
                <li>To comply with legal obligations, such as reporting requirements</li>
                <li>To resolve disputes and troubleshoot problems</li>
                <li>For billing and administration purposes</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may disclose your personal information to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Our staff and contractors who need the information to perform their roles</li>
                <li>Third-party service providers who assist us in operating our services</li>
                <li>Healthcare professionals involved in your care</li>
                <li>Government departments and agencies where required by law</li>
                <li>Emergency services in case of an emergency</li>
              </ul>
              <p className="text-gray-600">
                We will not sell, rent, or trade your personal information to any third party for marketing purposes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
              <p className="text-gray-600">
                While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your information where appropriate</li>
                <li>Object to or restrict the processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="text-gray-600">
                <p><strong>Vitality Community Care</strong></p>
                <p>Email: privacy@vitalitycommunitycare.com.au</p>
                <p>Phone: 1300 395 852</p>
                <p>Address: Melbourne, Victoria 3000, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/disability-support-services-sm2.png" 
            alt="Contact Vitality Community Care" 
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#39A9E0]/90 to-[#8BC53F]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About Our Privacy Policy?</h2>
            <p className="text-lg mb-8">
              Our team is here to help. Get in touch with us if you need further clarification.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#39A9E0] hover:shadow-lg transition duration-300 hover:-translate-y-1"
            >
              Contact Us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 