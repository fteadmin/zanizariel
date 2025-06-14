import React from 'react';
import { Zap, Flame, Globe, ArrowUpRight } from 'lucide-react';

const Scripted: React.FC = () => {
  return (
    <section id="scripted" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-white text-black px-2">Scripted:</span> The Social Engine of Zariel & Co
            </h2>
            
            <p className="text-lg opacity-90 mb-8">
              Scripted is the cultural ignition behind Zariel & Co Multimedia Partners, transforming creative development into community immersion—activating audiences, amplifying creators, and fueling visibility for projects born at the intersection of art, tech, and purpose.
            </p>
            
            <div className="relative overflow-hidden rounded-xl h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative collaboration" 
                className="object-cover w-full h-full transform transition duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <span className="text-sm font-semibold tracking-wider uppercase">Powered by</span>
                <p className="text-xl font-bold">Life Connect Cohort</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 mr-4 text-yellow-400" />
                <h3 className="text-xl font-bold">Content Becomes Currency</h3>
              </div>
              <p className="text-gray-300">
                Scripted is where content becomes currency. It transforms Zariel & Co's multimedia offerings—from original films and live performances to digital streaming and talent showcases—into high-impact social activations.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Flame className="h-8 w-8 mr-4 text-red-500" />
                <h3 className="text-xl font-bold">Production to the People</h3>
              </div>
              <p className="text-gray-300">
                Scripted brings production to the people, positioning every release, audition, and collaboration as part of a larger, immersive brand experience.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 mr-4 text-blue-400" />
                <h3 className="text-xl font-bold">Community Immersion</h3>
              </div>
              <p className="text-gray-300">
                As the official social engine, Scripted turns creative development into community immersion—activating audiences and amplifying creators at the intersection of art, tech, and purpose.
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors mt-4"
            >
              Partner with Scripted
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scripted;