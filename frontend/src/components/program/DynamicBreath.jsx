import React, { useState, useEffect } from "react";

const breathPhases = [
  { label: "Inhale", count: 4, duration: 4000, color: "from-blue-100 to-blue-200", scale: "scale-[1.3]", text: "text-blue-600" },
  { label: "Hold", count: 4, duration: 4000, color: "from-stone-100 to-stone-200", scale: "scale-[1.3]", text: "text-stone-500" },
  { label: "Exhale", count: 6, duration: 6000, color: "from-indigo-100 to-indigo-200", scale: "scale-100", text: "text-indigo-600" },
];

const DynamicBreath = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % breathPhases.length);
    }, breathPhases[active].duration);
    return () => clearTimeout(timer);
  }, [active]);

  const current = breathPhases[active];

  return (
    <section className="py-24 flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="relative flex items-center justify-center w-[450px] h-[450px]">
        
        {/* EXTERNAL ATMOSPHERIC RINGS (2026 TACTILITY) */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${current.color} opacity-10 transition-all duration-[4000ms] ease-in-out ${current.scale} blur-3xl`} />
        
        {/* THE MAIN FROSTED LUNG (GLASSMORPHISM) */}
        <div 
          className={`absolute inset-12 rounded-full backdrop-blur-2xl border border-white/40 shadow-2xl bg-white/20 transition-all duration-[4000ms] ease-in-out ${current.scale}`}
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)' }}
        />

        {/* CORE HUD (HEADS-UP DISPLAY) */}
        <div className="relative z-20 text-center space-y-2">
          <p className={`text-[10px] tracking-[0.6em] uppercase font-bold transition-colors duration-1000 ${current.text}`}>
            {current.label}
          </p>
          <p className="text-9xl font-extralight tracking-tighter text-stone-800">
            {current.count}
          </p>
          <div className="flex justify-center gap-1.5 pt-4">
            {breathPhases.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-700 ${i === active ? "w-8 bg-stone-800" : "w-2 bg-stone-200"}`} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center space-y-4">
        <p className="text-stone-400 text-xs tracking-widest font-medium uppercase">
          Follow the Kinetic Rhythm
        </p>
        <p className="text-stone-300 text-[10px] uppercase font-bold italic">
          2026 Respiratory Protocol
        </p>
      </div>
    </section>
  );
};

export default DynamicBreath;