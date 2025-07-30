import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "📚 Explore Our Digital Magazines",
    subtitle: "Dive into a world of curated stories.",
    bg: "#A7C7E7",
    image: "https://placehold.co/500x500?text=Magazine",
  },
  {
    id: 2,
    title: "💡 Read Engaging Stories",
    subtitle: "Articles written to inspire and inform.",
    bg: "#F7C6C7",
    image: "https://placehold.co/500x500?text=Stories",
  },
  {
    id: 3,
    title: "🔀 Enjoy Interactive Experience",
    subtitle: "Swipe, scroll, and flip your way through.",
    bg: "#C9E4C5",
    image: "https://placehold.co/500x500?text=Interactive",
  },
  {
    id: 4,
    title: "🎥 Watch Embedded Videos",
    subtitle: "Multimedia content for deeper insights.",
    bg: "#FFD8BE",
    image: "https://placehold.co/500x500?text=Videos",
  },
  {
    id: 5,
    title: "💬 Share Your Thoughts",
    subtitle: "Join the conversation with your feedback.",
    bg: "#E5C3FF",
    image: "https://placehold.co/500x500?text=Comments",
  },
  {
    id: 6,
    title: "📈 See What’s Trending",
    subtitle: "Stay updated with top-performing topics.",
    bg: "#FFF5BA",
    image: "https://placehold.co/500x500?text=Trending",
  },
];

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const el = document.getElementById(`section${section.id}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            document.body.style.backgroundColor = section.bg;
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[9999]">
        <div
          className="h-full bg-black transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="w-full fixed top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm p-4 flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">VIBE CLUB</h1>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/magazine" className="text-gray-700 hover:text-black transition-all duration-300">
            Magazine
          </Link>
          <Link to="/adminlogin" className="text-gray-700 hover:text-black transition-all duration-300">
            Admin
          </Link>
        </nav>
      </header>

      <main className="pt-24">
        {sections.map((section, i) => (
          <section
            key={section.id}
            id={`section${section.id}`}
            className={`h-screen w-full flex flex-col-reverse ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-center px-6 md:px-24 gap-12 transition-all duration-700 relative overflow-hidden`}
          >
            {/* Background Blurred Color Layer */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${section.bg}80, transparent 70%)`,
              }}
            ></div>

            {/* Text */}
            <motion.div
              className="z-10 max-w-xl text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{section.subtitle}</p>
            </motion.div>

            {/* Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-[300px] md:w-[400px] h-auto rounded-2xl shadow-2xl z-10 hover:rotate-1 hover:scale-105 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </section>
        ))}

        {/* Call to Action Footer */}
        <div className="h-[60vh] bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2e] to-[#121212] text-white flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none z-0" />

          <motion.h2
            className="relative z-10 text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ready to Join the Vibe?
          </motion.h2>

          <motion.p
            className="relative z-10 text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Start exploring and let your curiosity flow.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative z-10 px-8 py-3 bg-white/10 text-white border border-white/30 rounded-full font-medium shadow-lg backdrop-blur-sm hover:bg-white/20 transition"
          >
            Get Started
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default Home;
