"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "برنامه‌نویسی",
    description: "علاقه‌مند به یادگیری و توسعه",
  },
  {
    icon: Rocket,
    title: "پروژه‌های کاربردی",
    description: "ساخت اپلیکیشن‌های واقعی",
  },
  {
    icon: BookOpen,
    title: "یادگیری مداوم",
    description: "تکنولوژی‌های جدید",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionTitle title="درباره من" subtitle="کمی بیشتر درباره خودم" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="glass p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />

              <div className="relative z-10 space-y-4 text-gray-300 leading-relaxed text-lg font-persian" dir="rtl">
                {personalInfo.bio.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: -10 }}
                className="glass p-6 flex items-start gap-4 group cursor-default"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
