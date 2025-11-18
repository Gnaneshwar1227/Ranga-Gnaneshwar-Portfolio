import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  BarChart3,
  FileSpreadsheet,
  Palette,
  Calculator,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technicalSkills = [
    {
      category: "Data & Statistical Analysis",
      skills: ["SPSS", "MS Excel (Basic)"],
      icon: BarChart3,
      color: "#4A90E2",
    },
    {
      category: "Design & Presentation",
      skills: ["Figma", "Canva"],
      icon: Palette,
      color: "#FF7A6B",
    },
    {
      category: "Accounting & ERP",
      skills: ["Tally ERP 9"],
      icon: Calculator,
      color: "#4A90E2",
    },
  ];

  const interpersonalSkills = [
    {
      skill: "Communication",
      description: "Effective written and verbal communication",
      icon: MessageSquare,
    },
    {
      skill: "Time Management",
      description: "Prioritization, Task management",
      icon: Clock,
    },
    {
      skill: "Teamwork",
      description: "Collaboration, Problem-solving",
      icon: Users,
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            className="relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="relative z-10 text-[#2D3748] px-6 py-2">
              Skills & Expertise
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
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3
            className="text-[#2D3748] mb-8 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border border-[#E9ECEF]"
                  style={{
                    transform: "perspective(1000px)",
                  }}
                >
                  {/* 3D Icon Container */}
                  <motion.div
                    className="w-20 h-20 mb-6 mx-auto rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: skillGroup.color,
                      transform: "perspective(500px) rotateX(10deg) rotateY(-10deg)",
                    }}
                    whileHover={{
                      transform: "perspective(500px) rotateX(-10deg) rotateY(10deg)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skillGroup.icon className="text-white" size={36} />
                  </motion.div>

                  <h4
                    className="text-[#2D3748] text-center mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {skillGroup.category}
                  </h4>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{
                          backgroundColor: `${skillGroup.color}15`,
                          color: skillGroup.color,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interpersonal Skills */}
        <div>
          <h3
            className="text-[#2D3748] mb-8 text-center"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Interpersonal Skills
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {interpersonalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#4A90E2]/10 to-[#FF7A6B]/10 rounded-2xl p-8 text-center hover:shadow-xl transition-all border border-[#E9ECEF]">
                  {/* 3D Icon */}
                  <motion.div
                    className="w-16 h-16 mb-4 mx-auto bg-white rounded-xl flex items-center justify-center shadow-md"
                    style={{
                      transform: "perspective(500px) translateZ(20px)",
                    }}
                    whileHover={{
                      transform: "perspective(500px) translateZ(40px) rotateZ(5deg)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon className="text-[#4A90E2]" size={28} />
                  </motion.div>

                  <h4
                    className="text-[#2D3748] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {skill.skill}
                  </h4>
                  <p
                    className="text-[#2D3748] opacity-70 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
