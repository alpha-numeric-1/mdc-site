import { motion } from "framer-motion";
import { useState } from "react";
import { scrollToSection } from "../utils/clicknav";

export default function Home() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Content Section */}
          <div className="flex-1 lg:flex-grow-2 w-full lg:mt-4">
            {/* Name + Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 text-center lg:text-left"
            > 
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  Marc Daniel Caracas
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-sm sm:text-lg text-gray-900 mb-4 lg:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                An{" "}
                <span className="text-orange-400 font-medium">Entry-Level Software & AI Developer </span> 
                passionate about building web applications and intelligent AI-powered systems.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row items-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto justify-evenly sm:justify-start"
            >
              {/* View Projects button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                <span>View Projects</span>
                <i className="fas fa-arrow-right text-sm"></i>
              </motion.a>

              {/* Get Started link */}
              <motion.a
                whileHover={{ x: 5 }}
                onClick={(e) => scrollToSection(e, "#about")}
                className="inline-flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300"
              >
                <span>Know More</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="size-6"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-auto order-first lg:order-last flex items-end justify-center">
            <motion.img
              src="/hero.png"
              alt="Marc Daniel Caracas"
              onLoad={() => setImgLoaded(true)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imgLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="object-contain h-64 sm:h-80 md:h-96 lg:h-[500px] lg:w-[500px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}