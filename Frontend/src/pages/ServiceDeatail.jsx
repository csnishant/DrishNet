// ServicePackages.jsx
import React from "react";
import { SiPrimefaces } from "react-icons/si";

const PACKAGES = [
  {
    key: "starter",
    name: "Starter",
    price: "₹499",
    label: "For Individuals",
    highlight: false,
    description:
      "Perfect for creators starting with social visuals & light video edits.",
    features: [
      "Basic Post – 1",
      "Standard Post – 2",

      "Premium Post – 1",
      "Basic Video – 1 (Cut, trim, merge + text overlay)",
      "AI Voiceover – ",
      "Weekly Package – ✖️",
      "Monthly Package – ✖️",
      "1 Revision",
      "Standard Support",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    price: "₹1499",
    label: "Most Popular",
    highlight: "purple",
    description:
      "Best for growing creators & small brands — mix of posts + videos.",
    features: [
      "Basic Post – 3",
      "Standard Post – 2",
      "Premium Post – 1",
      "Basic Video – 2 (Cut, trim, merge + text overlay)",
      "Standard Video – 2 (Transitions + music + graphics)",
      ,
      "Premium Video – 2 (Full editing, effects, intro/outro, color correction)",
      "AI Voiceover – Add-on (Hindi/English male/female)",
      "Weekly Package – ✖️",
      "Monthly Package – ✖️",
      "3 Revisions",
      "Priority Support",
    ],
  },
  {
    key: "gold",
    name: "Gold",
    price: "₹2999",
    label: "Best Value",
    highlight: "gold",
    description:
      "Complete brand package — content + video production + strategy call.",
    features: [
      "Basic Post – 20",
      "Standard Post – 10",
      "Premium Post – 5",
      "Basic Video – 8 (Cut, trim, merge + text overlay)",
      "Standard Video – 5 (Transitions + music + graphics)",
      "Premium Video – 2 (Full editing, effects, intro/outro, color correction)",
      "AI Voiceover – Included (Hindi/English male/female)",
      "Weekly Package – Included (5 Posts + 2 Videos)",
      "Monthly Package – Included (20 Posts + 8 Videos)",
      "Unlimited Revisions (minor)",
      "1:1 Growth Strategy Call",
      "VIP 24/7 Support",
    ],
  },
];

const COMPARISON_ROWS = [
  "Basic Post (₹50)",
  "Standard Post (₹80)",
  "Premium Post (₹120)",
  "Basic Video – ₹100 (Cut, trim, text overlay)",
  "Standard Video – ₹150 (Transitions + music + graphics)",
  "Premium Video – ₹250 (Full editing, intro/outro, color correction)",
  "AI Voiceover – ₹80 Add-on (Hindi/English)",
  "Weekly Package – ₹500 (5 Posts + 2 Videos)",
  "Monthly Package – ₹2000 (20 Posts + 8 Videos)",
  "Custom Package – Flexible as per client",
  "1:1 Strategy Call",
];

export default function ServicePackages() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 md:p-16 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          🚀 Creative Content Pricing
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Clear, flexible packages for posts, videos and growth. Pick a plan or
          customize one to fit your needs.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.key}
            className={`rounded-2xl p-6 flex flex-col shadow-xl border transition transform hover:scale-105
              ${
                pkg.highlight === "gold"
                  ? "bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-600 border-yellow-400 text-black"
                  : pkg.highlight === "purple"
                  ? "bg-gradient-to-br from-violet-700 to-purple-900 border-purple-500"
                  : "bg-white/5 border-white/10"
              }`}>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {pkg.name}
                {pkg.highlight === "gold" && (
                  <SiPrimefaces className="text-yellow-600" />
                )}
              </h3>

              {pkg.label && (
                <span
                  className={`text-xs px-3 py-1 rounded-full mb-3 font-medium ${
                    pkg.highlight === "gold"
                      ? "bg-yellow-300 text-black"
                      : "bg-yellow-400 text-black"
                  }`}>
                  {pkg.label}
                </span>
              )}

              <div className="text-3xl font-extrabold mb-2">
                <span
                  className={
                    pkg.highlight === "gold" ? "text-black" : "text-green-400"
                  }>
                  {pkg.price}
                </span>
              </div>

              <p
                className={`text-center text-sm mb-4 ${
                  pkg.highlight === "gold" ? "text-black/70" : "text-gray-300"
                }`}>
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-2 text-sm flex-1">
              {pkg.features.map((f, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 border-b border-white/10 pb-2">
                  <span
                    className={`${
                      pkg.highlight === "gold" ? "text-black/90" : ""
                    }`}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <button
                className={`w-full py-2 rounded-full font-medium transition
                  ${
                    pkg.highlight === "gold"
                      ? "bg-black text-yellow-300 hover:bg-gray-900"
                      : "bg-violet-600 hover:bg-violet-700 text-white"
                  }`}>
                Choose {pkg.name}
              </button>
            </div>
          </div>
        ))}

        {/* Customize Card */}
        <div className="rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-r from-[#121212] to-[#262626] border border-dashed border-violet-500 text-center shadow-xl hover:scale-105 transition">
          <div>
            <h3 className="text-2xl font-bold mb-2">✨ Customize Plan</h3>
            <p className="text-gray-400 text-sm mb-4">
              Mix & match posts, videos and add-ons. Perfect for custom brand
              strategies.
            </p>

            <ul className="text-sm space-y-2 mb-4 text-left">
              <li>Custom number of posts & videos</li>
              <li>CGI / Motion graphics on demand</li>
              <li>Dedicated account manager</li>
            </ul>
          </div>

          <button className="mt-2 bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-full font-medium">
            Customize Now
          </button>
        </div>
      </div>

      {/* Comparison Matrix (Text only) */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/3 p-4 mb-10">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-1 gap-2 items-center pb-3 border-b border-white/10">
            {COMPARISON_ROWS.map((row, i) => (
              <div key={i} className="text-sm py-2 border-b border-white/10">
                {row}
              </div>
            ))}
          </div>

          <div className="pt-4 text-xs text-gray-300">
            * AI Voiceover is an add-on for Starter, included/discounted in
            higher plans.
          </div>
        </div>
      </div>
    </div>
  );
}
