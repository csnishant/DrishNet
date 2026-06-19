import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
];

const SOCIAL_LINKS = [
  { Icon: FiGithub, label: "GitHub", url: "#" },
  { Icon: FiLinkedin, label: "LinkedIn", url: "#" },
  {
    Icon: FiInstagram,
    label: "Instagram",
    url: "https://instagram.com/drishnet",
  },
];

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
          background: scrolled ? "rgba(5,11,20,0.9)" : "rgba(5,11,20,0.4)",
          borderBottom: scrolled
            ? "0.5px solid rgba(56,189,248,0.15)"
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
            <Link to="/" className="flex items-center gap-2 no-underline group">
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
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4 + index * 0.1,
                }}>
                <Link
                  to={link.path}
                  className="nav-underline relative py-1"
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#38bdf8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#94a3b8")
                  }>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Social Links + Hire Me Button */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ Icon, label, url }, idx) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                  style={{
                    color: "#475569",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#38bdf8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#475569")
                  }>
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              style={{
                marginLeft: 4,
                padding: "9px 22px",
                borderRadius: "8px",
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
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center z-[60]">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              style={{
                color: "#94a3b8",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}>
              {isOpen ? (
                <FiX size={24} className="text-sky-400" />
              ) : (
                <FiMenu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 140, damping: 22 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: 290,
          background: "rgba(5,11,20,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "0.5px solid rgba(56,189,248,0.15)",
          zIndex: 40,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
        }}
        className="md:hidden">
        {/* Sidebar Header Indicator */}
        <div style={{ marginBottom: 28, marginTop: 40 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#38bdf8",
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.6,
            }}>
            Navigation Matrix
          </span>
        </div>

        {/* Sidebar Dynamic Route Links */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#94a3b8",
                  fontSize: 16,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "16px 0",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#38bdf8",
                    opacity: 0.5,
                    minWidth: 20,
                  }}>
                  0{index + 1}
                </span>
                {link.label}
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

        {/* Structural Horizontal Separation Line */}
        <div
          style={{
            margin: "28px 0",
            borderTop: "0.5px solid rgba(56,189,248,0.12)",
          }}
        />

        {/* Mobile Environment Social Handles */}
        <div style={{ display: "flex", gap: 14, paddingLeft: 4 }}>
          {SOCIAL_LINKS.map(({ Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                border: "0.5px solid rgba(148,163,184,0.15)",
                background: "rgba(56,189,248,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#38bdf8";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Mobile Hire Me Action Button */}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          style={{
            marginTop: 28,
            padding: "12px 0",
            borderRadius: "8px",
            background: "#38bdf8",
            color: "#050b14",
            fontSize: 14,
            fontWeight: 700,
            textAlign: "center",
            textDecoration: "none",
            display: "block",
            letterSpacing: "0.3px",
            boxShadow: "0 4px 12px rgba(56,189,248,0.1)",
          }}>
          Hire Me
        </a>

        {/* Operational System Footer Stamp */}
        <div style={{ marginTop: "auto", paddingTop: 24 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#334155",
              letterSpacing: 1,
            }}>
            © 2026 DrishNet
          </p>
        </div>
      </motion.div>

      {/* Dimmed Structural Background Blur Overlay */}
      {isOpen && (
        <div
          className="md:hidden"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 39,
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
        />
      )}
    </>
  );
};

export default Header;
