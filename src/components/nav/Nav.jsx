import {React, useState} from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience"onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><FiBookOpen/></a>
      <a href="#services"onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav