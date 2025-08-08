import React from 'react';

const Features: React.FC = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-primary mb-12">Features</h2>
      {/* TODO: Alternating image/text feature blocks */}
      <div className="grid gap-16">
        {/* Feature 1 */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="flex-1 bg-gray-50 rounded-2xl h-64 mb-6 md:mb-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">AI-Powered Image Recognition</h3>
            <p className="mb-4 text-gray-600">Simply take a photo of your meal, transport method, or energy usage. Our AI instantly analyzes and calculates the carbon footprint of your daily activities.</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Instant photo analysis</li>
              <li>Local food database</li>
              <li>Transport recognition</li>
              <li>Energy usage tracking</li>
            </ul>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="md:flex md:items-center md:gap-12 flex-row-reverse">
          <div className="flex-1 bg-neutral_50 rounded-2xl h-64 mb-6 md:mb-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Personalized Insights & Alternatives</h3>
            <p className="mb-4 text-neutral_600">Get tailored recommendations based on your location, lifestyle, and preferences. Discover sustainable alternatives that fit your African context.</p>
            <ul className="list-disc pl-5 text-neutral_600">
              <li>Weekly progress reports</li>
              <li>Local sustainability tips</li>
              <li>Peer comparisons</li>
              <li>Achievement badges</li>
            </ul>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="flex-1 bg-neutral_50 rounded-2xl h-64 mb-6 md:mb-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Community Impact Tracking</h3>
            <p className="mb-4 text-neutral_600">Join a growing community of climate-conscious Africans. Track collective impact and participate in local environmental challenges.</p>
            <ul className="list-disc pl-5 text-neutral_600">
              <li>Community challenges</li>
              <li>Local impact metrics</li>
              <li>Friend connections</li>
              <li>Regional leaderboards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
