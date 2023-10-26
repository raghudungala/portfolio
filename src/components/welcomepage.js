import React from "react";
import "../styles/welcomepage.css";
import personalImage from "../images/raghu.JPEG";
// import award from "../images/award.png"
// import star from "../images/star.png"

const WelcomePage = () => {
  return (
    <section id="welcomepage">
      <div className="circular-image">
        <img src={personalImage} alt="Personal" className="user-pic"></img>
      </div>
      <h1 id="intro">
        <span role="img" aria-label="hi">
          👋
        </span>
        Hello I'm Raghu Dungala
      </h1>
      <h2>Coding with passion, building with excellence.</h2>
    </section>
  );
};

export default WelcomePage;
