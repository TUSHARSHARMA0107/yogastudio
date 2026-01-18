import React from "react";
import { useNavigate } from "react-router-dom";

const YogaCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#FAF9F6] border-t border-stone-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-6">
          Final Thought
        </span>

        <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight mb-8">
          Begin Your <br />
          <span className="not-italic font-sans font-light text-stone-600">Purest Practice</span>
        </h2>

        <p className="text-lg text-stone-500 mb-12 max-w-xl mx-auto leading-relaxed">
          Experience yoga in its most authentic form. Join our community and rediscover your inner rhythm.
        </p>

        {/* Both buttons now have 'onClick' navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button 
            onClick={() => navigate("/booking")}
            className="w-full sm:w-auto px-12 py-5 bg-stone-900 text-white font-medium hover:bg-stone-700 transition-all active:scale-95 shadow-xl shadow-stone-200"
          >
            Book My First Class
          </button>
          
          <button 
            onClick={() => navigate("/pricing")}
            className="w-full sm:w-auto px-12 py-5 border border-stone-300 text-stone-900 font-medium hover:border-stone-900 hover:bg-white transition-all active:scale-95"
          >
            View Membership
          </button>
        </div>

        {/* 2026 Social Proof Indicator */}
        <div className="mt-16 pt-8 border-t border-stone-200/60 inline-flex items-center gap-4">
            <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FAF9F6] bg-stone-300" />
                ))}
            </div>
            <p className="text-xs text-stone-400 uppercase tracking-widest">
                Joined by <span className="text-stone-900 font-semibold">120+</span> new members this week
            </p>
        </div>
      </div>
    </section>
  );
};

export default YogaCTA;