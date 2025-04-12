
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Sesami restaurant interior',
    category: 'ambience'
  },
  {
    src: 'https://cdn.prod.website-files.com/608c22a9a0bebf3476f71608/65f4a3a36dc2aecf0f9a30d4_Alla%20Vita%20Private%20Dining%20Page%20Large%20Resized_2-min.webp',
    alt: 'Intimate dining area',
    category: 'ambience'
  },
  {
    src: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Signature sushi platter',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Chef preparing sushi',
    category: 'chef'
  },
  {
    src: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Elegant cocktail',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1542897644-e04428948020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Tatami room dining',
    category: 'ambience'
  },
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('gallery');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="gallery" className="py-20 md:py-32 bg-sesami-soft-purple/30">
      <div className="sesami-container">
        <div 
          className={cn(
            "transition-all duration-1000 transform text-center mb-12",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-sesami-black">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the ambience and artistry of Sesami through our visual journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={cn(
                "hover-zoom shadow-md transition-all duration-1000 transform",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                { "delay-100": index % 3 === 0 },
                { "delay-200": index % 3 === 1 },
                { "delay-300": index % 3 === 2 }
              )}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
