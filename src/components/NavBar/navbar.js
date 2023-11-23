import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import { FaBars } from 'react-icons/fa';
import Popup from '../Popups/popup';
import { MdOutlineMail, MdWhatsapp } from 'react-icons/md'
import { LuLinkedin } from 'react-icons/lu'
import { AiOutlineInstagram } from 'react-icons/ai'
import contactImg from '../../assets/contact.svg'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navLinksRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">Edwin Mutua</div>
            <div ref={navLinksRef} className={isOpen ? "nav-links active" : "nav-links"}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="btn" onClick={() => setShowPopup(true)}>Contact Me</button>
            <div className="hamburger" onClick={handleToggle}>
                <FaBars />
            </div>
            <Popup trigger={showPopup} setTrigger={setShowPopup}>

                <div className='form_row'>
                    <div className='form_img'>
                        <img src={contactImg} alt='contact us Img'/>
                        <div className='socials'>
            <div className='icon-wrapper'><a href='mailto:edwin3mutua@gmail.com'><MdOutlineMail /></a></div>
            <div className='icon-wrapper'><a href='https://api.whatsapp.com/send?phone=+254713768558'><MdWhatsapp /></a></div>
            <div className='icon-wrapper'><a href='https://www.linkedin.com/edwin' target='_blank' rel="noreferrer"><LuLinkedin /></a></div>
            <div className='icon-wrapper'><a href='https://www.instagram.com/edwin' target='_blank' rel="noreferrer"><AiOutlineInstagram /></a></div>
          </div>
                    </div>
                    <div className='form_content'>
                        <h1> Let's Talk 👇🏾</h1>
                        <form>
                            <input type="text" name="name" placeholder="Full Name" /><br />
                            <input type="email" name="email" placeholder="Email Address" /><br />
                            <textarea rows={4} placeholder="Message..."></textarea>
                            <input type='submit' value="Submit" />
                        </form>

                    </div>

                </div>
            </Popup>
        </nav>
    );
};

export default Nav;
