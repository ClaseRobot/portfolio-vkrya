import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import '../styles/home.css'

export const Home = () => {

  return (
    <div className="home">
      <div className="about">
        <h1>Hola, soy Nicolás</h1>
        <div className="prompt">
          <p>Programador frontend apasionado por el aprendizaje y la mejora continua.</p>
        </div>
        <div className="social-links">
          <FaLinkedin className="socialIcon" size={40} onClick={() => window.open('https://www.linkedin.com/in/nicolascaruso/')}/>
          <MdEmail className="socialIcon" size={40} onClick={() => window.open("mailto:nico.caruso1992@outlook.com")}/>
          <FaGithub className="socialIcon" size={40} onClick={() => window.open('https://github.com/Valkyries12')}/>
        </div>
      </div>
      <div className="skills">
        <div className="skills-container">
          <h2> Skills</h2>
          <ul className="list">
            <li className="item">
              <h3> Front-End</h3>
              <p>
                Javascript, ReactJS,  Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI
              </p>
            </li>
            <li className="item">
              <h3>Back-End</h3>
              <p> SQL </p>
            </li>
            <li className="item">
              <h3>Lenguajes</h3>
              <p>JavaScript, C, HTML, CSS</p>
            </li>
            <li className="item">
              <h3>Idioma</h3>
              <p>Inglés (intermedio), Ruso (básico)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}