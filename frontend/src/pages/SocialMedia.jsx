import BlogPage from "../components/WellnessContent/FitnessBLog";
import InstagramSection from "../components/WellnessContent/InstagramPost";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div className="relative min-h-screen bg-[#fdfcf9] text-slate-800 font-sans overflow-hidden selection:bg-amber-100">

      {/* ===== Ambient Background Glow ===== */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-100 rounded-full blur-[180px] opacity-40 pointer-events-none" />

      {/* ================= HERO ================= */}
      <header className="relative pt-32 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-amber-600 font-semibold">
            Wellness Journal
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 leading-[1.1]">
            Insights for a{" "}
            <span className="font-serif italic text-amber-600">
              Stronger You
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Curated fitness insights, mindful routines, and modern wellness
            strategies crafted for sustainable transformation.
          </p>
        </motion.div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-36 pb-32">

        {/* ===== BLOG SECTION ===== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-200 p-8 md:p-14"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                Latest from the{" "}
                <span className="font-serif italic text-amber-600">
                  Fitness Blog
                </span>
              </h2>

              <p className="mt-6 text-slate-500 max-w-xl mx-auto">
                Expert-backed routines, mindful insights, and performance
                strategies to elevate your wellbeing.
              </p>
            </div>

            <BlogPage />
          </motion.div>
        </section>

        {/* ===== INSTAGRAM SECTION ===== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-8 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-slate-900">
                  Follow Our{" "}
                  <span className="italic font-serif text-amber-600">
                    Journey
                  </span>
                </h2>
              </div>

              <span className="text-sm font-semibold tracking-widest uppercase text-slate-400">
                @InstagramHandle
              </span>
            </div>

            <InstagramSection />
          </motion.div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative py-16 bg-white border-t border-slate-200 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Wellness Hub. All rights reserved.
      </footer>
    </div>
  );
}