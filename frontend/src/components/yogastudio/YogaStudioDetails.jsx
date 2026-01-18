import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Warm Ambient Lighting",
    desc: "Soft illumination designed to soothe both the eyes and the mind.",
    image: "/images/studio/lighting.jpg",
  },
  {
    title: "Silent Acoustics",
    desc: "Isolated from external noise—clarity for every breath and movement.",
    image: "/images/studio/acoustics.jpg",
  },
  {
    title: "Natural Textures",
    desc: "Wood, clay, and organic surfaces for a truly grounded experience.",
    image: "/images/studio/textures.jpg",
  },
  {
    title: "Small Batch Sessions",
    desc: "Limited capacity for deeper focus and a personalized practice.",
    image: "/images/studio/sessions.jpg",
  },
];

const YogaStudioDetails = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-end md:items-center overflow-hidden bg-stone-900">
      
      {/* --- BACKGROUND IMAGES --- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          />
        ))}
        {/* Dynamic Overlay: Darker on mobile for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-black/40" />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-0">
        
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="overflow-hidden mb-4">
            <span className="inline-block text-[10px] md:text-xs tracking-[0.3em] uppercase text-stone-300 animate-reveal">
              Studio Concept 0{active + 1}
            </span>
          </div>

          {/* Heading: Fluid sizing for mobile screens */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-white leading-[1.1] mb-6">
            {slides[active].title}
          </h2>

          {/* Description: Hidden or shortened on very small screens if necessary */}
          <p className="text-base md:text-xl text-stone-300 leading-relaxed mb-10 max-w-md">
            {slides[active].desc}
          </p>

          {/* NAVIGATION & ACTION */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium hover:bg-stone-200 transition-all active:scale-95">
              Book a Session
            </button>

            {/* Progress Indicators: Larger touch targets for mobile */}
            <div className="flex gap-2 w-full sm:w-auto justify-between sm:justify-start">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative h-2 flex-1 sm:w-12 sm:flex-initial bg-white/20 rounded-full overflow-hidden"
                >
                  {i === active && (
                    <div className="absolute inset-0 bg-white origin-left animate-progress" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- INLINE STYLES FOR ANIMATION --- */}
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes reveal {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default YogaStudioDetails;