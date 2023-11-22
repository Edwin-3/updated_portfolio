import React from 'react'
import { MdOutlineMail, MdWhatsapp } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'
import { AiOutlineInstagram } from 'react-icons/ai'
import './header.scss'
import heroImg from '../../assets/Headerimg.png'

const Header = () => {
  return (
    <header className='container' id='home'>
      <div className='header_container'>
        <div className='header_content'>
          <h5>UI/UX Designer</h5>
          <span className='stack'>
            <span className="--index-0"><h1>Hi, I'm Edwin</h1></span>
            <span className="--index-1"><h1>Hi, I'm Edwin</h1></span>
            <span className="--index-2"><h1>Hi, I'm Edwin</h1></span>
          </span>

          <p>A creative UI/UX Designer with a focus on crafting engaging,
            intuitive user experiences. Over 6 years of experience,
            collaborating with diverse teams to create user-centered solutions
            for diverse platforms and industries.
          </p>
          <div className='socials'>
            <div className='icon-wrapper'><a href='mailto:edwin3mutua@gmail.com'><MdOutlineMail /></a></div>
            <div className='icon-wrapper'><a href='https://api.whatsapp.com/send?phone=+254713768558'><MdWhatsapp /></a></div>
            <div className='icon-wrapper'><a href='https://www.linkedin.com/edwin' target='_blank'><LuLinkedin /></a></div>
            <div className='icon-wrapper'><a href='https://www.instagram.com/edwin' target='_blank'><AiOutlineInstagram /></a></div>
          </div>
        </div>
        <div className='header_image'>
          <img src={heroImg} alt='heroImage' />

        </div>

      </div>
    </header>
  )
}

export default Header