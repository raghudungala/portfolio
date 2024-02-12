import React from "react";
import "../styles/welcomepage.css";
import personalImage from "../images/raghu.JPEG";

const WelcomePage = () => {
  const addSpaces = (text) => {
    return text.split("").map((char, index) =>
      char !== " " ? (
        <span style={{ "--i": index }} key={index}>
          {char}
        </span>
      ) : (
        <>&nbsp;</>
      )
    );
  };

  const nameWithSpaces = addSpaces("Raghu...");

  return (
    <section id="welcome_page" style={{ backgroundImage: { personalImage } }}>
      <div className="name">
        <h1 id="intro">
          {/* <span role="img" aria-label="hi"> */}
          👋
          {/* </span> */}
          I'm &nbsp;
          {nameWithSpaces}
        </h1>
        <h2>Coding with passion, building with excellence.</h2>
      </div>
    </section>
  );
};

export default WelcomePage;
