import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919876543210"; // your number (no +)
const MESSAGE = encodeURIComponent(
  "Hello 🙏 I would like to book a yoga session. Please share availability."
);

const YogaHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#FAF9F6] overflow-hidden">
      
      {/* Image */}
      <div className="absolute inset-0 lg:left-1/2 lg:w-1/2">
        <img
          src="/images/yoga-hero.jpg"
          alt="Yoga practice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/70 to-transparent hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:min-h-[90vh] flex items-center">
        <div className="max-w-2xl">

          <span className="inline-block text-xs tracking-[0.35em] uppercase text-stone-500 mb-6">
            Established 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight">
            Yoga for the <br />
            <span className="not-italic font-sans font-light text-stone-600">
              Modern Soul
            </span>
          </h1>

          <p className="mt-8 text-lg text-stone-500 max-w-md leading-relaxed">
            डिजिटल शोर से दूर, एक ऐसा स्थान जहाँ आपकी सांस और शरीर का तालमेल मिलता है।
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            
            {/* WhatsApp Booking */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-stone-900 text-white text-center hover:bg-stone-700 transition shadow-lg"
            >
              Book a Session
            </a>

            {/* Explore Studio */}
            <Link
              to="/studio-experience"
              className="px-10 py-4 border border-stone-300 text-stone-900 text-center hover:border-stone-900 transition flex items-center justify-center group"
            >
              Explore Studio
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YogaHero;
