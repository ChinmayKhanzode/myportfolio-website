import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



export default function Navbar() {
    const location = useLocation();
    return (
      <>
          <div className="navbar">
            <div className="ck-logo" style={{ color: location.pathname === '/' ? '#ccf381' : 'initial' }}>
              Chinmay Khanzode
            </div>
            <ul className="nav-links">
              <li className="forward">
                <Link to="/">Home</Link>
              </li>
              <li className="forward">
                <Link to="/about">About Me</Link>
              </li>
              <li className="forward">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
            {/* <div className="menu">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/000000/menu--v1.png" alt="menu--v1"/> 
            </div> */}
          </div>

      </>
    );
  }
