
import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
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
    
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="sesami-container">
        <div 
          className={cn(
            "transition-all duration-1000 transform text-center mb-12",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-sesami-black">
            Contact & Location
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We look forward to welcoming you to Sesami. Reserve your table or get in touch with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <div 
            className={cn(
              "rounded-lg overflow-hidden shadow-lg transition-all duration-1000 transform h-[400px] md:h-[500px]",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.667050179245!2d72.90245073766855!3d19.117921542956177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f198ee56ad%3A0x33c65a50afe+60000!2sHiranandani%20Gardens%2C%20Powai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649322909964!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sesami restaurant location"
            ></iframe>
          </div>
          
          {/* Contact Information */}
          <div 
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="bg-sesami-light-gray p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-sesami-black mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Our Location</h3>
                    <p className="text-gray-700">
                      Sesami, Hiranandani Gardens, Powai, Mumbai, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-sesami-black mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-700 hover:text-sesami-black transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="text-sesami-black mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919876543210" className="text-gray-700 hover:text-sesami-black transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-sesami-black mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Monday - Friday: 12:00 PM - 11:00 PM</p>
                      <p>Saturday - Sunday: 11:00 AM - 11:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a 
                  href="#reservation" 
                  className="w-full block text-center px-6 py-3 bg-sesami-black text-white rounded-md hover:bg-black transition-colors duration-300"
                >
                  Make a Reservation
                </a>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="#" className="px-4 py-2 border border-sesami-black text-sesami-black rounded-md hover:bg-sesami-black hover:text-white transition-colors duration-300">
                    Order on Swiggy
                  </a>
                  <a href="#" className="px-4 py-2 border border-sesami-black text-sesami-black rounded-md hover:bg-sesami-black hover:text-white transition-colors duration-300">
                    Order on Zomato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
