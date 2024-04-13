import React from 'react'
import './HomeContent.css';
import Navbar from './Navbar';
import Logo from './handsome1.jpg'


export default function HomeContent() {
  return (
    <>
    <Navbar/>
    <div className='info'>
      <article className='intro'>
      <h1>Hi,<span className='wave'>👋</span></h1>
      <p className='intro_line'>This is <span className='my_name'>Chinmay Khanzode</span>.</p>
      <p>I am an Aspiring</p>
      <p>Software Developer</p>
      </article>
      <div className='handsome-container'>
      <img className='handsome' src={Logo} alt="React Logo" />
      <div className="handsome-background"></div>
      
      </div>
            
    </div>
    </>
  )
}
