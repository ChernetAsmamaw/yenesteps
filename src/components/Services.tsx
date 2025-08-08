import React from 'react';
import Reveal from './Reveal';

const Services: React.FC = () => (
  <section id="services" className="py-section bg-gray-50 relative section-sep">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-ygreen/10 rounded-full -translate-y-24 translate-x-24"></div>
    
    <div className="max-w-6xl mx-auto px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
        <Reveal>
          <div>
            <div className="inline-block bg-ygreen/20 text-ydark px-4 py-2 rounded-full text-sm font-medium mb-6">
              Services
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-ydark leading-[1.1] mb-8">
              Smart Climate Action for everyone
            </h2>
          </div>
        </Reveal>
        <Reveal className="lg:pt-4" delayMs={100}>
          <p className="text-xl text-ydark/70 leading-relaxed font-light">
            At Yene Steps, we believe that climate action should be accessible to 
            everyone—whether you're a student managing daily choices, a family planning 
            sustainable living, or a community leader driving local change.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* For Students */}
        <Reveal delayMs={0}>
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-ygreen to-ygreen/60 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <span className="text-white text-2xl">🎓</span>
          </div>
          <h3 className="text-2xl font-light text-ydark mb-3">For Students</h3>
          <p className="text-lg text-ygreen font-medium mb-6">Simplicity & Learning</p>
          <p className="text-ydark/70 leading-relaxed font-light">
            Stay informed about your daily impact with seamless photo tracking, 
            educational insights, and peer challenges—so you can focus on 
            learning while building sustainable habits.
          </p>
        </div>
        </Reveal>

        {/* For Families */}
        <Reveal delayMs={100}>
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-ygreen to-ygreen/60 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <span className="text-white text-2xl">👨‍👩‍👧‍👦</span>
          </div>
          <h3 className="text-2xl font-light text-ydark mb-3">For Families</h3>
          <p className="text-lg text-ygreen font-medium mb-6">Stability & Planning</p>
          <p className="text-ydark/70 leading-relaxed font-light">
            From meal planning tools to energy-saving insights, 
            we help you plan for the future, reduce household emissions, 
            and keep your family's environmental impact manageable.
          </p>
        </div>
        </Reveal>

        {/* For Communities */}
        <Reveal delayMs={200}>
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-ygreen to-ygreen/60 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <span className="text-white text-2xl">🌍</span>
          </div>
          <h3 className="text-2xl font-light text-ydark mb-3">For Communities</h3>
          <p className="text-lg text-ygreen font-medium mb-6">Growth & Impact</p>
          <p className="text-ydark/70 leading-relaxed font-light">
            Enable collective climate action with community dashboards, 
            local impact reports, and tools that scale individual efforts 
            into meaningful community-wide change.
          </p>
        </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Services;
