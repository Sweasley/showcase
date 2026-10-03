import React from "react";
import { SkillsData } from "../data/SkillsData";

export default function Skills() {
  const skills = SkillsData || [];
  
  // Categorize skills based on name
  const softSkillNames = [
    "Communication Skills",
    "Project Management",
    "Time Management Skills",
    "Problem Solving Skills",
    "Team Collaboration",
    "Written Communication Skills"
  ];

  const technicalSkills = skills.filter(skill => !softSkillNames.includes(skill.name));
  const softSkills = skills.filter(skill => softSkillNames.includes(skill.name));

  // Duplicate skills arrays an even number of times to ensure smooth infinite scrolling
  // Soft skills are duplicated more times because there are fewer of them, ensuring the container is wide enough
  const duplicatedTechSkills = [...technicalSkills, ...technicalSkills, ...technicalSkills, ...technicalSkills];
  const duplicatedSoftSkills = [
    ...softSkills, ...softSkills, ...softSkills, ...softSkills, 
    ...softSkills, ...softSkills, ...softSkills, ...softSkills
  ];

  return (
    <div className="bg-base-100 min-h-20 w-full flex flex-col items-center py-16 overflow-hidden" data-aos="fade-up">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-base-content mb-12 text-center">
        Skills
      </h1>

      <div className="w-full relative max-w-[100vw] overflow-hidden flex flex-col gap-6">
        {/* Gradient fades for the edges to blend into background */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none"></div>
        
        {/* Technical Skills Marquee (Row 1) */}
        <div className="animate-marquee gap-4 flex py-2">
          {duplicatedTechSkills.map((skill, index) => {
            const Icon = skill.logo;
            return (
              <div key={`tech-${index}`} className="shrink-0">
                <span className="badge badge-outline border-primary/30 bg-base-100 hover:border-primary hover:bg-primary/10 py-6 px-6 text-sm md:text-base font-medium whitespace-nowrap gap-3 h-auto transition-colors duration-200 cursor-default">
                  {Icon && <Icon className="text-2xl shrink-0 text-primary" />}
                  <span>{skill.name}</span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Marquee (Row 2, opposite direction) */}
        <div className="animate-marquee-reverse gap-4 flex py-2">
          {duplicatedSoftSkills.map((skill, index) => {
            const Icon = skill.logo;
            return (
              <div key={`soft-${index}`} className="shrink-0">
                <span className="badge badge-outline border-secondary/30 bg-base-100 hover:border-secondary hover:bg-secondary/10 py-6 px-6 text-sm md:text-base font-medium whitespace-nowrap gap-3 h-auto transition-colors duration-200 cursor-default">
                  {Icon && <Icon className="text-2xl shrink-0 text-secondary" />}
                  <span>{skill.name}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
