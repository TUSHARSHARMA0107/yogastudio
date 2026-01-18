import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ image, title, desc, route }) => {
  const cardRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  /* 🧲 Magnetic Button (Desktop Only) */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const btn = btnRef.current;

    const move = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const reset = () => gsap.to(btn, { x: 0, y: 0, duration: 0.3 });

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  const handleClick = () => {
    gsap.to(cardRef.current, {
      x: 120,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => navigate(route),
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative flex gap-5 rounded-3xl border border-black/5 bg-white p-5 shadow-lg shadow-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Soft Accent Border */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-200 via-pink-200 to-teal-200 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60" />

      {/* Image */}
      <div className="w-[40%] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {desc}
          </p>
        </div>

        <button
          ref={btnRef}
          onClick={handleClick}
          className="mt-4 w-fit rounded-full bg-gradient-to-r from-blue-500 to-pink-500 px-5 py-2 text-sm font-medium text-white shadow-md"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default function HeroCards() {
  const sectionRef = useRef(null);

  /* 🎬 Scroll Entrance */
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Animate Heading then stagger cards
    tl.fromTo(
      ".hero-header-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      ".hero-card",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 px-6 py-20 lg:px-[8%]">
      
      {/* ADAPTED HEADING SECTION */}
      <div className="hero-header-content mb-12 ml-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
            Our Studio
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">Wellness</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-lg text-sm leading-relaxed">
          Explore our specialized programs and premium facilities designed to support your daily yoga practice and mental clarity.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {[
          {
            title: "Hapiness",
            desc: "become happy eveery day.",
            image: "/99.jpeg",
            route: "#",
          },
          {
            title: "Peace",
            desc: "find inner peace.",
            image: "/99.jpeg",
            route: "#",
          },
          {
            title: "Facilities",
            desc: "HAve the best facilities for your yoga",
            image: "/99.jpeg",
            route: "#",
          },
          {
            title: "Contact ",
            desc: "contact use to book and handle all your queries.",
            image: "/99.jpeg",
            route: "#",
          },
        ].map((card, i) => (
          <div key={i} className="hero-card">
            <Card {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}