import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const magnets = useRef([]);

  /* 🧲 Magnetic hover – desktop only, NO images */
  useEffect(() => {
    if (window.innerWidth < 768) return;

    magnets.current.forEach((el) => {
      if (!el) return;

      const strength = 0.3;

      const move = (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * strength,
          y: (e.clientY - r.top - r.height / 2) * strength,
          duration: 0.25,
          ease: "power3.out"
        });
      };

      const reset = () =>
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.45,
          ease: "elastic.out(1,0.4)"
        });

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
    });
  }, []);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Book Demo", path: "/book-demo" }
  ];

  return (
    <>
      {/* MAIN FOOTER */}
    <footer
  className="
    relative
    w-full
    text-white
    bg-no-repeat
    bg-cover
    bg-top
    md:bg-center
  "
  style={{
    backgroundImage: "url('./yy.jpg')"
  }}
>

        {/* Overlay
        <div className="absolute inset-0 bg-black/65" /> */}

        {/* CONTENT */}
        <div className="relative z-10 px-5 py-16 space-y-16 md:px-20 md:py-24 md:grid md:grid-cols-3 md:gap-16 md:space-y-0">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-4">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-14 mx-auto md:mx-0"
            />

            <h2 className="text-xl font-bold">
              <span className="text-blue-400">Sohum</span>
              <span className="text-pink-500">Yogkul</span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed">
              123 Innovation Street <br />
              Tech City, India <br />
              560001
            </p>
          </div>

          {/* MIDDLE */}
          <div className="text-center">
            <h3 className="mb-5 text-base font-semibold">Pages</h3>

            <div className="grid grid-cols-3 gap-y-4 text-sm">
              {pages.map((page, i) => (
                <Link
                  key={page.name}
                  to={page.path}
                  ref={(el) => (magnets.current[i] = el)}
                  className={`mx-auto ${
                    page.name === "Book Demo"
                      ? "text-pink-400 font-semibold"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right space-y-5">
            <h3 className="text-base font-semibold">Connect With Us</h3>

            <div className="flex justify-center md:justify-end gap-6 text-xl">
              {[
                { Icon: FaInstagram, link: "#" },
                { Icon: FaLinkedin, link: "#" },
                { Icon: FaTwitter, link: "#" },
                { Icon: FaGithub, link: "#" },
                { Icon: FaWhatsapp, link: "https://wa.me/919999999999" }
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  ref={(el) => (magnets.current[9 + i] = el)}
                  className="hover:text-pink-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* DEVELOPER BAR – PURE BLACK */}
      <div className="bg-black text-white text-center py-3 text-xs md:text-sm">
        Developed by <strong>Your Name</strong>
        <a
          href="mailto:hello@yourbrand.com"
          className="ml-3 inline-flex items-center gap-1 text-pink-400"
        >
          <FaEnvelope /> hello@yourbrand.com
        </a>
      </div>
    </>
  );
}