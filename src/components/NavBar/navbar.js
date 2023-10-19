import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='container nav-bar'>
            <a href='/' className='logo'>
                <h2>Edwin Mutua</h2>
            </a>
            <nav>
                <a href='#about' >About</a>
                <a href='#work' >Work</a>
                <a href='#contact'>Contact</a>
                <a href='#resume'>Resume</a>
            </nav>
            <button className='btn'>Let's Talk</button>

        </div>
    )
}

export default Navbar