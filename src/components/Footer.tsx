
import React from 'react';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-burgundy text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-farm-yellow/50 flex items-center justify-center rounded-full">
                <span className="text-farm-burgundy font-bold">ESF</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Ekow<span className="text-farm-yellow">Sam</span> Farms
              </h3>
            </div>
            <p className="text-white/80 mb-4">
              Premium poultry products from our farm to your table. Committed to quality, flavor, and Ghanaian tradition since 2003.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-farm-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-farm-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-farm-yellow transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-farm-yellow transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-farm-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-farm-yellow mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-farm-yellow" />
                <span>25 Millennium City Street, Behind DL Hospital</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-farm-yellow" />
                <a href="tel:+233555198194" className="hover:text-farm-yellow">+233 555 198 194</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-farm-yellow" />
                <a href="mailto:hello@ekowsamfarms.com" className="hover:text-farm-yellow">hello@ekowsamfarms.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Ekow Sam Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
