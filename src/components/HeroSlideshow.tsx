import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Users, TrendingUp, Award } from 'lucide-react';

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Reshaping the",
      highlight: "Media Landscape",
      description: "At Zariel & Co, we're not just in the business of creating content - we're building a community of creators, collaborators, and innovators.",
      primaryButton: {
        text: "Learn More",
        href: "#about"
      },
      secondaryButton: {
        text: "Take the 2-Minute Quiz",
        href: "https://forms.office.com/r/kfkCSMGwxq"
      },
      backgroundImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      videoUrl: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
      background: "bg-white",
      backgroundImageDup: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      features: [
        { icon: <Users className="h-5 w-5" />, text: "Member profit sharing that rewards contribution" },
        { icon: <TrendingUp className="h-5 w-5" />, text: "Our own platform for digital commerce" },
        { icon: <Award className="h-5 w-5" />, text: "Comprehensive support for creators" }
      ],
      backgroundDup: "bg-white"
    },
    {
      id: 2,
      title: "Booked",
      highlight: "& Busy",
      description: "A 2-year creator incubator that turns your talent into a business—real tools, real ownership, real money.",
      primaryButton: {
        text: "Learn More",
        href: "#about"
      },
      // secondaryButton intentionally omitted
      backgroundImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      videoUrl: "/assets/sniphero.mp4",
      background: "bg-white",
      backgroundImageDup: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      features: [
        { icon: <Award className="h-5 w-5" />, text: "2-year comprehensive incubator program" },
        { icon: <TrendingUp className="h-5 w-5" />, text: "Turn your talent into sustainable income" },
        { icon: <Users className="h-5 w-5" />, text: "Real tools, real ownership, real money" }
      ],
      backgroundDup: "bg-white"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${slides[currentSlide].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.7s ease-in-out'
      }}
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          key={currentSlide}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ zIndex: 1 }}
        >
          <source src={slides[currentSlide].videoUrl} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundColor: 'rgba(255, 255, 255))',
            zIndex: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10" style={{ zIndex: 10 }}>
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="transition-all duration-700 ease-in-out">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: '#FFFFFF' }}>
                {slides[currentSlide].title}{' '}
                <span className="relative">
                  {slides[currentSlide].highlight}
                  <span className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: '#A7D129' }}></span>
                </span>
              </h1>

              <p className="text-lg md:text-xl my-6 mx-auto max-w-3xl" style={{ color: '#FFFFFF' }}>
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                <a
                  href={slides[currentSlide].primaryButton.href}
                  className="px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center"
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
                  {slides[currentSlide].primaryButton.text}
                  <ArrowRight className="ml-2 h-5 w-5" style={{ color: '#A7D129' }} />
                </a>

                {slides[currentSlide].secondaryButton && (
                  <a
                    href={slides[currentSlide].secondaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 rounded-full font-semibold transition-colors flex items-center justify-center"
                    style={{
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#A7D129';
                      e.currentTarget.style.color = '#6A7B92';
                      e.currentTarget.style.borderColor = '#A7D129';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#FFFFFF';
                    }}
                  >
                    {slides[currentSlide].secondaryButton.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border transition-all duration-300 hover:bg-white"
            style={{ borderColor: '#FFFFFF', color: '#6A7B92' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'scale-125'
                    : 'hover:opacity-70'
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#A7D129' : '#FFFFFF',
                  opacity: index === currentSlide ? 1 : 0.5
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 backdrop-blur-sm border transition-all duration-300 hover:bg-white"
            style={{ borderColor: '#FFFFFF', color: '#6A7B92' }}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-8 right-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'text-white'
                : 'bg-white/80 backdrop-blur-sm border'
            }`}
            style={{
              backgroundColor: isAutoPlaying ? '#A7D129' : 'transparent',
              color: isAutoPlaying ? '#FFFFFF' : '#6A7B92',
              borderColor: isAutoPlaying ? '#A7D129' : '#FFFFFF'
            }}
          >
            {isAutoPlaying ? 'Auto' : 'Manual'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;