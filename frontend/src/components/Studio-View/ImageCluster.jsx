import { useMemo, useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
  "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200",
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200",
];

export default function ImageCluster() {

  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(220);

  /* RESPONSIVE RADIUS */
  useEffect(() => {

    const handleResize = () => {

      const width = window.innerWidth;

      if (width < 640) setRadius(120);
      else if (width < 768) setRadius(150);
      else if (width < 1024) setRadius(190);
      else setRadius(240);

    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  /* ROTATION */
  useEffect(() => {

    let frame;

    const animate = () => {
      setRotation(prev => prev + 0.002);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);

  }, []);

  /* IMAGE POSITIONS */
  const positions = useMemo(() => {

    return images.map((_, index) => {

      const angle =
        (index / images.length) * 2 * Math.PI + rotation;

      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      };

    });

  }, [rotation, radius]);

  return (

    <section className="w-full flex justify-center py-20 bg-[#FDFCFB] px-4">

      <div className="max-w-6xl w-full">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-800">
            Our Yoga Studio Moments
          </h2>

          <p className="mt-4 text-stone-500 max-w-xl mx-auto text-sm md:text-base">
            Experience the peaceful atmosphere of our studio where
            mindfulness, movement, and wellness come together.
          </p>

        </div>


        {/* ROTATION BOX */}
        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center border border-stone-200 rounded-[40px] bg-white shadow-xl overflow-hidden">

          {/* CENTER IMAGE */}
          <div className="absolute z-20 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full p-2 sm:p-3 bg-white border border-stone-200 shadow-lg">

            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={images[0]}
                className="w-full h-full object-cover"
                alt="center"
              />
            </div>

          </div>


          {/* ORBIT IMAGES */}
          {images.map((img, index) => {

            const { x, y } = positions[index];

            return (

              <div
                key={index}
                className="absolute transition-transform duration-200"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >

                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 p-1 sm:p-2 bg-white rounded-full border border-stone-200 shadow-lg hover:scale-110 transition">

                  <div className="w-full h-full rounded-full overflow-hidden">

                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt="studio"
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}