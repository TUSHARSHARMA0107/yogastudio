// pages/CommercialBooking.jsx



import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";

const CommercialBooking = () => {
  const commercialBenefits = [
    {
      title: "Brand Integration",
      desc: "Wellness experiences structured to align with brand identity and event objectives.",
    },
    {
      title: "Operational Precision",
      desc: "Clear timelines, professional facilitators, and production-ready execution.",
    },
    {
      title: "Scalable Formats",
      desc: "Suitable for intimate gatherings as well as large public events.",
    },
    {
      title: "Audience Engagement",
      desc: "Designed to increase dwell time and emotional recall.",
    },
  ];

  const commercialFAQ = [
    {
      q: "Is this suitable for non-yoga audiences?",
      a: "Yes. Sessions are inclusive and accessible for all participants.",
    },
    {
      q: "Can this fit tight schedules?",
      a: "Absolutely. Formats are modular and adaptable.",
    },
    {
      q: "Do you collaborate with agencies?",
      a: "Yes. We work closely with planners, agencies, and production teams.",
    },
  ];

  return (
    <main className="bg-neutral-100 text-neutral-800">
      {/* HERO */}
      <VideoHero
        variant="commercial"
        title="Commercial Wellness Experiences"
        subtitle="Professional yoga and wellness programming for events, brands, and large audiences."
        videoSrc="/videos/commercial-event.mp4"
        whatsappMessage="Hello! I’d like to discuss a Commercial Wellness booking."
      />

      {/* SECTION: VALUE STRIP (STRUCTURED, FLAT) */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 px-6 py-10 text-sm">
          <div className="border-l-2 border-emerald-500 pl-4">
            Brand-aligned experiences
          </div>
          <div className="border-l-2 border-emerald-500 pl-4">
            Scalable event formats
          </div>
          <div className="border-l-2 border-emerald-500 pl-4">
            Professional execution
          </div>
        </div>
      </section>

      {/* BENEFITS – FLAT, GRID-DRIVEN */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <BenefitsSection
          heading="Why Commercial Teams Choose Us"
          benefits={commercialBenefits}
        />
      </section>

      {/* GALLERY – CONTAINED */}
      <section className="bg-white py-16">
        <h2 className="text-center text-2xl md:text-3xl font-medium mb-10">
          Commercial Experience Highlights
        </h2>

        <div className="max-w-6xl mx-auto">
          <ImageCarousel
            images={[
              "/images/commercial1.jpg",
              "/images/commercial2.jpg",
              "/images/commercial3.jpg",
              "/images/commercial4.jpg",
            ]}
          />
        </div>
      </section>

      {/* PROGRAM DETAILS – BOXED */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <ProgramDetails
          title="Available Experience Formats"
          description="Modular formats designed to integrate seamlessly into commercial environments."
          levels={[
            "Guided Event Yoga Sessions",
            "Sound & Breath Installations",
            "Wellness Lounges & Brand Activations",
          ]}
        />
      </section>

      {/* FAQ – CLEAN & COMPACT */}
      <section className="bg-white">
        <FAQSection faqs={commercialFAQ} />
      </section>

      {/* CTA – LIGHT, STRUCTURED */}
      <section className="bg-neutral-50 py-20 px-6 border-t border-neutral-200 text-center">
        <h3 className="text-3xl md:text-4xl font-medium mb-6">
          Planning a Commercial Event?
        </h3>

        <p className="text-neutral-600 max-w-lg mx-auto mb-10">
          Share your event details and we’ll design a wellness experience
          aligned with your brand and audience.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hello! I’d like to discuss a Commercial Wellness booking."
          target="_blank"
          className="inline-block px-10 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default CommercialBooking;
