import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ image, title, desc, route, index }) => {
  const cardRef = useRef(null);
  const btnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const btn = btnRef.current;

    const move = (e) => {
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * 0.4;
      const y = (e.clientY - (top + height / 2)) * 0.4;

      gsap.to(btn, {
        x,
        y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const reset = () =>
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });

    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", move);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col sm:flex-row gap-6 p-4 rounded-[2rem] bg-white/70 backdrop-blur-md border border-stone-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700"
    >
      {/* Shimmer */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]" />
      </div>

      {/* Image */}
      <div className="w-full sm:w-[45%] aspect-[4/5] sm:aspect-square overflow-hidden rounded-[1.5rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between py-2 pr-4">
        <div>
          <span className="text-[10px] font-black tracking-[0.2em] text-stone-400 uppercase italic">
            0{index + 1} // Discover
          </span>

          <h3 className="mt-3 text-2xl font-medium tracking-tight text-stone-900">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-stone-500 font-light">
            {desc}
          </p>
        </div>

        <button
          ref={btnRef}
          onClick={() => navigate(route)}
          className="relative mt-8 h-12 w-12 flex items-center justify-center rounded-full bg-stone-900 text-white overflow-hidden group/btn shadow-lg"
        >
          <span className="z-10 text-lg group-hover/btn:translate-x-1 transition-transform">
            →
          </span>

          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
        </button>
      </div>
    </div>
  );
};

export default function HeroCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
      });

      gsap.from(".hero-card", {
        scrollTrigger: {
          trigger: ".grid",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      title: "Happiness",
      desc: "Unlock the science of joyful living through mindful daily rituals.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
      route: "/studioview/#hapiness",
    },
    {
      title: "Inner Peace",
      desc: "Silence the noise and rediscover the clarity within your soul.",
      image:
        "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
      route: "/studioview/#peace",
    },
    {
      title: "Space",
      desc: "A sanctuary designed for growth, healing, and absolute focus.",
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
      route: "/studioview/#specialattention",
    },
    {
      title: "Connection",
      desc: "Join a curated community committed to mental and physical excellence.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200",
      route: "/contact",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FDFCFB] py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-100 rounded-full blur-[120px] opacity-70" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-stone-50 rounded-full blur-[100px] opacity-70" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">

          <div className="max-w-2xl">
            <h2 className="hero-text text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1]">
              The Art of <br />
              <span className="text-stone-400 italic font-light tracking-tighter">
                Conscious Living.
              </span>
            </h2>
          </div>

          <p className="hero-text text-stone-500 max-w-[300px] text-sm leading-relaxed border-l border-stone-200 pl-6">
            A premium sanctuary for those seeking to balance performance with
            profound peace.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {data.map((card, i) => (
            <div key={i} className="hero-card">
              <Card {...card} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}