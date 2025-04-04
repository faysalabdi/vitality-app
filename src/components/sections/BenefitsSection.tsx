import { FaCheck } from 'react-icons/fa';

export const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">The Vitality Difference</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Experience unparalleled care that goes beyond the basics. At Vitality Community Care, we treat every individual like family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-10">
          <div className="space-y-3 md:space-y-4">
            <ul className="space-y-2 md:space-y-3">
              {[
                "Personalized care plans tailored to individual needs",
                "Highly trained, compassionate caregivers you can trust",
                "Affordable pricing without compromising on quality",
                "Flexible scheduling to fit your family's needs",
                "A focus on mental well-being, not just physical",
                "Full transparency and open communication with families"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="h-5 w-5 text-brand-green mt-1 mr-3 flex-shrink-0" style={{ color: "#8BC53F" }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <ul className="space-y-2 md:space-y-3">
              {[
                "State-of-the-art technology for efficient healthcare",
                "A strong community focus for holistic care",
                "24/7 availability for peace of mind",
                "Family-owned with a strong community reputation",
                "Multi-disciplinary team for comprehensive care",
                "Culturally sensitive services for diverse needs"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="h-5 w-5 text-brand-blue mt-1 mr-3 flex-shrink-0" style={{ color: "#39A9E0" }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 