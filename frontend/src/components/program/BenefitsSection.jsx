import { motion } from "framer-motion";

const BenefitsSection = ({ heading, benefits }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="py-32 px-6 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif tracking-tighter leading-none text-stone-900 italic"
          >
            {heading}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h-[1px] flex-grow mx-12 bg-stone-200 hidden lg:block"
          />
          <p className="text-stone-500 uppercase tracking-[0.3em] text-[10px] font-bold">
            Protocol // 2026
          </p>
        </div>

        {/* Bento-Style Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              // Dynamic spans: First and Last items are wider for the "Bento" look
              className={`group relative overflow-hidden bg-white p-10 rounded-[2.5rem] border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/40 
                ${(i === 0 || i === 3) ? "md:col-span-2" : "md:col-span-1"}`}
            >
              {/* Subtle Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-stone-50 rounded-full blur-3xl group-hover:bg-emerald-50 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full border border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 mb-8 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors">
                    Benefit 0{i + 1}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-6 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base max-w-sm">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Interactive Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-stone-900 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
