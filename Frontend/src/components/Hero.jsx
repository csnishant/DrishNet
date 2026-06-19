import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const TICKER_ITEMS = [
  "Digital Service",
  "Marketing",
  "Social Media Growth",
  "CGI Ad",
  "Website Design",
  "Automation",
];

const LaptopSVG = () => (
  <svg
    className="w-full h-auto block animate-float drop-shadow-[0_10px_30px_rgba(56,189,248,0.15)]"
    viewBox="0 0 360 220"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="screen-clip">
        <rect x="54" y="18" width="252" height="155" rx="4" />
      </clipPath>
    </defs>

    {/* Lid */}
    <rect
      x="48"
      y="12"
      width="264"
      height="168"
      rx="8"
      fill="#1e293b"
      stroke="#334155"
      strokeWidth="1.5"
    />

    {/* Screen bg */}
    <rect x="54" y="18" width="252" height="155" rx="4" fill="#050b14" />

    <g clipPath="url(#screen-clip)">
      {/* Grid */}
      {[38, 58, 78, 98, 118, 138].map((y) => (
        <line
          key={y}
          x1="54"
          y1={y}
          x2="306"
          y2={y}
          stroke="rgba(56,189,248,0.05)"
          strokeWidth="0.5"
        />
      ))}
      {[114, 174, 234].map((x) => (
        <line
          key={x}
          x1={x}
          y1="18"
          x2={x}
          y2="173"
          stroke="rgba(56,189,248,0.04)"
          strokeWidth="0.5"
        />
      ))}

      {/* Scan line */}
      <rect
        className="animate-scan"
        x="54"
        y="18"
        width="252"
        height="3"
        fill="rgba(56,189,248,0.12)"
        rx="1"
      />

      {/* ── LEFT: Code Editor ── */}
      <rect
        x="58"
        y="22"
        width="120"
        height="147"
        rx="3"
        fill="rgba(13,27,42,0.8)"
        stroke="rgba(56,189,248,0.15)"
        strokeWidth="0.5"
      />
      <rect
        x="58"
        y="22"
        width="120"
        height="14"
        rx="3"
        fill="rgba(56,189,248,0.08)"
      />
      <circle cx="66" cy="29" r="3" fill="#ef4444" opacity="0.7" />
      <circle cx="74" cy="29" r="3" fill="#eab308" opacity="0.7" />
      <circle cx="82" cy="29" r="3" fill="#22c55e" opacity="0.7" />
      <text
        x="94"
        y="32"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fill="#38bdf8"
        opacity="0.5">
        main.js
      </text>

      {/* Code lines */}
      {[
        ["const DrishNet = {", 46],
        ['  mode: "build",', 56],
        ['  stack: ["web","ai"],', 66],
        ["  automate: true,", 76],
        ["  deploy();", 86],
        ["} ", 96],
      ].map(([text, y], i) => (
        <text
          key={i}
          className={`code-line code-line-${i + 1}`}
          x="62"
          y={y}
          fontFamily="JetBrains Mono, monospace"
          fontSize="6.5"
          fill="#38bdf8">
          {text}
          {i === 5 && (
            <tspan className="cursor-blink" fill="#38bdf8">
              ▋
            </tspan>
          )}
        </text>
      ))}

      {/* Line numbers */}
      {[46, 56, 66, 76, 86, 96].map((y, i) => (
        <text
          key={i}
          x="59"
          y={y}
          fontFamily="JetBrains Mono, monospace"
          fontSize="5.5"
          fill="#334155">
          {i + 1}
        </text>
      ))}

      {/* Terminal */}
      <rect
        x="58"
        y="122"
        width="120"
        height="43"
        rx="3"
        fill="rgba(0,0,0,0.5)"
        stroke="rgba(56,189,248,0.1)"
        strokeWidth="0.5"
      />
      <text
        x="62"
        y="132"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5.5"
        fill="#22c55e"
        opacity="0.8">
        ▶ npm run build
      </text>
      <text
        x="62"
        y="142"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5.5"
        fill="#38bdf8"
        opacity="0.6">
        ✓ compiled in 0.3s
      </text>
      <text
        x="62"
        y="152"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5.5"
        fill="#38bdf8"
        opacity="0.4">
        ready on :3000
      </text>
      <text
        x="62"
        y="161"
        fontFamily="JetBrains Mono, monospace"
        fontSize="5.5"
        fill="#38bdf8">
        $ <tspan fill="#94a3b8">_</tspan>
      </text>

      {/* ── RIGHT: Stats ── */}
      <rect
        x="184"
        y="22"
        width="118"
        height="147"
        rx="3"
        fill="rgba(13,27,42,0.8)"
        stroke="rgba(56,189,248,0.15)"
        strokeWidth="0.5"
      />
      <text
        x="188"
        y="34"
        fontFamily="Space Grotesk, sans-serif"
        fontSize="7"
        fill="#94a3b8">
        Project Growth
      </text>

      {/* Bar chart */}
      <g transform="translate(188, 100)">
        <rect
          className="bar-anim bar-anim-1"
          x="0"
          y="-35"
          width="14"
          height="35"
          rx="2"
          fill="rgba(56,189,248,0.5)"
        />
        <rect
          className="bar-anim bar-anim-2"
          x="20"
          y="-52"
          width="14"
          height="52"
          rx="2"
          fill="rgba(56,189,248,0.65)"
        />
        <rect
          className="bar-anim bar-anim-3"
          x="40"
          y="-44"
          width="14"
          height="44"
          rx="2"
          fill="rgba(56,189,248,0.5)"
        />
        <rect
          className="bar-anim bar-anim-4"
          x="60"
          y="-68"
          width="14"
          height="68"
          rx="2"
          fill="#38bdf8"
        />
        <line
          x1="0"
          y1="0"
          x2="90"
          y2="0"
          stroke="rgba(56,189,248,0.2)"
          strokeWidth="0.5"
        />
        {[
          ["Q1", 0],
          ["Q2", 20],
          ["Q3", 40],
        ].map(([l, x]) => (
          <text
            key={l}
            x={x}
            y="10"
            fontFamily="JetBrains Mono, monospace"
            fontSize="5"
            fill="#475569">
            {l}
          </text>
        ))}
        <text
          x="60"
          y="10"
          fontFamily="JetBrains Mono, monospace"
          fontSize="5"
          fill="#38bdf8">
          Q4
        </text>
      </g>

      {/* Stat chips */}
      <rect
        x="188"
        y="116"
        width="50"
        height="18"
        rx="3"
        fill="rgba(56,189,248,0.08)"
        stroke="rgba(56,189,248,0.2)"
        strokeWidth="0.5"
      />
      <text
        x="191"
        y="127"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fill="#38bdf8">
        ↑ 94%
      </text>
      <rect
        x="244"
        y="116"
        width="52"
        height="18"
        rx="3"
        fill="rgba(34,197,94,0.08)"
        stroke="rgba(34,197,94,0.2)"
        strokeWidth="0.5"
      />
      <text
        x="247"
        y="127"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fill="#22c55e">
        ✓ Live
      </text>

      {/* Deploy ping */}
      <circle cx="245" cy="140" r="3" fill="#22c55e" opacity="0.8">
        <animate
          attributeName="r"
          values="3;7;3"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="245" cy="140" r="3" fill="#22c55e" />
      <text
        x="252"
        y="143"
        fontFamily="JetBrains Mono, monospace"
        fontSize="6"
        fill="#94a3b8">
        deploying…
      </text>

      {/* Divider */}
      <rect x="183" y="22" width="1" height="147" fill="rgba(56,189,248,0.1)" />
    </g>

    {/* Webcam */}
    <circle
      cx="180"
      cy="15"
      r="2.5"
      fill="#0f172a"
      stroke="#334155"
      strokeWidth="0.5"
    />
    <circle cx="180" cy="15" r="1" fill="#1e293b" />

    {/* Hinge */}
    <rect x="48" y="178" width="264" height="3" rx="1" fill="#0a1628" />

    {/* Base */}
    <rect
      x="28"
      y="181"
      width="304"
      height="22"
      rx="4"
      fill="#1e293b"
      stroke="#334155"
      strokeWidth="1"
    />

    {/* Keyboard dots */}
    <g opacity="0.25">
      {Array.from({ length: 22 }, (_, i) => (
        <rect
          key={i}
          x={40 + i * 12}
          y="186"
          width="8"
          height="4"
          rx="1"
          fill="#475569"
        />
      ))}
      <rect x="120" y="193" width="120" height="4" rx="1" fill="#475569" />
    </g>

    {/* Trackpad */}
    <rect
      x="152"
      y="193"
      width="56"
      height="7"
      rx="2"
      fill="rgba(71,85,105,0.15)"
      stroke="#334155"
      strokeWidth="0.5"
    />

    {/* Feet */}
    <rect
      x="38"
      y="200"
      width="12"
      height="3"
      rx="1.5"
      fill="#0f172a"
      opacity="0.5"
    />
    <rect
      x="310"
      y="200"
      width="12"
      height="3"
      rx="1.5"
      fill="#0f172a"
      opacity="0.5"
    />

    {/* Glow */}
    <ellipse cx="180" cy="205" rx="120" ry="6" fill="rgba(56,189,248,0.06)" />
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleView = () => {
    navigate("/services/package");
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 min-h-screen bg-[#050b14] text-white flex flex-col items-center justify-between overflow-hidden font-sans select-none"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Ambient Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Soft Glow Radial Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-orb" />

      {/* Main Content Layout Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-3xl px-6 my-auto text-center">
        {/* Modern Pills Badging */}
        <span className="font-mono text-xs font-medium tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-400/20 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm transition-all hover:border-sky-400/40">
          ⚡ Creative Engineering Studio
        </span>

        {/* Master Brand Typography */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-50 transition-all">
          Drish
          <span className="text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            Net
          </span>
        </h1>

        {/* Dynamic Vector Core Section */}
        <div className="w-full max-w-[380px] px-2 transform transition-transform hover:scale-[1.02] duration-300">
          <LaptopSVG />
        </div>

        {/* Tagline Rotations */}
        <div className="space-y-1">
          <p className="text-sm uppercase font-mono tracking-wider text-slate-500">
            We Architects of
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-mono h-9">
            <TypeAnimation
              sequence={[
                "Creative Tech Ecosystems",
                2500,
                "High-Conversion Websites",
                2500,
                "Custom Workflow Automation",
                2500,
                "Premium Visual Experiences",
                2500,
              ]}
              speed={55}
              repeat={Infinity}
              wrapper="span"
              className="text-sky-400"
            />
          </h2>
        </div>

        {/* Core Narrative / Value Prop */}
        <p className="max-w-md text-sm md:text-base text-slate-400 leading-relaxed font-light">
          A tech-powered creative studio engineered by Computer Science
          innovators. We merge advanced web development, precise automation, and
          elite visual asset design into real-world business growth.
        </p>

        {/* CTA Interactivity Matrix */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full justify-center pt-2">
          <button
            onClick={handleScrollToContact}
            className="group flex items-center justify-center gap-2.5 px-7 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-sm rounded-lg shadow-lg shadow-sky-500/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
            Initiate Project
            <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={handleView}
            className="px-7 py-3.5 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-sky-400 border border-slate-800 hover:border-sky-500/30 text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-200">
            Explore Packages & Pricing
          </button>
        </div>

        {/* High Trust Social Presence Matrix */}

        {/* High Trust Social Presence Matrix */}
        <div className="flex items-center gap-4 pt-4">
          {[
            {
              Icon: FaLinkedin,
              label: "LinkedIn",
              url: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
            },
            {
              Icon: FaGithub,
              label: "GitHub",
              url: "https://github.com/YOUR_GITHUB_USERNAME",
            },
            {
              Icon: FaInstagram,
              label: "Instagram",
              url: "https://instagram.com/drishnet",
            },
            {
              Icon: FaWhatsapp,
              label: "WhatsApp",
              url: "https://wa.me/YOUR_PHONE_NUMBER",
            },
            {
              Icon: FiMessageCircle,
              label: "Message",
              url: "mailto:YOUR_EMAIL@domain.com",
            },
          ].map(({ Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-800/80 bg-slate-950/40 text-slate-500 transition-all duration-200 hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5 hover:-translate-y-0.5">
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* ── Seamless Horizontal Infinite Ticker Loop ── */}
      <div className="w-full border-y border-slate-900 bg-slate-950/20 backdrop-blur-[2px] py-3.5 mt-12 overflow-hidden mask-fade-edges">
        <div className="flex whitespace-nowrap min-w-full animate-ticker gap-12">
          {/* Duplicate set twice to enable zero seamless snapping jumps */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map(
            (item, i) => (
              <div key={i} className="flex items-center gap-12 shrink-0">
                <span className="font-mono text-xs font-semibold tracking-widest text-sky-400/60 uppercase">
                  {item}
                </span>
                <span className="text-slate-800 select-none font-sans">•</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
