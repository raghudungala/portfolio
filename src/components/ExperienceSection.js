import React from 'react';
import "../styles/experience.css";

const experiences = [
  {
    title: "Software Engineer",
    company: "Innominds Software Inc.",
    Roles: ["Created reusable components using React.js, reducing development time by 20% and promoting consistency across the application.",
      "Captured and processed Splunk query results in various formats, including lists, tables, and raw data, improving data analysis efficiency by 30% using Python",
      "Building functional components using React.js that are highly scalable and modular.",
      "Automated Jenkins jobs for CI/CD pipeline, reducing deployment time by 30% and increasing development productivity."],
    Duration: "Dec. 2018 - Aug. 2019"
  },
  {
    title: "Associate Software Engineer",
    company: "Innominds Software Inc.",
    Roles: ["Develop UI and other functionalities of the Playbook Integration into CRM and vice versa.",
      "Designed, coded, and performed debugging tasks to support.NET applications and architecture.", "Conducted independent analyses of databases, software platforms, and business processes for clients"],
    Duration: "Sep. 2019 - Aug. 2021"
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiences">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div className="experience" key={index}>
            <div className='year'>
              <p>{experience.Duration}</p>
            </div>
            <div className='experience-details'>
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <ul>
                {experience.Roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
