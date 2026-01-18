import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "../Navbar/MenuConfig";

export default function MobileMenu({ open, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[10000]">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* RIGHT DRAWER */}
        <motion.aside
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", damping: 25, stiffness: 200 }}
  className="
    absolute top-0 right-0 h-full w-[82%] max-w-sm
    bg-white/65 backdrop-blur-2xl
    shadow-[-10px_0_40px_rgba(0,0,0,0.18)]
    border-l border-white/20
    flex flex-col
  "
>
            {/* HEADER */}
            <div className="flex items-center justify-between h-20 px-8 border-b border-white/30">
              <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-900 uppercase">
                YOGA<span className="font-light text-neutral-500">STUDIO</span>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="
                  h-9 w-9 rounded-full
                  bg-white/60 backdrop-blur
                  border border-black/10
                  shadow-sm
                  flex items-center justify-center
                  hover:bg-white/80 transition
                "
              >
                <span className="text-xl leading-none">✕</span>
              </button>
            </div>

            {/* MENU */}
            <nav className="p-8 space-y-1 overflow-y-auto">
              {MENU.map((item, index) => {
                const hasSub = !!item.children;
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="py-2"
                  >
                    {!hasSub ? (
                      <a
                        href={item.path}
                        onClick={onClose}
                        className="block text-lg font-light tracking-tight text-neutral-900 hover:text-neutral-500 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <div>
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between text-lg font-light tracking-tight text-neutral-900"
                        >
                          {item.label}
                          <span
                            className={`text-[10px] transition-transform duration-500 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen
                              ? "max-h-60 opacity-100 mt-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 border-l border-white/40 space-y-3">
                            {item.children.map((child) => (
                              <div
                                key={child}
                                onClick={onClose}
                                className="cursor-pointer text-sm text-neutral-600 hover:text-black transition-colors"
                              >
                                {child}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
