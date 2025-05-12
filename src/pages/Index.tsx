
import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import FeaturedDish from "../components/FeaturedDish";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  // Update title on mount
  useEffect(() => {
    document.title = "FarmFresh Poultry | Premium Ghanaian Poultry Products";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <FeaturedDish />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
