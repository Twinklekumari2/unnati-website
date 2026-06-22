import React from "react";

const Impact = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/80"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-light uppercase tracking-wide">
            Our Impact
          </h2>
          <div className="w-10 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase text-white font-semibold">
                Operating Across
              </span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-white">08</h3>
              <p className="text-gray-400 mt-2">Schools</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase text-white font-semibold">
                Taught
              </span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <h3 className="text-5xl font-bold text-white">200+</h3>
            <p className="text-gray-400 mt-2">Students</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase text-white font-semibold">
                Advancing Towards Uplifting
              </span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            <h3 className="text-5xl font-bold text-white">24.8</h3>
            <p className="text-gray-400 mt-2">
              Crore Children
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;