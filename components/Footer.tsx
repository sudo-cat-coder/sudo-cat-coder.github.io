"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm"
        >
          <p className="flex items-center gap-2">
            ساخته شده با <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> توسط حسام مطهری
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
