import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

export function MyTimeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const hobbies = [
    {
      name: "Cricket",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Cricket Bat */}
          <rect x="30" y="15" width="8" height="60" rx="2" fill="#8B4513" />
          <ellipse cx="34" cy="80" rx="6" ry="8" fill="#8B4513" />
          {/* Cricket Ball */}
          <circle cx="60" cy="40" r="12" fill="#FF6B6B" />
          <path d="M 52 35 Q 60 40 52 45" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 68 35 Q 60 40 68 45" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      color: "#4A90E2",
    },
    {
      name: "Photography",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Camera Body */}
          <rect x="20" y="35" width="60" height="40" rx="6" fill="#2D3748" />
          {/* Lens */}
          <circle cx="50" cy="55" r="15" fill="#4A90E2" />
          <circle cx="50" cy="55" r="10" fill="#87CEEB" opacity="0.5" />
          {/* Viewfinder */}
          <rect x="35" y="25" width="30" height="8" rx="2" fill="#2D3748" />
          {/* Flash */}
          <rect x="70" y="30" width="8" height="6" rx="1" fill="#FFD700" />
        </svg>
      ),
      color: "#FF7A6B",
    },
    {
      name: "Cooking",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Chef Hat */}
          <ellipse cx="50" cy="30" rx="25" ry="12" fill="white" stroke="#2D3748" strokeWidth="2" />
          <rect x="30" y="28" width="40" height="20" fill="white" stroke="#2D3748" strokeWidth="2" />
          {/* Pan */}
          <ellipse cx="50" cy="65" rx="22" ry="8" fill="#2D3748" />
          <rect x="72" y="62" width="15" height="4" rx="2" fill="#2D3748" />
          {/* Steam */}
          <path d="M 40 50 Q 38 45 40 40" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 50 48 Q 48 43 50 38" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 60 50 Q 58 45 60 40" stroke="#4A90E2" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      ),
      color: "#4A90E2",
    },
    {
      name: "Watching Movies",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Film Clapperboard */}
          <rect x="20" y="40" width="60" height="40" rx="3" fill="#2D3748" />
          <rect x="20" y="25" width="60" height="15" rx="3" fill="white" />
          {/* Stripes */}
          <rect x="20" y="25" width="12" height="15" fill="#FF7A6B" />
          <rect x="38" y="25" width="12" height="15" fill="#FF7A6B" />
          <rect x="56" y="25" width="12" height="15" fill="#FF7A6B" />
          {/* Play Symbol */}
          <polygon points="45,55 45,70 60,62.5" fill="#4A90E2" />
        </svg>
      ),
      color: "#FF7A6B",
    },
    {
      name: "Graphics Design",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Pen Tool Cursor */}
          <path d="M 40 30 L 45 60 L 55 50 L 70 65 L 65 70 L 50 55 L 60 45 Z" fill="#2D3748" />
          {/* Bezier Curves */}
          <circle cx="35" cy="35" r="4" fill="#4A90E2" />
          <circle cx="65" cy="35" r="4" fill="#FF7A6B" />
          <circle cx="50" cy="70" r="4" fill="#4A90E2" />
          <path
            d="M 35 35 Q 50 25 65 35 T 50 70"
            stroke="#4A90E2"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      ),
      color: "#4A90E2",
    },
    {
      name: "Family & Friends",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          {/* Two People */}
          {/* Person 1 */}
          <circle cx="38" cy="35" r="10" fill="#4A90E2" />
          <path d="M 25 60 Q 25 45 38 45 Q 51 45 51 60 L 51 75 L 25 75 Z" fill="#4A90E2" />
          {/* Person 2 */}
          <circle cx="62" cy="40" r="10" fill="#FF7A6B" />
          <path d="M 49 65 Q 49 50 62 50 Q 75 50 75 65 L 75 80 L 49 80 Z" fill="#FF7A6B" />
          {/* Heart */}
          <path
            d="M 50 30 C 50 26 46 23 42 23 C 38 23 35 26 35 30 C 35 26 32 23 28 23 C 24 23 20 26 20 30 C 20 38 35 45 35 45 C 35 45 50 38 50 30 Z"
            fill="#FF6B6B"
            opacity="0.7"
            transform="translate(30, -5) scale(0.6)"
          />
        </svg>
      ),
      color: "#FF7A6B",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            className="relative inline-block mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="relative z-10 text-[#2D3748] px-6 py-2">
              My Time Beyond Finance
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#FF7A6B]/20 to-[#4A90E2]/20 rounded-2xl"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF7A6B] rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "60%" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p
            className="text-[#2D3748] opacity-80 mt-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What I love to do when I'm not crunching numbers
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center"
            >
              {/* 3D Circle Container */}
              <motion.div
                className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center border-4 cursor-pointer overflow-hidden"
                style={{
                  borderColor: hobby.color,
                  transform: "perspective(500px)",
                }}
                animate={{
                  rotateY: hoveredIndex === index ? 360 : 0,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  boxShadow: `0 20px 40px ${hobby.color}40`,
                }}
              >
                <motion.div
                  animate={{
                    rotateY: hoveredIndex === index ? -360 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                >
                  {hobby.icon}
                </motion.div>
              </motion.div>

              {/* Hobby Name */}
              <motion.p
                className="mt-4 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: hobby.color,
                }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.7,
                  y: hoveredIndex === index ? -5 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {hobby.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
