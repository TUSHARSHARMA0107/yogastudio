export default function HeroInfo({ visible }) {
  return (
    <div
      className={`
        /* Increased size to text-xl and added font-medium for emphasis */
        text-xl font-medium leading-relaxed text-white/100
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <p>
        Personalized yoga sessions designed to restore harmony,
        enhance flexibility, and cultivate mindfulness.
      </p>
    </div>
  );
}