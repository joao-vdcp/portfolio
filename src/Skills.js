import './styles/Skills.css';

function Skills (){

    return (
        <>
        <section id='skills' className='reveal'>
            <div className='skills-container'>

                <h2>Skills<span className='dot'>.</span></h2>

                <div className='frontend'>
                <p>Front-end</p>
                    <div className='frontend-grid'>
                    <img src='images/html.png' alt='html logo'/>
                    <img src='images/css.png' alt='css logo'/>
                    <img src='images/bootstrap.png' alt='bootstrap logo'/>
                    <img className="row-3" src='images/javascript.png' alt='javascript logo'/>
                    <img className="row-3" src='images/react.png' alt='react logo'/>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Bootstrap</span>
                    <span className="row-4 javascript">Javascript</span>
                    <span className="row-4 react">React</span>
                    </div>                             
                </div>

                <div className='backend'>
                <p >Back-end</p>
                    <div className='backend-grid'>
                    <img src='images/nodejs.png' alt='nodejs logo'/>
                    <img src='images/mongodb.png' alt='mongodb logo'/>
                    <img src='images/sql.png' alt='sql logo'/>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>SQL</span>
                    </div>
                </div>

                <div className='other'>
                <p>Other</p>
                    <div className='other-grid'>
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