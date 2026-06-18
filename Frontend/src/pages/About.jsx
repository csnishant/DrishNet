// About.jsx
import React from "react";
import { motion } from "framer-motion";
// Updated for modern package consistency
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-[#38bdf8] text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-slate-300 text-3xl" /> },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-emerald-400 text-3xl" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#030712",
      }}
      className="text-slate-100 px-6 md:px-20 py-24 relative overflow-hidden">
      {/* Background Cybertech Grid Mesh */}
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-[#38bdf8] text-xs font-semibold tracking-[0.2em] bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full uppercase inline-block mb-4">
            // Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
            About DrishNet<span className="text-[#38bdf8]">.</span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
            At <span className="text-slate-100 font-semibold">DrishNet</span>, we
            transform ideas into powerful, responsive digital setups. We
            specialize in launching websites that look exceptionally clean, load
            incredibly fast, and provide seamless experiences across all device
            screen layouts.
          </p>
        </div>

        {/* Core Services Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <div
            style={{
              background: "rgba(10, 20, 38, 0.35)",
              borderColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="p-6 rounded-2xl border shadow-xl hover:border-sky-500/20 transition-all duration-300">
            <FaLaptopCode className="text-[#38bdf8] text-3xl mb-4" />
            <h4 className="text-lg font-bold text-slate-100 mb-2">
              Full-Stack Development
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              From responsive client-side views to database logic pipelines, we
              engineer solid backend architectures and functional user layouts.
            </p>
          </div>

          <div
            style={{
              background: "rgba(10, 20, 38, 0.35)",
              borderColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="p-6 rounded-2xl border shadow-xl hover:border-sky-500/20 transition-all duration-300">
            <FaLightbulb className="text-amber-400 text-3xl mb-4" />
            <h4 className="text-lg font-bold text-slate-100 mb-2">
              Clean Interface Design
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              We closely evaluate user interactions to assemble intuitive
              layouts, keeping user engagement fluid, clear, and focused.
            </p>
          </div>

          <div
            style={{
              background: "rgba(10, 20, 38, 0.35)",
              borderColor: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            className="p-6 rounded-2xl border shadow-xl hover:border-sky-500/20 transition-all duration-300">
            <FaRocket className="text-rose-500 text-3xl mb-4" />
            <h4 className="text-lg font-bold text-slate-100 mb-2">
              Performance Optimization
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our code structures undergo extensive processing checkpoints for
              speed optimization, ensuring fast load speeds on deployment.
            </p>
          </div>
        </div>

        {/* Tech Stack Modules */}
        <div className="max-w-4xl mx-auto text-center">
          <h3
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-6">
            [ Operational Core Technologies ]
          </h3>
          <div className="flex justify-center flex-wrap gap-4 md:gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "rgba(10, 20, 38, 0.2)",
                  borderColor: "rgba(255, 255, 255, 0.03)",
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-sm">
                <div>{tech.icon}</div>
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="text-xs font-medium tracking-tight text-slate-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
