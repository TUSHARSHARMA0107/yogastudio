import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for 2026 Routing

const steps = [
  { 
    title: "The Arrival", 
    desc: "Leave the digital noise behind as you enter a space grounded in silence.", 
    tag: "Transition",
    image: "/99.jpeg",
    path: "/journey/arrival" // Added specific paths for each step
  },
  { 
    title: "Conscious Breath", 
    desc: "Reconnect with your internal rhythm through guided pranayama techniques.", 
    tag: "Awareness",
    image: "/images/step-2.jpg",
    path: "/journey/breath"
  },
  { 
    title: "Guided Flow", 
    desc: "Move through a curated sequence designed for structural and energetic alignment.", 
    tag: "Movement",
    image: "/images/step-3.jpg",
    path: "/journey/flow"
  },
  { 
    title: "The Afterglow", 
    desc: "Step back into the world feeling lighter, centered, and deeply restored.", 
    tag: "Transformation",
    image: "/images/step-4.jpg",
    path: "/journey/afterglow"
  },
];

const YogaExperienceFlow = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
      
      {/* 1. Global Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/99.jpeg" 
          alt="Yoga Studio Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#FAF9F6]/70 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-4 block">
              The Journey
            </span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-none">
              Pure Space
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm text-lg font-light leading-relaxed border-l border-stone-200 pl-6">
            A sanctuary for modern seekers. Experience our four-stage evolution.
          </p>
        </div>

        {/* 2. Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => navigate(step.path)} // Card is now clickable
              className="group cursor-pointer relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/80 hover:shadow-2xl hover:shadow-stone-200/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
              </div>

              <div className="p-8 pt-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono text-stone-300 italic">0{i + 1}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] py-1 px-3 bg-stone-100 text-stone-400 rounded-full">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-stone-800 mb-4 group-hover:italic transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-stone-500 leading-relaxed text-sm font-light mb-8">
                  {step.desc}
                </p>

                {/* 3. Programmatic Navigation Trigger */}
                <div 
                  className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                >
                  Learn More <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaExperienceFlow;