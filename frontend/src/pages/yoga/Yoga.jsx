import React from "react";
import { motion } from "framer-motion";
import VideoHero from "../../components/program/VideoHero";

const Yoga = () => {
  const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 },
  };

  return (
    <main className="bg-[#FDFDFB] text-[#1A1A1A] overflow-x-hidden selection:bg-stone-200">

      {/* ================= HERO ================= */}
      <VideoHero
        title="The Art of Presence"
        subtitle="A high-fidelity union of movement, breath, and profound mental clarity."
        videoSrc="https://player.vimeo.com/external/449626361.sd.mp4?s=de2c8e0f08f0e1c5e2c6fbb9c9c1d6e6c4f6b4a3&profile_id=164"
        whatsappMessage="Hello, I would like to inquire about a Private Yoga session."
      />

      {/* ================= CONCEPT GRID ================= */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(300px,_auto)]">

          {/* LARGE TEXT BLOCK */}
          <motion.div
            {...reveal}
            className="md:col-span-8 bg-stone-50 rounded-[40px] p-12 md:p-20 border border-stone-100 flex flex-col justify-center"
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-stone-400 font-bold mb-6">
              The Discipline
            </span>

            <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Strength in{" "}
              <span className="italic font-serif text-stone-800">
                Stillness.
              </span>
            </h2>

            <p className="mt-10 text-lg text-stone-500 max-w-2xl leading-relaxed">
              Yoga is not fitness. It is neurological recalibration.
              We integrate lineage-based practice with modern physiological awareness.
            </p>
          </motion.div>

          {/* VIDEO ATMOSPHERE BLOCK */}
          <motion.div
            {...reveal}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 md:row-span-2 rounded-[40px] overflow-hidden bg-black"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-700"
            >
              <source
                src="https://player.vimeo.com/external/434045526.sd.mp4?s=3cb9c6a3e2d76e9e8b4f6a3b0c1c7c2d1a9c9eaa&profile_id=164"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* PHILOSOPHY CARD */}
          <motion.div
            {...reveal}
            className="md:col-span-4 bg-white rounded-[40px] p-12 border border-stone-100 shadow-sm flex flex-col justify-between"
          >
            <p className="text-xl leading-relaxed text-stone-500 font-light italic">
              “Yoga is the technology of the self — precision in breath,
              discipline in movement, clarity in awareness.”
            </p>

            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 mt-12">
              Private Sessions
            </p>
          </motion.div>

          {/* DETAIL IMAGE */}
          <motion.div
            {...reveal}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 rounded-[40px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200"
              alt="Yoga detail"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= STATIC GALLERY ================= */}
      <section className="py-32 bg-[#FAF9F6] border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6 text-center mb-20">
          <motion.h3
            {...reveal}
            className="text-4xl md:text-5xl font-serif italic mb-6"
          >
            The Sanctuary
          </motion.h3>

          <motion.p
            {...reveal}
            className="text-stone-400 font-light tracking-wide uppercase text-xs"
          >
            Every element is curated for sensory clarity.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200",
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200",
            "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
            "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200",
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
          ].map((src, i) => (
            <motion.div
              key={i}
              {...reveal}
              transition={{ delay: i * 0.05 }}
              className="rounded-[32px] overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt="Yoga gallery"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-48 px-6 bg-white relative overflow-hidden">

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-stone-100 rounded-full blur-[140px] opacity-60" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <motion.div {...reveal}>
            <h4 className="text-6xl md:text-8xl font-light leading-none">
              Initiate{" "}
              <span className="font-serif italic text-stone-400">
                Your Flow.
              </span>
            </h4>

            <p className="text-stone-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mt-8">
              Available for private 1:1 sessions and curated small group
              immersions. Experience yoga as personal transformation.
            </p>
          </motion.div>

          <motion.a
            {...reveal}
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-14 py-6 bg-black text-white rounded-full 
                       text-[11px] tracking-[0.5em] uppercase font-bold 
                       transition-all duration-500 hover:bg-stone-800 shadow-xl"
          >
            Request Private Session
          </motion.a>

          <div className="flex gap-12 pt-16 border-t border-stone-100 justify-center text-[10px] tracking-[0.4em] text-stone-400 uppercase font-bold">
            <span>Vinyasa</span>
            <span>•</span>
            <span>Hatha</span>
            <span>•</span>
            <span>Restorative</span>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Yoga;