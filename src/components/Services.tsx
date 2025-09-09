import React from 'react';
import { Film, Radio, PenTool, ShoppingBag, Users, MonitorPlay } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Film className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Content Production",
      description: "From concept to final cut, our team delivers professional video content that captures your vision.",
    },
    {
      icon: <Radio className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Podcast Creation",
      description: "Full-service podcast production, including recording, editing, and distribution strategies.",
    },
    {
      icon: <PenTool className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Creative Development",
      description: "Turn your ideas into reality with our creative development and storytelling expertise.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Digital Commerce",
      description: "Our platform connects creators with audiences through seamless digital commerce solutions.",
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Community Building",
      description: "Strategies and tools to build and nurture engaged communities around your content.",
    },
    {
      icon: <MonitorPlay className="h-8 w-8" style={{ color: '#6A7B92' }} />,
      title: "Digital Distribution",
      description: "Get your content in front of the right audiences with our distribution expertise.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6A7B92' }}>Our Services</h2>
          <p className="text-lg" style={{ color: '#6A7B92' }}>
            We offer a comprehensive suite of services to help creators and businesses thrive in the digital media landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#6A7B92]"
            >
              <div className="w-16 h-16 bg-[#A7D129] rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#6A7B92' }}>{service.title}</h3>
              <p style={{ color: '#6A7B92' }}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-[#6A7B92] text-white rounded-full font-semibold hover:bg-[#A7D129] hover:text-[#6A7B92] transition-colors inline-flex items-center"
          >
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;