"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillCard({ name, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass p-4 group cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
          {name}
        </span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
