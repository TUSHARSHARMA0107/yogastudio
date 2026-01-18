export default function HeroBrand({ visible }) {
  return (
    <h1
      className={`
        /* Font and Size: Extra Bold, Large Size */
        text-[clamp(4rem,10vw,8rem)] 
        font-black leading-none
        
        /* Spacing and Case */
        w-fit uppercase tracking-[-0.05em]
        
        /* Color: Gradient matching the Pink and Teal from your logo */
        /* Use hex codes like #FF0090 (Pink) and #00C896 (Teal) for exact match if needed */
        bg-gradient-to-br from-pink-500 to-teal-400
        bg-clip-text text-transparent
        
        /* Animation */
        transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)
        ${visible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-24 scale-95"}
      `}
    >
      YOGA STUDIO
    </h1>
  );
}