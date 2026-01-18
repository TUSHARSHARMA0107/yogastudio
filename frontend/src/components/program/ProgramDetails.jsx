// components/program/ProgramDetails.jsx


const ProgramDetails = ({ title, description, levels }) => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 animate-fade-up">
          {title}
        </h2>

        <p className="text-stone-600 max-w-3xl mx-auto mb-14 animate-fade-up delay-200">
          {description}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {levels.map((level, i) => (
            <div
              key={i}
              className="border border-stone-200 rounded-2xl py-10 px-6 hover:border-emerald-500 transition animate-fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h4 className="text-lg font-medium">{level}</h4>
              <p className="mt-3 text-sm text-stone-500">
                Structured progression designed for safe strength, control, and confidence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
