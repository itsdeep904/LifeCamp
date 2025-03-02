import React from 'react';

const LandingAbout = () => {
  return (
    <section id="about" className="bg-[var(--background-center-color)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-[var(--hover-text-color)] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern eco-friendly office" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-6">
            Founded in 2025, LifeCamp is dedicated to helping organizations set up life-saving camps, including blood donation, organ donation, and polio vaccination camps. Our platform enables users to easily find nearby camps and navigate to them using Google Maps. 
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="mb-6">
              We envision a world where technology bridges the gap between communities and life-saving initiatives, ensuring that essential medical camps are easily accessible to everyone in need.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center">
                <h4 className="text-4xl font-bold">50+</h4>
                <p className="mt-2">Hospitals</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold">500+</h4>
                <p className="mt-2">Happy Users</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold">10+</h4>
                <p className="mt-2">Team Members</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold">95%</h4>
                <p className="mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
