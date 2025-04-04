export const CertificationsSection = () => {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">Our Certifications</h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-16">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-brand-blue font-bold text-base md:text-lg" style={{ color: "#39A9E0" }}>NDIS</div>
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
            <div className="text-brand-green font-bold text-base md:text-lg" style={{ color: "#8BC53F" }}>Medicare</div>
          </div>
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
            <div style={{ color: "#6B46C1" }} className="font-bold text-base md:text-lg">APHRA</div>
          </div>
        </div>
      </div>
    </section>
  );
}; 