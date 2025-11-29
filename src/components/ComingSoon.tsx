import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useForm, ValidationError } from "@formspree/react";

const ComingSoon = () => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  // Get the form ID from environment variable with fallback
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || "demo";

  // Use Formspree's hook - only initialize if we have a valid form ID
  const [state, handleSubmit] = useForm(formId);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #22c55e 2px, transparent 2px),
                              radial-gradient(circle at 80% 80%, #22c55e 1px, transparent 1px)`,
            backgroundSize: "100px 100px, 50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Go Back Button */}
        <div className="flex justify-start mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Go Back</span>
          </button>
        </div>

        <div className={`${isIntersecting ? "animate-slide-up" : "opacity-0"}`}>
          {/* App Icon */}
          <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <span className="text-white font-bold text-4xl">Y</span>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3"></div>
            <span className="text-gray-700 font-semibold text-sm tracking-wide">
              APP LAUNCHING SOON
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
            AwakiFarmer is
            <br />
            <span className="text-primary">Coming Soon</span>
          </h1>

          {/* Newsletter Signup */}
          <div className="bg-gray-50 rounded-3xl p-10 mb-16 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-dark">
              Get Notified When We Launch
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of farmers waiting for early access
            </p>

            {!import.meta.env.VITE_FORMSPREE_FORM_ID ||
            import.meta.env.VITE_FORMSPREE_FORM_ID ===
              "your_formspree_form_id_here" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">
                  Email Signup Not Configured
                </h4>
                <p className="text-gray-600 text-sm">
                  Please set up your Formspree form ID in the environment
                  variables.
                  <br />
                  Create a{" "}
                  <code className="bg-gray-200 px-1 rounded">.env</code> file
                  and add your form ID.
                </p>
              </div>
            ) : state.succeeded ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">
                  You're on the list!
                </h4>
                <p className="text-gray-600">
                  We'll notify you as soon as AwakiFarmer is available.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300"
                    required
                    disabled={state.submitting}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Submitting..." : "Notify Me"}
                  </button>
                </div>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Early access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Exclusive updates</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
