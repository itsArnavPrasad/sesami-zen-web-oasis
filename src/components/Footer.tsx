
import { Instagram, Facebook, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sesami-black text-white py-12 md:py-16">
      <div className="sesami-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Address */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-semibold mb-4">SESAMI</h3>
            <p className="text-gray-300 mb-6">
              Hiranandani Gardens, Powai<br />
              Mumbai, India
            </p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Sesami. All rights reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://wa.me/919876543210" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">
                For inquiries and reservations
              </p>
              <a 
                href="tel:+919876543210" 
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
