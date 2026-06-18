import { motion } from "framer-motion";

const services = [
  {
    tag: "01",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 17.5h7M17.5 14v7" />
      </svg>
    ),
    title: "AI-Powered Web Development",
    badge: "Trending",
    badgeColor: "#38bdf8", // Sky Blue Accent
    stat: "3x faster delivery",
    desc: "Full-stack websites built with modern frameworks — React, Next.js, Tailwind. AI-accelerated development pipelines that ship production-grade products in record time.",
    stack: ["React", "Next.js", "Node.js", "AI Pipelines"],
  },
  {
    tag: "02",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Automation & AI Workflows",
    badge: "Hot",
    badgeColor: "#f97316", // Amber/Orange Accent
    stat: "10x productivity gain",
    desc: "End-to-end business automation using n8n, Zapier, Make, and custom LLM agents. Replace repetitive manual tasks with intelligent pipelines that run 24/7.",
    stack: ["n8n", "OpenAI API", "Zapier", "Python"],
  },
  {
    tag: "03",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Digital Marketing Strategy",
    badge: "Growth",
    badgeColor: "#34d399", // Emerald Accent
    stat: "4x customer reach",
    desc: "Data-driven campaigns across Meta, Google, and LinkedIn. SEO, paid ads, funnels, and analytics dashboards — everything tracked, everything optimised.",
    stack: ["Meta Ads", "Google Ads", "SEO", "Analytics"],
  },
  {
    tag: "04",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Video Editing & Reels",
    badge: "Viral",
    badgeColor: "#f472b6", // Pink/VFX Accent
    stat: "2x engagement rate",
    desc: "Cinematic edits, CGI ads, short-form reels built for virality. From raw footage to algorithm-ready content optimised for Instagram, YouTube Shorts, and TikTok.",
    stack: ["Premiere Pro", "After Effects", "CGI", "CapCut"],
  },
  {
    tag: "05",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Content Creation & Branding",
    badge: "Creative",
    badgeColor: "#fbbf24", // Yellow Accent
    stat: "2x brand recall",
    desc: "Strategic content calendars, brand identity systems, copywriting, and graphic design. We build a voice that stands out in crowded feeds and converts scrollers into buyers.",
    stack: ["Figma", "Canva Pro", "Copywriting", "Strategy"],
  },
  {
    tag: "06",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "UI/UX & Product Design",
    badge: "Premium",
    badgeColor: "#a78bfa", // Violet Accent
    stat: "5x conversion lift",
    desc: "User-first interfaces designed in Figma — wireframes, prototypes, design systems. Every pixel serves a purpose: guide the user, reduce friction, drive action.",
    stack: ["Figma", "Framer", "UI/UX", "Prototyping"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#030712", // Clean Deep Sci-Fi Black
        minHeight: "100vh",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* DrishNet Matrix Mesh Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.015) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.015) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Futuristic Background Blur Core Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 70 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#38bdf8",
              letterSpacing: "4px",
              textTransform: "uppercase",
              background: "rgba(56,189,248,0.05)",
              border: "1px solid rgba(56,189,248,0.15)",
              padding: "6px 18px",
              borderRadius: 30,
              display: "inline-block",
              marginBottom: 24,
              fontWeight: 600,
            }}>
            Capabilities // Core
          </span>

          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 44px)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-1px",
              lineHeight: 1.2,
              margin: "0 0 18px",
            }}>
            Services for the{" "}
            <span
              style={{
                color: "#38bdf8",
                textShadow: "0 0 40px rgba(56,189,248,0.15)",
              }}>
              Modern Web
            </span>
          </h2>

          <p
            style={{
              color: "#94a3b8", // Clean slate text for better legibility
              fontSize: 15,
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
            Engineered automated workflows, production-ready systems, and viral
            growth pipelines built for scale in 2026.
          </p>
        </motion.div>

        {/* ── Service Grid Layout ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -6,
                borderColor: s.badgeColor,
                boxShadow: `0 10px 30px -15px ${s.badgeColor}25`,
              }}
              style={{
                background: "rgba(10, 20, 38, 0.4)", // Glossy translucent space fill
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderRadius: 16,
                padding: "32px 28px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const iconBox = e.currentTarget.querySelector(".icon-box");
                if (iconBox) {
                  iconBox.style.color = "#030712";
                  iconBox.style.backgroundColor = s.badgeColor;
                  iconBox.style.borderColor = s.badgeColor;
                  iconBox.style.boxShadow = `0 0 15px ${s.badgeColor}40`;
                }
                const learnMore =
                  e.currentTarget.querySelector(".learn-more-cta");
                if (learnMore) learnMore.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const iconBox = e.currentTarget.querySelector(".icon-box");
                if (iconBox) {
                  iconBox.style.color = s.badgeColor;
                  iconBox.style.backgroundColor = "rgba(3, 7, 18, 0.6)";
                  iconBox.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  iconBox.style.boxShadow = "none";
                }
                const learnMore =
                  e.currentTarget.querySelector(".learn-more-cta");
                if (learnMore) learnMore.style.opacity = "0.5";
              }}>
              <div>
                {/* Top Row Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 24,
                  }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: "#334155",
                      fontWeight: 600,
                    }}>
                    //{s.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: s.badgeColor,
                      background: `${s.badgeColor}10`,
                      border: `1px solid ${s.badgeColor}25`,
                      padding: "4px 12px",
                      borderRadius: 6,
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                    }}>
                    {s.badge}
                  </span>
                </div>

                {/* Cyber Icon Box Wrapper */}
                <div
                  className="icon-box"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    backgroundColor: "rgba(3, 7, 18, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    color: s.badgeColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}>
                  {s.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 19,
                    fontWeight: 600,
                    color: "#f8fafc",
                    margin: "0 0 6px",
                    tracking: "-0.3px",
                  }}>
                  {s.title}
                </h3>

                {/* Dynamic Performance Stat */}
                <div style={{ marginBottom: 14 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: s.badgeColor,
                      fontWeight: 500,
                    }}>
                    ⚡ {s.stat}
                  </span>
                </div>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#94a3b8",
                    lineHeight: 1.7,
                    margin: "0 0 24px",
                  }}>
                  {s.desc}
                </p>
              </div>

              {/* Bottom Interactive Layer */}
              <div>
                {/* Tech Badges Row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 20,
                  }}>
                  {s.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#94a3b8",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        padding: "3px 10px",
                        borderRadius: 6,
                        fontWeight: 500,
                      }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Interactive Link */}
                <div
                  className="learn-more-cta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: s.badgeColor,
                    fontSize: 12,
                    fontWeight: 600,
                    opacity: 0.5,
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                  <span>EXPLORE ENGINE</span>
                  <span style={{ fontSize: 14 }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Section Action Trigger ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ textAlign: "center", marginTop: 75 }}>
          <p
            style={{
              color: "#475569",
              fontSize: 14,
              marginBottom: 24,
              fontFamily: "'JetBrains Mono', monospace",
            }}>
            // execution_ready: awaiting parameters.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 36px",
              background: "#38bdf8",
              color: "#030712",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: "none",
              letterSpacing: "0.5px",
              boxShadow: "0 0 30px rgba(56,189,248,0.15)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 35px rgba(56,189,248,0.35)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(56,189,248,0.15)";
              e.currentTarget.style.transform = "translateY(0)";
            }}>
            Start a Project
            <span style={{ fontSize: 16 }}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
