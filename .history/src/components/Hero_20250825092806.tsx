import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-black dark:text-white">
              <span className="relative">
                No More Struggling Artists
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 dark:bg-white"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 my-6 max-w-2xl">
              A 2-year creator incubator that turns your talent into a business—real tools, real ownership, real money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#apply" 
                className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#quiz" 
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center justify-center"
              >
                Take the 2-Minute Quiz
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-black dark:bg-white rounded-xl opacity-10 blur-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-[1.01]">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Our Unique Model</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">1</span>
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">Member profit sharing that rewards contribution</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">2</span>
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">Our own platform for digital commerce</p>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-bold">3</span>
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">Comprehensive support for creators</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;