
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
    <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 items-start hover:shadow-lg transition-shadow">
      <div className="bg-farm-yellow/30 p-3 rounded-full">
        <Icon className="h-6 w-6 text-farm-burgundy" />
      </div>
      <div>
        <h3 className="font-bold text-farm-burgundy mb-1">{title}</h3>
        <div className="text-farm-brown">{details}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-farm-yellow/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-farm-brown">
            Have questions or want to place an order? Get in touch with us today!
          </p>
          <div className="w-24 h-1 bg-farm-burgundy mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <ContactCard 
              icon={Home} 
              title="Farm Location" 
              details="123 Farm Road, Accra, Ghana" 
            />
            
            <ContactCard 
              icon={Phone} 
              title="Phone" 
              details={<a href="tel:+233123456789" className="hover:text-farm-burgundy">+233 12 345 6789</a>} 
            />
            
            <ContactCard 
              icon={Mail} 
              title="Email" 
              details={<a href="mailto:info@farmfresh.gh" className="hover:text-farm-burgundy">info@farmfresh.gh</a>} 
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
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-farm-burgundy">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-farm-brown mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-farm-yellow/50 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-farm-brown mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-farm-yellow/50 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-burgundy"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-farm-brown mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-farm-yellow/50 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-burgundy"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-farm-brown mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-farm-yellow/50 rounded-md focus:outline-none focus:ring-2 focus:ring-farm-burgundy"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-farm-burgundy hover:bg-farm-brown">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
