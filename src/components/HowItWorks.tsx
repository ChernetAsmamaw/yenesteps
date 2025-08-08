import React from 'react';

const HowItWorks: React.FC = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-ygreen/5 rounded-full -translate-y-48 -translate-x-48"></div>
    
    <div className="max-w-6xl mx-auto text-center px-8 relative">
      <p className="text-lg text-ygreen font-medium mb-8 uppercase tracking-wide">Services</p>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-ydark mb-8 leading-[1.1] max-w-5xl mx-auto">
        Let us handle the numbers,<br />
        so you can handle your impact.
      </h2>
      <p className="text-xl text-ydark/70 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
        Serving individuals and communities since our pilot launch in Rwanda and Ethiopia
      </p>

      <div className="flex justify-center mb-24">
        <button className="bg-ydark text-white px-12 py-6 rounded-full text-lg font-light hover:bg-ydark/90 transition-all duration-300 shadow-lg hover:shadow-xl">
          Schedule a call
        </button>
      </div>
    </div>

    {/* Feature Section with Image */}
    <div className="bg-gradient-to-br from-ygreen to-ygreen/80 py-32 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-8">
        <div className="relative">
          {/* Placeholder for 3D illustration of phone/app */}
          <div className="w-full h-96 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
            <span className="text-ydark/70 text-lg font-light">[AI Analysis Illustration]</span>
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 rounded-full"></div>
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-light text-ydark mb-8 leading-[1.1]">
            AI Image Analysis<br />
            & Local Insights
          </h3>
          <p className="text-xl text-ydark/70 leading-relaxed font-light mb-8">
            Snap a photo of meals, transport, or energy use and get instant carbon footprint analysis 
            with personalized recommendations tailored for African contexts and local alternatives.
          </p>
          <button className="bg-white text-ydark px-8 py-4 rounded-full font-light hover:bg-white/90 transition-colors shadow-lg">
            Learn more
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
