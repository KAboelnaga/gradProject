import React, { useState } from 'react';
import { Routes, Route, NavLink, useLocation} from 'react-router-dom';
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
  const location = useLocation();
  const toggleNav = () => {
    setShowNavItems(!showNavItems);
  };
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    toggleNav()
}
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
        <div>
        <NavLink to="/" className={`icon nav-item ${!darkMode && location.pathname !== '/'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='homeb.png' alt="Home Icon" className='icon' />
          </NavLink>

          <NavLink to="/" className={`icon nav-item ${darkMode && location.pathname !== '/'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='homed.png' alt="Home Icon" className='icon'/>
          </NavLink>
          <NavLink to="/" className={`icon nav-item ${location.pathname === '/'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='homea.png' alt="Home Icon" className='icon'/>
          </NavLink>

        <NavLink to="/" className={`nav-item ${showNavItems ? 'show is-active' : ''}` } onClick={toggleNav}>
          Home
        </NavLink>
        </div>
        <div>
        <NavLink to="/about" className={`icon nav-item ${!darkMode && location.pathname !== '/about'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='aboutb.png' alt="Home Icon" className='icon' />
          </NavLink>

          <NavLink to="/about" className={`icon nav-item ${darkMode && location.pathname !== '/about'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='aboutd.png' alt="Home Icon" className='icon'/>
          </NavLink>
          <NavLink to="/about" className={`icon nav-item ${location.pathname === '/about'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='abouta.png' alt="Home Icon" className='icon'/>
          </NavLink>
        <NavLink to="/about" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          About
        </NavLink>
        </div>
        <div>
        <NavLink to="/upload" className={`icon nav-item ${!darkMode && location.pathname !== '/upload'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='uploadb.png' alt="Home Icon" className='icon' />
          </NavLink>

          <NavLink to="/upload" className={`icon nav-item ${darkMode && location.pathname !== '/upload'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='uploadd.png' alt="Home Icon" className='icon'/>
          </NavLink>
          <NavLink to="/upload" className={`icon nav-item ${location.pathname === '/upload'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='uploada.png' alt="Home Icon" className='icon'/>
          </NavLink>
        <NavLink to="/upload" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Upload X-ray
        </NavLink>
        </div>
        <div>
        <NavLink to="/contact" className={`icon nav-item ${!darkMode && location.pathname !== '/contact'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='mailb.png' alt="Home Icon" className='icon' />
          </NavLink>

          <NavLink to="/contact" className={`icon nav-item ${darkMode && location.pathname !== '/contact'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='maild.png' alt="Home Icon" className='icon'/>
          </NavLink>
          <NavLink to="/contact" className={`icon nav-item ${location.pathname === '/contact'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='maila.png' alt="Home Icon" className='icon'/>
          </NavLink>
        <NavLink to="/contact" className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Contact Us
        </NavLink>
        </div>
        <div>
        <NavLink to="/login" className={`icon nav-item ${!darkMode && location.pathname !== '/login'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='userb.png' alt="Home Icon" className='icon' />
          </NavLink>

          <NavLink to="/login" className={`icon nav-item ${darkMode && location.pathname !== '/login'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='userd.png' alt="Home Icon" className='icon'/>
          </NavLink>
          <NavLink to="/login" className={`icon nav-item ${location.pathname === '/login'? '' : 'hidden'} ${showNavItems ? 'show is-active' : ''}`}>
            <img src='usera.png' alt="Home Icon" className='icon'/>
          </NavLink>
        <NavLink to="/login"  className={`nav-item ${showNavItems ? 'show is-active' : ''}`} onClick={toggleNav}>
          Login/Signup
        </NavLink>
        </div>
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
