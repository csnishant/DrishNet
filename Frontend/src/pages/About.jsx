import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCode,
  FaRocket,
  FaEye,
  FaCheckCircle,
  FaHandshake,
  FaArrowRight,
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaChevronDown,
  FaUserShield,
  FaChartLine,
  FaQuoteLeft,
  FaSyncAlt,
  FaLayerGroup,
  FaFeather,
} from "react-icons/fa";

// ==========================================
// STATIC DATA DECLARATIONS (Structured Content Modules)
// ==========================================

const trustMetrics = [
  {
    icon: <FaEye />,
    title: "100% Visual Transparency",
    description:
      "You never have to guess what you are paying for or wonder if work is being done. I provide a unique, private staging link from day one. You can open it on your phone or laptop at any hour of the day to see your actual application being updated, styled, and coded in real-time.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: <FaCheckCircle />,
    title: "Satisfaction Guaranteed",
    description:
      "Your investment is completely safe. We do not design a generic layout and expect you to just accept it. We refine, test, and tune every interactive button, api connection, and database column until the web application satisfies your strict business workflow rules perfectly.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Strategic Partner",
    description:
      "Most developers hand over files and change their phone numbers. We do the exact opposite. Our goal is to build a professional relationship that lasts for years. We handle all recurring security patches, cloud environment upgrades, database backups, and new feature extensions as your users grow.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const detailedServices = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Full-Stack Platforms",
    subtitle: "Built with MongoDB, Express, React, and Node.js",
    description:
      "We don't use limiting web builders or heavy, insecure third-party templates. Every web application is written from a blank file tailored entirely to your workflow logic. We specialize in robust portals, management dashboards, and custom systems capable of loading instantly and sorting high volumes of operational records securely.",
    features: [
      "Secure custom user authentication and privilege levels",
      "Real-time reactive data tables with infinite scroll layouts",
      "Polished data visualizations using fast modern charting tools",
      "Clean, modular directory structures for easy future upgrades",
    ],
    accent: "from-blue-500/20 via-transparent to-transparent shadow-blue-500/5",
  },
  {
    icon: <FaMobileAlt />,
    title: "Premium Mobile & Interface Design",
    subtitle: "Fluid layout aesthetics with 'iPhone-Style' precision",
    description:
      "A system can have incredible features, but if it looks confusing, people will refuse to use it. We engineer highly intuitive interfaces using ultra-sleek layout parameters. By pairing responsive grid alignments with subtle glassmorphic styling and micro-animations, your software looks and feels like a luxury technical product.",
    features: [
      "Responsive fluid layout grids adapted for all screen widths",
      "Translucent glassmorphism backdrops with fine border accents",
      "Interactive button states and feedback animations",
      "Dark-mode default configurations engineered to reduce eye fatigue",
    ],
    accent:
      "from-purple-500/20 via-transparent to-transparent shadow-purple-500/5",
  },
  {
    icon: <FaServer />,
    title: "Secure Backends & API Infrastructure",
    subtitle: "High-performance data routing algorithms",
    description:
      "We program light, lightning-fast application servers that interface with production-ready databases. Whether your app is handling multi-user document uploads, calculating complex system scores, or connecting to external payment channels, our backend components process every network request with structural safety.",
    features: [
      "Optimized query architectures ensuring sub-second response lag",
      "RESTful API architectures integrated with error handling blocks",
      "Automated system database validation mechanisms",
      "Secure cloud server synchronization and token protocols",
    ],
    accent:
      "from-emerald-500/20 via-transparent to-transparent shadow-emerald-500/5",
  },
];

