import {React, useState} from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {FiBookOpen} from 'react-icons/fi'
import {RiTaskFill} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><RiTaskFill/></a>
      <a href="#portfolio"onClick={() => setActiveNav('#portfolio')}className={activeNav === '#services' ? 'active' : ''}><FiBookOpen/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav