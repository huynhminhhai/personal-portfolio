import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
