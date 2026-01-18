// pages/SoundHealing.jsx




import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";

const SoundHealing = () => {
  return (
    <main className="bg-[#FCFBFA] text-[#1A1A1A] selection:bg-stone-200 selection:text-stone-900">
      
      {/* HERO — IMMERSIVE & SCALELESS */}
      <VideoHero
        title="The Resonance"
        subtitle="A high-fidelity journey through frequency and neuro-acoustic stillness."
        videoSrc="/videos/sound-healing.mp4"
        whatsappMessage="Hello, I’d love to join the Sound Healing experience."
      />

      {/* THE INVITATION — ASYMMETRICAL EDITORIAL */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2 relative">
             {/* 2026 Liquid Glass Effect Overlay */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] z-10 hidden md:block" />
             <img 
              src="/images/sound-hero-2026.jpg" 
              alt="Sonic Sanctuary" 
              className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover h-[600px] w-full"
             />
          </div>
          
          <div className="md:w-1/2 space-y-10">
            <span className="inline-block text-[10px] tracking-[0.6em] uppercase text-stone-400 font-bold">
              Private Invitation
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
              Modern <br /> 
              <span className="italic font-serif">Stillness.</span>
            </h2>
            <p className="text-xl leading-relaxed text-stone-500 font-light max-w-md">
              Step away from the digital noise. We curate high-fidelity acoustic 
              environments designed to recalibrate the human nervous system.
            </p>
            <div className="h-px bg-stone-200 w-full" />
          </div>
        </div>
      </section>

      {/* THE RITUAL — MONOCHROMATIC BENTO GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2 p-12 bg-stone-50 rounded-[32px] flex flex-col justify-between border border-stone-100">
             <h3 className="text-3xl font-light mb-8">The Modular Experience</h3>
             <p className="text-stone-500 font-light italic">Non-linear rest tailored for the modern mind.</p>
          </div>
          {[
            { title: "Calm", text: "Entry into a sensory-neutral zone." },
            { title: "Deep", text: "Multi-layered frequency immersion." },
          ].map((item, i) => (
            <div key={i} className="p-12 rounded-[32px] border border-stone-100 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 group">
              <p className="text-[10px] tracking-widest uppercase mb-4 opacity-50 group-hover:opacity-100">{item.title}</p>
              <p className="text-lg font-light leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — THE SANCTUARY */}
      <section className="py-32 bg-[#FCFBFA]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl font-light tracking-tight mb-2">Visual Quiet</h2>
            <div className="h-1 w-20 bg-[#C5A059]" /> {/* Champagne Gold Accent */}
          </div>
          
          <div className="rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <ImageCarousel
              images={["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg"]}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA — THE LIQUID CLOSING */}
      <section className="py-48 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <h4 className="text-5xl md:text-6xl font-light tracking-tighter">Enter the flow.</h4>
          <p className="text-stone-400 max-w-xl mx-auto text-lg font-light">
            Intentional sessions. Limited availability. 
            Designed for those who seek depth in an age of surface.
          </p>

          <a
            href="wa.me"
            className="group relative inline-flex items-center justify-center px-20 py-6 overflow-hidden bg-[#1A1A1A] rounded-full"
          >
            {/* 2026 Liquid Fill Button Effect */}
            <span className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative text-white group-hover:text-black tracking-[0.3em] text-xs uppercase font-bold transition-colors">
              Reserve Private Session
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default SoundHealing;