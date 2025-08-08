import React from 'react';

const ImpactStats: React.FC = () => (
  <section id="impact" className="py-20 bg-primary text-white">
    <div className="max-w-container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8">Our Growing Impact Across Africa</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-primary_light/30 rounded-2xl p-8 text-center">
          <div className="text-3xl font-bold">150,000<span className="text-lg font-normal">kg</span></div>
          <div className="mt-2 text-lg font-medium">CO2 Tracked</div>
          <div className="text-sm opacity-80">Total carbon footprint analyzed</div>
        </div>
        <div className="bg-primary_light/30 rounded-2xl p-8 text-center">
          <div className="text-3xl font-bold">10,000<span className="text-lg font-normal">+</span></div>
          <div className="mt-2 text-lg font-medium">Active Users</div>
          <div className="text-sm opacity-80">Across Rwanda and Ethiopia</div>
        </div>
        <div className="bg-primary_light/30 rounded-2xl p-8 text-center">
          <div className="text-3xl font-bold">95<span className="text-lg font-normal">%</span></div>
          <div className="mt-2 text-lg font-medium">Accuracy Rate</div>
          <div className="text-sm opacity-80">AI recognition precision</div>
        </div>
        <div className="bg-primary_light/30 rounded-2xl p-8 text-center">
          <div className="text-3xl font-bold">30<span className="text-lg font-normal">%</span></div>
          <div className="mt-2 text-lg font-medium">Average Reduction</div>
          <div className="text-sm opacity-80">In user carbon footprint</div>
        </div>
      </div>
    </div>
  </section>
);

export default ImpactStats;
