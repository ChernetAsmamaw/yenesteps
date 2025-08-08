import React from 'react';

const Footer: React.FC = () => (
  <footer className="py-20 bg-gray-50 border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-8">
      <div className="text-center">
        <div className="text-ydark/70 text-lg mb-3 font-light">© {new Date().getFullYear()} Yene Steps</div>
        <div className="text-ydark/50 font-light">Piloting in Rwanda & Ethiopia • Designed for African youth</div>
      </div>
    </div>
  </footer>
);

export default Footer;
