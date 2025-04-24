
import Link from 'next/link';
import { FaHeartbeat, FaExchangeAlt, FaClipboardList, FaQuestionCircle } from 'react-icons/fa';

export const QuickNav = () => {
  return (
    <div className="bg-white py-4 shadow-lg rounded-lg -mt-8 relative z-10 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/services" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded transition">
          <FaHeartbeat className="text-[#39A9E0] text-3xl mb-2" />
          <span className="text-sm font-medium text-gray-700">Our Services</span>
        </Link>
        <Link href="/referral" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded transition">
          <FaExchangeAlt className="text-[#39A9E0] text-3xl mb-2" />
          <span className="text-sm font-medium text-gray-700">Make a Referral</span>
        </Link>
        <Link href="/contact-us" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded transition">
          <FaClipboardList className="text-[#39A9E0] text-3xl mb-2" />
          <span className="text-sm font-medium text-gray-700">Contact Us</span>
        </Link>
        <Link href="/faq" className="flex flex-col items-center p-4 hover:bg-gray-50 rounded transition">
          <FaQuestionCircle className="text-[#39A9E0] text-3xl mb-2" />
          <span className="text-sm font-medium text-gray-700">FAQ</span>
        </Link>
      </div>
    </div>
  );
};
