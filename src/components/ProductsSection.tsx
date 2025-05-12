
import React from 'react';
import { EggFried, Egg as EggIcon, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProductCard = ({ 
  icon: Icon, 
  title, 
  description, 
  price 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  price: string 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-farm-yellow/20 p-4 md:p-6 flex justify-center">
        <Icon className="h-12 w-12 md:h-16 md:w-16 text-farm-burgundy" />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-farm-brown text-sm md:text-base mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <span className="text-farm-burgundy font-bold text-base md:text-lg">{price}</span>
          <Button size="sm" className="bg-farm-burgundy hover:bg-farm-brown w-full sm:w-auto" onClick={() => window.location.href = "tel:+233555198194"}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-farm-yellow/10">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Products</h2>
          <p className="max-w-2xl mx-auto text-farm-brown text-sm md:text-base">
            We offer a variety of premium poultry products, from fresh meat to farm eggs and traditional Ghanaian dishes.
          </p>
          <div className="w-16 md:w-24 h-1 bg-farm-burgundy mx-auto mt-3 md:mt-4"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProductCard 
            icon={EggFried}
            title="Fresh Poultry Meat"
            description="Tender, organic poultry meat raised with care on our farm." 
            price="From GH₵ 55.00"
          />
          
          <ProductCard 
            icon={EggIcon}
            title="Farm Fresh Eggs"
            description="Nutritious, large eggs from our free-range chickens."
            price="GH₵ 35.00 / dozen"
          />
          
          <ProductCard 
            icon={EggFried}
            title="Nkosua Ne Mako"
            description="Traditional Ghanaian egg and pepper dish, rich in flavor."
            price="GH₵ 45.00"
          />
        </div>
        
        <div className="mt-8 md:mt-10 text-center">
          <Button className="bg-farm-burgundy hover:bg-farm-brown" onClick={() => window.location.href = "tel:+233555198194"}>
            Call to Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
