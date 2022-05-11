import React from 'react'
import './header.css'
import CTA from'./CTA'
import ME from '../../assets/Profile Photo.png'
import HeaderSocials from './HeaderSocials'
import { FaAward } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaRegFolderOpen } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  return (
    <header>
      <div className="container header_container" >
        <h5>Hello I'm</h5>
        <h1>Alex Campbell</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          {/* <img src={ME} alt="ME" /> */}
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>

        <a href= '#contact' className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header