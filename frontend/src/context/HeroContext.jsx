import { createContext, useContext, useState } from "react";

const HeroContext = createContext();

export function HeroProvider({ children }) {
  const [heroIntersecting, setHeroIntersecting] = useState(false);
  return (
    <HeroContext.Provider value={{ heroIntersecting, setHeroIntersecting }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  return useContext(HeroContext);
}