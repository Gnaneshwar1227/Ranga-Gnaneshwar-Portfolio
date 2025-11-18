import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8247255865",
      href: "tel:+918247255865",
      color: "#4A90E2",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gnaneshwarranga27@gmail.com",
      href: "mailto:gnaneshwarranga27@gmail.com",
      color: "#FF7A6B",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gnaneshwar-ranga",
      href: "http://www.linkedin.com/in/gnaneshwar-ranga",
      color: "#4A90E2",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-[#4A90E2] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's Connect
          </h2>
          <p
            className="text-[#2D3748] opacity-80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I'm always open to discussing new opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.icon === Linkedin ? "_blank" : undefined}
              rel={contact.icon === Linkedin ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all border border-[#E9ECEF]"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* 3D Icon */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: contact.color,
                    transform: "perspective(500px) rotateX(10deg) translateZ(10px)",
                  }}
                  whileHover={{
                    transform: "perspective(500px) rotateX(-10deg) translateZ(30px)",
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <contact.icon className="text-white" size={28} />
                </motion.div>

                <h4
                  className="text-[#2D3748] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {contact.label}
                </h4>
                <p
                  className="text-[#2D3748] opacity-70 text-sm break-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            className="bg-[#FF7A6B] hover:bg-[#FF6B5B] text-white px-12 py-6 shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={() => window.location.href = "mailto:gnaneshwarranga27@gmail.com"}
          >
            <Mail className="mr-2" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-[#E9ECEF]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            className="text-[#2D3748] opacity-60 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Ranga Gnaneshwar. Crafted with passion and precision.
          </p>
         
        </motion.div>
      </div>
    </section>
  );
}
