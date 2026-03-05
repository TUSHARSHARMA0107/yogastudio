import React from "react";
import { Play, Sparkles } from "lucide-react";

export default function YogaVideoSection() {
  return (
    <section className="relative py-32 px-6 bg-[#FDFCFB] overflow-hidden">

      {/* Ambient blur shapes */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5">

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                Personal Invitation
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              A Message from <br />
              <span className="italic text-stone-400 font-light">
                Your Guide
              </span>
            </h2>

            <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md">
              Yoga is not about perfection of posture.  
              It is about the awareness we cultivate with every breath and movement.
              Watch this short introduction to understand our mindful practice.
            </p>

            {/* Trainer identity */}
            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1594737625785-c75a5d8b8f8b?q=80&w=200"
                alt="Trainer"
                className="w-12 h-12 rounded-full object-cover border border-stone-200"
              />

              <div>
                <p className="text-stone-800 font-medium">
                  Sophia Verma
                </p>
                <p className="text-stone-400 text-sm">
                  Lead Yoga Instructor
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT VIDEO */}
          <div className="lg:col-span-7">

            <div className="relative group">

              <div className="rounded-[32px] overflow-hidden bg-stone-200 aspect-video shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition duration-700 group-hover:shadow-xl">

                <video
                  controls
                  poster="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-woman-practicing-yoga-5407/1080p.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* play overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md transform transition group-hover:scale-110">

                    <Play className="w-6 h-6 text-stone-800 fill-stone-800 ml-1" />

                  </div>

                </div>

              </div>


              {/* floating label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-white border border-stone-200 rounded-full shadow-sm flex items-center gap-3">

                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-600">
                  Watch Introduction — 1:45
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}