import { motion } from "motion/react";

export function FloatingShapes() {
  const shapes = [
    { type: "circle", color: "#4A90E2", opacity: 0.1, size: 300, top: "10%", left: "5%", duration: 20 },
    { type: "circle", color: "#FF7A6B", opacity: 0.08, size: 200, top: "30%", right: "10%", duration: 25 },
    { type: "square", color: "#4A90E2", opacity: 0.06, size: 150, top: "60%", left: "15%", duration: 30 },
    { type: "circle", color: "#FF7A6B", opacity: 0.09, size: 250, bottom: "20%", right: "5%", duration: 22 },
    { type: "square", color: "#4A90E2", opacity: 0.07, size: 180, bottom: "10%", left: "50%", duration: 28 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.type === "circle" ? "rounded-full" : "rounded-3xl rotate-12"}`}
          style={{
            backgroundColor: shape.color,
            opacity: shape.opacity,
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
