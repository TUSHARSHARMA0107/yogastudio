import HeroDesktop from "../components/home/video/HeroDesktop";
import HeroCards from "../components/home/cards/HeroCards";
import AboutBusiness from "../components/home/description/BusinessStory";
import PopupBox from "../components/PopUpBox";

const whatsappNumber = "9198XXXXXXXX"; // replace with your number
const whatsappMessage = encodeURIComponent(
  "Hello, I would like to book a demo yoga session."
);

export default function Home() {
  return (
    <>
      <PopupBox/>
      <main className="relative bg-[#FDFCFB] text-stone-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <HeroDesktop />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-[#FDFCFB] to-transparent z-20" />
      </section>


      {/* ================= HERO CARDS ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <HeroCards />
        </div>
      </section>


      {/* ================= TRUST STATS ================= */}
      <section className="py-32 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {[
            { value: "500+", label: "Students Guided" },
            { value: "10+", label: "Years Experience" },
            { value: "50+", label: "Workshops" },
            { value: "100%", label: "Personal Attention" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-semibold">
                {item.value}
              </h3>
              <p className="text-stone-500 mt-3 text-sm tracking-wide uppercase">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="py-32 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <AboutBusiness />
        </div>
      </section>


      {/* ================= PROGRAMS ================= */}
      <section className="py-32 bg-white border-t border-stone-100">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Our Programs
            </h2>

            <p className="text-stone-500 max-w-xl mx-auto">
              Carefully designed sessions for every stage of your wellness
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Beginner Classes",
                desc: "Start with guided foundational practices.",
              },
              {
                title: "Advanced Training",
                desc: "Deepen your practice and understanding.",
              },
              {
                title: "Kids Special Care",
                desc: "Special attention and nurturing for children.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 rounded-4xl bg-[#FDFCFB] border border-stone-100 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                <p className="text-stone-500">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="py-32 border-t border-stone-100">

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">

          <div className="w-full h-105 md:h-130 rounded-4xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1400"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              A Space for Peace & Growth
            </h2>

            <p className="text-stone-500 text-lg mb-8">
              We provide an environment that supports calmness, clarity and
              personal transformation.
            </p>

            <ul className="space-y-4 text-stone-500">
              <li>✔ Peaceful environment</li>
              <li>✔ Personalized guidance</li>
              <li>✔ Holistic development</li>
            </ul>
          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-white border-t border-stone-100">

        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

          <h2 className="text-4xl md:text-6xl font-serif mb-20">
            What People Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "This place transformed my life.",
              "Peaceful and supportive environment.",
              "Best decision for personal growth.",
            ].map((text, i) => (
              <div
                key={i}
                className="p-10 bg-[#FDFCFB] rounded-4xl border border-stone-100"
              >
                <p className="text-stone-500 italic text-lg">"{text}"</p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-40 text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            Begin Your Journey Today
          </h2>

          <p className="text-stone-500 text-lg mb-12">
            Take the first step toward balance, clarity and transformation.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-stone-900 text-white rounded-full text-sm tracking-widest uppercase hover:bg-stone-700 transition"
          >
            Book on WhatsApp
          </a>

        </div>

      </section>

      </main>
    </>
  );
}