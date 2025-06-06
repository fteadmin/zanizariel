import React from 'react';

interface ZarielLogoProps {
  className?: string;
}

const ZarielLogo: React.FC<ZarielLogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <g className="fill-current text-black dark:text-white">
          <path d="M20 30 L70 30 L30 70 L80 70" strokeWidth="6" stroke="currentColor" fill="none" />
          <path d="M40 20 L60 80" strokeWidth="6" stroke="currentColor" fill="none" />
          <path d="M75 30 C85 40, 85 60, 75 70" strokeWidth="6" stroke="currentColor" fill="none" />
        </g>
      </svg>
    </div>
  );
};

export default ZarielLogo;