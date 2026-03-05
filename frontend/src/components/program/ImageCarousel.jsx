import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = ({ images }) => {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header with Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-4 block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-stone-900">
              The Experience
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-stone-500 max-w-xs text-sm leading-relaxed font-light"
          >
            A visual journey through our methodology, space, and movement philosophy.
          </motion.p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.8 },
          }}
          className="overflow-visible"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="transition-transform duration-700">
              {({ isActive }) => (
                <div 
                  className={`relative overflow-hidden rounded-sm transition-all duration-1000 ease-out shadow-2xl shadow-stone-200/50 
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40 blur-[2px]"}`}
                >
                  <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                    <img
                      src={img}
                      alt={`Gallery slide ${i}`}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2s] ease-out"
                    />
                  </div>
                  
                  {/* Subtle glass overlay on active slide */}
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                    />
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation / Pagination UI */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <div className="custom-pagination !w-auto font-serif italic text-stone-900 tracking-widest text-lg"></div>
          <div className="h-[1px] w-24 bg-stone-200 hidden md:block" />
          <div className="flex gap-4">
             {/* Swiper default navigation can be targeted here */}
             <p className="text-[10px] uppercase tracking-widest text-stone-400">Drag to explore</p>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-current {
          font-weight: 600;
        }
        .swiper-pagination-total {
          color: #a8a29e;
          font-size: 0.8em;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
