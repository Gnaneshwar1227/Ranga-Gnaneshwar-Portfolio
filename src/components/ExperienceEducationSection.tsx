import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ExperienceEducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const workExperience = [
    {
      title: "Finance & Accounting Intern",
      company: "V Santhosh & Associates CA Firm",
      location: "Hyderabad, Telangana",
      date: "May 2025 - Jun 2025",
      points: [
        "Assisted in the end-to-end preparation of financial statements, applying principles of financial accounting to ensure accuracy and compliance.",
        "Systematically managed financial data entry, recording bank statements, purchase bills, and sales bills using Tally ERP 9 to maintain organized records.",
        "Gained practical exposure to corporate taxation processes, supporting senior accountants with compliance-related tasks.",
      ],
      link: "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/18b5ab4046cc3a49266a345ff60ea0a6c6b345ad/internship.pdf",
    },
  ];

  const education = [
    {
      degree: "MBA (Finance)",
      institution: "Sreenidhi Institute of Science and Technology",
      grade: "8.54 CGPA",
      year: "2026",
    },
    {
      degree: "BSC",
      institution: "Vishwa Vikas Degree College",
      grade: "8.27 CGPA",
      year: "2024",
    },
    {
      degree: "Class XII",
      institution: "Vishra Junior Kalasala",
      grade: "807",
      year: "2020",
    },
    {
      degree: "Class X",
      institution: "Sharada High School",
      grade: "8.7 CGPA",
      year: "2017",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 bg-white/50">
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
              Experience & Education
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

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A90E2] via-[#FF7A6B] to-[#4A90E2] opacity-30 transform -translate-x-1/2" />

          {/* Work Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#4A90E2] rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-[#2D3748]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Work Experience
              </h3>
            </div>

            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* 3D Card */}
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-[#E9ECEF]"
                  style={{
                    transform: "perspective(1000px) rotateY(2deg)",
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#2D3748]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {work.title}
                    </h4>
                    <span
                      className="text-sm text-[#4A90E2] bg-[#4A90E2]/10 px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {work.date}
                    </span>
                  </div>
                  <p className="text-[#2D3748] opacity-80 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {work.company} • {work.location}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {work.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-[#2D3748] text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#FF7A6B]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    onClick={() => window.open(work.link, "_blank")}
                  >
                    View Certificate
                    <ExternalLink className="ml-2" size={14} />
                  </Button>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block absolute -right-6 top-6 w-4 h-4 bg-[#4A90E2] rounded-full border-4 border-white shadow-lg transform translate-x-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF7A6B] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-[#2D3748]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* 3D Card */}
                <div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-[#E9ECEF]"
                  style={{
                    transform: "perspective(1000px) rotateY(-2deg)",
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#2D3748]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {edu.degree}
                    </h4>
                    <span
                      className="text-sm text-[#FF7A6B] bg-[#FF7A6B]/10 px-3 py-1 rounded-full"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-[#2D3748] opacity-80 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {edu.institution}
                  </p>
                  <p className="text-[#4A90E2]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {edu.grade}
                  </p>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block absolute -left-6 top-6 w-4 h-4 bg-[#FF7A6B] rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
