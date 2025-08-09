import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ImpactStats = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-600"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
            <span className="text-white font-medium text-sm">Our Impact</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            Driving Real Change
            <br />
            Across Africa
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how YeneSteps is empowering young Africans to make measurable
            climate impact through AI-powered insights and community action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={`text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">50K</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Active Users
              </h3>
              <p className="text-white/70 text-sm">
                Young Africans tracking their impact
              </p>
            </div>
          </div>

          <div
            className={`text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">2.5M</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">2.5M+</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Photos Analyzed
              </h3>
              <p className="text-white/70 text-sm">
                AI-powered carbon calculations
              </p>
            </div>
          </div>

          <div
            className={`text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">15%</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">15%</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Average Reduction
              </h3>
              <p className="text-white/70 text-sm">
                In personal carbon footprint
              </p>
            </div>
          </div>

          <div
            className={`text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">54</span>
              </div>
              <div className="text-5xl font-bold text-white mb-2">54</div>
              <h3 className="text-xl font-bold text-white mb-2">
                African Countries
              </h3>
              <p className="text-white/70 text-sm">Where YeneSteps is active</p>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Be Part of the Solution
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join the growing community of climate-conscious youth making a real
            difference across Africa
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Start Your Impact Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
