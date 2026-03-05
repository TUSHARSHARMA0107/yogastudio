import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Warm Ambient Lighting",
    desc: "Soft illumination designed to soothe both the eyes and the mind.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Silent Acoustics",
    desc: "Isolated from external noise—clarity for every breath and movement.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Natural Textures",
    desc: "Wood, clay, and organic surfaces for a truly grounded experience.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Small Batch Sessions",
    desc: "Limited capacity for deeper focus and a personalized practice.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80",
  },
];

const YogaStudioDetails = () => {
  const [active, setActive] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-neutral-950 font-sans">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[active].image}
              alt={slides[active].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-3xl">

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={`tag-${active}`}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-stone-400" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-300 font-light">
              Concept 0{active + 1} — Narrative
            </span>
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-6">
            <motion.h2
              key={`title-${active}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif text-white leading-[0.9] tracking-tight"
            >
              {slides[active].title}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            key={`desc-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-stone-300/80 font-light leading-relaxed mb-12 max-w-lg"
          >
            {slides[active].desc}
          </motion.p>

          {/* CTA + Pagination */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-semibold overflow-hidden"
            >
              <span className="relative z-10">Book a Session</span>
              <div className="absolute inset-0 bg-stone-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <div className="flex gap-4 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group relative py-4 focus:outline-none"
                >
                  <div className="h-[2px] w-12 md:w-16 bg-white/20 overflow-hidden relative group-hover:bg-white/40">
                    {i === active && (
                      <motion.div
                        layoutId="progress-bar"
                        className="absolute inset-0 bg-white"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                  </div>

                  <span className={`absolute -top-2 left-0 text-[10px] transition-opacity duration-500 ${
                    i === active ? "opacity-100 text-white" : "opacity-0 text-stone-500"
                  }`}>
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Side Decoration */}
      <div className="absolute right-12 bottom-12 hidden lg:block text-white/20 [writing-mode:vertical-rl] tracking-[0.5em] text-[10px] uppercase">
        Breath — Movement — Stillness
      </div>

    </section>
  );
};

export default YogaStudioDetails;