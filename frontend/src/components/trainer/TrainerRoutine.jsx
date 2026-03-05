import React from "react";
import { ArrowUpRight } from "lucide-react";

const routineMoments = [
  {
    id: 1,
    time: "05:30 AM",
    title: "Grounding",
    desc: "Silent meditation and breathwork before the world wakes.",
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
    grid: "md:col-span-6 md:row-span-2",
  },
  {
    id: 2,
    time: "08:00 AM",
    title: "Movement",
    desc: "Personal yoga practice to refine awareness and balance.",
    src: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1200",
    grid: "md:col-span-3 md:row-span-2",
  },
  {
    id: 3,
    time: "11:00 AM",
    title: "Nourish",
    desc: "Mindful nourishment with simple plant-based meals.",
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200",
    grid: "md:col-span-3 md:row-span-1",
  },
  {
    id: 4,
    time: "02:00 PM",
    title: "Mentorship",
    desc: "Guiding students through deeper awareness.",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200",
    grid: "md:col-span-3 md:row-span-1",
  },
  {
    id: 5,
    time: "07:00 PM",
    title: "Restoration",
    desc: "Evening yin practice and quiet reflection.",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    grid: "md:col-span-6 md:row-span-1",
  },
];

export default function TrainerRoutine() {
  return (
    <section className="relative bg-[#FDFCFB] py-32 px-6 text-[#1A1A1A] overflow-hidden">

      {/* Ambient background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.05]"
      >
        <source src="https://cdn.coverr.co/videos/coverr-woman-practicing-yoga-5407/1080p.mp4" type="video/mp4" />
      </video>

      {/* Soft blur shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-end">

          <div>

            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">
              A Day in the Life
            </span>

            <h2 className="text-6xl md:text-7xl font-serif tracking-tight mt-6 leading-none">
              Rhythm & <br />
              <span className="italic text-stone-400 font-light">
                Intention
              </span>
            </h2>

          </div>

          <div className="max-w-sm border-l border-stone-200 pl-6 text-stone-500 font-light leading-relaxed">
            Discipline is not limited to a practice session.  
            It is a continuous cycle of movement, nourishment, 
            rest, and awareness.
          </div>

        </div>


        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-6 md:h-[900px]">

          {routineMoments.map((moment) => (

            <div
              key={moment.id}
              className={`${moment.grid} group relative overflow-hidden rounded-[32px] bg-stone-100 transition duration-700 hover:shadow-xl`}
            >

              <img
                src={moment.src}
                alt={moment.title}
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-8 flex flex-col justify-end">

                <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold mb-2">
                  {moment.time}
                </span>

                <h3 className="text-2xl text-white font-serif italic">
                  {moment.title}
                </h3>

                <p className="text-white/70 text-sm mt-2 max-w-[240px]">
                  {moment.desc}
                </p>

              </div>

              {/* Static Time Tag */}
              <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase text-stone-900 border border-stone-200">
                {moment.time}
              </div>

            </div>

          ))}

          {/* Philosophy Card */}
          <div className="hidden md:flex md:col-span-3 md:row-span-1 rounded-[32px] bg-stone-900 text-white p-8 flex-col justify-between">

            <ArrowUpRight className="self-end text-stone-400" />

            <div>
              <p className="text-xs tracking-widest uppercase opacity-50 mb-2">
                Philosophy
              </p>

              <p className="text-lg font-serif">
                Every breath counts.
              </p>
            </div>

          </div>

        </div>


        {/* FOOTER CTA */}
        <div className="mt-20 border-t border-stone-200 pt-12 flex flex-col sm:flex-row items-center justify-between gap-8">

          <div className="flex gap-12">

            <div className="flex flex-col">
              <span className="text-3xl font-light">05:00</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">
                Wake Up
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-light">22:00</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-400">
                Sleep Cycle
              </span>
            </div>

          </div>

          <a
            href="https://wa.me/919800000000"
            className="px-12 py-5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-[0.4em] hover:bg-stone-700 transition"
          >
            Train With Us
          </a>

        </div>

      </div>
    </section>
  );
}