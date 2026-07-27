"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { socialLinks } from "@/lib/data";

const contactMethods = [
  {
    icon: Github,
    label: "GitHub",
    value: socialLinks.github,
    href: socialLinks.github,
  },
  {
    icon: Mail,
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     value: socialLinks.linkedin,
//     href: socialLinks.linkedin,
//   },
  ];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <SectionTitle title="ارتباط با من" subtitle="خوشحال می‌شم باهاتون در ارتباط باشم" />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 text-center"
          >
            <div className="mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-6"
              >
                <Send className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-gray-400 text-lg">
                اگه سوالی داری یا می‌خوای همکاری کنی، خوشحال می‌شم ازت بشنوم!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-6 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
                >
                  <method.icon className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium text-white">{method.label}</span>
                  <span className="text-sm text-gray-500 truncate max-w-full">
                    {method.value.replace("https://", "").replace("mailto:", "")}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
