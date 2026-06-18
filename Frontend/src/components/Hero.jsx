import React, { useEffect, useRef } from "react";
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
    className="w-full block animate-float"
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
      className="relative pt-20 min-h-screen bg-[#050b14] text-white flex flex-col
                 items-center justify-center px-6 md:px-20 py-16 overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute animate-pulse-orb pointer-events-none"
        style={{
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 w-full max-w-2xl">
        {/* Badge */}
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#38bdf8",
            background: "rgba(56,189,248,0.08)",
            border: "0.5px solid rgba(56,189,248,0.3)",
            padding: "4px 16px",
            borderRadius: 20,
          }}>
          Hello, Welcome to
        </span>

        {/* Brand name */}
        <h1
          className="text-5xl md:text-6xl font-bold text-center"
          style={{ color: "#f0f9ff", letterSpacing: "-1px" }}>
          Drish<span style={{ color: "#38bdf8" }}>Net</span>
        </h1>

        {/* Laptop animation */}
        <div className="w-full max-w-[360px]">
          <LaptopSVG />
        </div>

        {/* Typing tagline */}
        <div className="text-center">
          <p className="text-lg" style={{ color: "#94a3b8" }}>
            We are
          </p>
          <h2
            className="text-xl md:text-2xl font-semibold"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <TypeAnimation
              sequence={[
                "Creative Tech Partners",
                2000,
                "Website Builders",
                2000,
                "Automation Experts",
                2000,
                "Design & Reels Studio",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              style={{ color: "#38bdf8" }}
            />
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-center max-w-md leading-relaxed"
          style={{ color: "#64748b", fontSize: 14 }}>
          A tech-powered creative studio by CSE students — websites, automation,
          social content &amp; design. We build ideas into impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleScrollToContact}
            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-md
                       transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#38bdf8",
              color: "#050b14",
              fontSize: 14,
            }}>
            Contact Us <FaPaperPlane className="text-sm" />
          </button>
          <button
            onClick={handleView}
            className="px-6 py-3 font-medium rounded-md transition-all duration-200"
            style={{
              background: "transparent",
              color: "#94a3b8",
              border: "0.5px solid rgba(148,163,184,0.3)",
              fontSize: 14,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#38bdf8";
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)";
              e.currentTarget.style.color = "#94a3b8";
            }}>
            Package Info
          </button>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          {[
            { Icon: FaInstagram, label: "Instagram" },
            { Icon: FaWhatsapp, label: "WhatsApp" },
            { Icon: FaGithub, label: "GitHub" },
            { Icon: FaLinkedin, label: "LinkedIn" },
            { Icon: FiMessageCircle, label: "Message" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center
                         transition-all duration-150"
              style={{
                border: "0.5px solid rgba(148,163,184,0.2)",
                background: "rgba(56,189,248,0.04)",
                color: "#64748b",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.background = "rgba(56,189,248,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.2)";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.background = "rgba(56,189,248,0.04)";
              }}>
              <Icon size={15} />
            </button>
          ))}
        </div>
      </div>

      {/* ── Scrolling ticker ── */}
      <div
        className="relative z-10 w-full mt-8 overflow-hidden"
        style={{
          borderTop: "0.5px solid rgba(56,189,248,0.12)",
          borderBottom: "0.5px solid rgba(56,189,248,0.12)",
          padding: "8px 0",
        }}>
        <div className="animate-ticker flex whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <React.Fragment key={i}>
              <span
                className="px-4 uppercase tracking-widest"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#38bdf8",
                  opacity: 0.7,
                }}>
                {item}
              </span>
              <span style={{ color: "rgba(56,189,248,0.3)", padding: "0 4px" }}>
                •
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