const developmentStages = [
  {
    step: "01",
    phase: "Discovery & Requirement Synthesis",
    title: "Understanding Your Target Objective",
    desc: "We skip generic sales pitches and long corporate slide decks. Instead, I schedule a straightforward technical session with you. We review your daily workflow, locate your exact manual bottlenecks, map out your user interactions, and finalize a highly structured feature specification document before a single line of code is committed.",
    timeline: "Week 1 Focus",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    step: "02",
    phase: "Interactive Blueprint & Core Prototyping",
    title: "See and Test Your Prototype Early",
    desc: "Nobody likes waiting months just to see if a developer understood their business vision. I assemble a functional core prototype of your platform early in the cycle. This live link shows you the real interface structure, visual theme, and operational layout, letting you give immediate feedback before the system scale expands.",
    timeline: "Mid-Project Sprint",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    step: "03",
    phase: "Production Coding & Stress Testing",
    title: "Refining Performance and Stability",
    desc: "This is where the application is fully built. I build out the layout components, link the backend servers, configure database connections, and test the entire framework for speed anomalies. We ensure pages register premium scores across speed benchmarks, verifying that components render without stuttering on any mobile or web viewport.",
    timeline: "Deep Development Phase",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    step: "04",
    phase: "Transparent Verification & Launch",
    title: "You Close the Contract Only When Satisfied",
    desc: "When the application is complete, you review every functional pathway on our active preview line. You check the inputs, look over the designs, and run actual workflow simulations. Only when you give formal approval and feel 100% satisfied do we switch the platform live onto your official corporate domain space.",
    timeline: "Deployment Handover",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
];

const clientDoubtsFaq = [
  {
    question: "How do I know you won't disappear halfway through my project?",
    answer:
      "This is the most common fear in tech development, and it happens because clients are kept in the dark. At DrishNet, I protect you by providing an active staging website link from week one. Every time I write code or fix an asset, you see it update immediately on that link. You have continuous visual confirmation that your software is actively progressing toward launch.",
  },
  {
    question:
      "What happens if I find a problem or want a layout change during production?",
    answer:
      "Our development roadmap is engineered to handle adjustments easily. Because we use an iterative prototype step, you will be interacting with a live draft of your platform early on. If a specific interface segment or feature option doesn't match your workflow requirements, you tell me immediately, and we adjust the code logic before final delivery.",
  },
  {
    question:
      "Do you provide long-term assistance after my platform goes live?",
    answer:
      "Absolutely. I don't just export files and leave. I look for long-term technical relationships. Every application built by DrishNet includes dedicated initial post-launch monitoring to make sure things run perfectly. After that, I provide continuous support retainers to manage software environment security patches, server scale parameters, and data routines.",
  },
  {
    question:
      "I am not a technical person. Will your software layouts be difficult for me to use?",
    answer:
      "No, they will be incredibly simple. My interface design philosophy centers around high visual clarity—taking inspiration from premium, clean smartphone architectures. I remove clutter and group options logically. This means you and your internal team can operate the systems without needing long training sessions or looking through massive user manuals.",
  },
  {
    question:
      "What are your clear payment rules, and how is my capital protected?",
    answer:
      "We establish transparent milestone terms tied strictly to tangible, viewable project achievements. You never pay massive sums upfront without seeing progress. You review proof of work at each major stage of development, verify that the features are executing correctly on your staging link, and release payments sequentially as milestones are verified.",
  },
];

// ==========================================
// CHILD COMPONENT: INTERACTIVE FAQ INDIVIDUAL ACCORDION CARD
// ==========================================

const FaqCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-white/[0.05] rounded-2xl bg-white/[0.01] overflow-hidden transition-colors duration-300 hover:border-white/[0.09]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 bg-transparent select-none group">
        <span className="text-sm md:text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200">
          {question}
        </span>
        <div
          className={`text-slate-400 text-xs p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : ""}`}>
          <FaChevronDown />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}>
            <div className="px-6 pb-6 pt-1 border-t border-white/[0.03] text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ==========================================
