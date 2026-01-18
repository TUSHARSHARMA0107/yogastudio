// components/VideoHero.jsx


// components/program/VideoHero.jsx
const VideoHero = ({
  title,
  subtitle,
  videoSrc,
  whatsappMessage,
  variant = "default", // "default" | "commercial"
}) => {
  const overlayClass =
    variant === "commercial"
      ? "bg-black/65"
      : "bg-black/45";

  const textAlign =
    variant === "commercial"
      ? "items-end text-left"
      : "items-center text-center";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className={`absolute inset-0 ${overlayClass}`} />

      <div className={`relative z-10 flex h-full ${textAlign} px-8 pb-20`}>
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            {title}
          </h1>
          <p className="text-neutral-200 mb-10">
            {subtitle}
          </p>

          <a
            href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
