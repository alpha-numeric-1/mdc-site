import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Provincial Government of Pangasinan",
      period: "Feb 2025 – May 2025",
      location: "Lingayen, Pangasinan, Philippines",
      description:
        "Contributed to internal software solutions by developing and deploying web applications, optimizing UI/UX, and assisting in database management.",
      tech: ["PHP", "CSS", "MySQL", "JavaScript", "Bootstrap", "HTML", "Github"],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative border-l border-orange-200 pl-6 pb-8 last:pb-0"
            >
              {/* Timeline Dot with pop animation */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="absolute -left-[7px] top-1 w-3 h-3 bg-orange-500 rounded-full"
              ></motion.span>

              {/* Role & Company */}
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.company} • {exp.location}
              </p>
              <p className="text-sm text-gray-400">{exp.period}</p>

              {/* Description */}
              <p className="mt-3 text-gray-600">{exp.description}</p>

              {/* Tech Stack */}
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}