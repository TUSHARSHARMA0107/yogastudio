// pages/Meditation.jsx


import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";

const Meditation = () => {

  const meditationFAQ = [
    {
      q: "Is meditation suitable for beginners?",
      a: "Yes. All sessions are guided slowly and require no prior experience.",
    },
    {
      q: "How long is a session?",
      a: "Sessions typically last 30–45 minutes.",
    },
    {
      q: "Is meditation religious?",
      a: "No. Our practice is secular and mindfulness-based.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-neutral-50 via-white to-neutral-50 text-neutral-700 overflow-hidden">
      {/* HERO */}
      <VideoHero
        title="Guided Meditation"
        subtitle="A modern sanctuary for stillness, awareness, and inner clarity."
        videoSrc="/videos/meditation.mp4"
        whatsappMessage="Hello, I want to book a Meditation session."
      />

      {/* INTRO — GLASS PANEL */}
      <section className="py-36 px-6">
        <div className="max-w-2xl mx-auto text-center backdrop-blur-sm bg-white/60 rounded-3xl p-12 animate-modern">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-8">
            Presence
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-10">
            Meditation for the Modern Mind
          </h2>
          <p className="text-lg leading-loose text-neutral-600">
            Designed for today’s pace of life, our meditation sessions help you
            slow down without disconnecting—resting awareness while staying grounded.
          </p>
        </div>
      </section>

      {/* BREATH VISUAL — MODERN */}
     {/* BREATHING EXPERIENCE — ENHANCED */}
<section className="py-32 bg-white">
  <div className="max-w-md mx-auto text-center space-y-16">

    {/* Breathing Rings */}
    <div className="relative w-48 h-48 mx-auto">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-neutral-300 animate-inhale" />

      {/* Inner ring */}
      <div className="absolute inset-8 rounded-full bg-neutral-200/60 animate-exhale delay-half" />
    </div>

    {/* Breath Text */}
    <div className="space-y-4">
      <p className="text-2xl font-light tracking-widest animate-inhale">
        Inhale
      </p>

      <div className="w-16 h-px bg-neutral-300 mx-auto" />

      <p className="text-2xl font-light tracking-widest animate-exhale delay-half">
        Exhale
      </p>
    </div>

    {/* Guidance */}
    <p className="text-sm text-neutral-400 tracking-wide">
      Follow the rhythm for a few breaths
    </p>
  </div>
</section>




      {/* BENEFITS */}
  {/* PRACTICE MEDITATION — MODERN & CALM */}
<section className="py-36 px-6 bg-neutral-50">
  <div className="max-w-3xl mx-auto text-center">

    {/* Section label */}
    <p className="text-xs tracking-widest uppercase text-neutral-400 mb-10">
      Practice
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-light mb-16">
      A Simple Meditation Practice
    </h2>

    {/* Steps */}
    <div className="space-y-20">

      {/* Step 1 */}
      <div className="animate-modern">
        <p className="text-sm text-neutral-400 mb-3">Step 01</p>
        <h3 className="text-xl md:text-2xl font-light mb-4">
          Sit Comfortably
        </h3>
        <p className="text-neutral-600 leading-loose">
          Sit upright on a chair or cushion. Let your spine be tall but relaxed.
          Rest your hands gently on your thighs or in your lap.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-neutral-300 mx-auto" />

      {/* Step 2 */}
      <div className="animate-modern delay-200">
        <p className="text-sm text-neutral-400 mb-3">Step 02</p>
        <h3 className="text-xl md:text-2xl font-light mb-4">
          Bring Attention to the Breath
        </h3>
        <p className="text-neutral-600 leading-loose">
          Notice the natural rhythm of your breath.  
          No need to change it — simply observe the inhale and the exhale.
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-16 bg-neutral-300 mx-auto" />

      {/* Step 3 */}
      <div className="animate-modern delay-400">
        <p className="text-sm text-neutral-400 mb-3">Step 03</p>
        <h3 className="text-xl md:text-2xl font-light mb-4">
          Gently Return When the Mind Wanders
        </h3>
        <p className="text-neutral-600 leading-loose">
          Thoughts will arise — this is natural.  
          When you notice the mind drifting, gently return your attention to the breath.
        </p>
      </div>

    </div>

    {/* Closing note */}
    <p className="mt-24 text-neutral-500 text-lg font-light animate-modern delay-600">
      Practice for 3–5 minutes.  
      Consistency matters more than duration.
    </p>
  </div>
</section>

















{/* ////// */}
      {/* PROGRAM DETAILS */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto animate-modern">
          <ProgramDetails
            title="Session Structure"
            description="Each session unfolds slowly, allowing space for rest, reflection, and awareness."
            levels={[
              "Breath Awareness",
              "Body Scan & Relaxation",
              "Mindfulness & Silent Sitting",
            ]}
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 bg-neutral-50">
        <p className="text-center text-xs tracking-widest uppercase text-neutral-400 mb-16">
          Atmosphere
        </p>
        <div className="max-w-5xl mx-auto px-6 animate-modern">
          <ImageCarousel
            images={[
              "/images/meditation1.jpg",
              "/images/meditation2.jpg",
              "/images/meditation3.jpg",
              "/images/meditation4.jpg",
              "/images/meditation5.jpg",
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto animate-modern">
          <FAQSection faqs={meditationFAQ} />
        </div>
      </section>

      {/* CTA — MODERN GHOST → SOLID */}
      <section className="py-36 px-6 text-center bg-gradient-to-b from-white to-neutral-100">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-8">
          Begin
        </p>

        <h3 className="text-3xl md:text-4xl font-light mb-14">
          Join a Guided Meditation Session
        </h3>

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hello! I’d like to book a Meditation session."
          target="_blank"
          className="inline-flex items-center justify-center px-14 py-4 rounded-full border border-neutral-400 text-neutral-700 hover:bg-neutral-800 hover:text-white transition-all duration-300"
        >
          Book via WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Meditation;
