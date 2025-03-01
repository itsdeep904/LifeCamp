import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const LandingContact = () => {
  return (
    <section id="contact" className="py-16 bg-[var(--background-center-color)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[var(--hover-text-color)] mx-auto"></div>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Have questions or ready to start your journey towards sustainability? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Our Location</h4>
                  <p>123 Eco Street, Green City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email Us</h4>
                  <p>info@ecotech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--edit-color)] text-gray-800"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--edit-color)] text-gray-800"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--edit-color)] text-gray-800"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--edit-color)] text-gray-800"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[var(--hover-bg-color)] text-[var(--hover-text-color)] px-6 py-3 border-2 border-white rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContact;