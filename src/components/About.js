import React from "react";
import "../styles/about.css";
import personalImage from "../images/raghu.JPEG";

const About = () => {
  return (
    <section id="about">
      <div className="grid">
        <h2>About</h2>
      </div>
      <div className="grid-container">
        <div className="text-right">
        <div className="circular-image">
        <img src={personalImage} alt="Personal" className="user-pic" />
      </div>
        </div>
        <div>
          <p className="about-intro">
            I'm a skilled software developer knowledgeable in JavaScript,
            Python, and a passion for frontend development and UI design. I'm a
            quick learner and enjoy collaborating closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. I have expertise in React.js framework and I am
            committed to staying up-to-date with the latest technologies and
            best practices in the field. I am a bilingual individual fluent in
            both English and Vietnamese. I have a background in the medical
            field, but have transitioned into tech industry to express my
            creativity through programming. I have a passion for coding and
            climbing, and enjoy pursuing activities that challenge both mentally
            and physically. With my diverse skill set and interests, I can
            contribute to a wide range of projects and teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
