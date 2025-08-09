import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const DownloadCTA = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const navigate = useNavigate();

  const features = [
    {
      number: "01",
      title: "Instant AI Analysis",
      description:
        "Snap a photo and get immediate carbon footprint insights powered by advanced AI",
      badge: "AI-Powered",
    },
    {
      number: "02",
      title: "Personalized Goals",
      description:
        "Set and track climate goals tailored specifically for African youth and culture",
      badge: "Custom Goals",
    },
    {
      number: "03",
      title: "Community Impact",
      description:
        "Connect with climate-conscious peers across Africa and amplify your impact",
      badge: "Young Users",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-50 rounded-full blur-2xl opacity-40 animate-float"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center ${
            isIntersecting ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 border border-emerald-200 rounded-full mb-10">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-emerald-700 font-display font-semibold text-sm tracking-wide">
              Download YeneSteps Today
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-6xl lg:text-7xl font-display font-black text-dark mb-8 leading-tight">
            Start your climate journey <br className="hidden lg:block" />
            <span className="text-green-gradient relative">
              today
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-200 opacity-50 rounded-full"></div>
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-2xl font-body text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            Join our{" "}
            <span className="font-semibold text-emerald-600">
              many young African members
            </span>{" "}
            using AI to track their carbon footprint and make a real, measurable
            impact on climate change
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button
              onClick={() => navigate("/coming-soon")}
              className="group bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-display font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-4"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-gray-900 font-bold text-sm">iOS</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300 font-body">
                  Download on the
                </div>
                <div className="text-xl font-display font-bold">App Store</div>
              </div>
            </button>

            <button
              onClick={() => navigate("/coming-soon")}
              className="group bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-2xl text-lg font-display font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-4"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-gray-900 font-bold text-sm">And</span>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-300 font-body">Get it on</div>
                <div className="text-xl font-display font-bold">
                  Google Play
                </div>
              </div>
            </button>
          </div>

          {/* Features Preview */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ${
              isIntersecting ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white border border-gray-200 hover:border-emerald-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                  {/* Number and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <span className="text-primary font-bold text-lg">
                        {feature.number}
                      </span>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-display font-semibold">
                      {feature.badge}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-dark mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl border border-emerald-200">
            <h3 className="text-2xl font-display font-bold text-dark mb-4">
              Ready to make a difference?
            </h3>
            <p className="text-gray-600 font-body mb-6 max-w-2xl mx-auto">
              Download YeneSteps now and join the movement of young Africans
              leading the fight against climate change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/coming-soon")}
                className="btn-green px-8 py-4 rounded-2xl text-lg font-display font-semibold shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm6.293-6.707a1 1 0 010-1.414l3-3a1 1 0 111.414 1.414L12.414 9H15a1 1 0 110 2h-2.586l1.293 1.293a1 1 0 11-1.414 1.414l-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Download Free Now</span>
              </button>

              <button className="btn-outline-green px-8 py-4 rounded-2xl text-lg font-display font-semibold flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
