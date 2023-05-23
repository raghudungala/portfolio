import React from 'react';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo"><Link to="welcomepage" smooth={true} duration={500}><h3>Raghu</h3></Link></li>
          <li><Link to="about" smooth={true} offset={-70} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} offset={-50} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} offset={-50} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} offset={20} duration={500}>Experience</Link></li>
        </ul>
      </nav>
      <div className="side-ribbon">
      <ul className="ribbon-links">
        <li className='git'>
          <a href="https://github.com/raghudungala" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
          </a>
        </li>
        <li className='linkedin'>
          <a href="https://www.linkedin.com/in/raghu-dungala-0354/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='mail'>
          <a href="mailto:draghu222@gmail.com">
            <HiOutlineMail size={30}/>
          </a>
        </li>
      </ul>
    </div>
    </header>
  );  
}

export default Header;
