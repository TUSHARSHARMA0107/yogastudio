import React, { useEffect, useState } from "react";

const images = [
  "/images/studio/studio-1.jpg",
  "/images/studio/studio-2.jpg",
  "/images/studio/studio-3.jpg",
  "/images/studio/studio-4.jpg",
  "/images/studio/studio-5.jpg",
];

const YogaStudioSpace = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clients, setClients] = useState(1);

  // Auto image change
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(imgInterval);
  }, []);

  // Client counter (slow & calm)
  useEffect(() => {
    if (clients >= 50) return;

    const counter = setTimeout(() => {
      setClients((prev) => prev + 1);
    }, 80); // slow increase

    return () => clearTimeout(counter);
  }, [clients]);

  return (
    <section className="py-28 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="md:col-span-5">
          <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900 mb-6">
            A Real Yoga Studio
          </h2>

          <p className="text-stone-500 text-lg leading-relaxed mb-6">
            यह सिर्फ़ योग करने की जगह नहीं है।  
            यह एक शांत स्टूडियो है — जहाँ शरीर और श्वास
            अपने स्वाभाविक ताल में आते हैं।
          </p>

          <p className="text-stone-500 text-base leading-relaxed mb-12">
            No rush. No noise.  
            Just space, breath, and presence.
          </p>

          {/* CLIENT COUNTER */}
          <div className="border-t border-stone-200 pt-8">
            <p className="text-sm tracking-widest uppercase text-stone-400 mb-2">
              Clients Served
            </p>

            <div className="flex items-end gap-2">
              <span className="text-5xl font-serif text-stone-900">
                {clients}
              </span>
              <span className="text-2xl text-stone-500 mb-1">+</span>
            </div>

            <p className="mt-2 text-stone-500 text-sm">
              Trusted by people seeking calm, balance, and mindful movement.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE BOX */}
        <div className="md:col-span-7 relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Yoga studio view ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out
                ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-xs tracking-widest uppercase opacity-80">
              Studio Space
            </span>
            <p className="text-lg font-light mt-1">
              Calm • Open • Grounded
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default YogaStudioSpace;
