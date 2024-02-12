import React from "react";
import "../styles/experience.css";
import { Tilt } from "react-tilt";
import { Timeline } from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import breastCancerLogo from "../images/Breast-cancer-logo.png";

const experiences = [
  {
    title: "Application Developer",
    company: "Texas Tech University",
    roles: [
      "Enhanced front-end performance by utilizing HTML5, Bootstrap, TypeScript, React, and Redux, resulting in a 20% reduction in page load times for CAS authentication and an improved user experience.",
      "Developed and maintained RESTful API endpoints using Python frameworks Django REST framework, allowing for launching, status retrieval, and service termination, resulting in an Average Response Time of 80 milliseconds.",
      "Managed and optimized relational databases (MySQL and PostgreSQL), improving query performance by 25% through indexing and query optimization techniques for the student portal.",
      "Designed and implemented PySpark data pipelines in the University Library to streamline data analysis and transformation, reducing processing time by 30% and providing valuable insights for resource management.",
      "Integrated Generative AI solutions into the University Library system using Python, NumPy, Pandas, and TensorFlow to offer personalized content recommendations.",
    ],
    duration: "July 2022 - Aug 2023",
  },
  {
    title: "Software Developer",
    company: "Splunk Technology",
    roles: [
      "Created reusable components using React.js, reducing development time by 20% and promoting consistency across the application.",
      "Captured and processed Splunk query results in various formats, including lists, tables, and raw data, improving data analysis efficiency by 30% using Python",
      "Building functional components using React.js that are highly scalable and modular.",
      "Automated Jenkins jobs for CI/CD pipeline, reducing deployment time by 30% and increasing development productivity.",
    ],
    duration: "Dec 2018 - Aug 2019",
  },
  {
    title: "Web Developer",
    company: "Innominds Software Inc.",
    roles: [
      "Designed and developed web pages with ReactJS, Redux, and Axios, implementing responsive and dynamic user interfaces with React Hooks and CSS frameworks like Bootstrap and Material-UI.",
      "Reduced project costs by 40% by contributing 20+ reusable UI components leveraging TypeScript, React.js.",
      "Implemented advanced authentication and authorization mechanisms using AWS IAM, ensuring data security and compliance with industry standards, leading to a 30% reduction in security vulnerabilities.",
      "Applied python unittest and unittest.mock to conduct precise unit testing, reducing post-release bugs by 40% and increasing code coverage by 25%, enhancing software reliability and maintainability.",
      "Implemented Test-Driven Development (TDD) practices to enhance software quality and development efficiency, resulting in a 30% reduction in post-release defects.",
    ],
    duration: "Sep 2019 - Aug 2021",
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <Timeline position="alternate">
        {experiences.map((data, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot className="custom-timeline-dot">
                <img
                  src={breastCancerLogo}
                  alt="breast cancer"
                  className="timeline-image"
                />
              </TimelineDot>
              {index < experiences.length - 1 && (
                <TimelineConnector
                  sx={{
                    backgroundColor: "green",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent style={{ width: "50vw" }}>
              <div className="experience-details">
                <h3 className="experience-title">{data.title}</h3>
                <p className="experience-duration">{data.duration}</p>
                <h4 className="company-name">{data.company}</h4>
              </div>
              {/* <Tilt>
                <div className="experience-details" key={index}>
                  <div className="details-inner">
                    <h4>{data.company}</h4>
                    <ul>
                      {data.roles.map((role, roleIndex) => (
                        <li key={roleIndex}>
                          <p className="role-description">{role}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt> */}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default ExperienceSection;
