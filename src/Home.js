import React from 'react'
import HomeContent from './HomeContent';
import TechStackContent from './TechStackContent';
import ProjectsContent from './ProjectsContent';
import './Home.css';

export default function Home() {
  return (
    
      <div className="Container">
      <section className="child">
        <div className="home">
        <HomeContent/>
        </div>
      </section>
      <section className="child">
      <div className="techstackdiv">
        <TechStackContent/>
      </div>
      </section>
      <section className='child'>
          <ProjectsContent/>

      </section>
      </div> 
    
  )
}
