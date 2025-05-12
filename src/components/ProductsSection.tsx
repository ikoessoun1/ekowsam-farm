
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
      <div className="bg-farm-yellow/20 p-6 flex justify-center">
        <Icon className="h-16 w-16 text-farm-burgundy" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-farm-brown mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-farm-burgundy font-bold text-lg">{price}</span>
          <Button size="sm" className="bg-farm-burgundy hover:bg-farm-brown">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="max-w-2xl mx-auto text-farm-brown">
            We offer a variety of premium poultry products, from fresh meat to farm eggs and traditional Ghanaian dishes.
          </p>
          <div className="w-24 h-1 bg-farm-burgundy mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <div className="mt-10 text-center">
          <Button className="bg-farm-burgundy hover:bg-farm-brown">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
