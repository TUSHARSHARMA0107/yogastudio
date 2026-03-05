import { useEffect, useState } from "react";

export default function Peace() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#FDFCFB] min-h-screen overflow-hidden selection:bg-stone-200">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000"
          className="w-full h-full object-cover opacity-[0.05]"
          alt="background"
        />
      </div>

      {/* Ambient Blur */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[100px]" />

      {/* HERO */}
      <div className="relative h-screen overflow-hidden">

        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
        >

          <video
            src="https://cdn.coverr.co/videos/coverr-yoga-meditation-1572/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#FDFCFB]" />

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 space-y-6">

          <span className="text-white/70 uppercase tracking-[0.4em] text-[10px] font-bold">
            Quiet the Mind
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight">

            The Art of{" "}

            <span className="italic font-light text-white/80">
              Stillness
            </span>

          </h1>

          <div className="w-px h-24 bg-white/40" />

        </div>

      </div>


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto py-32 px-6">

        <div className="grid md:grid-cols-12 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="md:col-span-5 space-y-10">

            <div>

              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
                Philosophy
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight mt-6">

                Silence. <br />
                Stillness. <br />
                Serenity.

              </h2>

            </div>

            <p className="text-stone-500 text-lg italic border-l border-stone-200 pl-6">
              "In the midst of movement and chaos, keep stillness within you."
            </p>

            <p className="text-stone-600 leading-relaxed">
              Our meditation sessions create a sanctuary where the mind can
              slow down and awareness becomes clear. Through guided breath
              and quiet practice, participants rediscover calm and balance
              within themselves.
            </p>

            <button className="group relative px-8 py-4 border border-stone-900 text-stone-900 uppercase text-xs tracking-widest overflow-hidden transition-all hover:text-white">

              <span className="relative z-10">
                Reserve Your Session
              </span>

              <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            </button>

          </div>


          {/* RIGHT IMAGE */}
          <div className="md:col-span-7 relative">

            <div className="relative overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(0,0,0,0.08)]">

              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200"
                alt="Meditation"
                className="w-full aspect-[4/5] object-cover transition duration-1000 hover:scale-105"
              />

            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white border border-stone-200 p-8 shadow-lg rounded-2xl max-w-[240px] hidden lg:block">

              <p className="text-sm text-stone-500 leading-snug">
                Aromatherapy, sound healing and guided meditation sessions
                create a deeply calming environment for every practitioner.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER DIVIDER */}
      <div className="w-full flex justify-center pb-20">

        <div className="flex gap-4">

          {[1,2,3].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-stone-300" />
          ))}

        </div>

      </div>

    </section>
  );
}