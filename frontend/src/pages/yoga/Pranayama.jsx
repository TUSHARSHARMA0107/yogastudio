// pages/Pranayama.jsx


import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";
import React from "react";
import DynamicBreath from "../../components/program/DynamicBreath";

const Pranayama = () => {
  const benefits = [
    { title: "Neuro-Regulation", desc: "Instantly modulate your autonomic nervous system to exit 'fight or flight' mode." },
    { title: "Oxygen Efficiency", desc: "Optimize cellular respiration and increase the functional capacity of the lungs." },
    { title: "Cognitive Anchor", desc: "Breath serves as a singular point of focus to dissolve mental fragmentation." },
    { title: "Vitality Flow", desc: "Regulate the body's internal bio-electricity (Prana) for sustained energy." },
  ];

  const faqs = [
    { q: "Is this suitable for beginners?", a: "Precisely. We begin with foundational 'Natural Breath Awareness' before introducing regulation." },
    { q: "Can I practice this online?", a: "Yes. Our instructors provide visual cues that are highly effective via high-definition streaming." },
    { q: "What is the science behind it?", a: "By altering CO2 levels and stimulating the Vagus nerve, we change the brain's chemistry in real-time." },
  ];

  return (
    <main className="bg-[#FCFBFA] text-[#1A1A1A] selection:bg-stone-200">
      
      {/* 01. HERO — CINEMATIC DEPTH */}
      <VideoHero
        title="Pranayama"
        subtitle="The science of conscious breath regulation. A vital bridge between the physical and mental states."
        videoSrc="/videos/pranayama.mp4"
        whatsappMessage="Hello, I would like to explore Pranayama sessions."
      />

      {/* 02. EDUCATIONAL PANEL — EDITORIAL WHITE SPACE */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-end">
          <div className="md:w-1/2">
            <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-bold mb-8 block">The Protocol</span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-none mb-10">
              Biology. <br /> Meet <span className="italic font-serif">Intent.</span>
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-stone-500 font-light leading-relaxed mb-8">
              Pranayama is more than 'breathing.' It is the systematic control of life-force. 
              By manipulating the duration and retention of the breath, we unlock the ability 
              to self-regulate our emotional and physiological architecture.
            </p>
          </div>
        </div>
      </section>

      {/* 03. DYNAMIC PRACTICE — THE KINETIC HUB */}
      <section className="py-24 bg-white rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border-y border-stone-100">
        <div className="text-center mb-10">
          <h3 className="text-sm tracking-[0.3em] uppercase font-bold text-stone-300">Synchronized Visualizer</h3>
        </div>
        <DynamicBreath />
      </section>

      {/* 04. BENEFITS — MODERN CARDS */}
      <div className="bg-[#FAF9F6]">
        <BenefitsSection
          heading="Technological Benefits"
          benefits={benefits}
        />
      </div>

      {/* 05. PROGRAM DETAILS — STRUCTURED ARCHITECTURE */}
      <section className="py-24">
        <ProgramDetails
          title="The Curricula"
          description="A tiered approach to respiratory mastery, from foundation to advanced retention."
          levels={[
            "Level 1: Conscious Diaphragmatic Awareness",
            "Level 2: Rhythmic Balancing (Sama Vritti)",
            "Level 3: Advanced Cleansing (Kriyas)",
          ]}
        />
      </section>

      {/* 06. GALLERY — THE AMBIANCE */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[48px] overflow-hidden shadow-2xl">
            <ImageCarousel
              images={["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"]}
            />
          </div>
        </div>
      </section>

      {/* 07. FAQ & CONCIERGE */}
      <section className="bg-[#FAF9F6] rounded-t-[60px] py-20">
        <FAQSection faqs={faqs} />
      </section>

      {/* 08. FINAL CTA — LUXURY CONVERSION */}
      <section className="py-48 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <h4 className="text-5xl md:text-7xl font-light tracking-tighter">Your first breath starts here.</h4>
          <p className="text-stone-400 text-lg font-light italic">Limited availability for 1:1 neuro-breath coaching.</p>
          
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="group relative inline-flex items-center justify-center px-16 py-6 bg-stone-900 text-white rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 tracking-[0.4em] text-[11px] font-bold">Initiate Session</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Pranayama;
