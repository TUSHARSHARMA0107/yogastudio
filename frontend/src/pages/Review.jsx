import React from "react";
import { motion } from "framer-motion";

export default function ReviewsPage() {

  const imageReviews = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
      name: "Ananya Sharma",
      message:
        "Joining this yoga journey has completely transformed my lifestyle. I feel more energetic and peaceful every day."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
      name: "Rohit Verma",
      message:
        "The sessions are deeply calming and powerful. I’ve improved my flexibility and reduced stress significantly."
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
      name: "Priya Kapoor",
      message:
        "This community feels like family. The guidance and positivity here changed my mindset completely."
    }
  ];

  const videoReviews = [
    {
      id: 1,
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "Neha Singh",
      message:
        "I never believed yoga could change my life so deeply until I experienced it here."
    },
    {
      id: 2,
      video: "https://www.w3schools.com/html/movie.mp4",
      name: "Aman Thakur",
      message:
        "My back pain is gone and my confidence is back. Highly recommended!"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-stone-900 font-sans">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center relative">

        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-stone-100 rounded-full blur-3xl opacity-70" />
        </div>

        <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">
          Community Stories
        </span>

        <h1 className="text-5xl md:text-7xl font-serif font-light mt-6 mb-8">
          Voices of <span className="italic text-stone-400">Transformation</span>
        </h1>

        <p className="max-w-2xl mx-auto text-stone-500 text-lg font-light leading-relaxed">
          Real stories from people whose lives changed through yoga,
          mindfulness and community practice.
        </p>

      </section>

      {/* IMAGE REVIEWS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-3 gap-10"
        >
          {imageReviews.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="p-8 text-center">
                <p className="text-stone-600 italic leading-relaxed mb-6">
                  "{item.message}"
                </p>

                <div className="h-px w-10 bg-stone-200 mx-auto mb-4" />

                <h4 className="font-medium">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>

      {/* VIDEO REVIEWS */}
      <section className="py-24 px-6 border-t border-stone-100">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-20">
            Video <span className="italic text-stone-400">Experiences</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            {videoReviews.map((item) => (
              <motion.div key={item.id} {...fadeInUp}>

                <div className="rounded-[2rem] overflow-hidden border border-stone-100 shadow-lg">
                  <video controls className="w-full aspect-video object-cover">
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-serif mb-2">{item.name}</h4>
                  <p className="text-stone-500 italic">
                    "{item.message}"
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">

        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">

          <h3 className="text-4xl font-serif mb-10">
            Your transformation begins here.
          </h3>

          <button className="bg-stone-900 text-white px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-stone-700 transition">
            Begin Your Practice
          </button>

        </motion.div>

      </section>

    </div>
  );
}