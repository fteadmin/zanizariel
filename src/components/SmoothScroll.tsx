import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    };
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  return null;
};

export default SmoothScroll;