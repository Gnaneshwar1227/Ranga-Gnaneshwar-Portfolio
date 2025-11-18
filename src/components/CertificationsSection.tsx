import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      title: "Corporate Finance",
      provider: "NPTEL",
      link: "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/18b5ab4046cc3a49266a345ff60ea0a6c6b345ad/Corporate%20Finance%20nptel.pdf",
      color: "#4A90E2",
    },
    {
      title: "Soft Skill Development",
      provider: "NPTEL",
      link: "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/18b5ab4046cc3a49266a345ff60ea0a6c6b345ad/Soft%20Skill%20Development%20nptel.pdf",
      color: "#FF7A6B",
    },
    {
      title: "Excel Basics for Data Analysis",
      provider: "Coursera",
      link: "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/18b5ab4046cc3a49266a345ff60ea0a6c6b345ad/excel%20basics%20certificate.pdf",
      color: "#4A90E2",
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
              Certifications
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

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#E9ECEF] h-full flex flex-col"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* 3D Award Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: cert.color,
                    transform: "perspective(500px) rotateX(10deg) translateZ(10px)",
                  }}
                  whileHover={{
                    transform: "perspective(500px) rotateX(-10deg) rotateY(10deg) translateZ(30px)",
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Award className="text-white" size={40} />
                </motion.div>

                {/* Certificate Title */}
                <h3
                  className="text-[#2D3748] text-center mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {cert.title}
                </h3>

                {/* Provider */}
                <p
                  className="text-center text-[#2D3748] opacity-70 mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {cert.provider}
                </p>

                {/* View Certificate Button */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-2 hover:shadow-lg transition-all"
                    style={{
                      borderColor: cert.color,
                      color: cert.color,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    View Certificate
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            className="text-[#2D3748] opacity-60 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Additional certifications: AI & Life, Employability Skills (Magic Bus India Foundation)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
