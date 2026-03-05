import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";
const MESSAGE = encodeURIComponent(
  "Hello 🙏 I would like to book a yoga session."
);

// Online Dummy Images
const yogaBg =
  "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2070&auto=format&fit=crop";

const yogaHero =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop";

const YogaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden selection:bg-stone-200">

      {/* ===== Premium Background Image ===== */}
      <div className="absolute inset-0 -z-10">
        <img
          src={yogaBg}
          alt="Yoga background"
          className="w-full h-full object-cover"
        />
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">

        {/* ===== Left Content ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 z-10"
        >
          <span className="block text-[10px] tracking-[0.5em] uppercase text-stone-400 mb-8 font-medium">
            The Art of Mindfulness — Est. 2026
          </span>

          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tighter">
            Find your <br />
            <span className="italic font-light text-stone-500">inner</span> <br />
            <span className="font-sans font-extralight tracking-normal">
              Stillness.
            </span>
          </h1>

          <p className="mt-10 text-stone-600 text-lg md:text-xl max-w-sm leading-relaxed font-light italic">
            "डिजिटल शोर से दूर, एक ऐसा स्थान जहाँ आपकी सांस और शरीर का तालमेल मिलता है।"
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-5 bg-stone-900 text-white text-sm tracking-widest uppercase transition-all duration-500 group overflow-hidden"
            >
              <span className="relative z-10">Book a Session</span>
              <span className="absolute inset-0 bg-stone-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            {/* Studio Link */}
            <Link
              to="/studio-experience"
              className="group text-sm tracking-widest uppercase text-stone-900 flex items-center gap-4"
            >
              Explore Studio
              <span className="h-[1px] w-8 bg-stone-300 group-hover:w-16 transition-all duration-500" />
            </Link>

          </div>
        </motion.div>

        {/* ===== Right Side Image ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-6 relative h-[600px] lg:h-[800px] w-full"
        >
          <div className="absolute inset-0 overflow-hidden shadow-2xl rounded-xl">
            <img
              src={yogaHero}
              alt="Yoga practice"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3000ms] ease-out"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 hidden xl:block bg-white/80 backdrop-blur-md p-8 shadow-xl max-w-[280px] border border-white/20 rounded-xl">
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
              Our Philosophy
            </p>
            <p className="text-sm text-stone-700 leading-relaxed font-serif italic">
              "Yoga is not about touching your toes, it’s about what you learn on the way down."
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-900 to-transparent" />
      </div>

    </section>
  );
};

export default YogaHero;