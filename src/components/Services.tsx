import React from "react";

const useIntersectionObserver = <T extends HTMLElement>(
  options = {}
): [React.RefObject<T | null>, boolean] => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<T>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const services = [
  {
    id: 1,
    icon: "🌱",
    title: "Crop Health Analysis",
    description:
      "Snap a photo of your crops and get instant AI analysis of plant health, disease detection, and pest warnings.",
    features: [
      "98% Accuracy Rate",
      "Instant Identification",
      "Region-Specific Insights",
    ],
    color: "from-emerald-400 to-green-500",
  },
  {
    id: 2,
    icon: "💡",
    title: "Personalized Farming Tips",
    description:
      "Receive custom advice on irrigation, fertilization, and planting techniques based on your crops, soil type, and local climate.",
    features: [
      "Location-Based Guidance",
      "Crop-Specific Recommendations",
      "Actionable Steps",
    ],
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    icon: "📊",
    title: "Farm Performance Dashboard",
    description:
      "Monitor your farm's progress with real-time insights on crop growth, yield forecasts, and resource usage.",
    features: [
      "Real-time Visualization",
      "Goal Tracking",
      "Productivity Analytics",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    icon: "👥",
    title: "Community Farming Challenges",
    description:
      "Join farmer competitions and share best practices, sustainable methods, and innovative techniques with peers across Africa.",
    features: ["Peer Learning", "Friendly Competitions", "Practical Rewards"],
    color: "from-green-500 to-emerald-600",
  },
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #34d399 1px, transparent 1px)`,
              backgroundSize: "60px 60px, 40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-emerald-700 font-display font-semibold text-sm tracking-wide">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-display font-black text-dark mb-8 leading-tight">
            AI-Powered Farming Solutions <br className="hidden lg:block" />
            <span className="text-green-gradient">
              Built for African Farmers
            </span>
          </h2>

          <p className="text-xl font-body text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Smart technology meets African agriculture to provide actionable
            insights, improve productivity, and empower farmers across the
            continent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-white border border-gray-100 hover:border-emerald-200 p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Service Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <span>{service.icon}</span>
                  </div>

                  <div className="text-right">
                    <div className="w-12 h-12 bg-gray-50 group-hover:bg-emerald-50 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <span className="text-lg font-display font-bold text-gray-400 group-hover:text-emerald-500">
                        0{service.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-dark mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 font-body mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="font-body">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-emerald-200 transition-colors duration-300">
                    <button className="text-emerald-600 font-display font-semibold hover:text-emerald-700 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2 transform">
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-emerald-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
