import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";

const AerialYoga = () => {
  const aerialBenefits = [
    {
      title: "Spinal Decompression",
      desc: "Zero-compression inversions gently lengthen the spine, relieving lower back pain and improving posture."
    },
    {
      title: "Deep Core Strength",
      desc: "Suspension challenges stability, activating deep abdominal and postural muscles effortlessly."
    },
    {
      title: "Enhanced Flexibility",
      desc: "Silks support safe entry into deeper stretches while reducing joint pressure."
    },
    {
      title: "Stress & Nervous System Reset",
      desc: "Floating postures calm the mind and activate the parasympathetic nervous system."
    },
  ];

  const aerialFAQ = [
    {
      q: "Is Aerial Yoga safe for beginners?",
      a: "Absolutely. Our beginner classes focus on grounding, confidence, and foundational movements using full support."
    },
    {
      q: "What should I wear?",
      a: "Comfortable, body-hugging clothing that covers knees and underarms for skin protection."
    },
    {
      q: "Do I need prior yoga experience?",
      a: "No experience required. Strength, flexibility, and confidence are built gradually."
    },
    {
      q: "Is there a weight limit?",
      a: "Our professional rigs are safety-tested and rated for up to 1,000 lbs."
    }
  ];

  return (
    <main className="bg-stone-50 overflow-hidden">
      {/* HERO */}
      <VideoHero
        title="Aerial Yoga"
        subtitle="Defy gravity. Decompress your spine. Rediscover effortless movement."
        videoSrc="/videos/aerial-hero.mp4"
        whatsappMessage="Hi! I’d like to book an Aerial Yoga session."
      />

      {/* INTRO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            What Is Aerial Yoga?
          </h2>
          <p className="text-stone-600 leading-relaxed text-lg">
            Aerial Yoga blends traditional yoga postures with a suspended silk hammock,
            allowing the body to move freely, decompress the spine, and build strength
            with minimal joint strain. It is both playful and deeply therapeutic.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <BenefitsSection
        heading="Benefits of Aerial Yoga"
        benefits={aerialBenefits}
      />

      {/* PROGRAM DETAILS */}
      <ProgramDetails
        title="Our Aerial Yoga Programs"
        description="Each class is thoughtfully structured to ensure safety, progression, and mindful exploration of movement."
        levels={[
          "Intro to Aerial Yoga – Foundations & Safety",
          "Aerial Flow – Strength & Fluidity",
          "Aerial Conditioning – Core & Upper Body",
        ]}
      />

      {/* IMAGE GALLERY */}
      <section className="py-24 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-serif mb-14 animate-fade-up">
          Inside Our Aerial Studio
        </h2>

        <ImageCarousel
          images={[
            "/images/aerial-1.jpg",
            "/images/aerial-2.jpg",
            "/images/aerial-3.jpg",
            "/images/aerial-4.jpg",
            "/images/aerial-5.jpg",
            "/images/aerial-6.jpg",
          ]}
        />
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-right">
            <h3 className="text-3xl font-serif mb-6">
              A Calm, Safe & Supportive Space
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Our studio uses premium aerial silks, expert rigging, and small group sizes
              to ensure personal attention, safety, and a deeply restorative experience.
            </p>
          </div>

          <div className="animate-fade-left">
            <img
              src="/images/aerial-space.jpg"
              alt="Aerial yoga studio"
              className="rounded-3xl shadow-lg w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={aerialFAQ} />

      {/* FINAL CTA */}
      <section className="py-28 px-6 text-center bg-gradient-to-b from-white to-stone-100">
        <h3 className="text-4xl md:text-5xl font-light mb-8 animate-fade-up">
          Ready to Fly?
        </h3>

        <p className="text-stone-600 max-w-xl mx-auto mb-12 animate-fade-up delay-200">
          Experience a joyful, strength-building, and deeply healing practice
          designed for all bodies.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hi! I’d like to book an Aerial Yoga session."
          target="_blank"
          className="inline-block px-12 py-4 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 animate-fade-up delay-300"
        >
          Book Aerial Yoga on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default AerialYoga;
