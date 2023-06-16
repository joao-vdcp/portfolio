import React from 'react';
import './styles/About.css';
import Button from './Button'

function About (){
    return (
        <>
        <section id='about'>
        <div className='about-container'>
            <div className='about-text'>
             <h2>About me<span className='dot'>.</span></h2>
             <p>Hi! My name is João Victor and I recently made the decision to work with web development.</p>
             <p>I have a degree in Civil Engineering but working with graphic design and programming has always been an important part of my life.</p>
             <p>For that reason, I've decided to follow my dream and become the best developer I can be, and this is just the first step. This website and all the other
             projects displayed bellow have really helped cement my knowledge.</p>
             <p>That's why I think it's time to start working!</p>
             <Button link="#skills" text="Check out my skills"/>
            </div>
            <div className='about-image'>
                <img src='images/profile-pic.png' alt='Joao'></img>
            </div>
        </div>
        </section> 
    </>
    ) 
}

export default About;