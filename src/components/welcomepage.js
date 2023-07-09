import React from "react";
import "../styles/welcomepage.css"
import personalImage from "../images/raghu.JPEG"
import award from "../images/award.png"
import star from "../images/star.png"

const WelcomePage = () => {
  return (
    <section id="welcomepage">
      <div class="container1">
        <div class="box">
          <img src={award} alt="award" style={{ width: "100%" }}></img>
        </div>
        <div class="box">
          <img src={star} alt="award" style={{ width: "100%" }}></img>
        </div>
        <div class="box">
          <img src={award} alt="award" style={{ width: "100%" }}></img>
        </div>
        <div class="box">
          <img src={star} alt="award" style={{ width: "100%" }}></img>
        </div>
      </div>
      <div className="circular-image">
        <img src={personalImage} alt="Personal" className="user-pic"></img>
      </div>
      <h1 id="intro">
        <span className="dropping-letter">H</span>
        <span className="dropping-letter">e</span>
        <span className="dropping-letter">l</span>
        <span className="dropping-letter">l</span>
        <span className="dropping-letter">o</span>
        <span className="dropping-letter">&nbsp;</span>
        <span className="dropping-letter">I</span>
        <span className="dropping-letter">'</span>
        <span className="dropping-letter">m</span>
        <span className="dropping-letter">&nbsp;</span>
        <span className="dropping-letter">R</span>
        <span className="dropping-letter">a</span>
        <span className="dropping-letter">g</span>
        <span className="dropping-letter">h</span>
        <span className="dropping-letter">u</span>
        <span className="dropping-letter">&nbsp;</span>
        <span className="dropping-letter">D</span>
        <span className="dropping-letter">u</span>
        <span className="dropping-letter">n</span>
        <span className="dropping-letter">g</span>
        <span className="dropping-letter">a</span>
        <span className="dropping-letter">l</span>
        <span className="dropping-letter">a</span>
      </h1>
      <h2>Coding with passion, building with excellence.</h2>

    </section>)

}

export default WelcomePage;