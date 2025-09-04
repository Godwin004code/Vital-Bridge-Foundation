import React from 'react';

const MissionVision = () => {
  return (
    <div className="bg-white w-full py-20">
      <section className="w-[90%] mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Vision */}
        <div className="flex-1 bg-[#F4F6F8] rounded-2xl p-10 shadow-md">
          <h3 className="text-[#0C7B3B] text-lg font-bold mb-2">Our Vision</h3>
          <p className="text-2xl text-[#1D2130] font-semibold mb-4">
            We envision a future where every individual has unhindered access to the basic needs of life: education, health, sustainable environments, and empowered human potential.
          </p>
        </div>
        {/* Mission */}
        <div className="flex-1 bg-[#F4F6F8] rounded-2xl p-10 shadow-md">
          <h3 className="text-[#720000] text-lg font-bold mb-2">Our Mission</h3>
          <p className="text-2xl text-[#1D2130] font-semibold mb-6">
            Our mission is to empower communities and individuals by promoting education, making health care accessible, championing environmental sustainability, and fostering human capacity development, with the aim of building a healthier and more resilient world for our generation and generations to come.
          </p>
          <button
            className="px-8 py-3 bg-[#0C7B3B] text-white rounded-md font-semibold hover:bg-[#095c2b] transition"
            onClick={() => window.open('mailto:info@vitalbridge.org', '_blank')}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;