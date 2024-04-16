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
        <h3>Weather App</h3>
        <p>App that provides real-time, comprehensive information about any city. The app features a user-friendly interface and offers data on demographics, weather, local attractions, and more.</p>
      </div>
      <div className='project-card'>
        <h3>Health Care Data Analysis</h3>
        <p>application that systematically processes and interprets vast healthcare datasets. The app employs statistical, machine learning, and data mining techniques to derive insights, aiding in improved patient outcomes, operational efficiency, and advanced medical research.</p>
      </div>
    </div>
  );
}
