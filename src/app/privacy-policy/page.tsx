import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '@/components/common/AnimatedSection';

export const metadata: Metadata = {
  title: 'Privacy & Dignity Policy | Vitality Community Care',
  description: 'Vitality Community Care privacy and dignity policy. Learn how we respect and protect your dignity, privacy, and personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Privacy & Dignity Policy
            </h1>
            <h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(90deg, #39A9E0, #8BC53F)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Your Privacy, Dignity, and Rights Matter
            </h2>
            <p className="text-gray-600 text-lg mb-0 max-w-3xl mx-auto">
              Privacy and Dignity: A Commitment to Safeguarding Your Personal Information and Upholding Your Individual Rights.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content - Replaced with content from the live site */} 
      <AnimatedSection variantType="fadeInUp">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose lg:prose-lg text-gray-700">
              {/* Using prose class for better text formatting */}
              <p className="lead text-lg text-center mb-8">
                Vitality Community Care is committed to implementing a system to ensure each participant will receive quality services and supports that respect and protect their dignity and right to privacy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Vitality Community Care Ensures:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Consistent processes and practices are in place that respect and protect the personal privacy and dignity of each participant.</li>
                <li>Each participant is advised of confidentiality policies using the language, mode of communication, and terms that the participant is most likely to understand.</li>
                <li>Each participant understands and agrees to what personal information will be collected and the reason, including recorded material in audio and/or visual format.</li>
              </ul>

              <p>
                At Vitality Community Care, we will ensure each participant will receive quality services and support that respect and protect their dignity and right to privacy by complying with the 'Privacy Act 1988' and the 'NDIS Quality and Safeguarding Framework requirements and other legal obligations.
              </p>

              <p>
                To ensure privacy for the Participant when discussing sensitive or personal matters, Vitality Community Care will only collect personal information that is necessary for the provision of services and support and given voluntarily to the Provider.
              </p>

              <p>
                'Privacy & Confidentiality Policy' and 'Participant Consent Policy' have been documented in the 'Participant Handbook' and will be communicated with each participant during the initial assessment process.
              </p>

              <p>
                Vitality Community Care will make sure that each participant understands and acknowledges what type of personal information, including recorded material in audio and/or visual format will be collected and for what reason.
              </p>
              
              <p>
                All personal and confidential information will only be collected, used, retained, and disclosed by obtaining the Participant's consent. Please refer to the 'Privacy & Confidentiality Policy' in this 'Participant Handbook'.
              </p>

              <p>
                Vitality Community Care will provide an interpreter if required for communication with the participant and respect to work with the participant's interpreter or representatives. Regular communications with participants have been planned and performed in a way that is identified during the initial assessment process and documented in the 'Initial Assessment & Support Plan'.
              </p>

              <p>
                Participants' dignity and right to privacy are also referred to in the 'Service Agreement'.
              </p>

              <p>
                A copy of the 'Service Agreement' and 'Participant Handbook' will be provided to each participant.
              </p>

              <p>
                Employees and workers are trained and inducted regarding the privacy and dignity policy. They have read, understood, and acknowledged this policy as well as the organizational requirements outlined in the 'Worker Handbook' through the induction process.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section - Kept similar to existing */}
      <AnimatedSection variantType="fadeInUp" delay={0.2}>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About Our Privacy & Dignity Policy?</h2>
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
      </AnimatedSection>
    </div>
  );
} 