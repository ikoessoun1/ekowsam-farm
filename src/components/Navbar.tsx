
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Logo placeholder */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-farm-yellow/30 flex items-center justify-center rounded-full">
            <span className="text-farm-burgundy font-bold text-lg md:text-xl">ESF</span>
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold text-farm-burgundy">
            Ekow<span className="text-farm-brown">Sam</span> Farms
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
            {isOpen ? (
              <X className="text-farm-burgundy" />
            ) : (
              <Menu className="text-farm-burgundy" />
            )}
          </Button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}
            className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
            className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors"
          >
            About
          </a>
          <a 
            href="#products" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('products'); }}
            className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors"
          >
            Products
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
            className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors"
          >
            Contact
          </a>
          <Button className="bg-farm-burgundy text-white hover:bg-farm-brown" onClick={() => window.location.href = "tel:+233555198194"}>Order Now</Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={`${
            isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          } md:hidden bg-white shadow-lg rounded-b-lg absolute w-full overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`flex flex-col items-center py-4 space-y-4 ${isOpen ? 'visible' : 'invisible'}`}>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('home'); }}
              className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors w-full text-center py-2"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('about'); }}
              className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors w-full text-center py-2"
            >
              About
            </a>
            <a 
              href="#products" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('products'); }}
              className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors w-full text-center py-2"
            >
              Products
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavLinkClick('contact'); }}
              className="text-farm-burgundy hover:text-farm-brown font-medium transition-colors w-full text-center py-2"
            >
              Contact
            </a>
            <Button className="bg-farm-burgundy text-white hover:bg-farm-brown w-3/4" onClick={() => window.location.href = "tel:+233555198194"}>
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
