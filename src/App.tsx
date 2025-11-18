import { HeroSection } from "./components/HeroSection";
import { SummarySection } from "./components/SummarySection";
import { ExperienceEducationSection } from "./components/ExperienceEducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { MyTimeSection } from "./components/MyTimeSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingShapes } from "./components/FloatingShapes";

export default function App() {
  return (
    <div className="relative bg-[#F8F9FA] overflow-hidden">
      <FloatingShapes />
      <HeroSection />
      <SummarySection />
      <ExperienceEducationSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <MyTimeSection />
      <ContactSection />
    </div>
  );
}
