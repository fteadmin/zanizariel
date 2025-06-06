import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors duration-300 focus:outline-none dark:bg-gray-700"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span 
        className={`${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out dark:bg-gray-900 flex items-center justify-center`}
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 text-yellow-300" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;