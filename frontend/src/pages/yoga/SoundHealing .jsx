import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";

const SoundHealing = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <main className="bg-[#FCFBFA] text-[#1A1A1A] selection:bg-stone-200 overflow-x-hidden">

      {/* HERO */}
      <section className="relative">
        <VideoHero
          title="The Resonance"
          subtitle="A high-fidelity journey through frequency and neuro-acoustic stillness."
          videoSrc="https://player.vimeo.com/external/434045526.sd.mp4?s=3cb9c6a3e2d76e9e8b4f6a3b0c1c7c2d1a9c9eaa&profile_id=164"
          whatsappMessage="Hello, I’d love to join the Sound Healing experience."
        />

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FCFBFA] to-transparent z-10" />
      </section>

      {/* INVITATION */}
      <section className="py-32 md:py-56 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="lg:w-3/5 relative group"
          >

            <div className="absolute -top-12 -left-12 w-64 h-64 bg-stone-100 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition-transform duration-1000" />

            <div className="relative overflow-hidden rounded-[60px] aspect-[4/5] lg:aspect-auto lg:h-[700px] shadow-[0_50px_100px_rgba(0,0,0,0.06)]">
              <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600"
                alt="Sonic Sanctuary"
                className="w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-1000" />
            </div>

          </motion.div>

          {/* TEXT */}
          <div className="lg:w-2/5 space-y-12">

            <motion.div {...reveal} className="space-y-6">
              <span className="inline-block text-[10px] tracking-[0.8em] uppercase text-stone-400 font-black">
                Private Invitation
              </span>

              <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.85] text-stone-900">
                Modern <br />
                <span className="italic font-serif text-stone-400">Stillness.</span>
              </h2>
            </motion.div>

            <motion.p
              {...reveal}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-stone-500 font-light font-sans max-w-sm"
            >
              Recalibrate the human nervous system through high-fidelity acoustic environments. Step away from digital noise into pure frequency.
            </motion.p>

            <motion.div {...reveal} transition={{ delay: 0.3 }} className="pt-8">
              <div className="h-px bg-stone-200 w-full mb-8" />

              <div className="flex gap-10 text-[10px] tracking-widest uppercase font-bold text-stone-400">
                <span>432Hz</span>
                <span>Pure Tone</span>
                <span>Somatic</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RITUAL */}
      <section className="py-32 bg-white rounded-t-[80px] lg:rounded-t-[120px] shadow-[0_-50px_100px_rgba(0,0,0,0.02)]">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div {...reveal} className="mb-24 text-center lg:text-left">
            <h3 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              The Modular Ritual
            </h3>

            <p className="text-stone-400 font-light italic text-lg">
              Non-linear rest tailored for the modern mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">

            <motion.div
              {...reveal}
              className="md:col-span-1 p-14 bg-stone-50 rounded-[48px] border border-stone-100 flex flex-col justify-between group hover:bg-stone-100 transition-colors"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center text-[10px] font-bold">
                  01
                </div>

                <h4 className="text-2xl font-light">Neutrality</h4>
              </div>

              <p className="text-stone-500 text-sm mt-12 leading-relaxed">
                Entry into a sensory-neutral zone to shed external stimuli.
              </p>
            </motion.div>

            {[
              { id: "02", title: "Immersion", text: "Multi-layered frequency immersion for neuro-acoustic rest.", color: "bg-stone-900 text-white" },
              { id: "03", title: "Resonance", text: "Deep cellular vibration for complete physical recalibration.", color: "bg-white text-black" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ delay: i * 0.1 }}
                className={`p-14 rounded-[48px] border border-stone-100 flex flex-col justify-between transition-all duration-700 group hover:shadow-2xl hover:-translate-y-2 ${item.color}`}
              >
                <div className="space-y-6">

                  <div className="w-12 h-12 rounded-full border border-current opacity-30 flex items-center justify-center text-[10px] font-bold">
                    {item.id}
                  </div>

                  <h4 className="text-2xl font-light">{item.title}</h4>

                </div>

                <p className="text-sm mt-12 leading-relaxed opacity-60">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-40 bg-[#FCFBFA]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div {...reveal} className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-light tracking-tighter mb-4">
                Visual Quiet
              </h2>
              <p className="text-stone-400 uppercase tracking-widest text-[10px] font-black">
                Shimla Sanctuary Gallery
              </p>
            </div>

            <div className="hidden md:block w-32 h-px bg-stone-200" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-white bg-white"
          >
            <ImageCarousel
              images={[
                "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1400",
                "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1400",
                "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1400",
                "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1400"
              ]}
            />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-56 px-6 text-center bg-white relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-50 rounded-full blur-[160px] -z-10 animate-pulse" />

        <div className="max-w-4xl mx-auto space-y-16">

          <motion.h4 {...reveal} className="text-6xl md:text-8xl font-light tracking-tighter leading-none">
            Enter the <span className="font-serif italic text-stone-300 underline underline-offset-8 decoration-1 decoration-stone-200">Flow.</span>
          </motion.h4>

          <motion.p {...reveal} className="text-stone-500 max-w-xl mx-auto text-xl font-light leading-relaxed">
            Intentional sessions. Limited availability. <br />
            Curated for those who seek depth.
          </motion.p>

          <motion.div {...reveal} className="flex justify-center pt-8">
            <a
              href="https://wa.me/919999999999"
              className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden bg-[#1A1A1A] rounded-full transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />

              <span className="relative text-white group-hover:text-black tracking-[0.5em] text-[10px] uppercase font-black transition-colors duration-500">
                Reserve Private Session
              </span>
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default SoundHealing;
