
import React from 'react';
import { Carrot, EggFried, Home } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Our Farm Story</h2>
          <div className="w-16 md:w-24 h-1 bg-farm-yellow mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg">
              Located in Millennium City, Ghana, our family-owned farm has been dedicated to raising healthy poultry for over 20 years.
            </p>
            <p className="text-sm md:text-base">
              We take pride in our sustainable farming practices, ensuring that our birds have space to roam freely and are fed with high-quality organic feed. This dedication results in superior quality meat and eggs that you can taste.
            </p>
            <p className="text-sm md:text-base">
              The farm's success is driven by a commitment to sustainable practices, community engagement, and consistent product quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-farm-yellow/20 p-4 md:p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <Home className="mx-auto text-farm-brown mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12" />
              <h3 className="font-bold">Sustainable Farming</h3>
              <p className="text-xs md:text-sm mt-2">Environmentally conscious methods that respect nature</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-4 md:p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <EggFried className="mx-auto text-farm-brown mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12" />
              <h3 className="font-bold">Premium Quality</h3>
              <p className="text-xs md:text-sm mt-2">Fresh eggs and meat with exceptional taste</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-4 md:p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <Carrot className="mx-auto text-farm-brown mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12" />
              <h3 className="font-bold">Organic Feed</h3>
              <p className="text-xs md:text-sm mt-2">Natural, nutritious feed for healthier birds</p>
            </div>
            
            <div className="bg-farm-yellow/20 p-4 md:p-6 rounded-xl text-center hover:bg-farm-yellow/40 transition-colors">
              <EggFried className="mx-auto text-farm-brown mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12" />
              <h3 className="font-bold">Traditional Recipes</h3>
              <p className="text-xs md:text-sm mt-2">Authentic Ghanaian delicacies prepared with care</p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Why Choose Us</h2>
            <div className="w-16 md:w-24 h-1 bg-farm-yellow mx-auto mb-4 md:mb-6"></div>
            <p className="max-w-2xl mx-auto text-farm-brown text-sm md:text-base">
              At Ekow Sam Farms, we combine traditional knowledge with modern farming techniques to deliver the best poultry products.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-farm-burgundy">Local Expertise</h3>
              <p className="text-sm md:text-base">Our deep understanding of Ghanaian poultry farming ensures we raise our birds in optimal conditions suitable for our local climate.</p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-farm-burgundy">Community Focus</h3>
              <p className="text-sm md:text-base">We prioritize hiring locally and supporting community initiatives, contributing to economic development in Millennium City.</p>
            </div>
            
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-farm-burgundy">Taste Guarantee</h3>
              <p className="text-sm md:text-base">Our customers consistently praise the exceptional flavor of our products, from our fresh eggs to our prepared dishes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
