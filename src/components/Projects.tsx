import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = useMemo(() => [
    {
      title: "Portfolio Website",
      summary: "Personal portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind", "Framer Motion"],
      tags: ["web", "frontend"],
      image: "/images/portfolio.png",
      github: "https://github.com/username/portfolio",
      live: "https://yourportfolio.com",
      date: "2025-08-01",
    },
    {
      title: "E-Commerce App",
      summary: "Full-stack e-commerce app with cart and checkout.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      tags: ["web", "fullstack"],
      image: "/images/ecommerce.png",
      github: "https://github.com/username/ecommerce-app",
      live: "https://myecommerce.com",
      date: "2025-07-15",
    },
    {
      title: "AI Chatbot",
      summary: "Conversational AI chatbot with NLP integration.",
      tech: ["Python", "FastAPI", "OpenAI API"],
      tags: ["ai", "backend"],
      image: "/images/chatbot.png",
      github: "https://github.com/username/ai-chatbot",
      date: "2025-06-20",
    },
    // Add more...
  ], []);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [tagFilter, setTagFilter] = useState("");

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (search) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.summary.toLowerCase().includes(search.toLowerCase()) ||
          p.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (tagFilter) {
      result = result.filter((p) => p.tags.includes(tagFilter));
    }

    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result.slice(0, 6);
  }, [projects, search, sortBy, tagFilter]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-12 text-center"
        >
          Projects
        </motion.h2>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
            aria-label="Sort projects by"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="title">Title</option>
          </select>
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
            aria-label="Filter projects by tag"
          >
            <option value="">All Tags</option>
            <option value="web">Web</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
            <option value="ai">AI</option>
            <option value="backend">Backend</option>
          </select>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-orange-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow">{project.summary}</p>
                <p className="mt-3 text-xs text-gray-500">
                  <span className="font-semibold">Tech:</span> {project.tech.join(", ")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}