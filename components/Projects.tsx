"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionTitle title="پروژه‌ها" subtitle="نمونه کارهای من" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              titleFa={project.titleFa}
              descriptionFa={project.descriptionFa}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
