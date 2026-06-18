import { motion } from "framer-motion";

const services = [
  {
    tag: "01",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#38bdf8"
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
    badgeColor: "#38bdf8",
    stat: "3x faster delivery",
    desc: "Full-stack websites built with modern frameworks — React, Next.js, Tailwind. AI-accelerated development pipelines that ship production-grade products in record time.",
    stack: ["React", "Next.js", "Node.js", "AI Copilot"],
  },
  {
    tag: "02",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Automation & AI Workflows",
    badge: "Hot",
    badgeColor: "#f97316",
    stat: "10x productivity gain",
    desc: "End-to-end business automation using n8n, Zapier, Make, and custom LLM agents. Replace repetitive manual tasks with intelligent pipelines that run 24/7.",
    stack: ["n8n", "OpenAI API", "Zapier", "Python"],
  },
  {
    tag: "03",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#34d399"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Digital Marketing Strategy",
    badge: "Growth",
    badgeColor: "#34d399",
    stat: "4x customer reach",
    desc: "Data-driven campaigns across Meta, Google, and LinkedIn. SEO, paid ads, funnels, and analytics dashboards — everything tracked, everything optimised.",
    stack: ["Meta Ads", "Google Ads", "SEO", "Analytics"],
  },
  {
    tag: "04",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f472b6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Video Editing & Reels",
    badge: "Viral",
    badgeColor: "#f472b6",
    stat: "2x engagement rate",
    desc: "Cinematic edits, CGI ads, short-form reels built for virality. From raw footage to algorithm-ready content optimised for Instagram, YouTube Shorts, and TikTok.",
    stack: ["Premiere Pro", "After Effects", "CGI", "CapCut"],
  },
  {
    tag: "05",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Content Creation & Branding",
    badge: "Creative",
    badgeColor: "#fbbf24",
    stat: "2x brand recall",
    desc: "Strategic content calendars, brand identity systems, copywriting, and graphic design. We build a voice that stands out in crowded feeds and converts scrollers into buyers.",
    stack: ["Figma", "Canva Pro", "Copywriting", "Social Strategy"],
  },
  {
    tag: "06",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#818cf8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "UI/UX & Product Design",
    badge: "Premium",
    badgeColor: "#818cf8",
    stat: "5x conversion lift",
    desc: "User-first interfaces designed in Figma — wireframes, prototypes, design systems. Every pixel serves a purpose: guide the user, reduce friction, drive action.",
    stack: ["Figma", "Framer", "Design Systems", "Prototyping"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#050b14",
        minHeight: "100vh",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}>
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#38bdf8",
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "rgba(56,189,248,0.08)",
              border: "0.5px solid rgba(56,189,248,0.25)",
              padding: "4px 16px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 20,
            }}>
            What We Build
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#f0f9ff",
              letterSpacing: "-1px",
              lineHeight: 1.15,
              margin: "0 0 16px",
            }}>
            Services for the{" "}
            <span style={{ color: "#38bdf8" }}>Modern Web</span>
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
            From AI automation to viral reels — a full creative & tech stack for
            brands that want to grow in 2025.
          </p>
        </motion.div>

        {/* ── Service grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="service-card"
              style={{
                background: "rgba(13,27,42,0.7)",
                border: "0.5px solid rgba(56,189,248,0.12)",
                borderRadius: 14,
                padding: "28px 24px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(8px)",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.12)";
              }}>
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  background: `radial-gradient(circle at top right, ${s.badgeColor}14, transparent 70%)`,
                  borderRadius: "0 14px 0 0",
                  pointerEvents: "none",
                }}
              />

              {/* Tag + Badge row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#334155",
                    letterSpacing: 2,
                  }}>
                  {s.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: s.badgeColor,
                    background: `${s.badgeColor}15`,
                    border: `0.5px solid ${s.badgeColor}40`,
                    padding: "3px 10px",
                    borderRadius: 20,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}>
                  {s.badge}
                </span>
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(5,11,20,0.8)",
                  border: "0.5px solid rgba(56,189,248,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#f0f9ff",
                  margin: "0 0 8px",
                  letterSpacing: "-0.3px",
                }}>
                {s.title}
              </h3>

              {/* Stat pill */}
              <div style={{ marginBottom: 12 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: s.badgeColor,
                    opacity: 0.85,
                  }}>
                  ↑ {s.stat}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.75,
                  margin: "0 0 20px",
                }}>
                {s.desc}
              </p>

              {/* Tech stack pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: "#475569",
                      background: "rgba(71,85,105,0.15)",
                      border: "0.5px solid rgba(71,85,105,0.25)",
                      padding: "3px 10px",
                      borderRadius: 20,
                      letterSpacing: 0.5,
                    }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom arrow CTA */}
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#38bdf8",
                  fontSize: 12,
                  fontWeight: 500,
                  opacity: 0.7,
                }}>
                <span>Learn more</span>
                <span style={{ fontSize: 14 }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: 64 }}>
          <p style={{ color: "#475569", fontSize: 14, marginBottom: 20 }}>
            Not sure what you need? Let's figure it out together.
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 32px",
              background: "#38bdf8",
              color: "#050b14",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 8,
              textDecoration: "none",
              letterSpacing: "0.3px",
              transition: "opacity 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
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
