import React from "react";
import { SkillsData } from "../data/SkillsData";

export default function Skills() {
  const skills = SkillsData || [];

  return (
    <div className="bg-base-100 min-h-20 w-full flex flex-col items-center p-6 md:p-12" data-aos="fade-up">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-base-content mb-8 text-center">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl w-full mx-auto">
        {skills.map((skill) => {
          const Icon = skill.logo;
          return (
            <div key={skill.name} className="shrink-0">
              <span className="badge badge-dash badge-primary hover:badge-warning py-3 px-5 text-sm md:text-base font-medium whitespace-nowrap gap-2 h-auto transition-transform duration-200 hover:scale-110 cursor-default">
                {Icon && <Icon className="text-xl shrink-0" />}
                <span>{skill.name}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
