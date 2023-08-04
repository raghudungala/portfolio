import React from 'react';
import "../styles/project.css"
import pythonicon from "../images/python_original_logo_icon_146381.ico"
import tensorflow from "../images/tensorflow_logo_icon_168671.ico"
import sumo from "../images/kclogo.jpg"
const project_details = [
  {
    "title": "Deep Reinforcement Learning (DRL)-Based Traffic Signal Controllers",
    "description": "The project focuses on the development and implementation of Deep Reinforcement Learning (DRL)-based Traffic Signal Controllers using the SUMO traffic simulator. Traffic signal controllers play a crucial role in managing traffic flow and reducing congestion on road networks. By leveraging DRL techniques, the project aims to create intelligent traffic signal controllers that can aprojectpt and optimize signal timings based on real-time traffic conditions.",
    "gitlink": "https://github.com/raghudungala/Machine-Learning/tree/main/Traffic%20Signal%20Control",
    "is_ml_project": true
  },
  {
    "title": "Breast Cancer Detection Using Tensorflow",
    "description": "Breast cancer is one of the most common types of cancer that affects women worldwide. Early detection of breast cancer plays a crucial role in increasing the chances of successful treatment and improving patient outcomes. With advancements in machine learning and deep learning techniques, it is possible to develop automated systems for breast cancer detection using tools like TensorFlow.",
    "gitlink": "https://github.com/raghudungala/Machine-Learning/tree/main/Breast%20Cancer%20Detection",
    "is_ml_project": true
  },
  {
    "title": " Role-Based Question Bank Management System using Python Flask, SQLite, and SQLAlchemy",
    "description": "Implemented role management using a Python framework called Flask, along with SQLite as the project_detailsbase and SQLAlchemy as the ORM tool. The system allows authors to create and manage important questions and their solutions based on user roles. Authors have the ability to add, edit, and delete questions and solutions within the application. The role management aspect ensures that only authorized users can access and modify specific content.",
    "gitlink": "https://github.com/raghudungala/Flask-Project",
    "is_ml_project": false
  }
]
const ProjectSection = () => {
  return (
    <section id="projects">
      <h2>Works</h2>
      <div id="projectDetails" style={{ display: 'grid', gridTemplateColumns: `repeat(${project_details.length}, minmax(0, 1fr))` }}>
        {project_details.map((project, index) => (
          <div className='proj' key={index}>
            <h3>{project.title}</h3>
            <span>{project.description}</span>
            {project.is_ml_project ? (
              <div className='icons'>
                <img src={pythonicon} alt="python"></img>
                <img src={tensorflow} alt="tensorflow"></img>
                <img src={sumo} alt="sumo"></img>
              </div>) : null}
            <a href={project.gitlink}><button>Git link</button></a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
