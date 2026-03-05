import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import TrainerBio from "../components/trainer/TrainerBio"
import TrainerVideo from "../components/trainer/TrainerVideo";
import TrainerJourney from "../components/trainer/TrainrHistory";
import TrainerRoutine from "../components/trainer/TrainerRoutine";

export default function AboutTrainer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen overflow-x-hidden selection:bg-stone-100">

      {/* ================= PROGRESS BAR ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-stone-300 via-stone-500 to-stone-300 origin-left z-50"
        style={{ scaleX }}
      />

      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-stone-100 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-stone-50 rounded-full blur-[120px] opacity-80" />
      </div>

      <main className="relative z-10">

        {/* ================= TRAINER BIO ================= */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative pt-16"
        >
          <TrainerBio />
          <div className="max-w-px h-24 bg-gradient-to-b from-stone-300 to-transparent mx-auto my-16" />
        </motion.section>

        {/* ================= VIDEO SECTION ================= */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="px-4 md:px-12 my-24"
        >
          <div className="
            rounded-[2.5rem] 
            overflow-hidden 
            bg-white 
            border border-stone-100 
            shadow-[0_20px_80px_rgba(0,0,0,0.05)]
          ">
            <TrainerVideo />
          </div>
        </motion.section>

        {/* ================= TRAINER LIFE VISUAL STORY ================= */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-32"
        >
          <div className="relative">
            <TrainerRoutine />
          </div>

          {/* Elegant Divider */}
          <div className="max-w-px h-24 bg-gradient-to-b from-stone-300 to-transparent mx-auto mt-20" />
        </motion.section>

        {/* ================= TRAINER JOURNEY ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-32"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="
              bg-white 
              rounded-[3rem] 
              p-8 md:p-20 
              border border-stone-100 
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            ">
              <TrainerJourney />
            </div>
          </div>
        </motion.section>

      </main>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-10 left-10 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 rotate-90 origin-left translate-y-12">
          Scroll
        </span>

        <div className="w-[1px] h-20 bg-stone-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 80] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-10 bg-stone-400 absolute top-0"
          />
        </div>
      </motion.div>

    </div>
  );
}