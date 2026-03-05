import React from 'react';

const YogaTestimonials = () => {
  return (
    <section className="relative py-32 bg-neutral-950 text-white overflow-hidden">
      {/* Decorative background element for a "premium" feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-500/20 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Subtle Category Label */}
        <span className="inline-block mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
          Member Experience
        </span>

        {/* Testimonial Quote - Using a Serif font for luxury appeal */}
        <blockquote className="text-3xl md:text-5xl font-light italic leading-tight tracking-tight text-neutral-100">
          “This studio doesn’t just teach yoga — it changes how you feel, breathe, and live.”
        </blockquote>

        {/* Member Attribution */}
        <div className="mt-10 flex flex-col items-center">
          <div className="h-px w-12 bg-neutral-800 mb-6"></div>
          <cite className="not-italic">
            <span className="block text-lg font-medium text-neutral-200">Elena Rossi</span>
            <span className="block text-sm text-neutral-500 mt-1 tracking-wide">
              Studio Member since 2022
            </span>
          </cite>
        </div>
      </div>
    </section>
  );
};

export default YogaTestimonials;
