import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const ReferralCTA = () => {
  return (
    <section 
      className="py-10 md:py-12 text-white"
      style={{ 
        background: "linear-gradient(90deg, #39A9E0, #8BC53F)" 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Ready to Refer?</h2>
            <p className="text-base md:text-lg opacity-90">Submit Participant Details Here.</p>
          </div>
          <Link 
            href="/referral" 
            className="bg-[#39A9E0] hover:bg-[#2d8ac0] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full shadow-lg transition duration-300 flex items-center"          >
            <span>Make a Referral</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}; 