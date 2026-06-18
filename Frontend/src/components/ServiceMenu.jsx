import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper/modules";

const services = [
  { title: "Web Development", icon: "💻", desc: "Modern websites" },
  { title: "App Development", icon: "📱", desc: "iOS & Android" },
  { title: "UI/UX Design", icon: "🎨", desc: "User-friendly designs" },
  { title: "SEO Services", icon: "🚀", desc: "Rank higher on Google" },
  { title: "Digital Marketing", icon: "📢", desc: "Boost online presence" },
  { title: "Branding", icon: "🏷️", desc: "Professional brand identity" },
  { title: "Content Creation", icon: "✍️", desc: "Engaging content" },
  { title: "Video Editing", icon: "🎬", desc: "High-quality videos" },
];

export default function ServicesCarousel() {
  return (
    <div className="bg-black text-white py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>

      <Swiper
        slidesPerView={2}
        grid={{ rows: 2 }}
        spaceBetween={15}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 3, grid: { rows: 2 } },
        }}
        modules={[Grid, Autoplay, Navigation, Pagination]}
        className="max-w-6xl mx-auto">
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="bg-gray-900 rounded-2xl p-5 flex flex-col items-center shadow-lg border border-gray-700">
            <div className="text-5xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-400 text-center">{service.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
