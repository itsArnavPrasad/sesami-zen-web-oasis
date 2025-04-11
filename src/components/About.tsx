
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="about" className="py-20 md:py-32 bg-sesami-light-gray">
      <div className="sesami-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div 
            className={cn(
              "rounded-lg overflow-hidden shadow-xl transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <img 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Sesami restaurant interior" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          
          {/* Right Column - Text */}
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-sesami-black">
              Our Philosophy
            </h2>
            
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              At Sesami, we embrace the delicate balance between tradition and innovation. Our approach to Asian cuisine honors centuries-old techniques while introducing contemporary interpretations.
            </p>
            
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              A thoughtful menu, inspired by tradition and curated with balance. Each dish tells a story of cultural heritage, refined ingredients, and artistic presentation.
            </p>
            
            <div className="inline-block">
              <a 
                href="#menu" 
                className="relative inline-block px-6 py-3 overflow-hidden border border-sesami-black text-sesami-black group"
              >
                <span className="absolute inset-0 bg-sesami-black translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                <span className="relative transition-colors duration-300 ease-out group-hover:text-white">
                  Explore Our Menu
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
