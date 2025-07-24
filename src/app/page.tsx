"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const skills = [
  {
    name: "HTML",
    img: "/images/html.png",
  },
  {
    name: "CSS",
    img: "/images/css.png",
  },
  {
    name: "JavaScript",
    img: "/images/javascript.png",
  },
  {
    name: "PHP",
    img: "/images/php.png",
  },
  {
    name: "Next.js",
    img: "/images/nextjs.png",
  },
  {
    name: "Bootstrap",
    img: "/images/bootstrap.png",
  },
  {
    name: "Tailwind CSS",
    img: "/images/tailwindcss.png",
  },
  {
    name: "Xampp",
    img: "/images/xampp.png",
  },
];

const projects = [
  {
    name: "Big Brew",
    desc: "A modern web app for discovering and ordering  milk tea from Big Brew.",
    tech: "HTML, Tailwind CSS, JavaScript",
    demo: "https://bigbrew-bycharls.netlify.app/",
    github: "#",
    img: "/projects/project1.png",
  },
  {
    name: "Waxi's",
    desc: "A sleek way to browse, order, and enjoy your favorite fast food anytime.",
    tech: "HTML, CSS, Bootstrap,JavaScript",
    demo: "https://waxis-designed-by-charls.netlify.app/",
    github: "#",
    img: "/projects/project2.png",
  },
  {
    name: "Coffee Shop",
    desc: "A modern web app for ordering fresh, handcrafted coffee anytime.",
    tech: "HTML,PHP, MySQL, Tailwind CSS",
    demo: "https://coffeeshopdesignedby-charls.netlify.app/",
    github: "#",
    img: "/projects/project3.png",
  },
  {
    name: "Mindanao Waterfalls",
    desc: "A modern web app for discovering the hidden waterfalls of Mindanao.",
    tech: "HTML, CSS, Bootstrap,JavaScript",
    demo: "https://mindanao-waterfalls-charlsrebaja.netlify.app/",
    github: "#",
    img: "/projects/project4.png",
  },
  {
    name: "Mindanao Peaks",
    desc: "A modern web app for exploring the highest and most scenic mountains in Mindanao.",
    tech: "Html, Tailwind CSS, JavaScript",
    demo: "https://mindanaopeakstikangniyeye.netlify.app/",
    github: "#",
    img: "/projects/project5.png",
  },
  {
    name: "SK Barangay Mankilam",
    desc: "Empowering youth through digital access to programs, events, and initiatives.",
    tech: "HTML, CSS, Bootstrap,JavaScript",
    demo: "https://skbarangaymankilam.netlify.app/",
    github: "#",
    img: "/projects/project6.png",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [sending, setSending] = useState(false);

  // Listen to scroll and update activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [successMsg, setSuccessMsg] = useState("");
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccessMsg("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSending(false);
    if (res.ok) {
      setSuccessMsg("Message sent successfully! 🚀");
      form.reset();
    } else {
      setSuccessMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-lg flex items-center justify-between px-6 py-4 rounded-b-2xl border-b border-gray-300 dark:border-gray-700">
        <a
          href="#home"
          className="text-black dark:text-white font-extrabold text-2xl tracking-tight drop-shadow-lg"
        >
          Charls
        </a>
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-black text-gray-700 dark:text-gray-200 shadow focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6 text-base font-semibold">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-gray-700 dark:hover:text-gray-200 transition ${
                    activeSection === item.id
                      ? "text-[#00CEC8] dark:text-[#00CEC8] font-bold"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg rounded-b-2xl sm:hidden z-40">
            <ul className="flex flex-col gap-2 py-4 px-8 text-base font-semibold">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block py-2 hover:text-gray-700 dark:hover:text-gray-200 transition ${
                      activeSection === item.id
                        ? "text-[#00CEC8] dark:text-[#00CEC8] font-bold"
                        : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-20 py-20 gap-12 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        {/* 👋 Waving Animation Style */}
        <style>{`
    @keyframes wave {
      0% { transform: rotate(0deg); }
      10% { transform: rotate(14deg); }
      20% { transform: rotate(-8deg); }
      30% { transform: rotate(14deg); }
      40% { transform: rotate(-4deg); }
      50% { transform: rotate(10deg); }
      60%, 100% { transform: rotate(0deg); }
    }
    .wave-emoji {
      display: inline-block;
      animation: wave 2s infinite;
      transform-origin: 70% 70%;
    }
  `}</style>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/20" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
          {/* Left: Text, Icons, CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
              Hi, I’m Charls <span className="wave-emoji">👋</span> Passionate
              Web Developer
            </h1>
            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mx-auto md:mx-0 mb-2" />
            <p className="text-lg sm:text-xl text-dark-700 dark:text-gray-300 max-w-xl">
              Another day, another line of code.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/choy.rebaja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-all hover:scale-105 bg-white/60 dark:bg-black/60 p-3 rounded-full shadow-md backdrop-blur border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 
              24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 
              1.893-4.788 4.659-4.788 1.325 0 2.463.099 
              2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 
              1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 
              24 24 23.408 24 22.674V1.326C24 .592 23.405 0 
              22.675 0z"
                  />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/charlsrebaja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all hover:scale-105 bg-white/60 dark:bg-black/60 p-3 rounded-full shadow-md backdrop-blur border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 
              5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
              1.205.084 1.84 1.236 1.84 1.236 
              1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 
              0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 
              0 0 1.008-.322 3.301 1.23a11.52 11.52 
              0 0 1 3.003-.404c1.018.005 2.045.138 
              3.003.404 2.291-1.553 3.297-1.23 
              3.297-1.23.653 1.653.242 2.873.118 
              3.176.77.84 1.235 1.911 1.235 
              3.221 0 4.609-2.803 5.624-5.475 
              5.921.43.371.823 1.102.823 
              2.222v3.293c0 .322.218.694.825.576C20.565 
              22.092 24 17.592 24 12.297 24 5.67 18.627 0 12 0z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all hover:scale-105 bg-white/60 dark:bg-black/60 p-3 rounded-full shadow-md backdrop-blur border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.85-3.037-1.852 
              0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 
              1.637-1.85 3.368-1.85 3.599 0 4.264 2.368 4.264 5.455v6.286zM5.337 
              7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 
              4.125zM6.814 20.452H3.861V9h2.953v11.452zM22.225 
              0H1.771C.792 0 0 .771 0 1.723v20.549C0 
              23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 
              22.271V1.723C24 .771 23.2 0 22.225 0z"
                  />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="mt-4 inline-block bg-black dark:bg-white text-white dark:text-black font-medium px-6 py-3 rounded-full shadow-md border border-transparent hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Right: Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-dark-300 dark:border-gray-600 backdrop-blur-md bg-white/60 dark:bg-black/60">
              <Image
                src="/images/profilepic.jpg"
                alt="Charls Profile"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="max-w-3xl mx-auto py-16 px-4 sm:px-8 animate-fadein"
      >
        <style>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein {
            animation: fadein 1.2s cubic-bezier(0.4,0,0.2,1);
          }
        `}</style>
        <div className="backdrop-blur-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-800 flex flex-col items-start">
          {/* Optional Profile Image */}
          <div className="mb-4">
            <Image
              src="/images/profilepic.jpg"
              alt="Charls Profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-gray-700 shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-lg text-left">
            About Me
          </h2>
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mb-6" />
          <p className="text-lg text-gray-200 mb-4 text-left">
            Hi! I'm <span className="font-bold text-white">Charls</span>, a
            Bachelor of Science in Information Technology and a passionate,
            creative web developer based in{" "}
            <span className="font-semibold text-gray-300">
              Davao City, Philippines
            </span>
            .
            <br />I specialize in building modern, responsive websites and
            applications using:
          </p>
          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "Tailwind",
              "JavaScript",
              "PHP",
              "Next.js",
              "MySQL",
              "XAMPP",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-700/40 text-gray-200 border border-gray-600 shadow-sm hover:bg-gray-600/70 transition"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mb-4 text-gray-300 text-left">
            With a keen eye for design and detail, I enjoy turning ideas into
            digital experiences that are fast, accessible, and visually
            engaging. Whether working on personal projects or collaborating with
            a team, I always bring dedication, curiosity, and a problem-solving
            mindset.
          </p>
          <p className="text-gray-300 text-left">
            I'm continuously learning and exploring new technologies to improve
            my skills and deliver even better solutions.
          </p>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-2 text-black dark:text-white text-center drop-shadow-lg">
          My Projects
        </h2>
        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-300 dark:border-gray-700 transition-transform duration-200 hover:scale-102 hover:shadow-2xl hover:border-gray-500 dark:hover:border-gray-400"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={180}
                className="object-cover w-full h-44 rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 drop-shadow">
                  {project.name}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 mb-2 font-medium drop-shadow">
                  {project.desc}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-semibold">
                  {project.tech}
                </p>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black px-4 py-2 rounded-full shadow hover:bg-gray-700 dark:hover:bg-gray-300 transition text-sm font-semibold backdrop-blur border border-gray-700 dark:border-gray-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-800 transition text-sm font-semibold backdrop-blur border border-gray-300 dark:border-gray-700"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-2 text-black dark:text-white text-center drop-shadow-lg">
          Skills
        </h2>
        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mx-auto mb-12" />

        <style>{`
    .flip-card {
      perspective: 1000px;
    }
    .flip-card-inner {
      transition: transform 0.6s ease-in-out;
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner,
    .flip-card:focus-within .flip-card-inner {
      transform: rotateY(180deg) scale(1.02);
    }
    .flip-card-front,
    .flip-card-back {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
  `}</style>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {skills.map((skill, idx) => {
            const years = [
              "3 years",
              "3 years",
              "3 years",
              "2 years",
              "2 years",
              "3 years",
              "2 years",
              "2 years",
            ][idx];

            return (
              <div
                key={skill.name}
                className="flip-card group relative cursor-pointer w-[150px] h-[150px]"
                tabIndex={0}
              >
                <div className="flip-card-inner w-full h-full">
                  {/* Front Side */}
                  <div className="flip-card-front backdrop-blur-md bg-gradient-to-br from-black/90 to-gray-900/70 rounded-2xl p-4 text-center font-semibold text-white shadow-xl border border-gray-700 w-full h-full text-lg flex flex-col items-center justify-center gap-2">
                    <Image
                      src={skill.img}
                      alt={skill.name + " logo"}
                      width={48}
                      height={48}
                      className="mb-1"
                    />
                    <span>{skill.name}</span>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back backdrop-blur-md bg-gradient-to-br from-gray-900 to-black/90 rounded-2xl p-4 text-center font-bold text-[#00CEC8] shadow-xl border border-gray-700 w-full h-full text-lg flex items-center justify-center">
                    {years}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-7xl mx-auto py-20 px-2 sm:px-6 md:px-10"
      >
        <h2 className="text-4xl font-bold mb-2 text-black dark:text-white text-center drop-shadow-lg">
          Contact Us
        </h2>
        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-400 rounded-full mx-auto mb-12 sm:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          {/* Send a Message Container */}
          <div className="min-h-[400px] md:min-h-[550px] backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-300 dark:border-gray-700 w-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black dark:text-white text-center md:text-left drop-shadow">
                Send a Message
              </h3>
              <form
                className="flex flex-col gap-4 sm:gap-6"
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 shadow focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 shadow focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-semibold text-gray-900 dark:text-gray-100"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 shadow resize-none focus:outline-none focus:border-gray-500 dark:focus:border-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition border border-gray-700 dark:border-gray-300"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
                {successMsg && (
                  <div className="mt-4 px-4 py-3 rounded-xl bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 font-semibold text-center shadow transition-all animate-fadein">
                    {successMsg}
                  </div>
                )}
                <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
              </form>
            </div>
          </div>

          {/* Contact Information Container */}
          <div className="min-h-[400px] md:min-h-[550px] backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-300 dark:border-gray-700 w-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white drop-shadow mb-6 sm:mb-8">
                Contact Information
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {/* Real-time Email Icon (Material Design) */}
                    <svg
                      className="w-7 h-7 text-[#00CEC8]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:charlsrebaja09@gmail.com"
                    className="text-base sm:text-lg font-medium text-[#00CEC8] hover:underline break-words focus:outline-none focus:ring-2 focus:ring-[#00CEC8]"
                  >
                    charlsrebaja09@gmail.com
                  </a>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {/* Real-time Phone Icon (Material Design) */}
                    <svg
                      className="w-7 h-7 text-[#00CEC8]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                    </svg>
                  </div>
                  <a
                    href="tel:09057492817"
                    className="text-base sm:text-lg font-medium text-[#00CEC8] hover:underline focus:outline-none focus:ring-2 focus:ring-[#00CEC8]"
                  >
                    09057492817
                  </a>
                </div>
                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {/* Real-time Location Icon (Material Design) */}
                    <svg
                      className="w-7 h-7 text-[#00CEC8]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                    </svg>
                  </div>
                  <div className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                    Davao City, Philippines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-0 text-center bg-gradient-to-r from-black via-gray-900 to-gray-800 border-t border-gray-700 backdrop-blur-xl rounded-t-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
          <div className="flex items-center gap-3 text-white font-bold text-lg">
            <svg
              className="w-7 h-7 text-[#00CEC8]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 110-16 8 8 0 010 16z" />
            </svg>
            Charls Portfolio
          </div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="backdrop-blur bg-black/70 rounded-full p-2 shadow hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="backdrop-blur bg-black/70 rounded-full p-2 shadow hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="backdrop-blur bg-black/70 rounded-full p-2 shadow hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
              </svg>
            </a>
          </div>
          <div className="text-gray-300 text-sm mt-2 sm:mt-0">
            © 2025 Charls. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
