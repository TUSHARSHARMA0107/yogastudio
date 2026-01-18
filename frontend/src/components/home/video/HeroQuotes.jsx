import { useEffect, useState, useMemo } from "react";

const QUOTES = [
  "Breathe. Move. Transform.",
  "Balance the body and mind.",
  "Inner peace is the new success."
];

export default function HeroQuotes({ visible }) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 2026 Best Practice: Use varying speeds to mimic human typing
  const typingSpeed = useMemo(() => {
  if (isDeleting) return 30; // 2026 standard: deleting should be slightly faster and linear

  const currentFullText = QUOTES[index];
  const lastChar = typed.slice(-1);
  const isEndOfSentence = lastChar === "." || lastChar === "!" || lastChar === "?";

  // 1. Slow down significantly at punctuation for "readability breath"
  if (isEndOfSentence) return 600;

  // 2. Slow down slightly for spaces (mimics moving hand to spacebar)
  if (lastChar === " ") return 150;

  // 3. Fluid typing: Use a base speed with a tiny "jitter"
  // This prevents the "robotic rhythm" while keeping the flow consistent
  const baseSpeed = 70;
  const jitter = Math.random() * 40; 
  
  return baseSpeed + jitter;

}, [typed, isDeleting, index]);








  useEffect(() => {
    if (!visible) return;

    const currentFullText = QUOTES[index];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        setTyped(currentFullText.slice(0, typed.length + 1));
        
        if (typed === currentFullText) {
          // Pause at the end of a full sentence
          setTimeout(() => setIsDeleting(true), 2500); 
        }
      } else {
        // Deleting phase
        setTyped(currentFullText.slice(0, typed.length - 1));
        
        if (typed === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % QUOTES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, index, visible, typingSpeed]);

  return (
    <div
      className={`
        transition-all duration-1000 ease-out font-[Inter]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* min-h ensures the container doesn't jump when the line is empty */}
      <p className="text-2xl md:text-5xl font-black tracking-tighter uppercase flex items-center min-h-[1.2em] text-white">
        <span className="drop-shadow-md">{typed}</span>
       
        {/* Optimized Cursor: Smooth fade instead of harsh blink */}
        <span
          className="ml-2 w-[4px] h-[0.9em] bg-sky-400 animate-pulse-fast" 
          style={{ animation: 'cursorFade 0.8s infinite' }}
          aria-hidden="true"
        />
      </p>

      <style jsx>{`
        @keyframes cursorFade {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}