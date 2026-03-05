import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const YogaCTA = () => {
  const navigate = useNavigate();

  // Dummy background image
  const bgImage =
    "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop";

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section className="relative py-40 px-6 overflow-hidden bg-[#FDFCFB]">

      {/* Background Image */}
      <img
        src={bgImage}
        alt="Yoga background"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
      />

      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#E5E1DA] rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-stone-200 rounded-full blur-[100px] opacity-30" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-[11px] uppercase tracking-[0.6em] text-stone-400 font-semibold mb-8"
        >
          Your Journey Awaits
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          className="text-6xl md:text-8xl font-serif text-stone-900 leading-[1.1] mb-10"
        >
          Begin Your <br />
          <span className="italic font-light text-stone-500 font-sans tracking-tight">
            Purest Practice
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-xl text-stone-500 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Step into a space where movement meets stillness. Our 2026 studio
          experience is designed to align your physical strength with mental
          clarity.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Action */}
          <button
            onClick={() => navigate("/booking")}
            className="group relative w-full sm:w-auto px-14 py-6 bg-stone-900 text-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95"
          >
            <span className="relative z-10 font-medium tracking-wide">
              Book My First Class
            </span>
            <div className="absolute inset-0 bg-stone-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>

          {/* Secondary Action */}
          <button
            onClick={() => navigate("/pricing")}
            className="w-full sm:w-auto px-14 py-6 border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors duration-300 active:scale-95"
          >
            View Membership
          </button>
        </motion.div>

        {/* Social Proof Avatars */}
        <motion.div
          variants={fadeInUp}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-4 border-[#FDFCFB] bg-stone-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="text-[10px] text-stone-400 uppercase tracking-[0.3em]">
            <span className="text-stone-900 font-bold italic">120+</span> Seekers
            joined this cycle
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default YogaCTA;