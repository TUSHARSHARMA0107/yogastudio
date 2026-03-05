import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogPage() {
  const [backendBlogs, setBackendBlogs] = useState([]);

  const customBlogs = [
    {
      id: "custom-1",
      category: "Wellness",
      title: "The Founder’s Yoga Journey",
      content:
        "Discover the transformative power of mindfulness and the path that led to the creation of our sanctuary.",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      date: "Oct 24, 2023",
    },
    {
      id: "custom-2",
      category: "Lifestyle",
      title: "Mindful Living in a Digital Age",
      content:
        "How to disconnect to reconnect. Exploring the nuances of modern meditation.",
      imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
      date: "Nov 12, 2023",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/blogs")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => Array.isArray(data) && setBackendBlogs(data))
      .catch(() => console.warn("Backend unavailable."));
  }, []);

  const allBlogs = [...customBlogs, ...backendBlogs];

  return (
    <section className="py-28 bg-[#fdfcf9] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-amber-600 font-semibold block mb-4">
              Journal & Insights
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
              Stories of{" "}
              <span className="italic font-serif text-amber-600">
                Mindfulness
              </span>
            </h2>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="prev-nav w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-amber-600 hover:text-white transition-all duration-300">
              ←
            </div>
            <div className="next-nav w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-amber-600 hover:text-white transition-all duration-300">
              →
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{ prevEl: ".prev-nav", nextEl: ".next-nav" }}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {allBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">

                {/* Image */}
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={blog.imageUrl || "https://via.placeholder.com/600"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-900 rounded-full shadow-sm">
                      {blog.category || "Article"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs text-slate-400 mb-3">
                    {blog.date || "March 2024"}
                  </span>

                  <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-snug group-hover:text-amber-600 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="mt-auto">
                    <button
                      className="text-xs uppercase tracking-widest font-semibold text-slate-900 flex items-center gap-2 group/link"
                    >
                      Read Article
                      <span className="transition-transform group-hover/link:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #d97706 !important;
        }
      `}</style>
    </section>
  );
}