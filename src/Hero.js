import React from 'react';
import Navbar from './Navbar';
import './styles/Hero.css';

function Hero (){
    return (
        <>
        <section id='hero'>
        <Navbar/>
            <div className='hero-container'>
                <div className='hero-main'>
                <p>João Pereira — Junior Full Stack Web Developer</p>
                <h1>I'm a brazilian full stack web developer looking to find my first opportunity.</h1>
                <p><a href="#about" class="hero-button text-decoration-none">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></a></p>
                </div>
            </div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/juicy-fish" title="juicy_fish">juicy_fish</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </section>
    </>
    ) 
}

export default Hero;