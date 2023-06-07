import React, { useState} from 'react';
import './styles/Skills.css';
import SkillsDropDown from './SkillsDropDown';

function Skills (){

    const [isClicked, setClick] = useState(false);

    function handleClick (id) {
        setClick(!isClicked);
    }


    return (
        <>
        <section id='skills'>
            <div className='skills-container'>

                <h2>Skills<span className='dot'>.</span></h2>

                <div className='frontend'>
                    <SkillsDropDown onClick={handleClick} skill="Front-end"/>
                    <div style={{ display: isClicked ? "grid" : "none"}} className='frontend-grid'>
                    <img src='images/html.png' alt='html logo'/>
                    <img src='images/css.png' alt='css logo'/>
                    <img src='images/bootstrap.png' alt='bootstrap logo'/>
                    <img src='images/javascript.png' alt='javascript logo'/>
                    <img src='images/react.png' alt='react logo'/>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span>Javascript</span>
                    <span>React</span>
                    </div>                             
                </div>

                <div className='backend'>
                    <SkillsDropDown onClick={handleClick} skill="Back-end"/>
                    <div style={{ display: isClicked ? "grid" : "none"}} className='backend-grid'>
                    <img src='images/nodejs.png' alt='nodejs logo'/>
                    <img src='images/mongodb.png' alt='mongodb logo'/>
                    <img src='images/sql.png' alt='sql logo'/>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>SQL</span>
                    </div>
                </div>

                <div className='other'>
                    <SkillsDropDown onClick={handleClick} skill="Other"/>
                    <div style={{ display: isClicked ? "grid" : "none"}} className='other-grid'>
                    <img src='images/git.png' alt='git logo'/>
                    <img src='images/vscode.png' alt='vscode logo'/>
                    <span>Git</span>
                    <span>VS Code</span>

                    </div>
                    

                </div>

                
                

                
            </div>
        </section>
    </>
    ) 
}

export default Skills;