import React from "react";

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
      title: "Sports Betting Platform",
      description:
        "Full-stack betting platform with real-time odds and payment integration",
      tech: ["NestJS", "React", "PostgreSQL", "WebSocket"],
      github: "#",
      demo: "#",
      image: "🎲",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard with analytics, inventory management, and user roles",
      tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      github: "#",
      demo: "#",
      image: "📊",
    },
    {
      title: "Restaurant Menu System",
      description: "Digital menu with ordering system and kitchen management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "🍽️",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              W
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Wansing Dev
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full-Stack Developer & Problem Solver
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Building scalable web applications with modern technologies.
              Specializing in React, NestJS, and cloud solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`/resume.pdf`}
              download
              type="file"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              📥 Download CV
            </a>
            <button className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
              View Projects
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <div className="text-2xl">🐱</div>
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
            >
              <div className="text-2xl">💼</div>
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
            >
              <div className="text-2xl">📧</div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
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
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="mr-2">🐱</span>
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="mr-2">🔗</span>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Contact Section */}
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
