"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "right" | "left";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignClass}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg">{subtitle}</p>
      )}
      <div
        className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
        style={{
          marginLeft: align === "right" ? "auto" : undefined,
          marginRight: align === "left" ? "auto" : undefined,
        }}
      />
    </motion.div>
  );
}
