import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiSmartphone,
  FiFigma,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiEdit3,
  FiVideo,
} from "react-icons/fi";

// Swiper CSS Styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper/modules";

// Services Data with premium matching icons
const services = [
  {
    title: "Web Development",
    icon: FiCpu,
    desc: "Next-gen web applications built with speed, scalability, and modern clean code architectures.",
  },
  {
    title: "App Development",
    icon: FiSmartphone,
    desc: "Native & cross-platform iOS & Android mobile ecosystems crafted for immersive performance.",
  },
  {
    title: "UI/UX Design",
    icon: FiFigma,
    desc: "High-fidelity, user-centric prototypes designed with deep research and spatial micro-interactions.",
  },
  {
    title: "SEO Services",
    icon: FiTrendingUp,
    desc: "Strategic search engine optimization engine adjustments to dominate top global search layouts.",
  },
  {
    title: "Digital Marketing",
    icon: FiTarget,
    desc: "Hyper-targeted campaigns built to scale conversions and expand direct brand outreach metrics.",
  },
  {
    title: "Branding",
    icon: FiAward,
    desc: "Cohesive visual corporate identity frameworks engineered with premium style structures.",
  },
  {
    title: "Content Creation",
    icon: FiEdit3,
    desc: "Compelling technical copy and media narratives fine-tuned to connect with modern communities.",
  },
  {
    title: "Video Editing",
    icon: FiVideo,
    desc: "Cinematic promotional video layouts tailored with fluid rhythms and custom auditory flows.",
  },
];

export default function ServicesCarousel() {
  return (
    <div
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      className="bg-[#050b14] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Abstract background subtle glow matching header */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-[#38bdf8] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
          Core Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f0f9ff]">
          Our Services<span className="text-[#38bdf8]">.</span>
        </h2>
        <div className="w-12 h-[2px] bg-sky-500/30 mx-auto mt-4" />
      </div>

      {/* Custom Styles Injection to override Swiper defaults matching DrishNet cyan color */}
      <style>{`
        .drishnet-swiper .swiper-pagination-bullet {
          background: #475569 !important;
          opacity: 0.6;
        }
        .drishnet-swiper .swiper-pagination-bullet-active {
          background: #38bdf8 !important;
          width: 24px !important;
          border-radius: 4px !important;
          opacity: 1;
        }
        .drishnet-swiper .swiper-button-next, 
        .drishnet-swiper .swiper-button-prev {
          color: #38bdf8 !important;
          transform: scale(0.75);
          transition: all 0.2s ease;
        }
        .drishnet-swiper .swiper-button-next:hover, 
        .drishnet-swiper .swiper-button-prev:hover {
          color: #f0f9ff !important;
          text-shadow: 0 0 8px rgba(56,189,248,0.6);
        }
        .drishnet-swiper {
          padding-bottom: 50px !important;
        }
      `}</style>

      {/* Swiper Layout */}
      <Swiper
        slidesPerView={1}
        grid={{ rows: 1, fill: "row" }}
        spaceBetween={20}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 24,
          },
        }}
        modules={[Grid, Autoplay, Navigation, Pagination]}
        className="max-w-6xl mx-auto drishnet-swiper z-10">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.35)" }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                style={{
                  background: "rgba(10, 20, 38, 0.4)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(56, 189, 248, 0.1)",
                }}
                className="rounded-2xl p-6 md:p-8 flex flex-col items-start h-full group transition-all duration-300 shadow-xl">
                {/* Tech Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-sky-500/5 border border-sky-500/15 flex items-center justify-center text-[#38bdf8] mb-5 group-hover:bg-sky-400 group-hover:text-[#050b14] group-hover:border-sky-400 transition-all duration-300 shadow-md shadow-sky-500/5">
                  <IconComponent
                    size={22}
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>

                {/* Service Meta Title */}
                <h3 className="text-xl font-bold text-[#f0f9ff] mb-2 tracking-wide group-hover:text-[#38bdf8] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Desc */}
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
