'use client'
import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import Toggle from "./components/sub/Toggle";
import Loading from "./components/sub/Loading";

export default function Home() {
  const [id, setId] = useState('')
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!compsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if (intersecting) {
            setId(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const compsArr = Array.from(compsRef.current.children) as Element[]
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })

    return () => {
      compsArr.forEach((comp) => observer.unobserve(comp));
    };

  }, [])

  return (
    <>
      <Loading />
      <Toggle>
        <div>
          <Navbar id={id} />
          <div ref={compsRef}>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
          </div>
        </div>
      </Toggle>
    </>
  );
}
