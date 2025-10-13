import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: '#6A7B92' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/assets/logo-light.png" alt="Zariel & Co Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Zariel & Co</span>
            </div>
            <p className="mb-4" style={{ color: '#FFFFFF' }}>
              Reshaping the media landscape through innovation, collaboration, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" aria-label="Instagram"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="Twitter"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="LinkedIn"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="YouTube"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="Facebook"
                style={{ color: '#FFFFFF' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFFFFF' }}>Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>About Us</a></li>
              <li><a href="#membership" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Membership</a></li>
              <li><a href="#services" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Our Services</a></li>
              {/* <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Careers</a></li> */}
              {/* <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Blog</a></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFFFFF' }}>Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Creator Guide</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Platform Documentation</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Terms of Service</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Privacy Policy</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>FAQs</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFFFFF' }}>Subscribe</h3>
            <p className="mb-4" style={{ color: '#FFFFFF' }}>
              Subscribe to our newsletter for updates on new features, events, and opportunities.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#A7D129] w-full"
                style={{ 
                  backgroundColor: '#5A6B82', 
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF'
                }}
              />
              <button 
                type="submit" 
                className="px-4 py-2 rounded-r-lg transition-colors"
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center sm:text-left" style={{ borderColor: '#FFFFFF' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#FFFFFF' }}>
              &copy; {new Date().getFullYear()} Zariel & Co. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Privacy</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Terms</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#FFFFFF' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;