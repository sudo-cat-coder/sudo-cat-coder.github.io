"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-800/50">
      <div className="container mx-auto">
        <SectionTitle title="مهارت‌های فنی" subtitle="تکنولوژی‌هایی که با آن‌ها کار می‌کنم" />

        <div className="space-y-12">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                {category.titleFa}
                <span className="text-gray-500 text-sm font-normal">({category.title})</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
