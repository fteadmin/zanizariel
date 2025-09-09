import React from 'react';
import { Zap, Flame, Globe, ArrowUpRight } from 'lucide-react';

const Scripted: React.FC = () => {
  return (
    <section id="scripted" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6A7B92' }}>
              <span className="bg-[#A7D129] text-white px-2 rounded">Scripted:</span> <span style={{ color: '#6A7B92' }}>The Social Engine of Zariel & Co</span>
            </h2>
            
            <p className="text-lg mb-8" style={{ color: '#6A7B92' }}>
              Scripted is the cultural ignition behind Zariel & Co Multimedia Partners, transforming creative development into community immersion—activating audiences, amplifying creators, and fueling visibility for projects born at the intersection of art, tech, and purpose.
            </p>
            
            <div className="relative overflow-hidden rounded-xl h-64 md:h-80 border border-[#6A7B92]">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative collaboration" 
                className="object-cover w-full h-full transform transition duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 bg-white bg-opacity-80 rounded-tr-xl">
                <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#A7D129' }}>Powered by</span>
                <p className="text-xl font-bold" style={{ color: '#6A7B92' }}>Life Connect Cohort</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-white border border-[#6A7B92] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 mr-4" style={{ color: '#A7D129' }} />
                <h3 className="text-xl font-bold" style={{ color: '#6A7B92' }}>Content Becomes Currency</h3>
              </div>
              <p style={{ color: '#6A7B92' }}>
                Scripted is where content becomes currency. It transforms Zariel & Co's multimedia offerings—from original films and live performances to digital streaming and talent showcases—into high-impact social activations.
              </p>
            </div>
            
            <div className="bg-white border border-[#6A7B92] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Flame className="h-8 w-8 mr-4" style={{ color: '#A7D129' }} />
                <h3 className="text-xl font-bold" style={{ color: '#6A7B92' }}>Production to the People</h3>
              </div>
              <p style={{ color: '#6A7B92' }}>
                Scripted brings production to the people, positioning every release, audition, and collaboration as part of a larger, immersive brand experience.
              </p>
            </div>
            
            <div className="bg-white border border-[#6A7B92] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 mr-4" style={{ color: '#A7D129' }} />
                <h3 className="text-xl font-bold" style={{ color: '#6A7B92' }}>Community Immersion</h3>
              </div>
              <p style={{ color: '#6A7B92' }}>
                As the official social engine, Scripted turns creative development into community immersion—activating audiences and amplifying creators at the intersection of art, tech, and purpose.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-[#6A7B92] text-white rounded-full font-medium hover:bg-[#A7D129] hover:text-[#6A7B92] transition-colors mt-4"
            >
              Partner with Scripted
              <ArrowUpRight className="ml-2 h-4 w-4" style={{ color: '#A7D129' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scripted;