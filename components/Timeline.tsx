"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, Laptop, Rocket, Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { timeline } from "@/lib/data";

const icons = [Code2, Laptop, Rocket, Star, Calendar];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 bg-dark-800/50">
      <div className="container mx-auto">
        <SectionTitle title="مسیر یادگیری" subtitle="سفر من در دنیای برنامه‌نویسی" />

        <div className="relative max-w-3xl mx-auto">
          {/* Center line */}
          <div className="absolute right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 hidden md:block" />
          <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 md:hidden" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = icons[i % icons.length];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Icon circle */}
                  <div className="absolute right-4 md:right-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`mr-20 md:mr-0 md:w-5/12 ${isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="glass p-6 hover:bg-white/10 transition-colors">
                      <div className="text-sm text-cyan-400 font-mono mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.titleFa}</h3>
                      <p className="text-gray-400 text-sm">{item.descriptionFa}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
