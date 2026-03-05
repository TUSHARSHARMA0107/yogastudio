import { motion } from "framer-motion";

const VideoHero = ({ 
  title, 
  subtitle, 
  videoSrc, 
  whatsappMessage, 
  variant = "default" 
}) => {
  const isCommercial = variant === "commercial";
  
  // Refined layout logic
  const containerClasses = isCommercial 
    ? "items-end justify-start text-left pb-32 pl-12" 
    : "items-center justify-center text-center pb-20";

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Video with subtle zoom animation */}
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dynamic Overlay: Gradient for text legibility + Vignette */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${
        isCommercial ? "bg-black/40" : "bg-black/30"
      }`} />

      {/* Content Container */}
      <div className={`relative z-10 flex h-full w-full px-6 ${containerClasses}`}>
        <div className="max-w-4xl">
          {/* Staggered Animations for Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-extralight text-white mb-8 tracking-tighter leading-[1.1]">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "italic font-serif" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-300 mb-12 max-w-xl font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white rounded-full uppercase tracking-widest text-xs"
            >
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-300 -translate-x-full group-hover:translate-x-0 ease-out" />
              <span className="relative transition-colors duration-300 group-hover:text-black">
                Book Experience
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Premium touch) */}
      {!isCommercial && (
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      )}
    </section>
  );
};

export default VideoHero;

