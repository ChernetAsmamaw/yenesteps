import React from 'react';

const Testimonials: React.FC = () => {
  return (
  <section className="py-section bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-light text-ydark leading-[1.1] mb-12">
              Trusted by climate-conscious individuals
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-ygreen rounded-full"></div>
                <span className="text-ydark/60 text-lg font-light">Students</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-ygreen rounded-full"></div>
                <span className="text-ydark/60 text-lg font-light">Families</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-ygreen rounded-full"></div>
                <span className="text-ydark/60 text-lg font-light">Communities</span>
              </div>
            </div>
          </div>
          
          {/* Main testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 reveal">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-16 h-16 bg-ygreen rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-ydark font-medium text-lg">SA</span>
                </div>
                <div>
                  <h4 className="font-medium text-ydark text-lg mb-1">Sarah Anderson</h4>
                  <p className="text-ydark/60 font-light">Environmental Science Student</p>
                </div>
              </div>
              <blockquote className="text-xl text-ydark/80 leading-relaxed font-light">
                "YeneSteps has completely transformed how I understand my environmental impact. 
                The personalized insights helped me reduce my carbon footprint by 30% in just three months. 
                It's amazing to see real data about the difference my choices make."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
