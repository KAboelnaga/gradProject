import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import LoginSignup from './LoginSignup';
import Upload from './Upload';
import './App.css';
import Footer from './Footer';


function App() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" className="nav-item special">
          <div className="rlogo">
            <img src="logo5.png" alt="logo" />
          </div>
          <p>PneumoXpert</p>
        </NavLink>
        <NavLink to="/" className={`nav-item ${showNavItems ? 'show is-active' : ''}` } onClick={toggleNav}>
          Home
        </NavLink>
        <NavLink to="/upload" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Upload X-ray
        </NavLink>
        <NavLink to="/login" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Login/Signup
        </NavLink>
        <NavLink to="/about" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          About
        </NavLink>
        <NavLink to="/contact" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Contact Us
        </NavLink>
        <div
  className={`hamburger hamburger--vortex ${showNavItems ? 'is-active' : ''}`}
  onClick={toggleNav}
>
  <div
    className={`hamburger-inner hamburger--vortex ${showNavItems ? 'is-active' : ''}`}
  >
    <div
      className="hamburger-inner-before"
     
    ></div>
    <div
      className="hamburger-inner-after"
    ></div>
  </div>
</div>
        </nav>
      <div id='spacer'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
