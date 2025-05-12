
import React from 'react';
import { Carrot, EggFried, Home } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Farm Story</h2>
          <div className="w-24 h-1 bg-farm-yellow mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Located in the beautiful countryside of Ghana, our family-owned farm has been dedicated to raising healthy poultry for over 20 years.
            </p>
            <p>
              We take pride in our sustainable farming practices, ensuring that our birds have space to roam freely and are fed with high-quality organic feed. This dedication results in superior quality meat and eggs that you can taste.
            </p>
            <p>
              Our farm specializes in both traditional poultry products and authentic Ghanaian delicacies, including our famous "Nkosua Ne Mako" (eggs with pepper) - a nutritious and flavorful dish loved by many.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-farm-yellow/20 p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <Home className="mx-auto text-farm-brown mb-4 h-12 w-12" />
              <h3 className="font-bold">Sustainable Farming</h3>
              <p className="text-sm mt-2">Environmentally conscious methods that respect nature</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <EggFried className="mx-auto text-farm-brown mb-4 h-12 w-12" />
              <h3 className="font-bold">Premium Quality</h3>
              <p className="text-sm mt-2">Fresh eggs and meat with exceptional taste</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <Carrot className="mx-auto text-farm-brown mb-4 h-12 w-12" />
              <h3 className="font-bold">Organic Feed</h3>
              <p className="text-sm mt-2">Natural, nutritious feed for healthier birds</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <EggFried className="mx-auto text-farm-brown mb-4 h-12 w-12" />
              <h3 className="font-bold">Traditional Recipes</h3>
              <p className="text-sm mt-2">Authentic Ghanaian delicacies prepared with care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
