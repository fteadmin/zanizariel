import React from 'react';
import { Film, Users, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Film className="h-8 w-8" style={{ color: '#FFFFFF' }} />,
      title: "Content Production",
      description: "From concept to final cut, our team delivers professional video content that captures your vision.",
    },
    {
      icon: <Megaphone className="h-8 w-8" style={{ color: '#FFFFFF' }} />,
      title: "Branding & Marketing",
      description: "We help you build a memorable brand and execute marketing strategies that grow your audience and impact.",
    },
    {
      icon: <Users className="h-8 w-8" style={{ color: '#FFFFFF' }} />,
      title: "Consulting & Managing",
      description: "A consulting and management firm dedicated to helping businesses refine strategy, streamline operations, and grow with purpose and creativity.",
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#4A5568' }}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Our Services</h2>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            We offer a comprehensive suite of services to help creators and businesses thrive in the digital media landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border"
              style={{ 
                backgroundColor: '#5A6B82',
                borderColor: '#A7D129'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#A7D129' }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#FFFFFF' }}>{service.title}</h3>
              <p style={{ color: '#FFFFFF' }}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#6A7B92'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#A7D129';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#6A7B92';
            }}
          >
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;