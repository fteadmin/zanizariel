import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Scripted', href: '#scripted' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      style={{ borderBottom: scrolled ? '1px solid #6A7B92' : 'none' }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#home" className="flex items-center space-x-2">
          <img 
            src="/assets/logo-light.png" 
            alt="Zariel & Co Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-xl font-bold tracking-tight text-[color:#6A7B92]">
            Zariel & Co Multimedia Partners
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold transition-colors"
              style={{
                color: '#6A7B92',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="ml-4"
            aria-label="Toggle menu"
            style={{ color: '#6A7B92' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold transition-colors"
                style={{
                  color: '#6A7B92',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#A7D129')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6A7B92')}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;