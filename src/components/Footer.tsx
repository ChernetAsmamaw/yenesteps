import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Footer = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    { name: "Facebook", label: "FB", href: "#" },
    { name: "Twitter", label: "TW", href: "#" },
    { name: "Instagram", label: "IG", href: "#" },
    { name: "LinkedIn", label: "LI", href: "#" },
  ];

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#services" },
    { name: "Impact Stats", href: "#impact" },
    { name: "Download", href: "#download" },
    { name: "API Access", href: "#" },
    { name: "Security", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News & Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Partnerships", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Data Protection", href: "#" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-white py-20 px-6 relative overflow-hidden border-t border-gray-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #22c55e 2px, transparent 2px),
                              radial-gradient(circle at 80% 80%, #22c55e 1px, transparent 1px)`,
            backgroundSize: "80px 80px, 40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <span className="text-3xl font-bold text-dark">YeneSteps</span>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
                Empowering African farmers through AI-powered crop monitoring,
                community collaboration, and sustainable agriculture insights.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* App Store Badges */}
              {/* <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl">
                  <span className="text-sm font-semibold text-gray-700">
                    4.8★
                  </span>
                  <span className="text-xs text-gray-500">App Store</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl">
                  <span className="text-sm font-semibold text-gray-700">
                    50K+
                  </span>
                  <span className="text-xs text-gray-500">Downloads</span>
                </div>
              </div> */}
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-dark">Product</h3>
              <ul className="space-y-4">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-dark">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section
          <div className="bg-gray-50 rounded-3xl p-10 mb-16 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-dark">
                  Stay Updated on Climate Action
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get the latest climate action tips, sustainability insights,
                  and YeneSteps updates delivered directly to your inbox every
                  week.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300"
                  />
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap">
                    Subscribe Free
                  </button>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Weekly insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-gray-500 text-center md:text-left">
                  © 2025 YeneSteps. All rights reserved.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  {legalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-500 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-500">
                <span>Made with</span>
                <span className="text-primary font-semibold">love</span>
                <span>in Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
