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
          <div className='icon-wrapper'><a href='mailto:edwin3mutua@gmail.com'><MdOutlineMail /></a></div>
          <div className='icon-wrapper'><a href='https://api.whatsapp.com/send?phone=+254713768558'><MdWhatsapp /></a></div>
          <div className='icon-wrapper'><a href='https://www.linkedin.com/edwin' target='_blank'><LuLinkedin /></a></div>
          <div className='icon-wrapper'><a href='https://www.instagram.com/edwin' target='_blank'><AiOutlineInstagram /></a></div>
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