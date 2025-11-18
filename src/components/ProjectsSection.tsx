import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Smartphone, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "User Interface Design using Figma",
      date: "Jan 2024",
      description:
        "Designed an interactive and user-friendly interface using Figma, showcasing creativity and structured design thinking. Focused on enhancing user experience through effective layout planning, visual balance, and logical flow.",
      icon: Smartphone,
      color: "#4A90E2",
      gradient: "from-[#4A90E2]/20 to-[#4A90E2]/5",
      link: "https://www.figma.com/design/osPMp5VE1gm2TfgqCpA6b8/-FIRST-PROJECT?node-id=0-1&t=VsJjWW41RQ8mafAK-1",
    },
    {
      title: "Business Growth Study on Local Tea Sellers",
      date: "May 2024",
      description:
        "Conducted surveys and analyzed data with a team of 4 to interpret business models and growth patterns, developed a standardized questionnaire for efficient data collection and actionable insights, enabling identification of key factors driving sales and customer engagement.",
      icon: TrendingUp,
      color: "#FF7A6B",
      gradient: "from-[#FF7A6B]/20 to-[#FF7A6B]/5",
      link: "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/18b5ab4046cc3a49266a345ff60ea0a6c6b345ad/EDT_PROJECT_Final%5B2%5D%20%20finished%201.pdf",
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 bg-white/50">
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
              Featured Projects
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

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="group"
            >
              <div
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-[#E9ECEF]"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* 3D Mockup Header */}
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {/* Floating Icon Animation */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      y: [0, -15, 0],
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl"
                      style={{
                        backgroundColor: project.color,
                        transform: "perspective(500px) rotateX(10deg)",
                      }}
                    >
                      <project.icon className="text-white" size={64} />
                    </div>
                  </motion.div>

                  {/* 3D Grid Background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern
                          id={`grid-${index}`}
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke={project.color}
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                    </svg>
                  </div>

                  {/* Decorative Elements */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-8 right-8 w-16 h-20 bg-white rounded-lg shadow-lg opacity-20"></div>
                      <div className="absolute bottom-12 left-12 w-12 h-16 bg-white rounded-lg shadow-lg opacity-20"></div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-12 left-8 w-20 h-4 bg-white rounded-full shadow-lg opacity-30"></div>
                      <div className="absolute bottom-16 right-16 w-16 h-4 bg-white rounded-full shadow-lg opacity-30"></div>
                      <div className="absolute top-20 right-12 w-12 h-4 bg-white rounded-full shadow-lg opacity-30"></div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className="text-[#2D3748] flex-1"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="text-sm px-3 py-1 rounded-full ml-4 whitespace-nowrap"
                      style={{
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {project.date}
                    </span>
                  </div>
                  <p
                    className="text-[#2D3748] opacity-80 leading-relaxed mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 hover:shadow-lg transition-all"
                    style={{
                      borderColor: project.color,
                      color: project.color,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
