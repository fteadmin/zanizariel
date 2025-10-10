import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/assets/logo-light.png" alt="Zariel & Co Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold" style={{ color: '#6A7B92' }}>Zariel & Co</span>
            </div>
            <p className="mb-4" style={{ color: '#6A7B92' }}>
              Reshaping the media landscape through innovation, collaboration, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" aria-label="Instagram"
                style={{ color: '#6A7B92' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="Twitter"
                style={{ color: '#6A7B92' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="LinkedIn"
                style={{ color: '#6A7B92' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="YouTube"
                style={{ color: '#6A7B92' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors" aria-label="Facebook"
                style={{ color: '#6A7B92' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#6A7B92' }}>Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>About Us</a></li>
              <li><a href="#membership" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Membership</a></li>
              <li><a href="#services" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Our Services</a></li>
              {/* <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Careers</a></li> */}
              {/* <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Blog</a></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#6A7B92' }}>Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Creator Guide</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Platform Documentation</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Terms of Service</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Privacy Policy</a></li>
              <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>FAQs</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#6A7B92' }}>Subscribe</h3>
            <p className="mb-4" style={{ color: '#6A7B92' }}>
              Subscribe to our newsletter for updates on new features, events, and opportunities.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white border border-[#6A7B92] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#A7D129] w-full text-[#6A7B92]"
              />
              <button 
                type="submit" 
                className="bg-[#6A7B92] text-white px-4 py-2 rounded-r-lg hover:bg-[#A7D129] hover:text-[#6A7B92] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#6A7B92] text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: '#6A7B92' }}>
              &copy; {new Date().getFullYear()} Zariel & Co. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Privacy</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Terms</a></li>
                <li><a href="#" className="transition-colors" style={{ color: '#6A7B92' }} onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')} onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}>Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;