import React from 'react';
import { Leaf, Droplets, Sun, Recycle, Wind, Zap } from 'lucide-react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[var(--background-color)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="text-[var(--icon-color)] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const LandingServices = () => {
  const services = [
    {
      title: "Sustainable Energy Solutions",
      description: "Custom renewable energy systems designed to reduce carbon footprint and energy costs.",
      icon: <Sun size={40} />
    },
    {
      title: "Water Conservation",
      description: "Innovative water management systems that minimize waste and maximize efficiency.",
      icon: <Droplets size={40} />
    },
    {
      title: "Green Building Design",
      description: "Eco-friendly architectural solutions that prioritize sustainability without compromising aesthetics.",
      icon: <Leaf size={40} />
    },
    {
      title: "Waste Management",
      description: "Comprehensive waste reduction strategies and recycling programs for businesses.",
      icon: <Recycle size={40} />
    },
    {
      title: "Clean Air Technology",
      description: "Advanced filtration systems that improve indoor air quality and reduce pollutants.",
      icon: <Wind size={40} />
    },
    {
      title: "Energy Efficiency Audits",
      description: "Detailed assessments to identify energy-saving opportunities in your home or business.",
      icon: <Zap size={40} />
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-white">
          We provide a seamless platform for organizing and discovering life-saving camps, including blood donation, organ donation, and vaccination camps, ensuring accessibility for everyone in need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingServices;
