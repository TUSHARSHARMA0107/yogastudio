import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const breathPhases = [
  { label: "Inhale", duration: 4000, color: "rgba(186, 230, 253, 0.4)", scale: 1.4, radius: "40% 60% 70% 30% / 40% 50% 60% 50%" },
  { label: "Hold", duration: 4000, color: "rgba(231, 229, 228, 0.4)", scale: 1.4, radius: "50% 50% 50% 50% / 50% 50% 50% 50%" },
  { label: "Exhale", duration: 6000, color: "rgba(199, 210, 254, 0.4)", scale: 1.0, radius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
];

const DynamicBreath = () => {
  const [active, setActive] = useState(0);
  const current = breathPhases[active];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % breathPhases.length);
    }, current.duration);
    return () => clearTimeout(timer);
  }, [active, current.duration]);

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FDFCFB] overflow-hidden py-24">
      <div className="relative flex items-center justify-center w-[500px] h-[500px]">
        
        {/* ATMOSPHERIC GLOW - Background layer */}
        <motion.div
          animate={{ 
            backgroundColor: current.color,
            scale: current.scale * 1.2,
          }}
          transition={{ duration: current.duration / 1000, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full blur-[100px] opacity-30"
        />

        {/* PROGRESS RING - SVG for technical precision */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="250"
            cy="250"
            r="210"
            fill="none"
            stroke="#E7E5E4"
            strokeWidth="1"
            className="opacity-30"
          />
          <motion.circle
            key={active}
            cx="250"
            cy="250"
            r="210"
            fill="none"
            stroke="#1C1917"
            strokeWidth="2"
            strokeDasharray="1320"
            initial={{ strokeDashoffset: 1320 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: current.duration / 1000, ease: "linear" }}
          />
        </svg>

        {/* THE KINETIC LUNG - Morphing Glass Container */}
        <motion.div
          animate={{ 
            scale: current.scale,
            borderRadius: current.radius,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
          transition={{ 
            duration: current.duration / 1000, 
            ease: [0.45, 0, 0.55, 1] // Custom Sine Ease
          }}
          className="relative z-10 w-64 h-64 backdrop-blur-3xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Grain Overlay for texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app')]" />
          
          <div className="text-center z-20">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.label}
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                className="text-[10px] tracking-[0.8em] uppercase font-semibold text-stone-500 mb-2"
              >
                {current.label}
              </motion.p>
            </AnimatePresence>
            
            <motion.div className="relative">
               {/* Numerical counter would go here if needed, but modern luxury often stays purely visual */}
               <div className="w-1 h-1 bg-stone-800 rounded-full mx-auto" />
            </motion.div>
          </div>
        </motion.div>

        {/* ORBITAL PARTICLES - Aesthetic Detail */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-dashed border-stone-200 rounded-full opacity-40 scale-[0.85]"
        />
      </div>

      {/* FOOTER CAPTION */}
      <div className="mt-20 text-center space-y-3">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-stone-400 text-[11px] tracking-[0.4em] uppercase font-light"
        >
          Resonance Frequency Training
        </motion.p>
        <div className="flex justify-center gap-4">
            {breathPhases.map((_, i) => (
                <div key={i} className={`h-[2px] transition-all duration-1000 ${i === active ? "w-12 bg-stone-800" : "w-4 bg-stone-200"}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicBreath;
