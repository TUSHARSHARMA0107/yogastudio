import React from "react";
import { motion } from "framer-motion";

import Facilities from "../components/Studio-View/Facilities";
import Happiness from "../components/Studio-View/Hapiness";
import ImageCluster from "../components/Studio-View/ImageCluster";
import Peace from "../components/Studio-View/Peace";
import StudioTourSlider from "../components/Studio-View/Slider";
import SpecialClasses from "../components/Studio-View/SpecialAtention";

/* Section Wrapper for consistent spacing */
const SectionWrapper = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-150px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="w-full"
  >
    {children}
  </motion.section>
);

const Studioview = () => {
  return (
    <div className="relative min-h-screen bg-[#FDFCF9] text-slate-800 overflow-x-hidden selection:bg-amber-100">

      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-amber-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-stone-100 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="w-[90%] lg:w-[85%] mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-bold mb-6 block">
                The Sanctuary Concept
              </span>

              <h1 className="text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter text-slate-900 leading-[0.9]">
                Stillness <br />
                <span className="italic font-serif text-amber-700/80">
                  & Strength
                </span>
              </h1>
            </div>

            <div className="max-w-md pb-4">
              <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed border-l-2 border-amber-100 pl-8">
                A 2,500 sq.ft sanctuary where minimalist architecture meets
                intentional movement to create a refined wellness experience.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN ================= */}
      <main className="relative w-[92%] lg:w-[88%] xl:w-[85%] mx-auto space-y-24 md:space-y-48 pb-40">

        {/* 01 Happiness */}
        <SectionWrapper>
          <div className="bg-white rounded-[3rem] lg:rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.02)] border border-slate-100 p-8 md:p-24 overflow-hidden">
            <Happiness />
          </div>
        </SectionWrapper>

        {/* 02 Image Cluster */}
        <SectionWrapper>
          <div className="w-full min-h-[600px] lg:h-[90vh] bg-[#FAF9F6] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-sm">
            <ImageCluster />
          </div>
        </SectionWrapper>

        {/* 03 Peace */}
        <SectionWrapper>
          <div className="bg-white rounded-[3rem] lg:rounded-[4rem] p-8 md:p-24 border border-slate-100 shadow-sm">
            <Peace />
          </div>
        </SectionWrapper>

        {/* 04 Studio Slider */}
        <SectionWrapper>
          <div className="rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
            <StudioTourSlider />
          </div>
        </SectionWrapper>

        {/* 05 Facilities */}
        <SectionWrapper>
          <div className="bg-white rounded-[3rem] lg:rounded-[4rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-slate-100 p-8 md:p-24">
            <Facilities />
          </div>
        </SectionWrapper>

        {/* 06 Special Classes */}
        <SectionWrapper>
          <div className="bg-gradient-to-br from-white to-[#FDFCF9] rounded-[3rem] lg:rounded-[4rem] p-8 md:p-24 border border-amber-100/40 relative">
            <div className="absolute top-10 right-10 w-24 h-24 bg-amber-50 rounded-full blur-3xl opacity-50" />
            <SpecialClasses />
          </div>
        </SectionWrapper>

      </main>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-32 md:py-48 text-center bg-white border-t border-slate-100 relative overflow-hidden">

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-7xl font-light text-slate-900 tracking-tighter mb-8">
            Experience the{" "}
            <span className="italic font-serif text-amber-700/70">
              Sanctuary
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light">
            We invite you to step inside and feel the energy of our space.
            Private tours are available by appointment.
          </p>

          <button className="group flex items-center gap-6 mx-auto bg-slate-900 text-white px-12 py-6 rounded-full hover:bg-amber-800 transition-all duration-500 shadow-2xl">
            <span className="uppercase tracking-[0.3em] text-xs font-bold">
              Book Studio Tour
            </span>

            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform">
              ↗
            </div>
          </button>
        </motion.div>

      </section>

    </div>
  );
};

export default Studioview;