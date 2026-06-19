import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDumbbell,
  FaSchool,
  FaGraduationCap,
  FaCut,
  FaClinicMedical,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

const businessSectors = [
  {
    title: "Smart Gym Operations",
    category: "Fitness Clubs & Gyms",
    icon: <FaDumbbell className="text-orange-400" />,
    tagline:
      "Run your fitness club completely automatically while boosting monthly member renewals.",
    detailedFeatures: [
      {
        text: "QR Code Attendance",
        desc: "Members scan access codes at the door to check in instantly without reception staff.",
      },
      {
        text: "Auto WhatsApp Reminders",
        desc: "Automatically alerts members via phone days before their fees expire to secure payment.",
      },
      {
        text: "Slot & Trainer Booking",
        desc: "Stop gym floor crowding. Clients book workout slots and personal trainers online.",
      },
    ],
    // High-end UI dashboard showcasing member metrics & fitness logs
    image:
      "https://images.pexels.com/photos/33879987/pexels-photo-33879987.jpeg",
  },
  {
    title: "Luxury Salon Booking Hub",
    category: "Salons & Premium Spas",
    icon: <FaCut className="text-pink-400" />,
    tagline:
      "A clean, modern appointment portal designed to keep your stylist seats occupied 24/7.",
    detailedFeatures: [
      {
        text: "Direct Client Booking Portal",
        desc: "Customers see your live open slots and book haircuts or hair treatments anytime.",
      },
      {
        text: "Smart Stylist Rotations",
        desc: "Eliminates overlapping calendars and coordinates multiple staff shifts effortlessly.",
      },
      {
        text: "No-Show Protection",
        desc: "Sends automatic SMS text reminders to clients to dramatically reduce canceled sessions.",
      },
    ],
    // Premium elegant lifestyle application workspace template
    image: "https://images.pexels.com/photos/7518736/pexels-photo-7518736.jpeg",
  },
  {
    title: "OmniMed Clinic Portal",
    category: "Hospitals & Private Clinics",
    icon: <FaClinicMedical className="text-teal-400" />,
    tagline:
      "Simplify daily patient check-ins and safeguard sensitive medical data.",
    detailedFeatures: [
      {
        text: "Live Token Queue System",
        desc: "Displays real-time waiting list queues on waiting area monitors to lower patient stress.",
      },
      {
        text: "Encrypted Patient Histories",
        desc: "Instantly search past diagnosis sheets, prescription histories, and health reports.",
      },
      {
        text: "Quick Digital Prescriptions",
        desc: "Type out medical forms during a check-up and email them directly to patients.",
      },
    ],
    // Crisp clean hospital/health analytics tracking application layout
    image:
      "https://images.pexels.com/photos/19976603/pexels-photo-19976603.jpeg",
  },
  {
    title: "Horizon School Network",
    category: "Schools & Academies",
    icon: <FaSchool className="text-sky-400" />,
    tagline:
      "Bring your administrative tasks, teachers, and parents inside one simple platform.",
    detailedFeatures: [
      {
        text: "One-Tap Digital Attendance",
        desc: "Teachers mark rolls on smartphones; missing student warnings ping parents instantly.",
      },
      {
        text: "Online Fee Collections",
        desc: "Parents pay fee installments safely with automatic invoices generated into accounts.",
      },
      {
        text: "Instant Circular Broadcasts",
        desc: "Publish exam schedules, sports days, and urgent circular notes cleanly in an app.",
      },
    ],
    // Clean educational metric visual grid dashboard
    image: "https://images.pexels.com/photos/8617731/pexels-photo-8617731.jpeg",
  },
  {
    title: "Apex Institute LMS",
    category: "Coaching & Training Centers",
    icon: <FaGraduationCap className="text-purple-400" />,
    tagline:
      "Give your students an unfair academic advantage with interactive online portals.",
    detailedFeatures: [
      {
        text: "Recorded Video Class Vaults",
        desc: "Categorize online video courses into clean chapters for simple preparation revision.",
      },
      {
        text: "Timed Online Mock Tests",
        desc: "Host digital test papers with timers and immediate auto-calculated results.",
      },
      {
        text: "Student Analytics Panel",
        desc: "Track performance graphs to spot student learning weaknesses instantly.",
      },
    ],
    // Dark sleek high-performance analytic dashboard visualizer
    image: "https://images.pexels.com/photos/7092339/pexels-photo-7092339.jpeg",
  },
];

