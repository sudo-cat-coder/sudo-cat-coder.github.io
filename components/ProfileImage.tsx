"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-20 h-20",
  md: "w-32 h-32",
  lg: "w-48 h-48",
  xl: "w-64 h-64",
};

export default function ProfileImage({ size = "lg", className = "" }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-[spin_8s_linear_infinite]" />

      {/* Inner circle */}
      <div className="absolute inset-1 rounded-full bg-dark-900 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
          <User className="w-1/2 h-1/2 text-gray-500" />
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl animate-pulse" />
    </motion.div>
  );
}
