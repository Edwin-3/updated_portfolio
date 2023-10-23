import React from 'react'
import './footer.scss'
import { MdOutlineMail, MdWhatsapp } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'
import { AiOutlineInstagram } from 'react-icons/ai'
import '../Header/header.scss'


const Footer = () => {
  return (
    <section className='container footer' id='contact'>
      <div className='title'>
        <p>Have a custom design? </p>
        <p>let’s talk?</p>
        <div className='socials'>
          <div className='icon-wrapper'><MdOutlineMail /></div>
          <div className='icon-wrapper'><MdWhatsapp /></div>
          <div className='icon-wrapper'><LuLinkedin /></div>
          <div className='icon-wrapper'><AiOutlineInstagram /></div>
        </div>  
      </div>
      <div className='logo'>
        <h2>Edwin Mutua</h2>
      </div>
      <div className='nav'>
        <a>About</a>
        <a>Work</a>
        <a>Resume</a>
        <a>Contact</a>
      </div>
    </section>
  )
}

export default Footer