
import React from 'react';
import { Button } from "@/components/ui/button";
import { EggFried, Utensils, EggFried as Egg, Phone } from 'lucide-react';

const FeaturedDish = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-farm-burgundy to-farm-brown text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <EggFried className="h-6 w-6" />
              <span className="font-medium text-farm-yellow">Featured Delicacy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nkosua Ne Mako</h2>
            <p className="text-lg">
              A traditional Ghanaian dish featuring fresh eggs cooked with a rich pepper sauce, onions, and special herbs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-white/10 rounded-full p-2">
                  <Utensils className="h-5 w-5 text-farm-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-farm-yellow">Authentic Recipe</h4>
                  <p className="text-sm text-white/80">
                    Prepared following traditional Ghanaian cooking methods passed down through generations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-white/10 rounded-full p-2">
                  <Egg className="h-5 w-5 text-farm-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-farm-yellow">Farm Fresh Ingredients</h4>
                  <p className="text-sm text-white/80">
                    Made with eggs from our own farm and locally sourced peppers and spices.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-farm-yellow text-farm-burgundy hover:bg-white mt-4" onClick={() => window.location.href = "tel:+233555198194"}>
              <Phone className="mr-2 h-5 w-5" />
              Call to Order
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                alt="Nkosua Ne Mako" 
                className="w-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-farm-yellow text-farm-burgundy p-6 rounded-full shadow-lg font-bold text-xl">
              Bestseller!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
