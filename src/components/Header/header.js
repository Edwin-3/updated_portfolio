import React from 'react'
import { MdOutlineMail, MdWhatsapp } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'
import { AiOutlineInstagram } from 'react-icons/ai'
import './header.scss'
import heroImg from '../../assets/Headerimg.png'

const Header = () => {
  return (
    <header>
      <div className='header_container'>
        <div className='header_content'>
          <h5>UI/UX Designer</h5>
          <h1>Hi, I'm Edwin</h1>
          <p>A creative UI/UX Designer with a focus on crafting engaging,
            intuitive user experiences. Over 8 years of experience,
            collaborating with diverse teams to create user-centered solutions
            for diverse platforms and industries.
          </p>
          <div className='socials'>
            <div className='icon-wrapper'><MdOutlineMail /></div>
            <div className='icon-wrapper'><MdWhatsapp /></div>
            <div className='icon-wrapper'><LuLinkedin /></div>
            <div className='icon-wrapper'><AiOutlineInstagram /></div>
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