// Contact.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // User input mobile number
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // YAHAN MAGIC HAI: Message aur Phone number ko aapas me jod kar ek sath bhejna
    const combinedMessage = `Contact Number: ${form.phone}\n\nProject Requirements:\n${form.message}`;

    // EmailJS templates humesha input tags ke "name" attribute ko hi text read karte hain.
    // Isiliye hum ek hidden input create karke usme combined text set kar rahe hain.
    const templateParams = {
      name: form.name,
      email: form.email,
      message: combinedMessage, // Ab number isi message ke andar chala jayega
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams, // Form ref ki jagah params object use kiya taaki manipulated data jaye
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Your message and contact number have been sent successfully!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#030712",
      }}
      className="py-24 px-6 md:px-20 min-h-screen text-slate-100 relative overflow-hidden flex flex-col justify-center">
      {/* Soft Background Grid */}
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

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
        <span className="text-[#38bdf8] text-xs font-semibold tracking-wider bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full uppercase inline-block mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
          Let's Work Together<span className="text-[#38bdf8]">.</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto mt-3 leading-relaxed">
          Have a project in mind or want to hire me? Fill out the form below
          with your details.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(10, 20, 38, 0.4)",
          borderColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="w-full max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl border relative z-10 space-y-5 transition-all duration-300 hover:border-sky-500/20">
        <div>
          <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
            Your Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-slate-950/60 text-slate-100 border border-slate-800 focus:border-[#38bdf8]/50 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]/30 transition text-sm"
            placeholder="Enter your name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 text-slate-100 border border-slate-800 focus:border-[#38bdf8]/50 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]/30 transition text-sm"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
              Contact / Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 text-slate-100 border border-slate-800 focus:border-[#38bdf8]/50 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]/30 transition text-sm"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
            Project Requirements / Details
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/60 text-slate-100 border border-slate-800 focus:border-[#38bdf8]/50 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]/30 transition text-sm resize-none"
            placeholder="Please describe what kind of website or project you need..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#38bdf8] text-[#030712] font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-50">
          {loading ? (
            <span>Sending Message...</span>
          ) : (
            <>
              <span>Send Project Details</span>
              <FiSend size={12} />
            </>
          )}
        </button>
      </form>

      {/* Instagram direct link */}
      <div className="text-center mt-12 relative z-10">
        <a
          href="https://instagram.com/drishnet"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#38bdf8] transition-colors border border-slate-800/80 bg-slate-900/40 px-4 py-2 rounded-xl">
          <FiInstagram size={14} className="text-pink-500" />
          <span>
            Or DM on Instagram:{" "}
            <strong className="text-slate-200">@drishnet</strong>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
