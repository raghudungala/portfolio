import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "../styles/header.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = () => {
    setNav(!nav);
  };
  return (
    <header>
      <nav className="main-navigation">
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              className="logo nav_button"
              onClick={handleClose}
              activeClass="active"
              to="welcomepage"
              smooth={true}
              duration={500}
            >
              Raghu
            </Link>
          </li>
          <li>
            <Link
              className="nav_button"
              onClick={handleClose}
              activeClass="active"
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav_button"
              onClick={handleClose}
              activeClass="active"
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav_button"
              onClick={handleClose}
              activeClass="active"
              to="projects"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav_button"
              onClick={handleClose}
              activeClass="active"
              to="experience-section"
              smooth={true}
              offset={-50}
              duration={500}
            >
              Experience
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars style={{ color: "#ffffff" }} size={20} />
          )}
        </div>
      </nav>
      <div className="side-ribbon">
        <ul className="ribbon-links">
          <li className="git">
            <a
              href="https://github.com/raghudungala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/raghu-dungala-0354/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="mail">
            <a href="mailto:draghu222@gmail.com">
              <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
