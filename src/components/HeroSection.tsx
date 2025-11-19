import { motion } from "motion/react";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Side - Profile Picture (Double Size) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2] to-[#FF7A6B] rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-66 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-[#4A90E2]/20 to-[#FF7A6B]/20">
                  <ImageWithFallback
                    src="/profile-image.jpg"
                    alt="Ranga Gnaneshwar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left space-y-12 order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Name - Large and Dominant */}
              <h1
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: '#4A90E2',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem'
                }}
              >
                Ranga Gnaneshwar
              </h1>
              
              {/* Title - Medium Size with FIXED line height */}
              <h2
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 'clamp(1rem, 1.5vw, 1.8rem)',
                  fontWeight: 500,
                  lineHeight: 1.3, // Fixed from 0.1 to prevent overlap
                  color: '#2D3748',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  marginBottom: '0.5rem',
                  marginLeft: '1.5rem'
                }}
              >
                Ambitious & Analytical Finance Professional
              </h2>
            </motion.div>

            {/* Subtitle - Smaller Size */}
            <motion.p
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.9rem, 1.3vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#2D3748',
                textTransform: 'uppercase',
                paddingLeft: '0.3rem',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                marginBottom: '2rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              MBA IN FINANCE | STRATEGIC THINKER | DATA-DRIVEN RESULTS
            </motion.p>

            {/* Buttons with proper spacing */}
            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '1.5rem 2.5rem',
                  textTransform: 'uppercase'
                }}
                className="bg-[#FF7A6B] hover:bg-[#FF6B5B] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls/blob/f58a160223b497759637f605613b829fea86bc84/Gnaneshwar%20res.pdf",
                    "_blank"
                  )
                }
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '1.5rem 2.5rem',
                  textTransform: 'uppercase',
                  borderWidth: '1px'
                }}
                className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={() =>
                  window.open(
                    "https://github.com/Gnaneshwar1227/Business-Growth-study-on-local-Tea-stalls",
                    "_blank"
                  )
                }
              >
                <FolderOpen className="mr-3 h-5 w-5" />
                View My Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
