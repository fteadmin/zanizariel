import React from 'react';
import { Users, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Our Vision and Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            At Z&Z Studios, we're redefining how media is produced, distributed, and consumed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800/50">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Empowering Creators</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our vision is to empower creators by providing them with the tools, resources, and support they need to thrive in the dynamic world of media production and distribution.
            </p>
          </div>
          
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800/50">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Fostering Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to build a vibrant community of creators, collaborators, and innovators who can share ideas, collaborate on projects, and inspire one another to push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-gray-800/50">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Driving Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that innovation is the key to unlocking new opportunities in the media industry. That's why we're committed to providing our members with the tools and resources they need to turn their ideas into reality.
            </p>
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute -inset-4 bg-black dark:bg-white rounded-xl opacity-5 blur-md"></div>
          <div className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  About Z&Z Studios
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Z&Z Studios is more than just a media company — we're a collective of passionate creators united by a shared vision of what media can be in the digital age.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded on the principles of collaboration, innovation, and equitable profit-sharing, we're building a new model for media production and distribution that puts creators first.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our approach combines cutting-edge technology with timeless storytelling, allowing us to create content that resonates with audiences while empowering the creators behind it.
                </p>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-black dark:text-white mb-2">100+</p>
                  <p className="text-gray-600 dark:text-gray-300">Active Creators</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-black dark:text-white mb-2">50+</p>
                  <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-black dark:text-white mb-2">15+</p>
                  <p className="text-gray-600 dark:text-gray-300">Industry Partners</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-black dark:text-white mb-2">3</p>
                  <p className="text-gray-600 dark:text-gray-300">Offices Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;