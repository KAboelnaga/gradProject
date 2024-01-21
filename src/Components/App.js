import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import Upload from './Upload';
import '../Styles/App.css';
import Footer from './Footer';


function App() {
  const [showNavItems, setShowNavItems] = useState(false);
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleNav = () => {
    setShowNavItems(!showNavItems);
  };
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    toggleNav()
}
console.log("darkmode in app",darkMode)
  return (
    <div className={`App h-full w-full mx-auto 
    ${darkMode ? "dark" : "light"}`}>
      <nav className="navbar">
        <NavLink to="/" className="special">
          <div className="rlogo">
            <img src="logo5.png" alt="logo" />
          </div >
          <p id='navTitle'>PneumoXpert</p>
        </NavLink>
        <NavLink to="/" className={`nav-item ${showNavItems ? 'show is-active' : ''}` } onClick={toggleNav}>
          Home
        </NavLink>
        <NavLink to="/about" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          About
        </NavLink>
        <NavLink to="/upload" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Upload X-ray
        </NavLink>
        <NavLink to="/contact" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Contact Us
        </NavLink>
        <NavLink to="/login"  className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Login/Signup
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
<nav className={`nav-item ${showNavItems ? 'show is-active' : ''}`} >
            <img id='dark'src="dark.png" onClick={toggleDarkMode} alt='dark'/>
        </nav>
        </nav>
        <div id='space'></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/login" element={<Login darkmode={darkMode.toString()} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
