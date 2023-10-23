import React, { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import { FaBars } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
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
            <button className="btn">Contact Me</button>
            <div className="hamburger" onClick={handleToggle}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Nav;
