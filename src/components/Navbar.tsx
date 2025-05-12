
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-serif font-bold text-farm-burgundy">
            Farm<span className="text-farm-brown">Fresh</span>
          </span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="text-farm-burgundy" />
          </Button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Home</a>
          <a href="#about" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">About</a>
          <a href="#products" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Products</a>
          <a href="#contact" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Contact</a>
          <Button className="bg-farm-burgundy text-white hover:bg-farm-brown">Order Now</Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg rounded-b-lg absolute w-full`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="#home" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Home</a>
          <a href="#about" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">About</a>
          <a href="#products" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Products</a>
          <a href="#contact" className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors">Contact</a>
          <Button className="bg-farm-burgundy text-white hover:bg-farm-brown">Order Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
