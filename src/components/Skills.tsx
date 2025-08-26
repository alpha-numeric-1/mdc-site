import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiJavascript, SiPhp, SiDart,
  SiFlutter, SiReact, SiNodedotjs, SiNextdotjs,
  SiTensorflow, SiPandas, SiVuedotjs, SiGit,
  SiNetlify, SiVercel, SiMysql, SiFirebase, SiMongodb
} from "react-icons/si";

export default function Skills() {
  const skills = useMemo(() => [
    { name: "Python", icon: <SiPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Vue.js", icon: <SiVuedotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "MongoDB", icon: <SiMongodb /> }
  ], []);

  const duplicatedSkills = useMemo(() => [...skills, ...skills], [skills]);

  const marqueeRef = useRef<HTMLUListElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-12 sm:py-8 bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-400 overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="relative overflow-hidden py-4">
          <motion.ul
            ref={marqueeRef}
            className="flex whitespace-nowrap"
            animate={{ x: [0, -width] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-center mx-6 text-white"
              >
                <div className="text-3xl md:text-4xl mb-1">
                  {skill.icon}
                </div>
                <p className="text-sm md:text-base">{skill.name}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}