import React from 'react';
import './styles/About.css';

function About (){
    return (
        <>
        <section id='about'>
        <div className='about-container'>
            <div className='about-text'>
             <h2>About me<span className='dot'>.</span></h2>
             <p>Hi! My name is João Victor and I recently made the decision to work with web development.</p>
             <p>I have a degree in Civil Engineering but working with graphic design and programming has always been an important part of my life.</p>
             <p>I'm a developer, designer and linguist who has been building for the web in some capacity since 2001. 
             I specialise in <b>accessibility</b>, performance and usability without sacrificing creativity.</p>
             <p><a href="#skills" class="about-button text-decoration-none">Skills <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg></a></p>
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