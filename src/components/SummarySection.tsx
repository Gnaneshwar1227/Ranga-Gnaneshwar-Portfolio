import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, TrendingUp, Target, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function SummarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Award,
      value: "8.54",
      label: "MBA CGPA",
      color: "#4A90E2",
    },
    {
      icon: TrendingUp,
      value: "4+",
      label: "Key Projects",
      color: "#FF7A6B",
    },
    {
      icon: Target,
      value: "6+",
      label: "Skills Mastered",
      color: "#4A90E2",
    },
    {
      icon: Users,
      value: "2+",
      label: "Months Experience",
      color: "#FF7A6B",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="relative inline-block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="relative z-10 text-[#2D3748]">About Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 to-[#FF7A6B]/20 rounded-lg -inset-2" />
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90E2] to-[#FF7A6B] rounded-full" />
              </h2>
            </div>
            <p
              className="text-[#2D3748] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Ambitious and analytical finance professional seeking to build a strong career in the 
              financial industry by applying strategic thinking, technical expertise, and leadership 
              skills. Passionate about continuous learning, effective collaboration, and delivering 
              impactful results in dynamic business environments.
            </p>
          </motion.div>

          {/* Professional Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-[#E9ECEF] text-center"
                  style={{
                    transform: "perspective(1000px)",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${stat.color}15`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon style={{ color: stat.color }} size={24} />
                  </motion.div>

                  {/* Value */}
                  <motion.h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: stat.color,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.h3>

                  {/* Label */}
                  <p
                    className="text-[#2D3748] opacity-70 text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
