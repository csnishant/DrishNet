// Experience.jsx
import React from "react";
import { FiArrowUpRight, FiLayers, FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    title: "HireSync (AI Recruitment Hub)",
    tech: "MERN Stack + ATS Scorer",
    description:
      "A full-stack, automated recruitment framework featuring end-to-end user authentication, responsive job pipelines, direct resume uploads, and custom data processing metrics.",
    link: "https://job-portal-website-p1.netlify.app/",
    type: "project",
  },
  {
    title: "Food Delivery Architecture",
    tech: "MERN + Stripe + Tailwind + Zustand",
    description:
      "Developed a robust e-commerce application integrated with role-based validation models (Zod), modular state management (Zustand), and production-grade secure payments via Stripe.",
    link: "https://online-food-app-ji19.onrender.com/",
    type: "project",
  },
  {
    title: "Web Development Certification",
    tech: "HTML5, CSS3, JavaScript (ES6+)",
    description:
      "Johns Hopkins University credentials verifying mastery over advanced responsive system patterns, core engine execution loops, and dynamic DOM data structures.",
    link: "https://www.coursera.org/account/accomplishments/certificate/7RLFSCRW9C3G",
    type: "certificate",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#030712",
      }}
      className="py-24 px-6 md:px-20 min-h-screen text-slate-100 relative overflow-hidden flex flex-col justify-center">
      {/* Structural Backdrop Grid Line Elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.012) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.012) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full uppercase inline-block mb-4">
          // Technical Track Record
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
          Projects & Credentials<span className="text-[#38bdf8]">.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mt-4 leading-relaxed">
          A focused repository of built structures, full-stack frameworks, and
          official technical validations.
        </p>
      </div>

      {/* ── Grid Interface ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10 w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              background: "rgba(10, 20, 38, 0.35)",
              borderColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="flex flex-col justify-between p-6 rounded-2xl border shadow-xl hover:border-sky-500/30 transition-all duration-300 group">
            <div>
              {/* Card Meta Indicator */}
              <div className="flex items-center justify-between mb-4">
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="text-slate-500 text-[10px] tracking-wider uppercase">
                  [ 0{index + 1} // {exp.type} ]
                </span>
                {exp.type === "project" ? (
                  <FiLayers
                    className="text-[#38bdf8]/60 group-hover:text-[#38bdf8] transition-colors"
                    size={16}
                  />
                ) : (
                  <FiCheckCircle
                    className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors"
                    size={16}
                  />
                )}
              </div>

              {/* Title & Core Stack Info */}
              <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors duration-200">
                {exp.title}
              </h3>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-xs text-[#38bdf8]/80 font-medium mt-1.5 mb-4">
                {exp.tech}
              </p>

              {/* Description Body */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>
            </div>

            {/* Redirection Link Anchor */}
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#38bdf8] w-fit pt-2 transition-colors border-t border-slate-800/60 w-full group-hover:border-[#38bdf8]/20">
              <span>Explore Implementation</span>
              <FiArrowUpRight
                size={14}
                className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
