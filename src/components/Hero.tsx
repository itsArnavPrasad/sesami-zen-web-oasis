
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-sesami-black/40 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://b.zmtcdn.com/data/pictures/chains/0/19590530/eb43f4b738d312789eb3454e8d514089.jpg" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-center mb-4">
            SESAMI
          </h1>
          <p className="text-xl md:text-2xl text-center font-light mb-8">
            Yin and Yang in Harmony
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-10 animate-bounce-slow"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
