import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  ChevronDown
} from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const location = useLocation();

  /* ---------------- WHATSAPP FUNCTION ---------------- */

  const handleWhatsApp = () => {
    const phone = "919999999999"; // replace with your number
    const message = "Hello, I would like to book a yoga session.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  /* ---------------- SCROLL EFFECT ---------------- */

  useEffect(() => {

    let lastScroll = 0;

    const handleScroll = () => {

      const current = window.scrollY;

      setScrolled(current > 50);
      setHideNav(current > lastScroll && current > 120);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* ---------------- CLOSE MOBILE MENU ON DESKTOP ---------------- */

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  /* ---------------- MENU DATA ---------------- */

  const menus = [

    { name: "Home", path: "/" },

    {
      name: "Classes",
      mega: true,
      submenu: [
        {
          title: "Yoga Practice",
          items: [
            { name: "Yoga", path: "/program/yoga" },
            { name: "Aerial Yoga", path: "/program/aerial-yoga" },
            { name: "Pranayama", path: "/program/pranayama" }
          ]
        },
        {
          title: "Mind & Spirit",
          items: [
            { name: "Meditation", path: "/program/meditation" },
            { name: "Sound Healing", path: "/program/sound-healing" }
          ]
        },
        {
          title: "Services",
          items: [
            { name: "Corporate Service", path: "/program/corporate-booking" },
            { name: "Commercial Service", path: "/program/commercial" }
          ]
        }
      ]
    },

    {
      name: "About",
      mega: true,
      submenu: [
        {
          title: "About Us",
          items: [
            { name: "Trainer", path: "/about-trainer" },
            { name: "Studio View", path: "/studioview" },
            { name: "Studio Experience", path: "/studio-experience" }
          ]
        },
        {
          title: "Connect With Us",
          items: [
            { name: "Reviews", path: "/review" },
            { name: "Social Media", path: "/social" }
          ]
        }
      ]
    },

    { name: "Contact Us", path: "/contact" }

  ];

  return (
    <>

      {/* ================= DESKTOP NAVBAR ================= */}

      <motion.nav
        animate={{ y: hideNav ? -120 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 hidden md:flex justify-center pt-6"
      >

        <div
          className={`w-[85%] max-w-6xl h-16 flex items-center px-10 rounded-full transition-all duration-500
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-lg"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}
        >

          {/* LOGO */}

          <Link to="/" className="font-bold text-lg text-black">
            🧘 YogaFlow
          </Link>

          {/* MENU */}

          <ul className="flex gap-10 mx-auto">

            {menus.map((menu) => (

              <li
                key={menu.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >

                {!menu.mega ? (

                  <Link
                    to={menu.path}
                    className={`font-medium ${
                      location.pathname === menu.path
                        ? "text-emerald-600"
                        : "text-black"
                    }`}
                  >
                    {menu.name}
                  </Link>

                ) : (

                  <span className="flex items-center gap-1 cursor-pointer font-medium text-black">
                    {menu.name}
                    <ChevronDown size={16}/>
                  </span>

                )}

                {/* MEGA MENU */}

                <AnimatePresence>

                  {menu.mega && activeMenu === menu.name && (

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 bg-white rounded-2xl shadow-2xl p-8 grid gap-10 min-w-[520px]"
                      style={{
                        gridTemplateColumns: `repeat(${menu.submenu.length}, minmax(0,1fr))`
                      }}
                    >

                      {menu.submenu.map((section) => (

                        <div key={section.title}>

                          <h4 className="text-sm font-semibold text-emerald-600 mb-4">
                            {section.title}
                          </h4>

                          <div className="space-y-2">

                            {section.items.map((item) => (

                              <Link
                                key={item.name}
                                to={item.path}
                                className="block text-gray-700 hover:text-emerald-600 transition"
                              >
                                {item.name}
                              </Link>

                            ))}

                          </div>

                        </div>

                      ))}

                    </motion.div>

                  )}

                </AnimatePresence>

              </li>

            ))}

          </ul>

          {/* CTA */}

          <button
            onClick={handleWhatsApp}
            className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition"
          >
            Book Session
          </button>

        </div>

      </motion.nav>


      {/* ================= MOBILE NAVBAR ================= */}

      <div className="md:hidden fixed top-0 w-full z-50 p-4">

        <div
          className={`flex justify-between items-center rounded-xl px-6 py-3 transition-all duration-500
          ${
            scrolled
              ? "bg-white shadow"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}
        >

          <Link to="/" className="font-bold text-black">
            🧘 YogaFlow
          </Link>

          <button onClick={() => setMobileOpen(true)} className="text-2xl">
            ☰
          </button>

        </div>

      </div>


      {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex justify-end"
          >

            {/* OVERLAY */}

            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setMobileOpen(false)}
            />

            {/* DRAWER */}

            <div className="relative w-[80%] bg-white/70 backdrop-blur-xl h-full p-8 overflow-y-auto shadow-xl border-l border-white/30">

              <div className="flex justify-between items-center mb-12">

                <span className="font-bold text-xl">🧘 YogaFlow</span>

                <button onClick={() => setMobileOpen(false)}>✕</button>

              </div>

              <div className="space-y-8">

                {menus.map((menu) => (

                  <div key={menu.name}>

                    {!menu.mega ? (

                      <Link
                        to={menu.path}
                        className="block text-xl font-medium text-black"
                        onClick={() => setMobileOpen(false)}
                      >
                        {menu.name}
                      </Link>

                    ) : (

                      <>
                        <button
                          onClick={() =>
                            setMobileSub(
                              mobileSub === menu.name ? null : menu.name
                            )
                          }
                          className="flex justify-between w-full text-xl font-medium"
                        >
                          {menu.name}
                          <ChevronDown size={18}/>
                        </button>

                        <AnimatePresence>

                          {mobileSub === menu.name && (

                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="mt-6 space-y-6"
                            >

                              {menu.submenu.map((section) => (

                                <div
                                  key={section.title}
                                  className="bg-white/60 backdrop-blur-md rounded-2xl p-5"
                                >

                                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                                    {section.title}
                                  </p>

                                  <div className="space-y-3">

                                    {section.items.map((i) => (

                                      <Link
                                        key={i.name}
                                        to={i.path}
                                        onClick={() =>
                                          setMobileOpen(false)
                                        }
                                        className="flex justify-between items-center text-gray-700 text-lg"
                                      >
                                        {i.name}
                                        <span className="text-gray-400">
                                          →
                                        </span>
                                      </Link>

                                    ))}

                                  </div>

                                </div>

                              ))}

                            </motion.div>

                          )}

                        </AnimatePresence>

                      </>

                    )}

                  </div>

                ))}

                {/* BOOK SESSION */}

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-black text-white py-4 rounded-xl text-lg font-medium"
                >
                  Book Session
                </button>


                {/* SOCIAL MEDIA */}

                <div className="flex justify-center gap-6 pt-8">

                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/70 rounded-full shadow"
                  >
                    <Instagram size={20}/>
                  </motion.a>

                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/70 rounded-full shadow"
                  >
                    <Facebook size={20}/>
                  </motion.a>

                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/70 rounded-full shadow"
                  >
                    <Twitter size={20}/>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/70 rounded-full shadow"
                  >
                    <MessageCircle size={20}/>
                  </motion.a>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}