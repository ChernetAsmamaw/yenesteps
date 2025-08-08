import React from 'react';

const DownloadCTA: React.FC = () => (
  <section id="download" className="py-20 bg-gradient-to-br from-primary to-accent text-white">
    <div className="max-w-container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className="text-4xl font-bold mb-4">Start Your Climate Journey Today</h2>
        <p className="mb-8 max-w-md">Join thousands of Africans already making a difference. Download YeneSteps and begin understanding your environmental impact.</p>
        <div className="flex gap-4 mb-4">
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow hover:scale-105 transition-transform">
            {/* Apple Store icon */}
            Download for iPhone
          </button>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow hover:scale-105 transition-transform">
            {/* Google Play icon */}
            Get it on Google Play
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">QR</div>
          <span>Scan to download</span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* TODO: 3D rotating phone mockup */}
        <div className="w-64 h-96 bg-white/20 rounded-3xl flex items-center justify-center">
          <span className="text-white">[Phone Mockup]</span>
        </div>
      </div>
    </div>
  </section>
);

export default DownloadCTA;
