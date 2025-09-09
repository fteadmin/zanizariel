import React from 'react';
import { Users, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#6A7B92' }}>Our Vision and Mission</h2>
          <p className="text-lg" style={{ color: '#6A7B92' }}>
            At Zariel & Co, we're redefining how media is produced, distributed, and consumed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-[#6A7B92] rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-16 h-16 bg-[#A7D129] rounded-full flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#6A7B92' }}>Empowering Creators</h3>
            <p style={{ color: '#6A7B92' }}>
              Our vision is to empower creators by providing them with the tools, resources, and support they need to thrive in the dynamic world of media production and distribution.
            </p>
          </div>
          
          <div className="p-8 border border-[#6A7B92] rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-16 h-16 bg-[#A7D129] rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#6A7B92' }}>Fostering Community</h3>
            <p style={{ color: '#6A7B92' }}>
              Our mission is to build a vibrant community of creators, collaborators, and innovators who can share ideas, collaborate on projects, and inspire one another to push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="p-8 border border-[#6A7B92] rounded-xl hover:shadow-lg transition-shadow bg-white">
            <div className="w-16 h-16 bg-[#A7D129] rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#6A7B92' }}>Driving Innovation</h3>
            <p style={{ color: '#6A7B92' }}>
              We believe that innovation is the key to unlocking new opportunities in the media industry. That's why we're committed to providing our members with the tools and resources they need to turn their ideas into reality.
            </p>
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="absolute -inset-4 bg-[#A7D129] rounded-xl opacity-5 blur-md"></div>
          <div className="relative bg-white rounded-xl p-8 md:p-12 border border-[#6A7B92]">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#6A7B92' }}>
                  About Zariel & Co
                </h2>
                <p className="mb-4" style={{ color: '#6A7B92' }}>
                  Zariel & Co is more than just a media company — we're a collective of passionate creators united by a shared vision of what media can be in the digital age.
                </p>
                <p className="mb-4" style={{ color: '#6A7B92' }}>
                  Founded on the principles of collaboration, innovation, and equitable profit-sharing, we're building a new model for media production and distribution that puts creators first.
                </p>
                <p style={{ color: '#6A7B92' }}>
                  Our approach combines cutting-edge technology with timeless storytelling, allowing us to create content that resonates with audiences while empowering the creators behind it.
                </p>
              </div>
              
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-[#A7D129]">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#A7D129' }}>100+</p>
                  <p style={{ color: '#6A7B92' }}>Active Creators</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#A7D129]">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#A7D129' }}>50+</p>
                  <p style={{ color: '#6A7B92' }}>Projects Completed</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#A7D129]">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#A7D129' }}>15+</p>
                  <p style={{ color: '#6A7B92' }}>Industry Partners</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-[#A7D129]">
                  <p className="text-4xl font-bold mb-2" style={{ color: '#A7D129' }}>3</p>
                  <p style={{ color: '#6A7B92' }}>Offices Worldwide</p>
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