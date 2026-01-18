// components/program/BenefitsSection.jsx


const BenefitsSection = ({ heading, benefits }) => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-16 animate-fade-up">
        {heading}
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <h3 className="text-xl mb-4 font-medium group-hover:text-emerald-600 transition">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-stone-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;