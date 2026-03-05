"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function SpecialClasses() {
  return (
    <div className="bg-[#fdfcf9] text-slate-800 overflow-hidden selection:bg-amber-100">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
          alt="Kids Yoga"
          className="absolute inset-0 w-full h-full object-cover brightness-95"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-[#fdfcf9]" />

        <div className="relative text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="block text-xs uppercase tracking-[0.5em] text-amber-600 mb-6 font-semibold"
          >
            Mindful Foundations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light leading-tight"
          >
            Nurturing Young <span className="italic font-serif text-amber-600">Potential</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Our children's yoga programs cultivate resilience, emotional balance,
            and confidence through playful discipline and structured mindfulness.
          </motion.p>
        </div>
      </section>

      {/* ================= BESPOKE SECTION ================= */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Bespoke <span className="italic font-serif text-amber-600">Wellness Programs</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Every child is unique. Our programs are designed to meet individual
              needs — whether therapeutic support, posture correction, focus enhancement,
              or emotional grounding.
            </p>

            <div className="space-y-6">
              {[
                "Therapeutic Recovery Programs",
                "Senior Vitality Yoga",
                "Prenatal Grace Sessions",
                "Beginner Foundation Batches",
                "Focus & Confidence Workshops"
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="w-10 h-[1px] bg-amber-600 mr-5" />
                  <span className="text-lg font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="rounded-[2.5rem] overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80"
              alt="Special Wellness"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= EXPERIENCE VIDEO ================= */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-serif italic mb-6">
              The Joy of Movement
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Through storytelling, guided breathing, and posture-based play,
              children learn to understand their bodies and emotions —
              building lifelong awareness.
            </p>

            <p className="text-slate-500 leading-relaxed">
              Our curriculum integrates neuroscience-backed movement
              patterns with traditional yogic discipline to cultivate
              balanced growth.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square bg-slate-100"
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={stagger}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            {
              title: "Certified Mentors",
              img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
              desc: "Experienced instructors specializing in pediatric yoga development."
            },
            {
              title: "Safe & Serene Space",
              img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
              desc: "Clean, airy studio designed to encourage calm exploration."
            },
            {
              title: "Intimate Batches",
              img: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&q=80",
              desc: "Small groups ensuring personal guidance and individual attention."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-28 px-6">
        <motion.div
          {...fadeInUp}
          className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[3rem] p-16 text-center shadow-lg"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Begin Their <span className="italic font-serif text-amber-600">Journey</span>
          </h2>

          <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
            Schedule a trial session and let your child experience
            mindful growth in a nurturing environment.
          </p>

          <button className="px-12 py-5 bg-amber-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-amber-700 transition-all duration-300">
            Reserve a Trial Session
          </button>
        </motion.div>
      </section>

    </div>
  );
}