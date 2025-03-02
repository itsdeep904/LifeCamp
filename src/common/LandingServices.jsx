import React from 'react';
import { MapPin,Home , MessageCircle,CalendarCheck, FolderHeart , Handshake  } from 'lucide-react';

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
      title: "Find Nearby Camps",
      description: "Easily locate blood donation, organ donation, and vaccination camps near you with real-time navigation support.",
      icon: <MapPin size={40} />
    },
    {
      title: "Chat with Organizers",
      description: "Connect directly with camp organizers to ask questions and get real-time updates about upcoming camps.",
      icon: <MessageCircle size={40} />
    },
    {
      title: "Home Service Camps",
      description: "Get medical services like blood donation and health checkups at your doorstep with our home service camp options.",
      icon: <Home size={40} />
    },
    {
      title: "Slot Booking",
      description: "Easily book a time slot for blood donation, health checkups, and other camp services at your convenience.",
      icon: <CalendarCheck size={40} />
    },
    {
      title: "Health Records Management",
      description: "Securely store and access your past donation records, vaccination history, and medical checkup details in one place.",
      icon: <FolderHeart  size={40} />
    },
    {
      title: "Volunteer & Support",
      description: "Join as a volunteer to help organize camps, assist participants, and contribute to healthcare initiatives in your community.",
      icon: <Handshake  size={40} />
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
