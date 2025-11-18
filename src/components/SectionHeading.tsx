import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  isInView: boolean;
}

export function SectionHeading({ children, isInView }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16 relative">
      <motion.h2
        className="relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <span className="relative z-10 text-[#2D3748] px-6 py-2">
          {children}
        </span>
        {/* Highlighted Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#FF7A6B]/20 to-[#4A90E2]/20 rounded-2xl"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
        {/* Bottom Accent Line */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF7A6B] rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "60%" } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.h2>
    </div>
  );
}
