import React from "react";
import "../styles/skills.css";
import Tilt from "react-parallax-tilt";
import {
  PythonOriginalWordmarkIcon,
  JavascriptOriginalIcon,
  TypescriptOriginalIcon,
  Html5OriginalWordmarkIcon,
  Css3OriginalWordmarkIcon,
  ReactOriginalWordmarkIcon,
  ReduxOriginalIcon,
  FlaskOriginalWordmarkIcon,
  DjangoOriginalIcon,
  GitOriginalWordmarkIcon,
  CsharpOriginalIcon,
  MysqlOriginalWordmarkIcon,
  PostgresqlOriginalWordmarkIcon,
  BashOriginalIcon,
  JavaOriginalWordmarkIcon,
  AngularjsOriginalWordmarkIcon,
  NextjsOriginalWordmarkIcon,
  BootstrapPlainWordmarkIcon,
  AmazonwebservicesOriginalWordmarkIcon,
  TensorflowOriginalWordmarkIcon,
  PandasOriginalWordmarkIcon,
  NumpyOriginalWordmarkIcon,
  NodejsPlainWordmarkIcon,
  AzureOriginalWordmarkIcon,
  JenkinsOriginalIcon,
  DockerOriginalWordmarkIcon,
  KubernetesPlainWordmarkIcon,
  BitbucketOriginalWordmarkIcon,
  GithubOriginalWordmarkIcon,
  MicrosoftsqlserverPlainWordmarkIcon,
} from "react-devicons";

const SkillsSection = () => {
  const skillsData = {
    Programming: [
      PythonOriginalWordmarkIcon,
      JavaOriginalWordmarkIcon,
      BashOriginalIcon,
      CsharpOriginalIcon,
      JavascriptOriginalIcon,
    ],
    "Web Design": [
      Html5OriginalWordmarkIcon,
      Css3OriginalWordmarkIcon,
      ReactOriginalWordmarkIcon,
      ReduxOriginalIcon,
      AngularjsOriginalWordmarkIcon,
      NextjsOriginalWordmarkIcon,
      BootstrapPlainWordmarkIcon,
      FlaskOriginalWordmarkIcon,
      DjangoOriginalIcon,
      NodejsPlainWordmarkIcon,
      TypescriptOriginalIcon,
    ],
    Database: [
      PostgresqlOriginalWordmarkIcon,
      MysqlOriginalWordmarkIcon,
      MicrosoftsqlserverPlainWordmarkIcon,
    ],
    "Machine Learning": [
      TensorflowOriginalWordmarkIcon,
      PandasOriginalWordmarkIcon,
      NumpyOriginalWordmarkIcon,
    ],
    Cloud: [AmazonwebservicesOriginalWordmarkIcon, AzureOriginalWordmarkIcon],
    Tools: [
      JenkinsOriginalIcon,
      DockerOriginalWordmarkIcon,
      KubernetesPlainWordmarkIcon,
      BitbucketOriginalWordmarkIcon,
      GithubOriginalWordmarkIcon,
      GitOriginalWordmarkIcon,
    ],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div id="skills-grid">
        <div className="skills-container">
          {Object.entries(skillsData).map(
            ([skillName, skillDetails], index) => (
              <Tilt
                key={index}
                className="tilt skill"
                perspective={200}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
              >
                <div className="skill-circle">
                  <span className="skill-name">{skillName}</span>
                  <Tilt className="icons-circle">
                    {skillDetails.map((SkillIcon, index) => (
                      <i key={index} className="skill-icon">
                        <SkillIcon size={40} />
                      </i>
                    ))}
                  </Tilt>
                </div>
              </Tilt>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
