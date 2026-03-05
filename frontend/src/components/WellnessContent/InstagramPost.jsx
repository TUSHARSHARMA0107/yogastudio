import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1200",
  },
];

export default function InstagramSection() {
  return (
    <section className="relative py-32 bg-[#FDFCFB] overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000"
          alt="background"
          className="w-full h-full object-cover opacity-[0.05]"
        />
      </div>

      {/* Ambient blur shapes */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-stone-100 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">

          <div className="max-w-xl">

            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-4">
              Social Gallery
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Follow Our{" "}
              <span className="italic font-light text-stone-400">
                Journey
              </span>
            </h2>

            <p className="text-stone-500 mt-6 leading-relaxed">
              Glimpses from our studio, daily practice, and moments of
              mindfulness shared with our community.
            </p>

          </div>

          <a
            href="#"
            className="text-sm tracking-widest uppercase text-stone-500 border-b border-stone-300 pb-1 hover:text-stone-900 transition"
          >
            @YourStudio
          </a>

        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >

          {posts.map((post) => (

            <SwiperSlide key={post.id}>

              <div className="group relative bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500 aspect-[4/5]">

                <img
                  src={post.image}
                  alt="instagram post"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-stone-900/20 to-transparent transition duration-500" />

                {/* Instagram icon */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-stone-700 border border-stone-200">
                  Instagram
                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>


      {/* Swiper arrow styling */}
      <style>{`

      .swiper-button-next,
      .swiper-button-prev{
        color:#44403c;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover{
        color:#000;
      }

      `}</style>

    </section>
  );
}