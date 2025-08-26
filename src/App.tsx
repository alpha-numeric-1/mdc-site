import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Exp";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [showHomeButton, setShowHomeButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHomeButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen bg-gray-50">
          <Stats />
          <About />
          <Skills />
        </section>
        <section id="projects" className="min-h-screen bg-gray-50">
          <Projects />
        </section>
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>
        <section id="contact" className="min-h-screen bg-gray-50">
          <Contact />
          <Footer />
        </section>
      </main>

      {/* Animated Floating Home Button */}
      <AnimatePresence>
        {showHomeButton && (
          <motion.button
            key="home-button"
            onClick={scrollToHome}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-20 right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition"
            aria-label="Back to Home"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FaArrowUp size={20} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;