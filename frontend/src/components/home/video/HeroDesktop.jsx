import HeroVideo from "./HeroVideo";
import HeroBrand from "./HeroBrand";
import HeroQuotes from "./HeroQuotes";
import HeroInfo from "./HeroInfo";
import HeroOverlay from "./HeroOverlay";
import { useHeroTimeline } from "./useHeroTimeline";

export default function HeroDesktop() {
  const step = useHeroTimeline(); // ✅ TOP LEVEL CALL

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <HeroVideo />

      {/* ///overlay */}
       <HeroOverlay/>
      <div className="relative z-10 flex h-full items-center px-[10vw] text-white">
        <div className="max-w-2xl space-y-8">
          <HeroBrand visible={step >= 1} />
          <HeroQuotes visible={step >= 2} />
          <HeroInfo visible={step >= 3} />
        </div>
      </div>
    </section>
  );
}