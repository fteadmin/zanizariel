import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Scripted from './components/Scripted';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import HeroSlideshow from './components/HeroSlideShow';

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
          {/* <Hero /> */}
          <About />
          <Services />
          <Scripted />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;