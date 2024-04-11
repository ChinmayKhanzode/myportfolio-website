import React from 'react'
import './TechStackContent.css';

export default function TechStackContent() {
  return (
    <div className='content'>
      <h1>My Tech Stacks</h1>
      <p>Technologies I have been working on recently...</p>

      
    
 <div className="grid">
    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/html-5--v1.png" alt="HTML5"/>
      <h3>HTML5</h3>
    </div>
    <div className="card-tech-tech">
      <img src="https://img.icons8.com/color/144/000000/css3.png" alt="CSS3"/>
      <h3>CSS3</h3>
      </div>
    
      <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/react-native.png" alt="React"/>
      <h3>React</h3>
    </div>
    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/mongodb.png" alt="MongoDB"/>
      <h3>MongoDB</h3>
    </div>
    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/nodejs.png" alt="NodeJS"/>
      <h3>NodeJS</h3>
    </div>
    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/git.png" alt="Git"/>
      <h3>Git</h3>
      </div>
    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/javascript.png" alt="JavaScript"/>
      <h3>JavaScript</h3>
      </div>
      <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/firebase.png" alt="Firebase"/>
      <h3>Firebase</h3>
    </div>

    <div className="card-tech">
      <img src="https://img.icons8.com/color/144/000000/figma--v1.png" alt="Figma"/>
      <h3>Figma</h3>
      </div>
  
    
    </div>
  </div>
  )
}
