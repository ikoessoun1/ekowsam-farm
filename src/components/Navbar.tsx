
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-farm-yellow/50 flex items-center justify-center rounded-full">
            <span className="text-farm-burgundy font-bold text-sm">ESF</span>
          </div>
          <h1 className="text-xl font-serif font-bold">
            Ekow<span className="text-farm-burgundy">Sam</span> Farms
          </h1>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-farm-brown hover:text-farm-burgundy transition-colors">Home</a>
          <a href="#about" className="text-farm-brown hover:text-farm-burgundy transition-colors">About</a>
          <a href="#products" className="text-farm-brown hover:text-farm-burgundy transition-colors">Products</a>
          <a href="#contact" className="text-farm-brown hover:text-farm-burgundy transition-colors">Contact</a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-farm-brown">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
