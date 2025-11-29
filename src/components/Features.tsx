import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const features = [
  {
    number: "01",
    title: "Smart Crop Recognition",
    description:
      "AI identifies crop species, detects diseases, and provides region-specific insights using local agricultural data.",
    stats: "98% accuracy",
    metric: "Millions of crops analyzed",
  },
  {
    number: "02",
    title: "Farm Dashboard",
    description:
      "Track crop health, soil moisture, and productivity metrics with real-time dashboards and personalized recommendations.",
    stats: "Real-time Monitoring",
    metric: "Average 20% yield improvement",
  },
  {
    number: "03",
    title: "Farmer Network",
    description:
      "Connect with other farmers, share techniques, and participate in challenges to improve agricultural outcomes together.",
    stats: "Community Insights",
    metric: "Daily community tips",
  },
  {
    number: "04",
    title: "Localized Advice",
    description:
      "Get culturally relevant, climate- and soil-aware guidance for farming in different African regions.",
    stats: "Tailored for Africa",
    metric: "54 countries covered",
  },
  {
    number: "05",
    title: "Offline Capabilities",
    description:
      "Access essential AI insights and tracking even with limited connectivity in rural areas.",
    stats: "Works offline",
    metric: "90% rural coverage",
  },
  {
    number: "06",
    title: "Agricultural Insights",
    description:
      "Use region-specific farming data to make decisions that improve local crop yields and community sustainability.",
    stats: "Local Data Integration",
    metric: "1000+ local data sources",
  },
];

const Features = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="py-24 px-6 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.03) 25%, rgba(16, 185, 129, 0.03) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.03) 75%, rgba(16, 185, 129, 0.03) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.03) 25%, rgba(16, 185, 129, 0.03) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.03) 75%, rgba(16, 185, 129, 0.03) 76%, transparent 77%)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 ${
            isIntersecting ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white border border-emerald-200 rounded-full mb-8 shadow-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-emerald-700 font-display font-semibold text-sm tracking-wide">
              Powerful Features
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-display font-black text-dark mb-8 leading-tight">
            Advanced Tools for <br className="hidden lg:block" />
            <span className="text-green-gradient">Smart Farming</span>
          </h2>

          <p className="text-xl font-body text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AI technology designed specifically for African farmers to optimize
            productivity, reduce risks, and improve sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group ${
                isIntersecting ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 h-full">
                {/* Number and Stats Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative z-10">
                    <span className="text-primary font-bold text-lg">
                      {feature.number}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-display font-semibold">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold text-dark mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 font-body leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Metric */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-emerald-200 transition-colors duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm font-display font-medium text-emerald-600">
                        {feature.metric}
                      </span>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <svg
                        className="w-5 h-5 text-emerald-500"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`${isIntersecting ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.7s" }}
        >
          <div className="bg-white rounded-3xl p-12 border border-gray-200 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-40"></div>

            <div className="relative z-10">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-display font-bold text-dark mb-6">
                  Experience the Future of{" "}
                  <span className="text-green-gradient">Farming</span>
                </h3>

                <p className="text-xl font-body text-gray-600 mb-10 leading-relaxed">
                  Join thousands of African farmers using AI to increase
                  productivity, reduce risks, and farm smarter. Download
                  AwakiFarmer today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    onClick={() => navigate("/coming-soon")}
                    className="btn-green px-10 py-4 rounded-2xl text-lg font-display font-semibold shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
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
                    <span>Try AwakiFarmer Free</span>
                  </button>

                  <button className="btn-outline-green px-10 py-4 rounded-2xl text-lg font-display font-semibold flex items-center justify-center space-x-2">
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1m-6 0V9a2 2 0 012-2h2"
                      />
                    </svg>
                    <span>Watch Demo Video</span>
                  </button>
                </div>

                {/* Feature highlights */}
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>No Credit Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>Privacy First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
