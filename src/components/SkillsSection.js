import React from 'react';
import '../styles/skills.css';

const SkillsSection = () => {
  const skillsData = {
    "Programming": ["C", "Python", "C#", "JavaScript", "TypeScript", "R language"],
    "Web Design": ["HTML", "CSS", "React.js", "Redux", "Flask", "ASP.NET"],
    'Scripting Languages': ["YAML", "Bash", "Shell", "JSON"],
    "Databases": ["MySQL", "SQL"],
    'Source Code Management': ["GIT", "Azure"],
    'CI/CD Tools': ["Jenkins"],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div id="skills-grid">
        <div className="skills-container">
          {Object.entries(skillsData).map(([skillName, skillDetails], index) => (
            
            <div className="skill" key={index}>
              <div className="skill-name">{skillName}</div>
              <div className='skill-row'>
                {skillDetails.map((skill,i)=>(
                  <button className="skill-type" key={i}>
                  {skill}
                </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
