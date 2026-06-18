import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";





const NAV_LINKS = ["Home", "About", "Projects", "Experience"];
const SOCIAL_ICONS = [FiGithub, FiLinkedin, FiInstagram];
const SOCIAL_LABELS = ["GitHub", "LinkedIn", "Instagram"];

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY <= lastScrollY || currentY <= 60);
      setScrolled(currentY > 20);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* ── HEADER ── */}
      <header
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          background: scrolled ? "rgba(5,11,20,0.85)" : "rgba(5,11,20,0.5)",
          borderBottom: scrolled
            ? "0.5px solid rgba(56,189,248,0.12)"
            : "0.5px solid transparent",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "background 0.3s, border-color 0.3s, transform 0.3s",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        }}
        className="fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
            }}>
            <Link to="/" className="flex items-center gap-2 no-underline">
              {/* Animated bracket accent */}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#38bdf8",
                  fontSize: 18,
                  opacity: 0.7,
                }}>
                &lt;
              </span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#f0f9ff",
                  letterSpacing: "-0.5px",
                }}>
                Drish<span style={{ color: "#38bdf8" }}>Net</span>
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#38bdf8",
                  fontSize: 18,
                  opacity: 0.7,
                }}>
                /&gt;
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="lg:flex hidden space-x-8">
            {NAV_LINKS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.6 + index * 0.15,
                }}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="nav-underline"
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s",
                    paddingBottom: 4,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#38bdf8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }>
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Social + Hire Me */}
          <div className="md:flex hidden items-center gap-4">
            {SOCIAL_ICONS.map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                aria-label={SOCIAL_LABELS[idx]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + idx * 0.1, duration: 0.5 }}
                style={{
                  color: "#475569",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}>
                <Icon size={17} />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
              style={{
                marginLeft: 8,
                padding: "8px 20px",
                borderRadius: 6,
                background: "#38bdf8",
                color: "#050b14",
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "opacity 0.2s, transform 0.15s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center z-[60]">
            <motion.button
              whileTap={{ scale: 0.75 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              style={{
                color: "#94a3b8",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}>
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: 280,
          background: "rgba(5,11,20,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "0.5px solid rgba(56,189,248,0.15)",
          zIndex: 40,
          padding: "24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
        className="md:hidden">
        {/* Sidebar logo */}
        <div style={{ marginBottom: 32, marginTop: 40 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#38bdf8",
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.6,
            }}>
            Navigation
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {NAV_LINKS.map((item, index) => (
            <React.Fragment key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "14px 0",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#38bdf8",
                    opacity: 0.5,
                    minWidth: 18,
                  }}>
                  0{index + 1}
                </span>
                {item}
              </Link>
              {index < NAV_LINKS.length - 1 && (
                <hr
                  style={{
                    border: "none",
                    borderTop: "0.5px solid rgba(56,189,248,0.08)",
                    margin: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "24px 0",
            borderTop: "0.5px solid rgba(56,189,248,0.1)",
          }}
        />

        {/* Social icons */}
        <div style={{ display: "flex", gap: 12 }}>
          {SOCIAL_ICONS.map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={SOCIAL_LABELS[idx]}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "0.5px solid rgba(148,163,184,0.2)",
                background: "rgba(56,189,248,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                transition: "all 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.color = "#38bdf8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.2)";
                e.currentTarget.style.color = "#64748b";
              }}>
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          style={{
            marginTop: 20,
            padding: "10px 0",
            borderRadius: 6,
            background: "#38bdf8",
            color: "#050b14",
            fontSize: 14,
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            display: "block",
            letterSpacing: "0.3px",
          }}>
          Hire Me
        </a>

        {/* Bottom tag */}
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#334155",
              letterSpacing: 1,
            }}>
            © 2025 DrishNet
          </p>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 39,
            backdropFilter: "blur(2px)",
          }}
        />
      )}
    </>
  );
};

export default Header;
