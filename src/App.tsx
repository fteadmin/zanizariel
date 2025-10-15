import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import MembershipContent from './components/MembershipContent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import HeroSlideshow from './components/HeroSlideshow';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Zariel & Co - Reshaping the Media Landscape';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <SmoothScroll />
        <Navbar />
        <main>
          <HeroSlideshow />
          <About />
          <MembershipContent />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;