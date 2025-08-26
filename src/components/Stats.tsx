import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { id: 1, name: "Projects Completed", value: "15+" },
    { id: 2, name: "Years of Experience", value: "1+" },
    { id: 3, name: "Happy Clients", value: "5+" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* ABOUT ME Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-8"
        >
          About Me
        </motion.h2>

        {/* Brief Summary */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-20"
            >
            Graduated in 2025 from <span className="text-orange-500 font-medium">Pangasinan State University </span> 
             with a degree in Computer Science. Skilled in <span className="text-orange-500 font-medium">Python programming</span>, 
            machine learning (computer vision, LLM integration), and full-stack development.  
            Built a hybrid-approach recommendation system for my thesis and also develop apps in Flutter.  
            Passionate about continuous learning, driven by innovation, and inspired by hobbies like playing music, 
            mobile gaming, and watching anime.
        </motion.p>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-8 relative 
                ${index !== stats.length - 1 ? "lg:border-r" : ""} 
                border-gray-200`}
            >

              {/* Gradient Separator for large screens */}
              {index !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-gradient-to-b from-orange-500 to-yellow-500"></div>
              )}

              <motion.dd className="order-first text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-lg">
                {stat.value}
              </motion.dd>
              <motion.dt className="text-base text-gray-600 mt-2">{stat.name}</motion.dt>
            </motion.div>

          ))}
        </motion.dl>
      </div>
    </section>
  );
}