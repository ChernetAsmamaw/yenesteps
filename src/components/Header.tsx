import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-white shadow-lg shadow-emerald-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-gradient rounded-2xl flex items-center justify-center animate-pulse-green">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-display font-bold text-dark">
            Yene<span className="text-green-gradient">Steps</span>
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-10">
          {["Features", "Services", "Impact", "Download"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-display font-medium text-dark/80 hover:text-emerald-500 transition-all duration-300 relative group pb-1 ${
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-200"
                  : index === 2
                  ? "delay-300"
                  : "delay-400"
              }`}
            >
              {item}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-gradient transition-all duration-300 group-hover:w-full rounded-full"></div>
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block btn-green px-8 py-3 rounded-full text-sm font-display font-semibold shadow-lg hover:shadow-emerald-500/25">
          Get Started Free
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 flex flex-col justify-center items-center space-y-1"
            aria-label="Toggle mobile menu"
          >
            <div
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMobileMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                isMobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-80 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 px-4">
          {["Features", "Services", "Impact", "Download"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display font-medium text-dark/80 hover:text-emerald-500 transition-all w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn-green w-full py-3 rounded-full text-sm font-display font-semibold shadow-lg hover:shadow-emerald-500/25 mt-2">
            Get Started Free
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
