import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ProjectsData } from "../data/ProjectsData";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-base-200 min-h-screen w-full flex flex-col items-center p-6 md:p-12">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-base-content mb-2 text-center">
        Projects
      </h1>
      <span className="text-sm text-base-content/60 mb-8 text-center max-w-md block italic">
        Disclaimer: Most of my projects are internal tools used by my former
        company.
      </span>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl w-full mx-auto ">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="hover-3d"
            onClick={() => handleOpenModal(project)}
            role="button"
          >
            <div className="card bg-base-100 shadow-xl overflow-hidden h-full cursor-pointer hover:border-primary/30 border border-transparent  duration-200 text-left">
              <figure>
                <img
                  src={project.img}
                  alt="Project Thumbnail"
                  className="w-full h-48 object-cover"
                />
              </figure>

              <div className="card-body p-5">
                <h2 className="card-title text-xl font-bold">{project.name}</h2>

                <div className="text-sm text-base-content/80 my-2">
                  <ul className="list-disc list-inside space-y-1">
                    {project.shortDescription.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="divider my-2"></div>

                {/* Tech Stack Display */}
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50 block mb-2">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.map((t, idx) => {
                      const Icon = t.logo;
                      return (
                        <div
                          key={idx}
                          className="badge badge-outline text-xs gap-1 py-2.5"
                        >
                          {Icon && <Icon className="text-sm" />}{" "}
                          {/* Render directly */}
                          {t.tech_name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>

      {/* Reusable Modal Component */}
      <ProjectModal
        isModalOpen={isModalOpen}
        data={selectedProject}
        closeModal={handleCloseModal}
      />
    </div>
  );
}
