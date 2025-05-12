
import React from 'react';
import { Button } from "@/components/ui/button";
import { Egg } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-farm-yellow/30 to-white">
      <div className="section-padding container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fresh Poultry Products from Our Farm to Your Table
            </h1>
            <p className="text-lg text-farm-brown/90">
              Discover our premium quality poultry meat, fresh eggs, and traditional Ghanaian delicacies.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-farm-burgundy text-white hover:bg-farm-brown">
                Explore Our Products
              </Button>
              <Button variant="outline" className="border-farm-burgundy text-farm-burgundy hover:bg-farm-burgundy hover:text-white">
                <Egg className="mr-2 h-5 w-5" />
                Try Nkosua Ne Mako
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
              alt="Farm animals" 
              className="rounded-2xl shadow-lg object-cover h-full max-h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <p className="text-farm-burgundy font-bold">100% Organic</p>
              <p className="text-farm-brown text-sm">No antibiotics or hormones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
