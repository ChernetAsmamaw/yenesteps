import React from 'react';
import AnimatedGlobe from './AnimatedGlobe';

const Hero: React.FC = () => (
  <section className="relative bg-white py-section px-8 overflow-hidden">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="reveal show">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-ydark leading-[1.05] mb-8">
          Understand your carbon footprint — one step at a time
        </h1>
        <p className="text-xl text-ydark/70 mb-10 max-w-xl leading-relaxed font-light">
          Snap a photo to get AI-powered impact estimates and localized climate tips designed for African youth.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-ygreen text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition">
            Get the App
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-medium border border-ydark/10 hover:bg-ydark/5 transition">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end reveal show">
        <AnimatedGlobe className="drop-shadow-2xl" />
      </div>
    </div>
  </section>
);

export default Hero;
