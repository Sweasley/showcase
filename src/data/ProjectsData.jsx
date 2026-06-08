import {
  FaPhp,
  FaGithub,
  FaExternalLinkAlt,
  FaBootstrap,
  FaTable,
  FaLaravel,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiJquery,
  SiMysql,
  SiAlpinedotjs,
  SiLivewire,
} from "react-icons/si";
import { images } from "../utils/ImportImages";

export const ProjectsData = [
  // changeover/pre prod
  {
    id: "project-a",
    name: "Line Production Management System",
    shortDescription: [
      "Developed a role-based production validation and traceability system.",
      "Automated production workflows, reducing process downtime by 80%.",
      "Improved data accuracy through multi-stage verification and approval.",
    ],
    tech_stack: [
      { tech_name: "PHP", logo: FaPhp },
      { tech_name: "jQuery", logo: SiJquery },
      { tech_name: "Bootstrap 5", logo: FaBootstrap },
      { tech_name: "MySQL", logo: SiMysql },
      { tech_name: "Data Tables", logo: FaTable },
    ],
    longDescription:
      "Designed and developed a production management system that validates production data against predefined standards before manufacturing begins. Operators submit production records through structured question-and-answer forms, Quality Control personnel verify and approve submissions, and administrators perform final reviews and data management. The system includes automated validation rules, role-based access control, audit traceability, and PDF report generation for documentation and compliance purposes. Due to NDA restrictions, source code and production screenshots cannot be shared publicly.",
    contributions: [
      "Designed the complete database architecture and application workflow.",
      "Built the entire web application from scratch.",
      "Implemented multi-level approval workflows for Operators, QC, and Administrators.",
      "Developed dynamic form validation and database verification logic.",
      "Created automated PDF generation for production reports and audit documentation.",
      "Implemented role-based authentication and authorization.",
    ],

    challenges: [
      "Designing a scalable validation system capable of handling dynamic question-and-answer workflows.",
      "Ensuring data integrity across multiple approval stages.",
      "Cleaning and restructuring legacy production processes into a fully digital workflow.",
      "Building automated validation rules while maintaining flexibility for future process changes.",
      "Generating accurate PDF reports from validated production data.",
    ],

    img: images[3],
  },
  //performance evaluation
  {
    id: "project-b",
    name: "Performance Evaluation Management System",
    shortDescription: [
      "Developed a centralized employee performance appraisal platform.",
      "Automated evaluation workflows, reminders, and reporting processes.",
      "Improved visibility of appraisal completion status across departments.",
    ],

    tech_stack: [
      { tech_name: "PHP", logo: FaPhp },
      { tech_name: "jQuery", logo: SiJquery },
      { tech_name: "Bootstrap 5", logo: FaBootstrap },
      { tech_name: "Data Tables", logo: FaTable },
    ],

    longDescription:
      "Developed a web-based performance evaluation system that streamlines employee appraisal processes across multiple departments. The platform enables supervisors to evaluate employees using configurable rating criteria, submit performance feedback, and provide additional comments for headquarters review. Features include automated email reminders, historical appraisal tracking, Excel-based bulk data management, dynamic evaluation criteria, role-based access controls, and real-time dashboards for monitoring completion rates. Due to confidentiality requirements, specific organizational details cannot be disclosed.",

    contributions: [
      "Designed and developed the entire application from scratch.",
      "Built configurable employee evaluation workflows.",
      "Implemented dynamic appraisal criteria management.",
      "Developed Excel import/export functionality for bulk user updates.",
      "Created historical performance tracking and reporting features.",
      "Integrated automated email notifications and reminder scheduling.",
      "Designed management dashboards for appraisal progress monitoring.",
      "Implemented role-based access control and confidential data handling.",
    ],

    challenges: [
      "Managing hierarchical reporting structures and superior-subordinate relationships.",
      "Designing flexible evaluation criteria without requiring code changes.",
      "Maintaining historical appraisal records while supporting evolving evaluation standards.",
      "Handling large-scale Excel imports while ensuring data integrity.",
      "Building automated reminder workflows to improve completion rates.",
      "Ensuring confidentiality and controlled access to employee performance data.",
    ],

    achievements: [
      "Digitized and automated the employee appraisal process.",
      "Reduced manual follow-ups through automated email reminders.",
      "Improved management visibility through real-time departmental dashboards.",
      "Centralized performance records and historical evaluation data.",
    ],

    img: images[4],
  },
  //emp system
  {
    id: "project-c",
    name: "Employee Skills & Certification Management System",

    shortDescription: [
      "Developed an HR-focused employee information and competency tracking system.",
      "Centralized employee skills, certifications, and qualification records.",
      "Awarded 2nd Place in an internal system development competition.",
    ],

    tech_stack: [
      { tech_name: "PHP", logo: FaPhp },
      { tech_name: "Alpine", logo: SiAlpinedotjs },
      { tech_name: "Tailwind v4", logo: SiTailwindcss },
      { tech_name: "Livewire v3", logo: SiLivewire },
      { tech_name: "Laravel 12", logo: FaLaravel },
    ],

    longDescription:
      "Developed an Employee Management System designed for Human Resources to centralize employee records, monitor workforce competencies, and track certification validity. The platform enables HR personnel to manage employee information, maintain skills inventories, monitor certification statuses, and generate reports for workforce planning and compliance requirements. The project was developed as part of a company-wide system development competition and was awarded 2nd Place for its functionality, usability, and business impact.",

    contributions: [
      "Designed and developed the complete web application from scratch.",
      "Created centralized employee profile management features.",
      "Implemented employee skills and competency tracking modules.",
      "Developed certification monitoring and record management functionality.",
      "Designed dashboards and reporting tools for HR users.",
      "Built search, filtering, and employee data management features.",
      "Designed the database architecture and business workflows.",
    ],

    challenges: [
      "Designing a scalable employee data structure capable of handling multiple skills and certifications.",
      "Managing relationships between employees, competencies, and certification records.",
      "Ensuring data accuracy and consistency across HR records.",
      "Creating intuitive dashboards for workforce visibility and reporting.",
      "Balancing usability with complex HR data requirements.",
    ],

    achievements: [
      "Awarded 2nd Place in a company-wide system development competition.",
      "Centralized workforce competency and certification records.",
      "Improved HR visibility into employee qualifications and training status.",
      "Reduced manual tracking of certifications and employee skills.",
    ],

    img: images[5],
  },
  {
    id: "project-d",
    name: "Preventive Maintenance Management System",

    shortDescription: [
      "Digitized paper-based preventive maintenance processes into a centralized web platform.",
      "Improved maintenance visibility through real-time dashboards and automated notifications.",
      "Provided audit-ready maintenance records with version-controlled checklist history.",
    ],

    tech_stack: [
      { tech_name: "PHP", logo: FaPhp },
      { tech_name: "jQuery", logo: SiJquery },
      { tech_name: "Bootstrap 5", logo: FaBootstrap },
    ],

    longDescription:
      "Developed a centralized Preventive Maintenance Management System used by maintenance teams to perform, monitor, and document equipment maintenance activities. The system replaced manual paper-based maintenance checklists with digital workflows accessible through a web application. Features include role-based access control, automated email reminders, checklist version management, historical audit records, PDF report generation, and real-time maintenance dashboards. The platform ensures maintenance traceability while preserving historical records and checklist versions for compliance and audit requirements.",

    contributions: [
      "Designed and developed the complete application from scratch.",
      "Digitized preventive maintenance checklists and workflows.",
      "Implemented role-based access control for maintenance personnel and administrators.",
      "Developed automated email notification and reminder systems.",
      "Created PDF generation for maintenance reports and documentation.",
      "Built dashboard visualizations for maintenance monitoring and completion tracking.",
      "Implemented checklist version control while preserving historical maintenance records.",
      "Designed database architecture for long-term maintenance traceability.",
    ],

    challenges: [
      "Migrating paper-based maintenance processes into a structured digital workflow.",
      "Maintaining historical maintenance records while supporting checklist revisions.",
      "Implementing version-controlled checklists without affecting existing records.",
      "Designing audit-ready data structures for compliance requirements.",
      "Providing real-time maintenance visibility through dashboards and reporting.",
    ],

    achievements: [
      "Eliminated paper-based preventive maintenance documentation.",
      "Improved maintenance tracking and completion monitoring.",
      "Established audit-ready maintenance history and traceability.",
      "Reduced manual follow-ups through automated notification workflows.",
      "Centralized maintenance documentation across departments.",
    ],

    img: images[6],
  },
  //supp eval
  {
    id: "project-e",
    name: "Supplier Evaluation & Approval Management System",

    shortDescription: [
      "Digitized supplier evaluation and approval workflows.",
      "Replaced paper-based approvals with automated routing and notifications.",
      "Improved visibility and traceability of supplier assessments.",
    ],

    tech_stack: [
      { tech_name: "PHP", logo: FaPhp },
      { tech_name: "jQuery", logo: SiJquery },
      { tech_name: "Bootstrap 5", logo: FaBootstrap },
    ],

    longDescription:
      "Developed a web-based supplier evaluation platform that streamlined the assessment and approval process for external suppliers. The system replaced manual Google Forms, printed documents, physical signatures, and scanned approvals with a centralized digital workflow. Features include configurable evaluation forms, multi-level approval routing, automated email notifications, historical evaluation records, status tracking, and management reporting.",

    contributions: [
      "Developed the entire application from scratch.",
      "Designed supplier evaluation workflows and approval routing.",
      "Implemented role-based access control.",
      "Integrated automated email notifications upon approval completion.",
      "Developed status tracking and monitoring dashboards.",
      "Created historical records management for supplier evaluations.",
      "Designed database architecture and reporting modules.",
    ],

    challenges: [
      "Migrating manual approval processes into a digital workflow.",
      "Designing flexible approval routing for different stakeholders.",
      "Maintaining historical supplier evaluation records.",
      "Providing visibility into approval status and bottlenecks.",
      "Ensuring process traceability and accountability.",
    ],

    achievements: [
      "Eliminated paper-based supplier evaluation processes.",
      "Reduced approval turnaround times through workflow automation.",
      "Improved visibility of supplier assessment progress.",
      "Centralized supplier evaluation documentation.",
    ],
    img: images[7],
  },
];
