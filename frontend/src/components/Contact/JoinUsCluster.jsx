import React from "react";
import { ArrowRight } from "lucide-react";

export default function JoinUsCluster() {
  return (
    <section className="py-28 px-6 md:px-24 border-t border-stone-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">

          <span className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-bold">
            Community
          </span>

          <h2 className="text-6xl md:text-7xl font-serif leading-[0.9] tracking-tight">
            Join <br />
            <span className="italic text-stone-300">Us</span>
          </h2>

          <p className="text-stone-500 text-lg font-light max-w-md leading-relaxed">
            Become part of a space dedicated to balance, mindfulness and
            transformation. A collective built on conscious living.
          </p>

          <button className="flex items-center gap-4 uppercase tracking-[0.4em] text-[10px] font-black">
            Begin Your Journey
            <ArrowRight size={16} strokeWidth={3} />
          </button>

        </div>

        {/* RIGHT IMAGE CLUSTER */}
        <div className="relative h-[520px]">

          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200"
            className="absolute top-0 left-0 w-[260px] h-[340px] object-cover rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200"
            className="absolute top-10 right-6 w-[220px] h-[220px] object-cover rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200"
            className="absolute bottom-0 left-32 w-[240px] h-[300px] object-cover rounded-xl shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200"
            className="absolute bottom-12 right-0 w-[160px] h-[160px] object-cover rounded-xl shadow-lg border-8 border-white"
          />

        </div>

      </div>
    </section>
  );
}