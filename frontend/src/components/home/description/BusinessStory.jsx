const sections = [
  {
    title: "Our Beginning",
    text: "We started with a singular belief — life needs peace and harmony. We wanted to help people experience that through our sessions.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  },
  {
    title: "Our Motivation",
    text: "Seeing people find moments of stillness and genuine happiness is what drives our practice every day.",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
  },
  {
    title: "How We Work",
    text: "We believe in adaptable mindfulness, tailoring our approach to what best fits your personal journey.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
  },
  {
    title: "Looking Ahead",
    text: "Our vision is to build a community where everyone has the tools to cultivate their own inner peace.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
  },
];

export default function AboutBusiness() {
  return (
    <section className="bg-[#FDFCFB] text-stone-900 py-28 md:py-36">

      {/* ===== WRAPPER ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ===== HEADER ===== */}
        <div className="text-center max-w-4xl mx-auto mb-24">

          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold">
            Our Story
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">
            Finding{" "}
            <span className="italic text-stone-400">
              Harmony
            </span>{" "}
            in Everyday Life
          </h1>

          <p className="mt-8 text-stone-500 text-lg font-light max-w-2xl mx-auto">
            A journey built on mindfulness, balance and community. Each step
            represents our commitment to helping people reconnect with
            themselves.
          </p>

        </div>


        {/* ===== STORY SECTIONS ===== */}
        <div className="space-y-24 md:space-y-32">

          {sections.map((item, index) => (

            <div
              key={index}
              className={`
              grid lg:grid-cols-2 gap-16 lg:gap-24 items-center
              ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              {/* TEXT */}
              <div className="space-y-8">

                <div className="flex items-center gap-4">
                  <span className="h-[1px] w-16 bg-stone-200"></span>

                  <span className="text-xs uppercase tracking-[0.25em] text-stone-400 font-semibold">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  {item.title}
                </h3>

                <p className="text-stone-500 text-lg font-light leading-relaxed max-w-xl">
                  {item.text}
                </p>

              </div>


              {/* IMAGE */}
              <div className="relative">

                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg group">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70"></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}