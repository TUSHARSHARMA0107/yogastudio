export default function HeroOverlay() {
  return (
    <div
      className="
        absolute inset-0 z-[1]
        backdrop-blur-sm
        bg-[rgba(255,255,255,0.08)]
        pointer-events-none
      "
    />
  );
}