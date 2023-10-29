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

  const nameWithSpaces = addSpaces("Raghu");

  return (
    <section id="welcomepage">
      <div className="circular-image">
        <img src={personalImage} alt="Personal" className="user-pic" />
      </div>
      <h1 id="intro">
        {/* <span role="img" aria-label="hi"> */}
        👋
        {/* </span> */}
        I'm &nbsp;
        {nameWithSpaces}
        <span style={{ "--i": 13 }}>.</span>
        <span style={{ "--i": 14 }}>.</span>
        <span style={{ "--i": 15 }}>.</span>
      </h1>
      <h2 style={{ marginTop: "20px" }}>
        Coding with passion, building with excellence.
      </h2>
    </section>
  );
};

export default WelcomePage;
