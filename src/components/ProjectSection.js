import React from 'react';
import "../styles/project.css"
import pythonicon from "../images/python_original_logo_icon_146381.ico"
import tensorflow from "../images/tensorflow_logo_icon_168671.ico"
import sumo from "../images/kclogo.jpg"

const ProjectSection = () => {

  const projet1_href = "https://github.com/raghudungala/Machine-Learning/tree/main/Breast%20Cancer%20Detection"
  const projet2_href = "https://github.com/raghudungala/Machine-Learning/tree/main/Traffic%20Signal%20Control"
  return (
    <section id="projects">
      <h2>Works</h2>
      <div id="projectDetails">
        <div className='proj'>
          <h3>Deep Reinforcement Learning (DRL)-Based Traffic Signal Controllers</h3>
          <span>The project focuses on the development and implementation of Deep Reinforcement Learning (DRL)-based Traffic Signal Controllers using the SUMO traffic simulator. Traffic signal controllers play a crucial role in managing traffic flow and reducing congestion on road networks. By leveraging DRL techniques, the project aims to create intelligent traffic signal controllers that can adapt and optimize signal timings based on real-time traffic conditions.</span>
          <div className='icons'>
            <img src={pythonicon} alt="python"></img>
            <img src={tensorflow} alt="tensorflow"></img>
            <img src={sumo} alt="sumo"></img>
          </div>
          <a href={projet2_href}><button>Git link</button></a>

        </div>
        <div className='proj'>
          <h3>Breast Cancer Detection Using Tensorflow</h3>
          <span>Breast cancer is one of the most common types of cancer that affects women worldwide. Early detection of breast cancer plays a crucial role in increasing the chances of successful treatment and improving patient outcomes. With advancements in machine learning and deep learning techniques, it is possible to develop automated systems for breast cancer detection using tools like TensorFlow.</span>

          <div className='icons'>
            <img src={pythonicon} alt="python"></img>
            <img src={tensorflow} alt="tensorflow"></img>
            {/* <img src={javascripticon}></img> */}
          </div>
          <a href={projet1_href}><button>Git link</button></a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
