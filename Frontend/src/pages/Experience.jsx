import React from "react";

const experiences = [
  {
    title: "Job Portal Website",
    tech: "MERN Stack",
    description:
      "Developed a full-stack job portal using MERN with user authentication, resume upload, and job search functionality.",
    link: "https://job-portal-website-p1.netlify.app/",
  },
  {
    title: "Food Delivery App",
    tech: "MERN + Stripe + Tailwind + Zustand",
    description:
      "Created a secure food delivery app with role-based auth, Stripe payments, and responsive UI. Used Zustand for state and Zod for validation.",
    link: "https://online-food-app-ji19.onrender.com/",
  },
  {
    title: "Web Development Certification",
    tech: "HTML, CSS, JavaScript",
    description:
      "Completed a course on building responsive and dynamic websites with HTML, CSS, and JavaScript.",
    link: "https://www.coursera.org/account/accomplishments/certificate/7RLFSCRW9C3G",
  },
];

const Experience = () => {
  return (
    <section
      className=" bg-[#0f0f0f] text-white py-12 px-4 md:px-16 "
      id="experience">
      <h2 className="pt-10 text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400">
        Experience & Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-blue-400 transition duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{exp.tech}</p>
            <p className="text-gray-300">{exp.description}</p>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
