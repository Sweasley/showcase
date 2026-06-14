import React from "react";

export default function EducationExperience() {
  return (
    <div className="bg-base-200 min-h-screen w-full p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center mb-12">
          Experience & Education
        </h1>

        {/* EXPERIENCE */}

        <section className="mb-12" data-aos="fade-right">
          <h2 className="text-2xl font-bold mb-6 text-primary">Experiences</h2>
          <div className="grid gap-6">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="card-title text-xl">IT Automation Engineer</h3>
                  <span className="badge badge-primary">2024 - Present</span>
                </div>

                <p className="text-secondary font-semibold">Siix Phils Inc.</p>

                <div className="divider my-2"></div>

                <ul className="list-disc ml-5 space-y-1 text-sm text-base-content/80">
                  <li>
                    Developed and implemented web-based systems that digitized
                    manual paper-based processes within the company
                  </li>
                  <li>
                    Automated operational workflows, reducing processing time
                    and improving overall efficiency.
                  </li>
                  <li>
                    Built internal tools and monitoring systems that supported
                    audit compliance and operational tracking.
                  </li>
                  <li>
                    Provided technical support and assisted users by resolving
                    system related concerns and issues.
                  </li>
                  <li>
                    Collaborated with different departments to identify workflow
                    bottlenecks and develop process improvement solutions.
                  </li>
                  <li>
                    Maintained and enhanced internal company applications using
                    PHP, Laravel, CodeIgniter, JavaScript, and MySQL,
                    PostgreSQL, Apache
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12" data-aos="fade-right">
          <div className="grid gap-6">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="card-title text-xl">SGA 2nd Placer</h3>
                  <span className="badge badge-primary">2026</span>
                </div>

                <p className="text-secondary font-semibold">
                  SIIX EMS PHILIPPINES.
                </p>

                <div className="divider my-2"></div>

                <ul className="list-disc ml-5 space-y-1 text-sm text-base-content/80">
                  <li>Created an employee management system from scratch</li>
                  <li>
                    Improved data retrieval from 50 seconds to 8 seconds or %84
                    improvement
                  </li>
                  <li>Presented in top management during the competition</li>
                  <li>
                    Improved HR visibility into employee qualifications and
                    training status.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12" data-aos="fade-right">
          <div className="grid gap-6">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="card-title text-xl">Content Loader Intern</h3>
                  <span className="badge badge-primary">2024</span>
                </div>

                <p className="text-secondary font-semibold">
                  Essilor Shared Services Philippines Inc.
                </p>

                <div className="divider my-2"></div>

                <ul className="list-disc ml-5 space-y-1 text-sm text-base-content/80">
                  <li>Attended daily scrum meetings.</li>
                  <li>Used Jira for project management.</li>
                  <li>
                    Utilized CoreMedia for Content Management System (CMS).
                  </li>
                  <li>Learned Agile methodology.</li>
                  <li>Managed time effectively within 2-week sprints.</li>
                  <li>Accurately replicated websites from a main source.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section data-aos="fade-left">
          <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>

          <div className="card bg-base-100 shadow-xl border border-base-300">
            <div className="card-body">
              <div className="flex justify-between items-start gap-2">
                <h3 className="card-title text-xl">
                  Bachelor of Science in Information Systems
                </h3>
                <span className="badge badge-primary">2020 - 2024</span>
              </div>

              <p className="text-secondary font-semibold">NU Laguna</p>

              <div className="divider my-2"></div>

              <ul className="list-disc ml-5 space-y-1 text-sm text-base-content/80">
                <li>
                  Specialized in integrating technology with business processes.
                </li>
                <li>
                  Completed a thesis on customer forecasting and segregation
                  systems.
                </li>
                <li>Contributed to frontend development using React.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
