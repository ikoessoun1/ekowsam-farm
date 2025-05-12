
import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, MapPin, Phone, Mail } from 'lucide-react';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  details 
}: { 
  icon: React.ElementType, 
  title: string, 
  details: string | React.ReactNode 
}) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-3 md:gap-4 items-center md:items-start hover:shadow-lg transition-shadow">
      <div className="bg-farm-yellow/30 p-3 rounded-full">
        <Icon className="h-6 w-6 text-farm-burgundy" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-bold text-farm-burgundy mb-1">{title}</h3>
        <div className="text-farm-brown text-sm md:text-base">{details}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-farm-yellow/10">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-farm-brown text-sm md:text-base">
            Have questions or want to place an order? Get in touch with us today!
          </p>
          <div className="w-16 md:w-24 h-1 bg-farm-burgundy mx-auto mt-3 md:mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <ContactCard 
              icon={Home} 
              title="Farm Location" 
              details="25 Millennium City Street, Behind DL Hospital, Accra, Ghana" 
            />
            
            <ContactCard 
              icon={Phone} 
              title="Phone" 
              details={<a href="tel:+233555198194" className="hover:text-farm-burgundy">+233 555 198 194</a>} 
            />
            
            <ContactCard 
              icon={Mail} 
              title="Email" 
              details={<a href="mailto:hello@ekowsamfarms.com" className="hover:text-farm-burgundy">hello@ekowsamfarms.com</a>} 
            />
            
            <ContactCard 
              icon={MapPin} 
              title="Opening Hours" 
              details={
                <div className="space-y-1">
                  <p>Monday to Friday: 8am - 6pm</p>
                  <p>Saturday: 8am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              } 
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-farm-burgundy">Direct Contact</h3>
              <p className="mb-4 text-sm md:text-base">For the fastest response, please call us directly or visit our farm in Millennium City.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="w-full bg-farm-burgundy hover:bg-farm-brown" onClick={() => window.location.href = "tel:+233555198194"}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
                <Button className="w-full bg-farm-yellow text-farm-burgundy hover:bg-farm-burgundy hover:text-white" onClick={() => window.location.href = "mailto:hello@ekowsamfarms.com"}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-farm-burgundy">Visit Our Farm</h3>
              <p className="mb-4 text-sm md:text-base">Experience our sustainable farming practices firsthand and purchase fresh products directly from the source.</p>
              <div className="aspect-video bg-farm-yellow/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="font-medium">Map Placeholder</p>
                  <p className="text-xs md:text-sm text-farm-brown">25 Millennium City Street, Behind DL Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
