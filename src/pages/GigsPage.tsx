import React, { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Gigs from '../components/Gigs';
import Footer from '../components/Footer';

function GigsPage() {
  useEffect(() => {
    document.title = 'Gigs - Zariel & Co';
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Gigs />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default GigsPage;