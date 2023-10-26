import React from "react";
import "../styles/project.css";
import { FaGithub } from "react-icons/fa";
import breastCancerLogo from "../../src/images/Breast-cancer-logo.png";
import QbankLogo from "../../src/images/Question Bank logo.png";
import trafficControl from "../../src/images/Traffic-Control-logo.png";
import { Tilt } from "react-tilt";

const projectDetails = [
  {
    title: "Deep Reinforcement Learning (DRL)-Based Traffic Signal Controllers",
    description:
      "Developed DRL-based Traffic Signal Controllers using the SUMO traffic simulator to optimize traffic flow and reduce congestion.",
    gitLink:
      "https://github.com/raghudungala/Machine-Learning/tree/main/Traffic%20Signal%20Control",
    skills: ["Python", "Pandas", "TensorFlow"],
    logoPath: trafficControl,
  },
  {
    title: "Breast Cancer Detection Using TensorFlow",
    description:
      "Utilized machine learning with TensorFlow to automate early breast cancer detection, improving treatment outcomes.",
    gitLink:
      "https://github.com/raghudungala/Machine-Learning/tree/main/Breast%20Cancer%20Detection",
    skills: ["Python", "Pandas", "TensorFlow"],
    logoPath: breastCancerLogo,
  },
  {
    title: "Role-Based Question Bank Management System",
    description:
      "Developed Flask, SQLite, and SQLAlchemy to manage questions and solutions based on user roles, ensuring authorized access and modifications.",
    gitLink: "https://github.com/raghudungala/Flask-Project",
    skills: ["Python", "Flask", "React"],
    logoPath: QbankLogo,
  },
];

const SkillTag = ({ skill, isLast }) => (
  <span>
    #{skill}
    {!isLast && ", "}
  </span>
);

const ProjectSection = () => (
  <section id="projects">
    <h2>Works</h2>
    <div
      id="projectDetails"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${projectDetails.length}, minmax(0, 1fr)`,
      }}
    >
      {projectDetails.map((project, index) => (
        <Tilt className="proj tilt" key={index} perspective={200} tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <img src={project.logoPath} alt="img"></img>
          <h3>{project.title}</h3>
          <span style={{ opacity: 0.5 }}>{project.description}</span>
          <span>
            {project.skills.map((skill, index) => (
              <SkillTag
                key={index}
                skill={skill}
                isLast={index === project.skills.length - 1}
              />
            ))}
          </span>
          <a href={project.gitLink}>
            <FaGithub size={30} />
          </a>
        </Tilt>
      ))}
    </div>
  </section>
);

export default ProjectSection;
