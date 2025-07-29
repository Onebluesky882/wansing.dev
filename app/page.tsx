/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SectionOne } from "./pre-load/Profile";
export default function PortfolioHomepage() {
  const skills = [
    { icon: "⚛️", name: "React/Next.js", level: 90 },
    { icon: "🔷", name: "TypeScript", level: 85 },
    { icon: "🏰", name: "NestJS", level: 80 },
    { icon: "🟢", name: "Node.js", level: 85 },
    { icon: "🐘", name: "PostgreSQL", level: 75 },
    { icon: "🐳", name: "Docker", level: 70 },
  ];

  const projects = [
    {
      title: "Restaurant Menu System",
      description:
        "A digital restaurant menu platform with admin dashboard, dynamic menu management, and kitchen-side order processing. Supports image uploads and real-time updates.",
      tech: ["React", "Node.js", "Drizzle", "Qr code API"],
      github: "https://github.com/Onebluesky882/menuX-client",
      demo: "https://menux-client.vercel.app/",
      image: "images/frontend.png",
    },
    {
      title: "BackEnd Full NestJS",
      description:
        "Robust backend API with full authentication (JWT, refresh tokens), role-based access control, database integration, and RESTful endpoints — built using NestJS and PostgreSQL.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Drizzle", "Docker"],
      github: "https://github.com/Onebluesky882/menuX-backend",
      demo: "https://menux-production-7266.up.railway.app",
      image: "images/backend.png",
    },

    {
      title: "Consumer App Order Food With Payment Live",
      description:
        "An ordering system where customers scan a QR code to view menus, place orders, and track food status. Designed for real-time communication between kitchen and customer devices.",
      tech: ["React", "Node.js", "Next.js", "QR Code API"],
      github: "https://github.com/Onebluesky882/menuX-consumer",
      demo: "https://menux-consumer.vercel.app/",
      image: "images/consumer.png",
    },
    {
      title: "Social App",
      description:
        "A social media platform featuring user authentication, real-time post updates, likes/comments, and profile management — built with a modern fullstack stack.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      github: "",
      demo: "http://web-boardmvp.vercel.app/",
      image: "images/socialApp.png",
    },
  ];

  const SectionTwo = () => {
    return (
      <section className="py-20 bg-gray-900/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{skill.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const SectionThree = () => {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-gray-800/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-6xl">
                  <img
                    src={project.image}
                    alt="project"
                    className="object-contain  "
                  />
                </div>
                <div className="p-6 outline-1 bg-black/50">
                  <a target="black" href={project.demo}>
                    <h3 className=" cursor-pointer text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </a>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      target="black"
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-2">🐱</span>
                      Code
                    </a>
                    <a
                      target="black"
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="mr-2  cursor-pointer">🔗</span>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const SectionFour = () => {
    return (
      <section className="py-20 bg-gray-900/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I love building scalable applications that
                solve real-world problems and create meaningful user
                experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">20+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const SectionFive = () => {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:your-email@example.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              📧 Get In Touch
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              📞 Schedule a Call
            </a>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SectionOne />
      {/* Hero Section */}
      <SectionTwo />
      {/* Skills Section */}
      {/* Projects Section */}
      <SectionThree />
      {/* About Section */}
      <SectionFour />
      {/* Contact Section */}
      <SectionFive />

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Wansing Dev. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
