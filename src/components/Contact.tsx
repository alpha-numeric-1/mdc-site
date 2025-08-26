import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_jro7ens",
        "template_z1abgka",
        formRef.current,
        "kIlkVnWxpf13jHumg"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form in a Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Connect with me</h3>
              <p className="text-gray-600 mb-6">
                You can also reach me through my social media or phone.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <FaLinkedin className="text-blue-700 text-xl" />
                    <a
                    href="https://www.linkedin.com/in/zrmdcs12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-700"
                    >
                    LinkedIn
                    </a>
                </li>
                <li className="flex items-center gap-3">
                    <FaFacebook className="text-blue-600 text-xl" />
                    <a
                    href="https://www.facebook.com/caracasmarcdan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-gray-700"
                    >
                    Facebook
                    </a>
                </li>
                <li className="flex items-center gap-3">
                    <FaPhone className="text-green-500 text-xl" />
                    <span className="text-gray-700">+63 938 001 3909</span>
                </li>
                <li className="flex items-center gap-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12H8m0 0l4-4m-4 4l4 4"
                    />
                    </svg>
                    <a
                    href="mailto:caracasmarcdaniel@gmail.com"
                    className="hover:underline text-gray-700"
                    >
                    Email
                    </a>
                </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}