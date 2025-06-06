import React from 'react';
import { Film, Radio, PenTool, ShoppingBag, Users, MonitorPlay } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Film className="h-8 w-8" />,
      title: "Content Production",
      description: "From concept to final cut, our team delivers professional video content that captures your vision.",
    },
    {
      icon: <Radio className="h-8 w-8" />,
      title: "Podcast Creation",
      description: "Full-service podcast production, including recording, editing, and distribution strategies.",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Creative Development",
      description: "Turn your ideas into reality with our creative development and storytelling expertise.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Digital Commerce",
      description: "Our platform connects creators with audiences through seamless digital commerce solutions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "Strategies and tools to build and nurture engaged communities around your content.",
    },
    {
      icon: <MonitorPlay className="h-8 w-8" />,
      title: "Digital Distribution",
      description: "Get your content in front of the right audiences with our distribution expertise.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We offer a comprehensive suite of services to help creators and businesses thrive in the digital media landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 text-black dark:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-flex items-center"
          >
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;