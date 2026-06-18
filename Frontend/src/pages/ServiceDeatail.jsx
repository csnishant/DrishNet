// ServicePackages.jsx
import React from "react";
import {
  FiCheck,
  FiX,
  FiActivity,
  FiLayers,
  FiZap,
  FiSliders,
} from "react-icons/fi";

const PACKAGES = [
  {
    key: "starter",
    name: "Core Web Alpha",
    price: "₹4,999",
    label: "Static & Portfolio",
    highlight: false,
    icon: FiLayers,
    description:
      "Essential digital presence for startups, individuals, and local businesses.",
    features: [
      { text: "3-5 Responsive Pages", active: true },
      { text: "Modern UI/UX Design Layout", active: true },
      { text: "Basic SEO Optimization", active: true },
      { text: "Contact Form & Social Links", active: true },
      { text: "Custom API & Database Node", active: false },
      { text: "E-Commerce / Payment Gateway", active: false },
      { text: "1 Month Maintenance", active: true },
      { text: "Standard Server Support", active: true },
    ],
  },
  {
    key: "pro",
    name: "Dynamic Matrix",
    price: "₹14,999",
    label: "Most Popular",
    highlight: "cyan",
    icon: FiZap,
    description:
      "Robust full-stack dynamic applications with seamless state management.",
    features: [
      { text: "Up to 12 Custom Pages", active: true },
      { text: "Premium Glassmorphic UI/UX", active: true },
      { text: "Full-Stack MERN Architecture", active: true },
      { text: "Secure Database Integration", active: true },
      { text: "Custom Admin Dashboard Node", active: true },
      { text: "Payment Gateway Integration", active: true },
      { text: "Advanced SEO & Analytics", active: true },
      { text: "3 Months Dedicated Support", active: true },
    ],
  },
  {
    key: "gold",
    name: "Enterprise Nexus",
    price: "₹49,999",
    label: "Maximum Scale",
    highlight: "premium",
    icon: FiActivity,
    description:
      "Heavy-duty IT enterprise architectures featuring complex automation and AI integrations.",
    features: [
      { text: "Unlimited Scalable Routes", active: true },
      { text: "High-End Animation (Framer Motion)", active: true },
      { text: "Advanced RBAC / Multi-Tenant Security", active: true },
      { text: "AI / LLM API Engine Integration", active: true },
      { text: "Automated Cloud Deployment (AWS/OCI)", active: true },
      { text: "Custom Microservices & Webhooks", active: true },
      { text: "Dedicated DB Optimization Clusters", active: true },
      { text: "1 Year Full Tech Infrastructure Support", active: true },
    ],
  },
];

const BASE_PRICING_ROWS = [
  { service: "Single Landing Page (HTML/Tailwind/React)", price: "₹1,999" },
  { service: "Full-Stack MERN Feature Integration", price: "₹4,999" },
  { service: "Custom Admin Dashboard UI Layout", price: "₹5,999" },
  { service: "E-Commerce Cart & Payment Gateway Pipeline", price: "₹3,500" },
  { service: "AI Model / LLM API Endpoint Wrapper Setup", price: "₹7,999" },
  {
    service: "Cloud Migration & Server Deployment (AWS/Vercel/OCI)",
    price: "₹4,000",
  },
  {
    service: "Database Architecture Setup & Query Optimization",
    price: "₹3,000",
  },
  {
    service: "Comprehensive UI/UX Branding & Digital Assets Layout",
    price: "₹5,000",
  },
  { service: "Monthly Technical Maintenance Retainer", price: "₹2,500" },
  {
    service: "1:1 Architecture Consultation & System Design Call",
    price: "Premium Core Only",
  },
];

