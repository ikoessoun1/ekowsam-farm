
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-farm-burgundy text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Farm<span className="text-farm-yellow">Fresh</span>
            </h3>
            <p className="text-white/80 mb-4">
              Premium poultry products from our farm to your table. Committed to quality, flavor, and Ghanaian tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
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
            <h4 className="font-bold text-farm-yellow mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates on new products and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-farm-burgundy"
              />
              <button 
                type="submit" 
                className="bg-farm-yellow text-farm-burgundy px-4 py-2 rounded-r-md font-medium hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} FarmFresh Poultry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
