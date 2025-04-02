import Link from 'next/link';

const serviceCategories = [
  {
    id: 1,
    title: 'Daily Living / Community Participation',
    gradientClass: 'bg-gradient-to-br from-blue-500 to-blue-700',
    url: '/ndis/daily-living',
  },
  {
    id: 2,
    title: 'Accommodation',
    gradientClass: 'bg-gradient-to-br from-purple-500 to-purple-700',
    url: '/ndis/accommodation',
  },
  {
    id: 3,
    title: 'Allied Health',
    gradientClass: 'bg-gradient-to-br from-green-500 to-green-700',
    url: '/allied-health',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tailored Support Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Vitality Community Care, we offer a wide range of personalized services, designed to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className={`relative h-64 w-full ${service.gradientClass}`}>
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Pattern overlay for visual interest */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <Link 
                  href={service.url}
                  className="inline-block text-blue-200 group-hover:text-white transition-colors"
                >
                  <span className="flex items-center">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 