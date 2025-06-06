import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';
import ZarielLogo from './ZarielLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <ZarielLogo className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold text-black dark:text-white">Zariel & Co</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Reshaping the media landscape through innovation, collaboration, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Creator Guide</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Platform Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for updates on new features, events, and opportunities.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white w-full"
              />
              <button 
                type="submit" 
                className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-r-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Zariel & Co. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;