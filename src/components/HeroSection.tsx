import { motion } from "motion/react";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2] to-[#FF7A6B] rounded-full opacity-30 blur-2xl animate-pulse"></div>

              {/* Profile Picture Container (Reduced Size + Circle) */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-[#4A90E2]/20 to-[#FF7A6B]/20">
                  <ImageWithFallback
                    src="src/profile-image.jpg"
                    alt="Ranga Gnaneshwar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#4A90E2] opacity-20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "scale(1.1)" }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {/* Name - Separate Line */}
              <h1
                className="text-[#4A90E2] text-5xl md:text-6xl font-extrabold leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ranga Gnaneshwar
              </h1>
              
              {/* Title - Reduced Size */}
              <h2
                className="text-[#2D3748] text-2xl md:text-3xl font-semibold leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ambitious & Analytical Finance Professional
              </h2>
            </motion.div>

            <motion.p
              className="text-[#2D3748] opacity-80 text-xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              MBA in Finance | Strategic Thinker | Data-Driven Results
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                className="bg-[#FF7A6B] hover:bg-[#FF6B5B] text-white px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() =>
                  window.open(
                    "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/f58a160223b497759637f605613b829fea86bc84/Gnaneshwar%20res.pdf",
                    "_blank"
                  )
                }
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-6 transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() =>
                  window.open(
                    "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls",
                    "_blank"
                  )
                }
              >
                <FolderOpen className="mr-2" />
                View My Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
