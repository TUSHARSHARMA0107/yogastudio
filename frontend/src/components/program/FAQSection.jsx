// components/program/FAQSection.jsx



const FAQSection = ({ faqs }) => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <h2 className="text-center text-3xl font-serif mb-14 animate-fade-up">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group bg-white rounded-2xl p-6 shadow-sm animate-fade-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <summary className="cursor-pointer font-medium flex justify-between items-center">
              {item.q}
              <span className="transition group-open:rotate-45">+</span>
            </summary>

            <p className="mt-4 text-sm text-stone-600 leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
