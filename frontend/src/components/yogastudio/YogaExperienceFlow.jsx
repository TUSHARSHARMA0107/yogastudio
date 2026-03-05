import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "The Arrival",
    desc: "Leave the digital noise behind as you enter a space grounded in silence.",
    tag: "Transition",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
    path: "/journey/arrival"
  },
  {
    title: "Conscious Breath",
    desc: "Reconnect with your internal rhythm through guided pranayama techniques.",
    tag: "Awareness",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop",
    path: "/journey/breath"
  },
  {
    title: "Guided Flow",
    desc: "Move through a curated sequence designed for structural and energetic alignment.",
    tag: "Movement",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070&auto=format&fit=crop",
    path: "/journey/flow"
  },
  {
    title: "The Afterglow",
    desc: "Step back into the world feeling lighter, centered, and deeply restored.",
    tag: "Transformation",
    image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=2070&auto=format&fit=crop",
    path: "/journey/afterglow"
  },
];

const YogaExperienceFlow = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAF9F6] min-h-screen flex items-center">

      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 border border-stone-200 rounded-full text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                The Journey 2026
              </span>

              <h2 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tight">
                Pure <br />
                <span className="italic ml-8 md:ml-16 font-light text-stone-400">
                  Space.
                </span>
              </h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xs pb-4 border-b border-stone-200"
            >
              <p className="text-stone-500 text-lg font-light leading-relaxed italic">
                “In the pause between breaths, the universe reveals itself.”
              </p>
            </motion.div>
          </motion.div>
        </header>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(step.path)}
              className="group relative h-[550px] overflow-hidden rounded-[2rem] cursor-pointer bg-white"
            >

              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="overflow-hidden mb-2">
                  <span className="block translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-[10px] uppercase tracking-widest text-stone-300">
                    Phase 0{i + 1}
                  </span>
                </div>

                <h3 className="text-3xl font-serif mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {step.title}
                </h3>

                <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-stone-200 font-light leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold">
                    Explore Experience
                    <span className="w-8 h-px bg-white/50" />
                  </div>
                </div>
              </div>

              {/* Tag */}
              <div className="absolute top-8 left-8">
                <span className="text-[9px] backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 rounded-full uppercase tracking-tighter text-white">
                  {step.tag}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaExperienceFlow;
