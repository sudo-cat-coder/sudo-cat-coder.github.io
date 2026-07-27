export const personalInfo = {
  name: "حسام مطهری",
  nameEn: "Hossam Mottaheri",
  title: "Full Stack Developer",
  age: 16,
  bio: `سلام، حسامم.
۱۶ سالمه و علاقه اصلی من برنامه‌نویسی وب به صورت Full Stack هست.
به ساخت پروژه‌های کاربردی، یادگیری تکنولوژی‌های جدید و حل مسائل برنامه‌نویسی علاقه دارم.
در کنار وب، به توسعه بازی و موبایل هم علاقه دارم و در آینده قصد دارم این حوزه‌ها را به صورت تفریحی دنبال کنم.`,
};

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  titleFa: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    titleFa: "بک‌اند",
    skills: [
      { name: "Python", level: 85, icon: "python" },
      { name: "Django", level: 80, icon: "django" },
    ],
  },
  {
    title: "Frontend",
    titleFa: "فرانت‌اند",
    skills: [
      { name: "HTML", level: 70, icon: "html" },
      { name: "CSS", level: 80, icon: "css" },
      { name: "JavaScript", level: 85, icon: "javascript" },
      { name: "React", level: 70, icon: "react" },
    ],
  },
  {
    title: "Database",
    titleFa: "پایگاه داده",
    skills: [
      { name: "PostgreSQL", level: 10, icon: "postgresql" },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Task Manager API",
    titleFa: "مدیریت وظایف",
    description: "A RESTful API for task management with authentication and CRUD operations.",
    descriptionFa: "API برای مدیریت وظایف با احراز هویت و عملیات CRUD",
    technologies: ["Python", "Django", "PostgreSQL", "REST API"],
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Portfolio Website",
    titleFa: "وبسایت پورتفولیو",
    description: "Modern developer portfolio built with Next.js and Tailwind CSS.",
    descriptionFa: "وبسایت پورتفولیو مدرن ساخته شده با Next.js و Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Weather App",
    titleFa: "اپلیکیشن آب و هوا",
    description: "Weather forecast application with real-time data from API.",
    descriptionFa: "اپلیکیشن پیش‌بینی آب و هوا با داده‌های لحظه‌ای",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    githubUrl: "#",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "۱۴۰۱",
    title: "Started Learning HTML & CSS",
    titleFa: "شروع یادگیری HTML و CSS",
    description: "Built first static web pages",
    descriptionFa: "اولین صفحات وب ایستا را ساختم",
  },
  {
    year: "۱۴۰۲",
    title: "JavaScript & Programming",
    titleFa: "جاوا اسکریپت و برنامه‌نویسی",
    description: "Learned programming fundamentals",
    descriptionFa: "مفاهیم برنامه‌نویسی را یاد گرفتم",
  },
  {
    year: "۱۴۰۲",
    title: "React & Modern Frontend",
    titleFa: "ری‌اکت و فرانت‌اند مدرن",
    description: "Started building interactive UIs",
    descriptionFa: "ساخت رابط‌های کاربری تعاملی را شروع کردم",
  },
  {
    year: "۱۴۰۳",
    title: "Python & Django",
    titleFa: "پایتون و جنگو",
    description: "Backend development with Python",
    descriptionFa: "توسعه بک‌اند با پایتون",
  },
  {
    year: "۱۴۰۳",
    title: "Full Stack Projects",
    titleFa: "پروژه‌های Full Stack",
    description: "Building complete web applications",
    descriptionFa: "ساخت اپلیکیشن‌های وب کامل",
  },
];

export const socialLinks = {
  github: "https://github.com/sudo-cat-coder",
  email: "hesam123409@gmail.com",
};
