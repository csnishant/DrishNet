import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050507] text-white pt-16 pb-8 px-6 md:px-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
        {/* Left Side: Dynamic Branding & Copyright */}
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-white uppercase">
            DRISHNET
          </h1>
          <p className="text-slate-500 text-xs font-light">
            © {new Date().getFullYear()} DRISHNET. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Optional Quick Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400 text-xs font-medium">
          <a
            href="#home"
            className="hover:text-blue-400 transition-colors duration-200">
            Home
          </a>
          <a
            href="#services"
            className="hover:text-blue-400 transition-colors duration-200">
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-200">
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-200">
            Contact
          </a>
        </div>

        {/* Right Side: Re-targeted High-End Social Channels */}
        <div className="flex items-center gap-5 text-slate-400 text-lg">
          <a
            href="https://instagram.com/drishnet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-200 active:scale-95"
            aria-label="Instagram">
            <FaInstagram />
          </a>
          <a
            href="mailto:contact@drishnet.com"
            className="hover:text-blue-400 transition-colors duration-200 active:scale-95"
            aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
