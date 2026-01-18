// pages/CorporateBooking.jsx



import VideoHero from "../../components/program/VideoHero";
import ImageCarousel from "../../components/program/ImageCarousel";
import ProgramDetails from "../../components/program/ProgramDetails";
import BenefitsSection from "../../components/program/BenefitsSection";
import FAQSection from "../../components/program/FAQSection";

const CorporateBooking = () => {
  const corporateBenefits = [
    {
      title: "Reduced Workplace Stress",
      desc: "Regular wellness sessions help employees manage stress and mental fatigue effectively.",
    },
    {
      title: "Improved Focus & Productivity",
      desc: "Breathwork and mindful movement enhance clarity, concentration, and performance.",
    },
    {
      title: "Higher Employee Engagement",
      desc: "Wellbeing initiatives increase participation, morale, and team connection.",
    },
    {
      title: "Healthier Work Culture",
      desc: "Consistent wellness practices support long-term physical and mental wellbeing.",
    },
  ];

  const corporateFAQ = [
    {
      q: "Can sessions be conducted online or onsite?",
      a: "Yes. We offer onsite, virtual, and hybrid corporate wellness programs.",
    },
    {
      q: "Are programs suitable for all age groups?",
      a: "Absolutely. Sessions are inclusive and adaptable for diverse teams.",
    },
    {
      q: "How long are corporate sessions?",
      a: "Typical sessions range from 30 to 60 minutes, based on your schedule.",
    },
  ];

  return (
    <main className="bg-neutral-100 text-neutral-800 overflow-hidden">
      {/* HERO — CORPORATE STYLE */}
      <VideoHero
        title="Corporate Wellness Programs"
        subtitle="Structured wellness initiatives designed for modern workplaces."
        videoSrc="/videos/corporate-yoga.mp4"
        whatsappMessage="Hello, I want to book a Corporate Wellness program."
      />

      {/* KPI BAND — VERY VISIBLE DIFFERENCE */}
      <section className="bg-white border-b border-neutral-300">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-semibold text-emerald-600">↓ 30%</p>
            <p className="text-sm text-neutral-600 mt-2">Stress Reduction</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-emerald-600">↑ 20%</p>
            <p className="text-sm text-neutral-600 mt-2">Productivity</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-emerald-600">↑ 25%</p>
            <p className="text-sm text-neutral-600 mt-2">Engagement</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-emerald-600">↓ 22%</p>
            <p className="text-sm text-neutral-600 mt-2">Burnout Risk</p>
          </div>
        </div>
      </section>

      {/* OVERVIEW — SPLIT LAYOUT (NOT USED ELSEWHERE) */}
      <section className="bg-neutral-50 py-24 px-6 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">
              Wellness Built for the Workplace
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Our corporate wellness programs are designed to fit seamlessly
              into office schedules and remote work environments. Sessions focus
              on stress management, posture, focus, and mental clarity—without
              disrupting productivity.
            </p>
          </div>

          <div className="bg-white border border-neutral-300 p-10">
            <ul className="space-y-4 text-sm text-neutral-700">
              <li>✔ Suitable for all fitness levels</li>
              <li>✔ Minimal space & equipment required</li>
              <li>✔ Online, onsite, or hybrid delivery</li>
              <li>✔ Custom scheduling & session formats</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFITS — STRUCTURED GRID */}
      <section className="bg-white border-b border-neutral-200">
        <BenefitsSection
          heading="Key Benefits for Organizations"
          benefits={corporateBenefits}
        />
      </section>

      {/* PROGRAM DETAILS — CORPORATE FORMATS */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <ProgramDetails
          title="Corporate Program Formats"
          description="Choose from flexible wellness formats designed to support teams across roles and locations."
          levels={[
            "Weekly Office or Virtual Sessions",
            "Leadership & Focus Workshops",
            "Wellness Days & Corporate Retreats",
          ]}
        />
      </section>

      {/* GALLERY — DOCUMENTARY STYLE */}
      <section className="bg-white py-20 border-b border-neutral-200">
        <h3 className="text-center text-2xl md:text-3xl font-medium mb-12">
          Corporate Wellness in Practice
        </h3>

        <div className="max-w-6xl mx-auto px-6">
          <ImageCarousel
            images={[
              "/images/corporate1.jpg",
              "/images/corporate2.jpg",
              "/images/corporate3.jpg",
              "/images/corporate4.jpg",
            ]}
          />
        </div>
      </section>

      {/* FAQ — CLEAN & COMPACT */}
      <section className="bg-neutral-50">
        <FAQSection faqs={corporateFAQ} />
      </section>

      {/* CTA — HR DECISION MAKER */}
      <section className="bg-white py-24 px-6 border-t border-neutral-300 text-center">
        <h3 className="text-3xl md:text-4xl font-medium mb-6">
          Invest in Your Team’s Wellbeing
        </h3>

        <p className="text-neutral-600 max-w-xl mx-auto mb-10">
          Let’s design a corporate wellness program aligned with your
          organizational goals and team needs.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX?text=Hello! I’d like to discuss a Corporate Wellness program."
          target="_blank"
          className="inline-block px-10 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Enquire on WhatsApp
        </a>
      </section>
    </main>
  );
};

export default CorporateBooking;

