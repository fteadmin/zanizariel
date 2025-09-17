import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-white"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-6 font-medium" style={{ color: '#6A7B92' }}>
            Reshaping the media landscape through innovation, collaboration, and community.
          </p>
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ color: '#6A7B92' }}>
            <span className="relative">
              No More Struggling Artists
              <span
                className="absolute bottom-0 left-0 w-full h-1"
                style={{ backgroundColor: '#A7D129' }}
              ></span>
            </span>
          </h1>
          {/* Subhead */}
          <p
            className="text-lg md:text-xl my-6 mx-auto max-w-3xl"
            style={{ color: '#6A7B92' }}
          >
            A 2-year creator incubator that turns your talent into a business—real tools, real ownership, real money.
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <a 
              href="#apply" 
              className="px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
              style={{
                backgroundColor: '#6A7B92',
                color: '#FFFFFF'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#A7D129';
                e.currentTarget.style.color = '#6A7B92';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#6A7B92';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#A7D129' }} />
            </a>
            <a 
              href="#quiz" 
              className="px-8 py-3 border-2 rounded-full font-semibold transition-colors flex items-center justify-center"
              style={{
                borderColor: '#6A7B92',
                color: '#6A7B92'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#A7D129';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#A7D129';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6A7B92';
                e.currentTarget.style.borderColor = '#6A7B92';
              }}
            >
              Take the 2-Minute Quiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;