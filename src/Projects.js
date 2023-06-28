import React from 'react';
import './styles/Projects.css';
import Card from './Card'
import cards from './cards'

function Projects(){
    return (
        <>
        <section id='projects' className='reveal'>
            <div className='projects-container'>
            <h2 className='projects-header'>Projects<span>.</span></h2>

            <div className='cards-grid'>
                {cards.map(cardItem =>
    (
    <Card 
    key={cardItem.key}
    title={cardItem.title} 
    description={cardItem.description}
    img={cardItem.img}
    badges={cardItem.badges.map(badgeItem => (
        <span class="badge">{badgeItem}</span>
    ))}
    demolink={cardItem.demolink}
    github={cardItem.github}
    />
    ))}
            </div>
            </div>
        </section>

        </>
    )
}

export default Projects;