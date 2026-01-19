import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  // HERO BREAK OBSERVER
useEffect(() => {
  const heroSection = document.getElementById("hero-section"); // Observe the whole hero
  if (!heroSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Logic: If the hero is NO LONGER intersecting the viewport's top trigger line
      setOverHero(!entry.isIntersecting);
    },
    {
      threshold: 0,
      // Focus on the top 10% of the viewport. This forces the trigger 
      // as soon as the hero leaves the top, regardless of address bar shifts.
      rootMargin: "-10% 0px -90% 0px" 
    }
  );

  observer.observe(heroSection);
  return () => observer.disconnect();
}, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-full"
      >
        {/* ================= HERO MODE ================= */}
        {overHero ? (
          <div className="mx-auto w-[96%] max-w-[1400px] rounded-full bg-white/70 backdrop-blur-lg border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <div className="flex h-16 items-center justify-between px-6 md:px-10">

              {/* LOGO */}
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px]">YS</span>
                </div>
                <div className="text-[11px] font-bold tracking-[0.4em] uppercase">
                  Yoga<span className="font-light opacity-60">Studio</span>
                </div>
              </div>

              {/* DESKTOP MENU */}
              <div className="hidden md:block">
                <DesktopMenu />
              </div>

              {/* RIGHT ACTION */}
              <div className="flex items-center gap-4">
                {/* DESKTOP CTA */}
                <button className="hidden md:block px-6 py-2 bg-black text-white text-xs rounded-full">
                  Book Class
                </button>

                {/* MOBILE HAMBURGER */}
                <button
                  onClick={() => setMobileOpen(p => !p)}
                  className="md:hidden h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center"
                >
                  <div className="relative w-5 h-5">
                    <motion.span
                      animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                      className="absolute top-1 left-0 w-5 h-[2px] bg-black rounded"
                    />
                    <motion.span
                      animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                      className="absolute top-2.5 left-0 w-5 h-[2px] bg-black rounded"
                    />
                    <motion.span
                      animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                      className="absolute top-4 left-0 w-5 h-[2px] bg-black rounded"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= AFTER HERO MODE ================= */
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 md:px-6">

            {/* LOGO PILL */}
            <div className="rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-md px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px]">YS</span>
                </div>
                <div className="text-[11px] font-bold tracking-[0.4em] uppercase">
                  Yoga<span className="font-light opacity-60">Studio</span>
                </div>
              </div>
            </div>

            {/* MENU PILL */}
            <div className="hidden md:block rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-md px-10 py-3">
              <DesktopMenu />
            </div>

            {/* CTA + MOBILE HAMBURGER */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="hidden md:inline-flex px-6 py-2 bg-black text-white text-xs rounded-full"
              >
                Book Class
              </a>

              {/* MOBILE HAMBURGER */}
              <button
                onClick={() => setMobileOpen(p => !p)}
                className="md:hidden h-10 w-10 rounded-full bg-white/90 border border-black/10 shadow-md flex items-center justify-center"
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="absolute top-1 left-0 w-5 h-[2px] bg-black rounded"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="absolute top-2.5 left-0 w-5 h-[2px] bg-black rounded"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="absolute top-4 left-0 w-5 h-[2px] bg-black rounded"
                  />
                </div>
              </button>
            </div>
          </div>
        )}
      </motion.nav>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
