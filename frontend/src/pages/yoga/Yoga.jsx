// pages/Yoga.jsx


import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";

const Yoga = () => {
  return (
    <main className="bg-[#FDFDFB] text-[#1A1A1A] overflow-hidden selection:bg-[#E5E7EB]">
      
      {/* 01. HERO — IMMERSIVE ENTRANCE */}
      <VideoHero
        title="Traditional Yoga Practice"
        subtitle="A high-fidelity union of movement, breath, and profound mental clarity."
        videoSrc="/videos/yoga-premium.mp4"
        whatsappMessage="Hello, I would like to inquire about a Private Yoga session."
      />

      {/* 02. THE NARRATIVE — BENTO GRID 2026 */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            
            {/* LARGE TEXT CARD */}
            <div className="md:col-span-8 md:row-span-1 bg-stone-50 rounded-[40px] p-12 flex flex-col justify-center border border-stone-100 hover:shadow-xl transition-all duration-700">
               <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-bold mb-4">The Discipline</span>
               <h2 className="text-4xl md:text-5xl font-light tracking-tight">Strength in <span className="italic font-serif">Stillness.</span></h2>
            </div>

            {/* AMBIENT VIDEO BLOCK (Looping Cinemagraph) */}
            <div className="md:col-span-4 md:row-span-2 bg-stone-200 rounded-[40px] overflow-hidden group">
              <video 
                autoPlay muted loop playsInline 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              >
                <source src="/videos/yoga-ambient-loop.mp4" type="video/mp4" />
              </video>
            </div>

            {/* PRACTICE PHILOSOPHY CARD */}
            <div className="md:col-span-4 md:row-span-2 bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm flex flex-col justify-between">
               <p className="text-xl leading-relaxed text-stone-500 font-light">
                 Yoga is the technology of the self. We facilitate a practice that bridges 
                 ancient lineage with modern physiological understanding.
               </p>
               <div className="h-px bg-stone-100 w-full" />
               <p className="text-xs uppercase tracking-widest font-bold">2026 Practice Protocol</p>
            </div>

            {/* SECONDARY IMAGE FOCUS */}
            <div className="md:col-span-4 md:row-span-1 bg-stone-100 rounded-[40px] overflow-hidden">
               <img src="/images/yoga-detail.jpg" alt="Yoga detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* 03. ATMOSPHERE — THE CINEMATIC CAROUSEL */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h3 className="text-3xl font-light tracking-tighter mb-4">The Sanctuary</h3>
          <p className="text-stone-400 font-light italic">Every element is curated to support sensory neutrality.</p>
        </div>
        
        <div className="max-w-350px mx-auto px-6">
          <div className="rounded-[50px] overflow-hidden shadow-2xl bg-white p-2">
            <ImageCarousel
              images={[
                "/images/yoga-gallery-1.jpg",
                "/images/yoga-gallery-2.jpg",
                "/images/yoga-gallery-3.jpg",
                "/images/yoga-gallery-4.jpg",
                "/images/yoga-gallery-5.jpg",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 04. CONCIERGE — THE PREMIUM CONTACT */}
      <section className="py-48 px-6 bg-white relative">
        {/* Decorative Fluid Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-50 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-12">
          <div className="space-y-4">
             <h4 className="text-5xl md:text-6xl font-light tracking-tighter">Initiate Your Flow.</h4>
             <p className="text-stone-500 text-lg font-light max-w-xl mx-auto">
               Available for private 1:1 sessions or intimate group practices. 
               Experience yoga as it was meant to be: personal, profound, and precise.
             </p>
          </div>

          {/* Premium Animated Button */}
          <div className="flex flex-col items-center gap-8">
            <a
              href="wa.me"
              className="group relative inline-flex items-center justify-center px-24 py-6 bg-[#1A1A1A] text-white rounded-full 
                         overflow-hidden transition-all duration-500 hover:px-28"
            >
              <span className="absolute inset-0 w-0 bg-stone-700 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 text-[11px] tracking-[0.4em] uppercase font-bold">
                Request Concierge Booking
              </span>
            </a>
            
            <div className="flex gap-12 pt-12 border-t border-stone-100 w-full justify-center text-[10px] tracking-widest text-stone-400 uppercase font-medium">
               <span>Vinyasa</span>
               <span>•</span>
               <span>Hatha</span>
               <span>•</span>
               <span>Restorative</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Yoga;