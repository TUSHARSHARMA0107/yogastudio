// components/ImageCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageCarousel = ({ images }) => (
  <div className="max-w-6xl mx-auto py-24 px-6">
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={img}
              className="w-full h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ImageCarousel;
