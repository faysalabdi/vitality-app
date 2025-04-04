import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Mental Health Support",
      description: "Professional mental health services to improve wellbeing and quality of life.",
      icon: "✨",
      color: "#39A9E0"
    },
    {
      id: 2,
      title: "Disability Support",
      description: "Personalized assistance for individuals with disabilities to enhance independence.",
      icon: "♿",
      color: "#8BC53F"
    },
    {
      id: 3,
      title: "Community Participation",
      description: "Programs designed to increase social engagement and community connection.",
      icon: "👥",
      color: "#39A9E0"
    },
    {
      id: 4,
      title: "Daily Living Support",
      description: "Assistance with everyday tasks to maintain independence and comfort.",
      icon: "🏠",
      color: "#8BC53F"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive care services tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div 
                className="p-5 md:p-6 flex flex-col items-center text-center h-full"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <span className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</span>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link 
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="mt-auto inline-flex items-center text-sm font-medium"
                  style={{ color: service.color }}
                >
                  Learn More <FaArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 