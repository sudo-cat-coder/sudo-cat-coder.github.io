"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  titleFa: string;
  descriptionFa: string;
  technologies: string[];
  githubUrl: string;
  index: number;
}

export default function ProjectCard({
  title,
  titleFa,
  descriptionFa,
  technologies,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass group overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-dark-600 flex items-center justify-center">
            <ExternalLink className="w-8 h-8 text-gray-500" />
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {titleFa}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{title}</p>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {descriptionFa}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
        >
          <Github className="w-4 h-4" />
          <span>مشاهده در GitHub</span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
        </a>
      </div>
    </motion.div>
  );
}
