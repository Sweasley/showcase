import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ isModalOpen, data, closeModal }) {
  if (!isModalOpen || !data) return null;

  return (
    <dialog className="modal modal-open modal-bottom sm:modal-middle">
      <div className="modal-box max-w-2xl bg-base-100 p-6 shadow-2xl">
        {/* Header layout */}
        <div className="flex justify-between items-start border-b border-base-300 pb-4 mb-4">
          <div>
            <h3 className="font-bold text-2xl text-base-content">
              {data.name}
            </h3>
            <p className="text-sm text-secondary mt-1 font-medium">
              Internal Enterprise Utility
            </p>
          </div>
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-base-content/90 text-sm md:text-base">
          {/* Long Description */}
          <div>
            <h4 className="font-bold text-base text-base-content mb-1">
              Overview:
            </h4>
            <p className="leading-relaxed">{data.longDescription}</p>
          </div>

          {/* Dynamic Contributions Section */}
          {data.contributions && (
            <div>
              <h4 className="font-bold text-base text-base-content mb-1">
                Key Contributions:
              </h4>
              <ul className="list-disc list-inside space-y-1 pl-2">
                {data.contributions.map((contrib, index) => (
                  <li key={index} className="leading-relaxed">
                    {contrib}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Challenges */}
          <div>
            <h4 className="font-bold text-base text-base-content mb-1">
              Key Challenges Resolved:
            </h4>
            <ul className="list-disc list-inside space-y-1 pl-2">
              {data.challenges.map((challenge, index) => (
                <li key={index} className="leading-relaxed">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base text-base-content mb-2">
              Core Tech Specifications:
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {data.tech_stack.map((t, index) => {
                const Icon = t.logo;

                return (
                  <div key={index}>
                    <span className="badge badge-primary badge-md gap-1.5 py-3 px-3 font-medium">
                      {Icon && <Icon className="text-xs" />}
                      {t.tech_name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="modal-action border-t border-base-300 pt-4 mt-6 flex gap-2 justify-end">
          <button onClick={closeModal} className="btn btn-sm">
            Close
          </button>
        </div>
      </div>

      <div className="modal-backdrop bg-black/40" onClick={closeModal}>
        <button className="cursor-default">close</button>
      </div>
    </dialog>
  );
}