export default function ServicePackages() {
  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#030712",
      }}
      className="pt-24 min-h-screen text-slate-100 p-6 md:p-16 relative overflow-hidden">
      {/* Background Micro Matrix Dot Structure */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.01) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.01) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-[#38bdf8] text-xs font-bold tracking-[0.25em] bg-sky-500/5 border border-sky-500/15 px-4 py-1.5 rounded-full uppercase inline-block mb-4">
          // Digital IT Solutions & Web Architecture
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50 mb-4">
          Web Dev & IT Service Pricing<span className="text-[#38bdf8]">.</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Clear, deterministic resource allocation nodes for dynamic
          applications, enterprise solutions, and scalable software pipelines.
          Select an architecture or compile a custom package.
        </p>
      </div>

      {/* ── Pricing Matrix Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20 relative z-10">
        {PACKAGES.map((pkg) => {
          const IconComponent = pkg.icon;
          return (
            <div
              key={pkg.key}
              style={{
                background:
                  pkg.highlight === "premium"
                    ? "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(3, 7, 18, 0.95) 100%)"
                    : "rgba(10, 20, 38, 0.4)",
                borderColor:
                  pkg.highlight === "cyan"
                    ? "rgba(56, 189, 248, 0.4)"
                    : pkg.highlight === "premium"
                      ? "rgba(168, 85, 247, 0.35)"
                      : "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              className={`rounded-2xl p-6 flex flex-col justify-between border shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}>
              <div>
                {/* Package Label Node */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      pkg.highlight === "cyan"
                        ? "bg-sky-500/10 border-sky-500/20 text-[#38bdf8]"
                        : pkg.highlight === "premium"
                          ? "bg-purple-500/10 border-purple-500/20 text-purple-400"
                          : "bg-slate-800/50 border-slate-700/30 text-slate-400"
                    }`}>
                    <IconComponent size={20} />
                  </div>
                  {pkg.label && (
                    <span
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md ${
                        pkg.highlight === "cyan"
                          ? "bg-sky-500/10 text-[#38bdf8] border border-sky-500/20"
                          : pkg.highlight === "premium"
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : "bg-slate-800 text-slate-400 border border-slate-700/50"
                      }`}>
                      {pkg.label}
                    </span>
                  )}
                </div>

                {/* Name & Rate */}
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-[#38bdf8] transition-colors duration-200">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-slate-50 tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    / base project
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 border-b border-slate-800 pb-4 h-12 overflow-hidden">
                  {pkg.description}
                </p>

                {/* Features Allocation List */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs">
                      {f.active ? (
                        <FiCheck
                          size={14}
                          className="text-[#38bdf8] shrink-0"
                        />
                      ) : (
                        <FiX size={14} className="text-slate-600 shrink-0" />
                      )}
                      <span
                        className={
                          f.active
                            ? "text-slate-300"
                            : "text-slate-500 line-through decoration-slate-700/60"
                        }>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Node */}
              <button
                style={{
                  background:
                    pkg.highlight === "cyan"
                      ? "#38bdf8"
                      : pkg.highlight === "premium"
                        ? "linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)"
                        : "rgba(255,255,255,0.03)",
                  border: pkg.highlight
                    ? "none"
                    : "1px solid rgba(255,255,255,0.05)",
                  color: pkg.highlight ? "#030712" : "#94a3b8",
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:opacity-90 active:scale-95">
                Deploy Stack
              </button>
            </div>
          );
        })}

        {/* ── Custom Component Card (Sleek Mesh Variant) ── */}
        <div
          style={{
            background: "rgba(10, 20, 38, 0.2)",
            border: "1px dashed rgba(56, 189, 248, 0.25)",
            backdropFilter: "blur(12px)",
          }}
          className="rounded-2xl p-6 flex flex-col justify-between text-left shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
          <div>
            <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/30 text-[#38bdf8] w-fit mb-6">
              <FiSliders size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              // Custom Architect
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 h-12">
              Mix & match infrastructure nodes, continuous pipeline services,
              and specific corporate IT automations.
            </p>

            <ul className="text-xs space-y-3 mb-6 text-slate-300 border-t border-slate-800/60 pt-4">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#38bdf8] rounded-full" /> Customized
                DevOps Pipelines
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#38bdf8] rounded-full" />{" "}
                High-frequency trading & Webhooks
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#38bdf8] rounded-full" /> Full
                Digital System Migration
              </li>
            </ul>
          </div>

          <button className="w-full py-2.5 rounded-xl bg-transparent border border-sky-500/30 hover:border-sky-400 text-[#38bdf8] font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95">
            Compile Stack
          </button>
        </div>
      </div>

      {/* ── Granular Micro Pricing Table ── */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-widest text-center md:text-left">
          [ Base Granular Operations Rate Card ]
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-800/60 bg-[#050b14]/60 backdrop-blur-md shadow-2xl">
          <div className="min-w-full divide-y divide-slate-800/50">
            {BASE_PRICING_ROWS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 items-center p-4 hover:bg-slate-900/30 transition-colors duration-150">
                <div className="col-span-2 text-xs md:text-sm text-slate-300 font-medium">
                  {row.service}
                </div>
                <div
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="text-right text-xs text-[#38bdf8] font-semibold">
                  {row.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="mt-4 text-[10px] text-slate-500 text-center md:text-left leading-relaxed">
          * Note: Micro pipelines (e.g. database syncing and API indexing) are
          calculated based on data query execution. Deployment architecture
          optimization applies dynamically according to your stack tier.
        </div>
      </div>
    </div>
  );
}
