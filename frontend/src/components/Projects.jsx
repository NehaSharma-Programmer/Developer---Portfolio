

import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "TaskFlow",
      stack: "MERN Stack",
      description:
        "Mini Project Management System with authentication, project management, task CRUD operations, Kanban board and admin dashboard.",
      features: [
        "User Authentication",
        "Role Based Access",
        "Kanban Board",
        "Admin Dashboard",
        "Task Management",
      ],
      github: "https://github.com/NehaSharma-Programmer/Taskflow1",
      live: "https://taskflow1-five.vercel.app/",
    },

    {
      title: "MechMate",
      stack: "MERN Stack",
      description:
        "Automobile Service Management System allowing customers to book and track vehicle servicing with AI chatbot support.",
      features: [
        "Vehicle Service Booking",
        "Service Tracking",
        "Customer Management",
        "AI Chatbot",
      ],
      github: "https://github.com/NehaSharma-Programmer/MechMate",
      live: "https://mech-mate.vercel.app",
    },

    {
      title: "Job Portal",
      stack: "MERN Stack",
      description:
        "Full-stack job portal connecting job seekers and employers with job listings, profiles and application tracking.",
      features: [
        "Job Listings",
        "Candidate Profiles",
        "Resume Upload",
        "Employer Job Posting",
      ],
      github: "#",
      live: "#",
    },

    {
      title: "Labour Management System",
      stack: "MERN Stack",
      description:
        "Platform connecting labourers with employers through worker profiles and job listings.",
      features: [
        "Worker Profiles",
        "Job Listings",
        "Assignment Tracking",
      ],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>

              <span className="project-stack">{project.stack}</span>

              <p>{project.description}</p>

              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="project-buttons">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

