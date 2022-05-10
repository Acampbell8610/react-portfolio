import React from 'react'
import './about.css'
import ME from '../../assets/Profile Photo1.png'
import {FaAward} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image" />
      </div>
        </div>

        <div className = "about__content">
      
        <p>Full-stack developer with a background of security technologies for school systems. Currently earning a certificate in full stack development from University of Central Florida’s Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js,OOP, SQL, Express.js, Handlebars.js  and responsive web design. I have a passion for solving problems and creating organized code for future development. With each project, my aim is to become a more proficient developer. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences.</p>
        <br />
        <a href="#contact" className = 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About