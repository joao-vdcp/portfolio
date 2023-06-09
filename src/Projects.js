import React from 'react';
import './styles/Projects.css';
import Card from './Card'

function Projects(){
    return (
        <>
        <section id='projects'>
            <div className='projects-container'>
            <h2 className='projects-header'>Projects<span>.</span></h2>

            <div className='cards-grid'>
                <Card />
                <Card />
            </div>
            </div>
        </section>

        </>
    )
}

export default Projects;