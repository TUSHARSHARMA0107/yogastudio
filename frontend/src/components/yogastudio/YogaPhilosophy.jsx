import React, { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1600&q=80",
];

const YogaStudioSpace = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clients, setClients] = useState(1);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(imgInterval);
  }, []);

  useEffect(() => {
    if (clients >= 50) return;
    const counter = setTimeout(() => setClients(prev => prev + 1), 60);
    return () => clearTimeout(counter);
  }, [clients]);

  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#FCFBF9] text-[#1a1a1a] overflow-hidden">

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F2EE] -z-10 translate-x-1/4" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-5/12 z-10">

            <header className="mb-12">

              <span className="block text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium">
                The Environment
              </span>

              <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8 italic font-serif">
                A Sanctuary <br />
                <span className="not-italic font-sans font-light text-stone-400">
                  for the Soul
                </span>
              </h2>

              <div className="h-[1px] w-12 bg-stone-300 mb-8" />

              <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mb-6 italic">
                यह सिर्फ़ योग करने की जगह नहीं है। यह एक शांत स्टूडियो है — जहाँ शरीर और श्वास अपने स्वाभाविक ताल में आते हैं।
              </p>

              <p className="text-stone-400 text-sm tracking-wide uppercase font-light">
                No rush. No noise. Just presence.
              </p>

            </header>

            {/* CLIENT COUNTER */}
            <div className="flex items-center gap-8 group cursor-default">

              <div>
                <div className="flex items-baseline">
                  <span className="text-6xl font-light tracking-tighter text-stone-900 transition-all duration-700 group-hover:tracking-normal">
                    {clients}
                  </span>
                  <span className="text-xl font-light text-stone-400 ml-1">+</span>
                </div>

                <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400 mt-2">
                  Mindful Members
                </p>
              </div>

              <div className="h-10 w-[1px] bg-stone-200" />

              <p className="text-xs text-stone-500 max-w-[160px] leading-relaxed italic">
                Trusted by those seeking a deeper connection to movement.
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-7/12 relative">

            <div className="absolute -inset-4 border border-stone-200 rounded-[2rem] -z-10 translate-x-4 translate-y-4" />

            <div className="relative aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50">

              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${
                    index === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-110 opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Studio view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
                </div>
              ))}

              {/* IMAGE LABEL */}
              <div className="absolute bottom-8 left-8 flex items-center gap-4">

                <div className="flex gap-1">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 transition-all duration-500 rounded-full ${
                        i === activeIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium">
                  Gallery 0{activeIndex + 1}
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default YogaStudioSpace;
