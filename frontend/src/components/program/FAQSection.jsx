import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FeatureFocus = ({ features }) => {
  const containerRef = useRef(null);
  const safeFeatures = Array.isArray(features) ? features : [];
  return (
    <section ref={containerRef} className="py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif italic tracking-tighter"
          >
            The Core Pillars
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 max-w-sm mt-6 md:mt-0 font-light leading-relaxed"
          >
            Our methodology is built on 2026 industry standards of biomechanics and holistic performance.
          </motion.p>
        </div>
        {/* Feature List */}
        <div className="space-y-40">
          {safeFeatures.map((feature, i) => (
            <FeatureRow key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureRow = ({ feature, index }) => {
  const rowRef = useRef(null);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={rowRef}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}
    >
      {/* Image Side with Parallax */}
      <motion.div 
        className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-neutral-800"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </motion.div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-emerald-500 font-mono text-sm tracking-widest"
        >
          0{index + 1} // 03
        </motion.span>
        
        <motion.h3 
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-light tracking-tight"
        >
          {feature.title}
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-lg font-light leading-relaxed pb-6"
        >
          {feature.description}
        </motion.p>

        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-medium group"
        >
          <span>Explore Technique</span>
          <div className="w-8 h-[1px] bg-white group-hover:w-16 transition-all duration-300" />
        </motion.button>
      </div>
    </div>
  );
};

export default FeatureFocus;