// MAIN PARENT COMPONENT: REBRANDED ABOUT & STORY ARCHITECTURE
// ==========================================

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050507] text-slate-200 px-4 sm:px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden select-none">
      {/* ---------------------------------------------------- */}
      {/* 1. LAYER LIGHTING AND CYBER-MESH VISUAL ENVIRONMENT  */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute top-[15%] left-[-200px] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-[50%] right-[-200px] w-[600px] h-[600px] bg-purple-600/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] left-[-150px] w-[500px] h-[500px] bg-emerald-600/5 blur-[130px] pointer-events-none rounded-full" />

      {/* Cyber Grid Pattern Accent Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20 space-y-36">
        {/* ---------------------------------------------------- */}
        {/* 2. HERO STRATEGIC MANIFESTO HEADER                    */}
        {/* ---------------------------------------------------- */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-slate-300">
              DrishNet Operational Core
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            We Erase Technical Chaos.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              We Code Proof, Not Promises.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed pt-3">
            At <span className="text-white font-medium">DrishNet</span>, we
            believe talk is cheap. Our mission is to engineer high-end web
            applications that run with absolute speed, look stunning, and help
            your operations run without hitch. We give you full visual
            transparency so you can see your software working live before you
            ever close a contract.
          </motion.p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. FOUNDATION PILLARS: TRUST, DEEDS & VALUES MAP     */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
              The Three Absolute Laws of DrishNet
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
              How we protect your capital and guarantee peace of mind across
              every single feature sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustMetrics.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-[2rem] bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl flex flex-col justify-between gap-6 hover:bg-white/[0.03] hover:border-white/[0.09] hover:shadow-2xl hover:shadow-white/[0.01] transition-all duration-300 group">
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color} text-xl shadow-inner group-hover:scale-105 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 4. THE DEEP ORIGIN STORY PROFILE BLOCK                 */}
        {/* ---------------------------------------------------- */}
        <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 blur-[90px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400">
                Behind The Screen
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Our Story & Operational Vision
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed pt-2">
                DrishNet was born out of a desire to fix a broken freelance tech
                industry. We noticed clients were constantly wasting money on
                slow code templates, dealing with poor communication, and
                getting left with unstable websites.
              </p>
            </div>

            <div className="lg:col-span-8 text-xs sm:text-sm text-slate-400 font-light space-y-6 leading-relaxed">
              <div className="relative p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] italic">
                <FaQuoteLeft className="absolute top-4 left-4 text-white/[0.03] text-4xl pointer-events-none" />
                <p className="pl-6 relative z-10 text-slate-300">
                  "Our philosophy is very basic: We treat your software like our
                  own product. We don't chase fast, volume-based contracts. We
                  prioritize long-term, trusted working integrations where clean
                  technical design translates into measurable business growth."
                </p>
              </div>
              <p>
                Every solution we produce is planned and programmed with
                precision. We write clean code directories that match enterprise
                frameworks, ensuring that if your company services hundreds of
                concurrent users tomorrow morning, your digital engine handles
                the strain smoothly without crashing or leaking server logs.
              </p>
              <p>
                We merge this strict attention to backend safety with modern
                UI/UX execution. By utilizing premium tools like React,
                TailwindCSS, and Framer Motion, we generate interface designs
                that don't just look neat—they function intuitively, helping
                guide your buyers and users directly to your core business
                call-to-actions.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 5. ECOSYSTEM OF SERVICES DEEP BREAKDOWN               */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-slate-500 uppercase">
              [ Production Specialties ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What We Build For Your Enterprise
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
              Custom programming blueprints engineered without technical
              dependencies or slow software overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-[2rem] bg-gradient-to-b ${service.accent} border border-white/[0.05] backdrop-blur-2xl flex flex-col justify-between gap-8 hover:border-white/[0.09] hover:bg-white/[0.02] transition-all duration-300 group`}>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {service.title}
                    </h4>
                    <p className="text-[11px] font-mono font-medium text-slate-500">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.03]">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Included Capabilities:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-400 font-light">
                        <span className="text-blue-400 text-[10px] mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 6. STEP-BY-STEP WORKFLOW TIMELINE SECTION            */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-16">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              How We Turn Requirements Into Live Results
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
              Our clear, multi-stage development journey guarantees zero
              delivery lag or sudden budget surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {developmentStages.map((stage, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] relative flex flex-col justify-between gap-6 hover:bg-white/[0.02] transition-colors duration-300">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-mono font-black text-white/[0.03] tracking-tighter">
                      {stage.step}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-semibold px-2.5 py-1 rounded-full border ${stage.badgeColor}`}>
                      {stage.timeline}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-[11px] font-mono font-bold uppercase text-slate-500 tracking-wider">
                      {stage.phase}
                    </h5>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 7. FAQ AND CLIENT DOUBT HANDLING INTERACTIVE ACCORDION*/}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block">
              Zero Confusion
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Answering Your Direct Doubts
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              We believe in honest partnerships. Here is exactly how we handle
              code, keep your capital safe, and secure your long-term setup.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {clientDoubtsFaq.map((faq, fIdx) => (
              <FaqCard
                key={fIdx}
                index={fIdx}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 8. HIGH-CONVERTING CLOSING CALL-TO-ACTION BANNER      */}
        {/* ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-transparent border border-white/[0.06] backdrop-blur-xl shadow-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[90px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-500" />

          <div className="space-y-3 relative z-10 max-w-2xl">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Ready to upscale your core operations?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Let's bypass long sales calls. Send over your basic features
              requirements, let me assemble a functional staging layout link,
              and judge our engineering speed with your own eyes.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-3 px-7 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/10 active:scale-[0.98] group-hover:translate-x-1 flex-shrink-0 relative z-10">
            <span>Start Your Project Realignment</span>
            <FaArrowRight className="text-[11px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
