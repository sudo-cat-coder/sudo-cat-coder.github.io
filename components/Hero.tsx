"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";
import ProfileImage from "./ProfileImage";

const codeLines = [
  "const developer = {",
  "  name: 'حسام',",
  "  skills: ['Python', 'React'],",
  "  passion: 'Building things',",
  "};",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />

        {/* Code floating elements */}
        <div className="absolute top-1/4 right-10 opacity-20 font-mono text-sm hidden lg:block">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="text-cyan-400"
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Full Stack Developer</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">حسام مطهری</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-4">
                Full Stack Developer
              </p>

              <p className="text-gray-500 max-w-xl mx-auto lg:mx-0 lg:mr-0 mb-8">
                ۱۶ ساله | علاقه‌مند به ساخت اپلیکیشن‌های وب مدرن
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
                >
                  پروژه‌ها
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-xl font-medium text-white hover:bg-white/10 transition-colors"
                >
                  تماس با من
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <ProfileImage size="xl" />

            {/* Floating code icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass p-3"
            >
              <Code2 className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
