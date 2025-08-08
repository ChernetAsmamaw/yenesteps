import React from 'react';

const Header: React.FC = () => (
  <header className="px-8 py-6 flex justify-between items-center bg-white section-sep sticky top-0 z-50">
    <div className="text-2xl font-light text-ydark">Yene Steps</div>
    <nav className="flex items-center gap-8">
      <a href="#services" className="text-lg text-ydark/70 hover:text-ydark transition-colors font-light">Services</a>
      <button className="bg-ygreen text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-colors">
        Book an appointment
      </button>
    </nav>
  </header>
);

export default Header;
