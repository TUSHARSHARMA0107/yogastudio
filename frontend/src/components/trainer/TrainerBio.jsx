import React from "react";
import { Award, Users, Calendar } from "lucide-react";

export default function TrainerBio() {
  return (
    <section className="relative min-h-screen bg-[#FDFCFB] py-32 px-6 text-[#1A1A1A] overflow-hidden">

      {/* Soft background shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* IMAGE SIDE */}
        <div className="relative">

          <div className="absolute -inset-4 border border-stone-200 rounded-[36px]" />

          <div className="relative overflow-hidden rounded-[36px] aspect-[4/5] bg-stone-100 shadow-[0_30px_70px_rgba(0,0,0,0.08)]">

            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200"
              alt="Yoga Trainer"
              className="w-full h-full object-cover"
            />

            {/* identity card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white border border-stone-200 rounded-2xl backdrop-blur-md">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1">
                Head Instructor
              </p>
              <h3 className="text-3xl font-serif italic">
                Sophia Verma
              </h3>
            </div>

          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="flex flex-col space-y-10">

          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-xs font-bold tracking-widest uppercase mb-6">
              Master Yoga Instructor
            </span>

            <h2 className="text-5xl md:text-6xl font-serif tracking-tight leading-tight mb-8">
              Find Strength <br />
              <span className="italic text-stone-400 font-light">
                Through Stillness
              </span>
            </h2>

            <div className="space-y-5 text-stone-600 text-lg leading-relaxed max-w-xl">
              <p>
                Yoga is more than movement. It is a journey of awareness, breath,
                and alignment between the body and the mind.
              </p>

              <p>
                With over a decade of experience guiding students through
                transformational practices, each session blends traditional yogic
                philosophy with modern mindfulness.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-8 border-y border-stone-200 py-10">

            <StatItem
              icon={<Calendar className="w-5 h-5 text-stone-500" />}
              value="10+"
              label="Years Experience"
            />

            <StatItem
              icon={<Users className="w-5 h-5 text-stone-500" />}
              value="700+"
              label="Students Guided"
            />

            <StatItem
              icon={<Award className="w-5 h-5 text-stone-500" />}
              value="15"
              label="Certifications"
            />

          </div>

          {/* CTA */}
          <div>
            <a
              href="https://wa.me/919800000000"
              className="inline-flex items-center px-12 py-5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-[0.4em] hover:bg-stone-700 transition"
            >
              Start Your Journey
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 opacity-70">{icon}</div>
      <h4 className="text-3xl font-semibold">{value}</h4>
      <p className="text-xs text-stone-400 uppercase tracking-widest font-semibold mt-1">
        {label}
      </p>
    </div>
  );
}