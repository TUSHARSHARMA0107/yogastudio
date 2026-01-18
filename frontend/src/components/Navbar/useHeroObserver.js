import { useEffect, useState } from "react";

export function useHeroObserver() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const target = document.getElementById("hero-end");
    if (!target) {
      console.error("❌ hero-end NOT FOUND");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("hero-end visible:", entry.isIntersecting);
        setOverHero(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return overHero;
}