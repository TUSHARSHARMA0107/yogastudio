const sections = [
  {
    title: "Our Beginning",
    text: "We started with a singular belief — life needs peace and harmony and wanted to help people experience that through our sessions",
    image: "/99.jpeg",
  },
  {
    title: "Our Motivation",
    text: "Seeing people having moments of peace and happiness.",
    image: "/99.jpeg",
  },
  {
    title: "How We Work",
    text: "We work and believe in helping how best ways should be adapted.",
    image: "/99.jpeg",
  },
  {
    title: "Looking Ahead",
    text: "We focus on helping and letting people join us and have the best moments of peace.",
    image: "/99.jpeg",
  },
];

export default function AboutBusiness() {
  return (
    /* Light Background with Dark Slate text for contrast */
    <section className="bg-slate-50 text-slate-900 px-6 md:px-16 lg:px-24 py-28 font-[Inter]">
      
      {/* Heading */}
      <div className="text-center mb-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight 
          bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
          About Our Business
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
          A story of vision, clarity, and thoughtful execution.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-36">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-16 items-center 
            ${index % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
          >
            {/* TEXT */}
            <div className="max-w-xl lg:[direction:ltr]">
              <span className="text-sm font-bold tracking-[0.3em] text-sky-600">
                0{index + 1}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-slate-800">
                {item.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden lg:flex justify-center">
              <span className="w-[2px] h-48 bg-gradient-to-b 
                from-transparent via-sky-300 to-pink-300 opacity-60">
              </span>
            </div>

            {/* IMAGE */}
            <div className="relative rounded-3xl overflow-hidden 
              shadow-2xl group lg:[direction:ltr] border border-white/50">
              
              {/* Subtle Dark Overlay for contrast on images */}
              <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] z-10"></div>

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover 
                scale-105 group-hover:scale-125 
                transition-transform duration-[1200ms] ease-out"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}