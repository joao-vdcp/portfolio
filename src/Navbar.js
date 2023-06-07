import React from 'react';
import "./styles/Navbar.css";

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='grid'>
                    <li className='link name'><a href="/">João</a></li>
                    <li className='link'></li>
                    <li className='link main about'><a href="#about">About</a></li>
                    <li className='link main'><a href="#skills">Skills</a></li>
                    <li className='link main projects'><a href="#projects">Projects</a></li>
                    <li className='link'></li>
                    <li className='link main'><a href="#contact">Contact</a></li>
                </ul>

            </nav>
        </>
    )

}

export default Navbar;