import { useState } from "react";
import { MapPin, Play } from "lucide-react";

const slides = [
  {
    title: "The Zenith Hall",
    subtitle: "Main Practice Space",
    description:
      "Bathed in natural morning light, our primary hall features sustainable oak flooring.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1600",
  },
  {
    title: "Therapeutic Lounge",
    subtitle: "Recovery & Herbal Tea",
    description:
      "Relax after practice in our peaceful lounge and enjoy calming botanical teas.",
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1600",
  },
  {
    title: "Zen Garden",
    subtitle: "Outdoor Mindfulness",
    description:
      "A calm outdoor courtyard designed for meditation and reflection.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600",
  },
  {
    title: "Guided Meditation",
    subtitle: "Studio Atmosphere",
    description:
      "Experience the peaceful rhythm of breath and stillness.",
    video:
      "https://cdn.coverr.co/videos/coverr-yoga-meditation-1572/1080p.mp4",
  },
];

export default function StudioTourSlider() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full py-28 bg-[#FDFCFB]">

      {/* HEADER */}
      <div className="text-center mb-14">
        <div className="flex justify-center items-center gap-2 mb-4">
          <MapPin size={14} className="text-stone-400" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-bold">
            Interactive Studio Tour
          </span>
        </div>

        <h2 className="text-5xl font-light text-stone-900">
          Explore Our{" "}
          <span className="italic font-serif text-stone-400">
            Sanctuary
          </span>
        </h2>
      </div>


      {/* MAIN DISPLAY */}
      <div className="max-w-5xl mx-auto">

        <div className="relative h-[520px] rounded-[40px] overflow-hidden shadow-xl">

          {slides[current].video ? (
            <video
              src={slides[current].video}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/70 to-transparent text-white">

            <span className="text-xs uppercase tracking-[0.3em] opacity-80">
              {slides[current].subtitle}
            </span>

            <h3 className="text-3xl font-light mt-2">
              {slides[current].title}
            </h3>

            <p className="text-sm mt-3 max-w-md opacity-90">
              {slides[current].description}
            </p>

            {slides[current].video && (
              <div className="flex items-center gap-2 text-xs mt-3 opacity-80">
                <Play size={14} />
                Studio Atmosphere
              </div>
            )}

          </div>
        </div>


        {/* CIRCULAR NAVBAR */}
        <div className="flex justify-center items-center gap-6 mt-10">

          {slides.map((slide, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300
              ${
                current === index
                  ? "ring-4 ring-stone-900 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >

              {slide.video ? (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <Play size={18} className="text-white" />
                </div>
              ) : (
                <img
                  src={slide.image}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              )}

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}