
import React from 'react';
import { Button } from "@/components/ui/button";
import { Egg, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-farm-yellow/30 to-white">
      <div className="section-padding container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Ekow Sam Farms: Quality Poultry Products
            </h1>
            <p className="text-base md:text-lg text-farm-brown/90">
              Discover our premium quality poultry meat, fresh eggs, and traditional Ghanaian delicacies from our farm in Millennium City.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-farm-burgundy text-white hover:bg-farm-brown w-full sm:w-auto" onClick={() => window.location.href = "tel:+233555198194"}>
                <Phone className="mr-2 h-5 w-5" />
                Order Now
              </Button>
              <Button variant="outline" className="border-farm-burgundy text-farm-burgundy hover:bg-farm-burgundy hover:text-white w-full sm:w-auto" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                <Egg className="mr-2 h-5 w-5" />
                Our Products
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in mt-6 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
              alt="Farm animals" 
              className="rounded-2xl shadow-lg object-cover h-full max-h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-3 md:p-4 rounded-lg shadow-md hidden sm:block">
              <p className="text-sm md:text-base text-farm-burgundy font-bold">100% Organic</p>
              <p className="text-xs md:text-sm text-farm-brown">No antibiotics or hormones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
