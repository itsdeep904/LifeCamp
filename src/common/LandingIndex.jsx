import React from 'react';
import { Link } from "react-router-dom";

const LandingIndex = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Connecting People to Life-Saving Camps
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-white">
          LifeCamp helps organizers set up blood, organ, and polio camps while allowing users to easily locate nearby camps and get directions with Google Maps.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Link to="/LoginForm">
            <button className="bg-[var(--hover-bg-color)] text-[var(--hover-text-color)] border-2 border-white px-6 py-3 rounded-md text-lg font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>
            </Link>
            <button className="bg-[var(--hover-bg-color)] border-2 border-white px-6 py-3 rounded-md text-lg text-[var(--hover-text-color)] font-medium hover:bg-[var(--hover-bg-color)] hover:opacity-90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingIndex;