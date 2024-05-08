import React from 'react'
import Navbar from './Navbar'
import './Aboutme.css'

export default function Aboutme() {
  return (
    <>
    <Navbar/>
    <div className="abtcontent">
      <h2>About Me</h2>
      <p>My name is Chinmay Khanzode. I am a student of B.Tech in Computer Science and Engineering. 
        I am a Web Developer and I have a good knowledge of HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, 
        MongoDB, and Git. I am a quick learner and I am always ready to learn new technologies. 
        I am a hardworking person and I always try to give my best in every work.</p>

      <h2>Work Experieance</h2>
      <div className="work-card">
        <div className="job">
        <h4 className='title'>Web Developer Intern</h4>
        <div className="type">Internship</div>
        
        </div>
        
        <div className="company">
        <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVR4nO2WwQ6AIAxD+f+frhcPxigELG6UvoSDMzF5ssJKMesB0goHaiKjWOQr7NYIazWoiczCIqw/dq/3PrfqdORFWFgk645MH3nwU0ZkREaBRSbvCOu74cevjEgvcEbUMgKLJMsIC1kROCMNPGuVzYdGqIwoUBGRaS0ZEfge2b21WMiKIDoj11rt3TYivcAiJ26tbBl5opaRN8IzsqwIkq8mMiKmBHIAGcKdfwldIgoAAAAASUVORK5CYII="/>
        <div className="name">⠀Birla Cellulose, Kharach</div>
        <div className="duration">
        <div className="start">(Current) May 2024 - June 2024</div>
        </div>
        
        </div>
        <hr/>
      </div>
      
      
      
    <h2>
      Coursework
    </h2>
    <ul>
    <li>
        <a href="https://www.udemy.com/certificate/UC-cea80de5-d563-4f23-8610-ada9bb4a2fef/" target="_blank">Flutter & Dart - The Complete Guide [2024 Edition]</a>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/1HNrRMNsrMAJrnDVdzHQhfMVm76GJxk_L/view" target="_blank">Joy of Computing using Python -NPTEL</a>
      </li>
    </ul>
        
    </div>

    </>
  )
}
