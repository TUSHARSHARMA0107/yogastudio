import React from "react";
import { Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "The First Practice",
    description:
      "Discovered yoga through personal exploration of breath and movement, beginning a lifelong commitment to mindful living.",
  },
  {
    year: "2015",
    title: "Academic Foundation",
    description:
      "Completed studies in physical education and human anatomy, deepening the understanding of the body’s natural mechanics.",
  },
  {
    year: "2017",
    title: "Yoga Teacher Certification",
    description:
      "Became a certified yoga instructor, blending traditional yogic philosophy with modern wellness science.",
  },
  {
    year: "2019",
    title: "Studio Community",
    description:
      "Started guiding students through structured yoga sessions focused on breath awareness, posture alignment, and recovery.",
  },
  {
    year: "Present",
    title: "A Living Practice",
    description:
      "Continuing to inspire a growing community through mindful movement, meditation, and sustainable wellness routines.",
  },
];

export default function TrainerJourney() {
  return (
    <section className="relative py-36 px-6 bg-[#FDFCFB] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1800"
          alt="Yoga background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-[#FDFCFB]/90" />

      {/* Decorative blur shapes */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-28">

          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
            The Journey
          </span>

          <h2 className="text-5xl md:text-7xl font-serif tracking-tight mt-6">
            A Path of <span className="italic text-stone-400 font-light">Practice</span>
          </h2>

          <p className="text-stone-500 max-w-xl mx-auto mt-6 text-lg">
            Every teacher’s journey begins as a student. Through years of
            discipline, learning, and personal transformation, the path evolves
            into guiding others.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 md:-translate-x-1/2" />

          {milestones.map((item, index) => (

            <div
              key={index}
              className="relative mb-28 last:mb-0 group"
            >

              {/* timeline node */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-stone-900 rounded-full -translate-x-1/2 ring-[10px] ring-stone-100 transition duration-500 group-hover:bg-stone-700" />

              <div
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* text content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pl-20"
                      : "md:pr-20 md:text-right"
                  }`}
                >

                  <span className="text-stone-400 font-serif italic text-2xl">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-semibold text-stone-900 mt-2 mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-stone-500 text-lg leading-relaxed font-light max-w-md mx-auto md:mx-0">
                    {item.description}
                  </p>

                </div>


                {/* visual accent */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center">

                  <Sparkles className="w-8 h-8 text-stone-200 opacity-0 group-hover:opacity-100 transition duration-700" />

                </div>

              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}
