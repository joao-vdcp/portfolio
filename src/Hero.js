import React from 'react';
import Navbar from './Navbar';
import './styles/Hero.css';
import Button from './Button';
import './styles/Button.css';

function Hero (){
    return (
        <>
        <section id='hero'>
        <Navbar/>
            <div className='hero-container'>
                <div className='hero-main'>
                <p>João Pereira — Junior Full Stack Web Developer</p>
                <h1>I'm a brazilian full stack web developer looking to find my first opportunity.</h1>
                <Button link="#about" text="Learn More"/>
                
                </div>
            </div>
        </section>
    </>
    ) 
}

export default Hero;