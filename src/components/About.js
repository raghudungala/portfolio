import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id='about'>
      <div className='grid'>
        <h2>
          About
        </h2>
      </div>
      <div className='grid-container'>
        <div className='text-right'>
          <p>Hi. I'm Raghu Dungala</p>
          <h2 className='prof'> Software Engineer</h2>
        </div>
        <div>
          <p className="about-intro">I'm a software engineer, having a strong background in programming languages such as C, Python, C#, JavaScript, TypeScript, and R. Also have expertise in web development technologies like HTML, CSS, React.js, Redux, Flask, and ASP.NET. Additionally, I'm familiar with databases like MySQL and SQL and have experience with version control tools like Git and continuous integration/continuous deployment (CI/CD) pipelines using Azure Jenkins.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
