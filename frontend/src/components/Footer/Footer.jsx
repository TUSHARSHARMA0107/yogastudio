import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  
  FaTwitter,
  
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const magnets = useRef([]);

  useEffect(() => {
    const elements = magnets.current;

    elements.forEach((el) => {
      if (!el) return;

      const move = (e) => {
        const { left, top, width, height } =
          el.getBoundingClientRect();
        const x = (e.clientX - (left + width / 2)) * 0.3;
        const y = (e.clientY - (top + height / 2)) * 0.3;

        gsap.to(el, {
          x,
          y,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.4)",
        });
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);

      el._move = move;
      el._leave = leave;
    });

    return () => {
      elements.forEach((el) => {
        if (!el) return;
        el.removeEventListener("mousemove", el._move);
        el.removeEventListener("mouseleave", el._leave);
      });
    };
  }, []);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/studio-experience" },
    { name: "Program", path: "/program" },
    { name: "Studio", path: "/studioview" },
    { name: "Review", path: "/review" },
    { name: "Blog", path: "/social" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <footer className="relative w-full bg-[#050505] text-white overflow-hidden border-t border-white/5">

      {/* Premium Gradient Glow */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
      <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-14">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-24">

          {/* BRAND */}
          <div className="md:col-span-4 space-y-8">

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <img
                  src="/logo.jpeg"
                  alt="Logo"
                  className="w-14 h-14 rounded-2xl object-cover brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-pink-500/40 transition-all" />
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Sohum<span className="text-pink-500">.</span>
                </h2>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Wellness Studio
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A mindful sanctuary blending traditional yogic wisdom with
              modern digital craftsmanship.
            </p>
          </div>

          {/* LINKS */}
          <div className="md:col-span-5 grid grid-cols-2 gap-10">

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">
                Navigation
              </h3>
              <ul className="space-y-4">
                {pages.slice(0, 4).map((page, i) => (
                  <li key={page.name}>
                    <Link
                      to={page.path}
                      ref={(el) => (magnets.current[i] = el)}
                      className="inline-block text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">
                Company
              </h3>
              <ul className="space-y-4">
                {pages.slice(4).map((page, i) => (
                  <li key={page.name}>
                    <Link
                      to={page.path}
                      ref={(el) => (magnets.current[i + 4] = el)}
                      className="inline-block text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 font-semibold md:text-right">
              Let's Connect
            </h3>

            <div className="flex flex-col md:items-end gap-6">

              <button
                ref={(el) => (magnets.current[8] = el)}
                className="relative px-7 py-3 bg-white text-black font-medium rounded-full overflow-hidden group transition-all"
              >
                <span className="relative z-10">Book a Session</span>
                <div className="absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <div className="flex gap-6 pt-4">
                {[FaInstagram, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      ref={(el) => (magnets.current[10 + i] = el)}
                      className="text-white/30 hover:text-white transition-colors text-lg"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-[11px] text-white/30 tracking-widest uppercase">
            © 2026 Sohum Yogkul. All Rights Reserved.
          </p>

          <div className="flex items-center gap-10 text-[11px] text-white/30 tracking-widest uppercase">

            <span>
              Developed by{" "}
              <span className="text-white font-semibold">
                Tushar Sharma
              </span>
            </span>

            <a
              href="mailto:hello@sohum.com"
              className="hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="text-sm" />
              hello@sohum.com
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}