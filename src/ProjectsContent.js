import React from 'react'
import './ProjectsContent.css';


export default function ProjectsContent() {
  return (
    <div className='qq' style={{ padding: '20px' }}>
      <div className='project-card'>
        <h3>Anclco</h3>
        <p>Anclco is a game-changing app designed specifically for students. It allows you to order food from your college café restaurant while you’re in class, and pick it up when it’s convenient for you. No more missing out on your favorite meals because of a busy academic schedule!</p>
      </div>
      <div className='project-card'>
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
      </div>
      <div className='project-card'>
        <h3>Project 3</h3>
        <p>Description of Project 3</p>
      </div>
    </div>
  );
}
