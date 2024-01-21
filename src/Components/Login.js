import React, { useState } from 'react';

import * as Components from './Components.js';
import '../Styles/login-signup.css';
const AuthForm = ({darkmode}) => {
  const [showForm, setShowForm] = React.useState(false);
  const [isDoctor, setIsDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    certificateImage: null,
  });

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setIsDoctor(value);
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDoctor && !formData.certificateImage) {
      alert('Please upload the doctor\'s certificate image.');
      return;
    }
  };
const [signIn, toggle] = React.useState(true);
console.log('darkMode in Login.js:', darkmode);

return(
  <div className={`${darkmode === "true"? 'dark' : 'light'}`}>
    <div className='spacee large'></div>
    <Components.Container className='large' dark={darkmode}>
        <Components.SignUpContainer  className='container'signinin={signIn.toString()} dark={darkmode}>
            <Components.Form className='container' dark={darkmode}>
                <Components.Title dark={darkmode}>Create Account</Components.Title>
                <label>Name</label>
                <Components.Input type='text' placeholder='Name' dark={darkmode}/>
                <label>Email</label>
                <Components.Input type='email' placeholder='Email' dark={darkmode}/>
                <label>Password</label>
                <Components.Input type='password' placeholder='Password' dark={darkmode}/>
                <label>Confirm password</label>
                <Components.Input type='password' placeholder='Re-type Password' dark={darkmode}/>
                <div className='radd-cont'>
          <label className={`${isDoctor === "doctor"? 'selected' : ''}`}>
            <input className={`radd ${isDoctor === "doctor"? 'selected' : ''}`}type="radio"name="patientType"value="doctor"checked={setIsDoctor["doctor"]}onChange={handleRadioChange}/>
            Doctor
          </label>

          <label className={`${isDoctor === "patient"? 'selected' : ''}`}>
            <input
              className={`radd ${isDoctor  === "patient"? 'selected' : ''}`}
              type="radio"
              name="patientType"
              value="patient"
              checked={setIsDoctor["patient"]}
              onChange={handleRadioChange}
            />
            Patient
          </label>
        </div>
        {isDoctor === "doctor"&& (
          <label>
            Certificate Image:
            <input
              className='cert'
              type="file"
              name="certificateImage"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </label>
        )}
                <Components.Button dark={darkmode}>Sign Up</Components.Button>
            </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer className='container' signinin={signIn.toString()} dark={darkmode}>
             <Components.Form className='container' dark={darkmode}>
                 <Components.Title dark={darkmode}>Sign in</Components.Title >
                 <label>Email</label>
                 <Components.Input type='email' placeholder='Email' dark={darkmode}/>
                 <label>Password</label>
                 <Components.Input type='password' placeholder='Password' dark={darkmode}/>
                 <Components.Anchor href='#' dark={darkmode}>Forgot your password?</Components.Anchor>
                 <Components.Button dark={darkmode}>Sign In</Components.Button>
             </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinin={signIn.toString()} dark={darkmode}>
            <Components.Overlay signinin={signIn.toString()} dark={darkmode}>

            <Components.LeftOverlayPanel signinin={signIn.toString()} dark={darkmode}>
                <Components.Title dark={darkmode}>Welcome Back!</Components.Title>
                <Components.GhostButton onClick={() => toggle(true)} dark={darkmode}>
                    Sign In
                </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinin={signIn.toString()} dark={darkmode}>
                  <Components.Title dark={darkmode}>Hello, Friend!</Components.Title>
                      <Components.GhostButton onClick={() => toggle(false)} dark={darkmode}>
                          Sign Up
                      </Components.GhostButton> 
                </Components.RightOverlayPanel>

            </Components.Overlay>
        </Components.OverlayContainer>

    </Components.Container>
    <div className='small'>
      <div className="bn40div">
        <a className ="bn40" href="/">Login</a>
        <a className ="bn40" href="/">Signup</a>
      </div>
    </div>
    
    </div>
)
}
export default AuthForm;