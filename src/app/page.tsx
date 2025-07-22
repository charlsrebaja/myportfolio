"use client";
import React, { useState } from "react";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
  "MySQL",
];

const projects = [
  {
    name: "Project One",
    desc: "A modern web app for task management.",
    tech: "Next.js, Tailwind CSS, MySQL",
    demo: "#",
    github: "#",
    img: "/projects/project1.png",
  },
  {
    name: "Project Two",
    desc: "Portfolio website for a designer.",
    tech: "HTML, CSS, Bootstrap",
    demo: "#",
    github: "#",
    img: "/projects/project2.png",
  },
  {
    name: "Project Three",
    desc: "E-commerce platform for local stores.",
    tech: "PHP, MySQL, Tailwind CSS",
    demo: "#",
    github: "#",
    img: "/projects/project3.png",
  },
  {
    name: "Project Four",
    desc: "Real-time chat application.",
    tech: "JavaScript, Node.js, CSS",
    demo: "#",
    github: "#",
    img: "/projects/project4.png",
  },
  {
    name: "Project Five",
    desc: "Blog platform for tech articles.",
    tech: "Next.js, Tailwind CSS",
    demo: "#",
    github: "#",
    img: "/projects/project5.png",
  },
  {
    name: "Project Six",
    desc: "Landing page for a startup.",
    tech: "HTML, CSS, JavaScript",
    demo: "#",
    github: "#",
    img: "/projects/project6.png",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/60 dark:bg-black/60 shadow-lg flex items-center justify-between px-6 py-4 rounded-b-2xl border-b border-[#00CEC8] dark:border-[#00CEC8]">
        <a
          href="#home"
          className="text-[#00CEC8] dark:text-[#00CEC8] font-extrabold text-2xl tracking-tight drop-shadow-lg"
        >
          Charls
        </a>
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded-full border border-[#00CEC8] dark:border-[#00CEC8] bg-white dark:bg-black text-[#00CEC8] dark:text-[#00CEC8] shadow focus:outline-none"
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
            <li>
              <a
                href="#home"
                className="hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg rounded-b-2xl sm:hidden z-40">
            <ul className="flex flex-col gap-2 py-4 px-8 text-base font-semibold">
              <li>
                <a
                  href="#home"
                  className="block py-2 hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-[#00CEC8] dark:hover:text-[#00CEC8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 text-center"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 rounded-full p-2 shadow-xl border-2 border-[#00CEC8] dark:border-[#00CEC8]">
            <Image
              src="/images/profilepic.jpg"
              alt="Charls Profile"
              width={120}
              height={120}
              className="rounded-full object-cover w-[180px] h-[180px]"
              priority
            />
          </div>
          <div className="flex gap-4 mt-6">
            {/* Social Icons - glassmorphism */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              {/* Facebook SVG */}
              <svg
                className="w-7 h-7 text-[#00CEC8] dark:text-[#00CEC8]"
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
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              {/* GitHub SVG */}
              <svg
                className="w-7 h-7 text-[#00CEC8] dark:text-[#00CEC8]"
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
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              {/* LinkedIn SVG */}
              <svg
                className="w-7 h-7 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              {/* Twitter SVG */}
              <svg
                className="w-7 h-7 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </div>
        <h1 className="text-2xl sm:text-4xl font-semibold mb-4 text-[#00CEC8] ">
          Hi, I’m Charls – a passionate Web Developer
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-800 dark:text-gray-200 font-medium drop-shadow">
          Another day, another code
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#00CEC8]/80 dark:bg-[#00CEC8]/80 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#00CEC8]/90 dark:hover:bg-[#00CEC8]/90 transition backdrop-blur-xl border border-[#00CEC8] dark:border-[#00CEC8]"
        >
          Hire Me
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-3xl mx-auto py-16 px-4 sm:px-8 text-center"
      >
        <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-[#00CEC8] dark:border-[#00CEC8]">
          <h2 className="text-3xl font-bold mb-4 text-[#00CEC8] dark:text-[#00CEC8] drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 font-medium drop-shadow">
            I'm Charls, a web developer with a love for building beautiful and
            functional websites. My passion for development drives me to learn
            new technologies and create solutions that make a difference. I
            enjoy turning ideas into reality through code and design.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#00CEC8] dark:text-[#00CEC8] text-center drop-shadow-lg">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-xl p-6 text-center font-semibold text-[#00CEC8] dark:text-[#00CEC8] shadow-lg border border-[#00CEC8] dark:border-[#00CEC8]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-8 text-[#00CEC8] dark:text-[#00CEC8] text-center drop-shadow-lg">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-[#00CEC8] dark:border-[#00CEC8] transition-transform duration-200 hover:scale-102 hover:shadow-2xl hover:border-[#00cec8]/80 dark:hover:border-[#00cec8]/80"
            >
              <Image
                src={project.img}
                alt={project.name}
                width={300}
                height={180}
                className="object-cover w-full h-44 rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#00CEC8] dark:text-[#00CEC8] mb-2 drop-shadow">
                  {project.name}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 mb-2 font-medium drop-shadow">
                  {project.desc}
                </p>
                <p className="text-sm text-[#00CEC8] dark:text-[#00CEC8] mb-4 font-semibold">
                  {project.tech}
                </p>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00CEC8]/80 dark:bg-[#00CEC8]/80 text-white px-4 py-2 rounded-full shadow hover:bg-[#00CEC8]/90 dark:hover:bg-[#00CEC8]/90 transition text-sm font-semibold backdrop-blur border border-[#00CEC8] dark:border-[#00CEC8]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 dark:bg-gray-900/80 text-[#00CEC8] dark:text-[#00CEC8] px-4 py-2 rounded-full shadow hover:bg-[#00CEC8]/10 dark:hover:bg-[#00CEC8]/10 transition text-sm font-semibold backdrop-blur border border-[#00CEC8] dark:border-[#00CEC8]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-lg border border-[#00CEC8] dark:border-[#00CEC8]">
          {/* Contact Form - Left Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 text-[#00CEC8] dark:text-[#00CEC8] text-center md:text-left drop-shadow-lg">
              Contact
            </h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-semibold text-[#00CEC8] dark:text-[#00CEC8]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="px-4 py-2 rounded-xl border border-[#00CEC8] dark:border-[#00CEC8] focus:border-[#00CEC8] focus:outline-none bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-semibold text-[#00CEC8] dark:text-[#00CEC8]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="px-4 py-2 rounded-xl border border-[#00CEC8] dark:border-[#00CEC8] focus:border-[#00CEC8] focus:outline-none bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-semibold text-[#00CEC8] dark:text-[#00CEC8]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="px-4 py-2 rounded-xl border border-[#00CEC8] dark:border-[#00CEC8] focus:border-[#00CEC8] focus:outline-none bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#00CEC8]/80 dark:bg-[#00CEC8]/80 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00CEC8]/90 dark:hover:bg-[#00CEC8]/90 transition backdrop-blur border border-[#00CEC8] dark:border-[#00CEC8]"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information - Right Side */}
          <div className="flex flex-col justify-center items-center md:items-start gap-6">
            <h3 className="text-2xl font-bold text-[#00CEC8] dark:text-[#00CEC8] mb-2 drop-shadow">
              Contact Information
            </h3>
            <div className="flex items-center gap-3 text-lg font-medium text-gray-800 dark:text-gray-200">
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4"
                />
              </svg>
              <span>charlsrebaja09@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-medium text-gray-800 dark:text-gray-200">
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                />
              </svg>
              <span>09057492817</span>
            </div>
            <div className="flex items-center gap-3 text-lg font-medium text-gray-800 dark:text-gray-200">
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243"
                />
              </svg>
              <span>Davao City, Philippines</span>
            </div>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
              >
                {/* Facebook SVG */}
                <svg
                  className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
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
                className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
              >
                {/* GitHub SVG */}
                <svg
                  className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
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
                className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
              >
                {/* LinkedIn SVG */}
                <svg
                  className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
              >
                {/* Twitter SVG */}
                <svg
                  className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-0 text-center bg-white/70 dark:bg-gray-950/70 border-t border-[#00CEC8] dark:border-[#00CEC8] backdrop-blur-xl rounded-t-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
          <div className="flex items-center gap-3 text-[#00CEC8] dark:text-[#00CEC8] font-bold text-lg">
            <svg
              className="w-7 h-7 text-[#00CEC8] dark:text-[#00CEC8]"
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
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
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
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
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
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="backdrop-blur bg-white/40 dark:bg-black/40 rounded-full p-2 shadow hover:bg-[#00CEC8]/20 dark:hover:bg-[#00CEC8]/30 transition"
            >
              <svg
                className="w-6 h-6 text-[#00CEC8] dark:text-[#00CEC8]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 sm:mt-0">
            © 2025 Charls. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
