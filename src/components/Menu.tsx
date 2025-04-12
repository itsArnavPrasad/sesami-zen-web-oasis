
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

// Menu categories and items
const categories = [
  'Starters', 'Sushi', 'Dim Sums', 'Mains', 'Desserts', 'Drinks'
];

const menuItems = {
  'Starters': [
    { 
      name: 'Edamame', 
      description: 'Steamed young soybeans, sea salt', 
      price: 350, 
      veg: true, 
      spicy: false,
      image: 'https://www.recipetineats.com/tachyon/2024/07/Spicy-edamame-47614-1.jpg'
    },
    { 
      name: 'Miso Soup', 
      description: 'Tofu, wakame, spring onion', 
      price: 300, 
      veg: true, 
      spicy: false,
      image: 'https://www.crowdedkitchen.com/wp-content/uploads/2020/08/vegan-miso-soup.jpg'
    },
    { 
      name: 'Chicken Gyoza', 
      description: 'Pan-fried chicken dumplings, ginger soy', 
      price: 450, 
      veg: false, 
      spicy: false,
      image: 'https://cardamommagazine.com/wp-content/uploads/2021/04/chicken-gyoza.jpg'
    },
    { 
      name: 'Prawn Tempura', 
      description: 'Crispy tiger prawns, tentsuyu sauce', 
      price: 550, 
      veg: false, 
      spicy: false,
      image: 'https://mogushop.asia/cdn/shop/articles/tempura-1_orig_750x.jpg?v=1589562939'
    },
  ],
  'Sushi': [
    { 
      name: 'Salmon Nigiri', 
      description: 'Fresh salmon, wasabi, soy', 
      price: 450, 
      veg: false, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Spicy Tuna Roll', 
      description: 'Tuna, spicy mayo, cucumber', 
      price: 550, 
      veg: false, 
      spicy: true,
      image: 'https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Avocado Maki', 
      description: 'Avocado, sesame seeds', 
      price: 400, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1676037150408-4d49c6a51122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ],
  'Dim Sums': [
    { 
      name: 'Vegetable Dumpling', 
      description: 'Shiitake, bok choy, carrot', 
      price: 400, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Prawn Har Gau', 
      description: 'Crystal skin, prawn filling', 
      price: 550, 
      veg: false, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ],
  'Mains': [
    { 
      name: 'Black Cod Miso', 
      description: 'Miso marinated black cod, pickled radish', 
      price: 1200, 
      veg: false, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Teriyaki Chicken', 
      description: 'Grilled chicken, teriyaki sauce, sesame', 
      price: 850, 
      veg: false, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Tofu Stir Fry', 
      description: 'Crispy tofu, vegetables, sweet chili sauce', 
      price: 750, 
      veg: true, 
      spicy: true,
      image: 'https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ],
  'Desserts': [
    { 
      name: 'Matcha Tiramisu', 
      description: 'Green tea sponge, mascarpone cream', 
      price: 450, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Mochi Ice Cream', 
      description: 'Assorted flavors', 
      price: 400, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ],
  'Drinks': [
    { 
      name: 'Sake', 
      description: 'Premium Japanese rice wine', 
      price: 700, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1627517532664-eab94f0761d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Matcha Latte', 
      description: 'Green tea, steamed milk', 
      price: 350, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1545221855-a0c568f42186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    { 
      name: 'Yuzu Mojito', 
      description: 'Yuzu, mint, soda, white rum', 
      price: 550, 
      veg: true, 
      spicy: false,
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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
    
    const section = document.getElementById('menu');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="menu" className="py-20 md:py-32">
      <div className="sesami-container">
        <div 
          className={cn(
            "transition-all duration-1000 transform text-center mb-12",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-sesami-black">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each dish is crafted with precision and passion, blending traditional Asian flavors with contemporary techniques.
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="relative mb-12">
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors md:flex hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-none py-4 px-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300",
                  activeCategory === category 
                    ? "bg-sesami-black text-white font-medium" 
                    : "bg-sesami-light-gray text-sesami-black hover:bg-sesami-soft-purple"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors md:flex hidden"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10",
                { "delay-100": index % 3 === 0 },
                { "delay-200": index % 3 === 1 },
                { "delay-300": index % 3 === 2 }
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-medium">{item.name}</h3>
                  <span className="font-medium text-sesami-black">₹{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="flex space-x-2">
                  {item.veg && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                      <Leaf size={12} className="mr-1" />
                      Veg
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
                      🌶️ Spicy
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Download Menu */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-sesami-black text-white rounded-full hover:bg-black transition-colors duration-300"
          >
            <Download size={18} className="mr-2" />
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
