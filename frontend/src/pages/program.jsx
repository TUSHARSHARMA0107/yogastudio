import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Aerial Yoga",
    description:
      "Experience yoga in silk hammocks to improve flexibility, decompress the spine and build strength.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1200&auto=format&fit=crop",
    link: "/program/aerial-yoga",
  },
  {
    title: "Commercial Booking",
    description:
      "Wellness activations and experiences curated for events, retreats and commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    link: "/program/commercial",
  },
  {
    title: "Meditation",
    description:
      "Guided mindfulness practices designed to calm the mind and cultivate awareness.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    link: "/program/meditation",
  },
  {
    title: "Sound Healing",
    description:
      "Deep relaxation through healing vibrations from crystal bowls and therapeutic sound.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    link: "/program/sound-healing",
  },
  {
    title: "Corporate Wellness",
    description:
      "Structured wellness programs for organizations to enhance employee wellbeing.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    link: "/program/corporate-booking",
  },
  {
    title: "Pranayama",
    description:
      "Ancient breathing practices that balance energy and strengthen the nervous system.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200&auto=format&fit=crop",
    link: "/program/pranayama",
  },
  {
    title: "Yoga",
    description:
      "Traditional yoga combining asana, breathwork and mindfulness for holistic wellbeing.",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop",
    link: "/program/yoga",
  },
];

export default function ProgramsPage() {
  return (
    <div className="relative min-h-screen py-32 px-6 bg-[#FDFCFB] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000"
          alt="Yoga background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      {/* soft overlay */}
      <div className="absolute inset-0 bg-[#FDFCFB]/90" />

      {/* blur accents */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[100px]" />

      <div className="relative z-10">

        {/* Page Title */}
        <div className="max-w-5xl mx-auto text-center mb-24">

          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
            Our Programs
          </span>

          <h1 className="text-6xl md:text-7xl font-serif tracking-tight mt-6">
            Explore Your <span className="italic text-stone-400 font-light">Practice</span>
          </h1>

          <p className="mt-8 text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Our carefully designed programs integrate movement, breath,
            and mindfulness to cultivate strength, clarity and balance.
          </p>

        </div>


        {/* Programs Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {programs.map((program, index) => (

            <Link key={index} to={program.link}>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-xl transition group"
              >

                {/* image */}
                <div className="h-60 overflow-hidden">

                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>


                {/* content */}
                <div className="p-8">

                  <h3 className="text-xl font-semibold text-stone-900 mb-4">
                    {program.title}
                  </h3>

                  <p className="text-stone-500 text-sm leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="flex items-center text-sm font-medium text-stone-900 group-hover:translate-x-1 transition">

                    Explore

                    <ArrowRight className="ml-2 w-4 h-4" />

                  </div>

                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}