const BusinessDeployments = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) =>
      prev === businessSectors.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? businessSectors.length - 1 : prev - 1,
    );
  };

  // Setup Smooth Auto-Playing Logic
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000); // Transitions every 6 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentSlide]);

  // Framer Motion Animation States
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    initial: (dir) => ({ opacity: 0, scale: 0.96, filter: "blur(8px)" }),
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 1.04,
      filter: "blur(8px)",
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="bg-[#050507] text-slate-100 px-4 sm:px-8 md:px-16 lg:px-24 py-28 font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      {/* iOS Ambient Soft Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-60 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] pointer-events-none" />

      {/* Hero Header Block */}
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-5 relative z-10">
        <span className="text-[11px] font-semibold tracking-[0.25em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full backdrop-blur-md inline-block">
          LIVE WORK PREVIEWS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Software Built for Local Growth
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
          Zero complex code language. See how our successful deployed platforms
          handle daily operations, automate communications, and boost sales.
        </p>
      </div>

      {/* Main Container Frame */}
      <div
        className="max-w-5xl mx-auto relative z-10"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}>
        {/* Main Card */}
        <div className="relative min-h-[580px] lg:min-h-[520px] bg-white/[0.02] border border-white/[0.06] rounded-[2.5rem] shadow-3xl backdrop-blur-3xl overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT COLUMN: Texts & Core Features (Dynamic Content Swapping) */}
          <div className="w-full lg:w-[56%] p-6 sm:p-10 md:p-12 flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  animate: { transition: { staggerChildren: 0.08 } },
                }}
                className="space-y-6">
                {/* Sector Header Details */}
                <motion.div
                  variants={textVariants}
                  className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xl backdrop-blur-xl shadow-inner">
                    {businessSectors[currentSlide].icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-400 block tracking-wide uppercase">
                      {businessSectors[currentSlide].category}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-white mt-0.5">
                      {businessSectors[currentSlide].title}
                    </h3>
                  </div>
                </motion.div>

                {/* Main Tagline */}
                <motion.p
                  variants={textVariants}
                  className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pl-1">
                  {businessSectors[currentSlide].tagline}
                </motion.p>

                {/* Mini Features List Checkbox items */}
                <motion.div variants={textVariants} className="space-y-4 pt-2">
                  {businessSectors[currentSlide].detailedFeatures.map(
                    (feature, idx) => (
                      <div key={idx} className="flex gap-4 group/item">
                        <div className="mt-0.5 flex-shrink-0">
                          <FaCheckCircle className="text-blue-500 text-base shadow-lg transition-transform duration-300 group-hover/item:scale-110" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-semibold tracking-tight text-slate-200">
                            {feature.text}
                          </h4>
                          <p className="text-xs text-slate-400 font-light leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Demo Navigation Indicator CTA */}
            <div className="pt-8 border-t border-white/[0.04] mt-8 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>ACTIVE SYSTEM PRODUCTION</span>
              <div className="flex items-center gap-1.5 text-blue-400 font-sans font-medium">
                <span>Deploy Ready</span>
                <FaArrowRight className="text-[10px]" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Native Dashboard App Image Screen Window */}
          <div className="w-full lg:w-[44%] bg-black/30 border-t lg:border-t-0 lg:border-l border-white/[0.06] p-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="w-full h-full min-h-[260px] max-h-[350px] lg:max-h-full rounded-2xl overflow-hidden border border-white/[0.08] relative shadow-2xl bg-[#09090e]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={currentSlide}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  src={businessSectors[currentSlide].image}
                  alt={businessSectors[currentSlide].title}
                  className="w-full h-full object-cover opacity-80 absolute inset-0"
                />
              </AnimatePresence>

              {/* iOS Floating Dark Glass HUD Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 border border-white/[0.06] px-4 py-2.5 rounded-xl backdrop-blur-md shadow-xl flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium font-sans tracking-wide text-slate-300">
                    Live Dashboard Module
                  </span>
                </div>
                <span className="text-[9px] font-mono font-medium text-slate-500 bg-white/[0.04] px-1.5 py-0.5 border border-white/[0.04] rounded">
                  v3.1 Stable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Slider Chevrons */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] lg:left-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0d0d12]/90 hover:bg-[#16161f] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 backdrop-blur-md shadow-2xl active:scale-95 z-30"
          aria-label="Previous Slide">
          <FaChevronLeft className="text-xs -translate-x-[1px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] lg:right-[-24px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0d0d12]/90 hover:bg-[#16161f] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 backdrop-blur-md shadow-2xl active:scale-95 z-30"
          aria-label="Next Slide">
          <FaChevronRight className="text-xs translate-x-[1px]" />
        </button>

        {/* Dynamic iOS Paging Indicator Track */}
        <div className="mt-8 flex justify-center items-center gap-2.5">
          {businessSectors.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                currentSlide === index
                  ? "w-8 bg-blue-500 shadow-lg shadow-blue-500/40"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Jump to panel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDeployments;
