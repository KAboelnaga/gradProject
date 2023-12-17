import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import LoginSignup from './LoginSignup';
import Upload from './Upload';
import './App.css';
function App() {
  return (
    <div className="App">
        <nav className="navbar">
        <div className='nav-item '>
        <div className='rlogo'>
          <img src='logo5.png' alt='logo'/> 
        </div>
        </div>
        <NavLink to ="/" className='nav-item special'>PneumoXpert</ NavLink>
        < NavLink to ="/" className="nav-item">Home</ NavLink>
        < NavLink to ="/upload" className="nav-item">Upload X-ray</ NavLink>
        < NavLink to ="/login" className="nav-item">Login/Signup</ NavLink>
        < NavLink to ="/about" className="nav-item">About</ NavLink>
        < NavLink to ="/contact" className="nav-item">Contact Us</ NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Upload" element={<Upload />}></Route>
      <Route path="/login" element={<LoginSignup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </div>

  );
}

export default App;
