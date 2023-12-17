import React, { useState } from 'react';
import * as Components from './Components';
import './login-signup.css';
const AuthForm = () => {
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
return(
    <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <label>Name</label>
                <Components.Input type='text' placeholder='Name' />
                <label>Email</label>
                <Components.Input type='email' placeholder='Email' />
                <label>Password</label>
                <Components.Input type='password' placeholder='Password' />
                <label>Confirm password</label>
                <Components.Input type='password' placeholder='Re-type Password' />
                <div className='radd-cont'>
          <label className={`${isDoctor === "doctor"? 'selected' : ''}`}>
            <input
              className={`radd ${isDoctor === "doctor"? 'selected' : ''}`}
              type="radio"
              name="patientType"
              value="doctor"
              checked={setIsDoctor["doctor"]}
              onChange={handleRadioChange}
            />
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
                <Components.Button>Sign Up</Components.Button>
            </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
             <Components.Form>
                 <Components.Title>Sign in</Components.Title>
                 <label>Email</label>
                 <Components.Input type='email' placeholder='Email' />
                 <label>Password</label>
                 <Components.Input type='password' placeholder='Password' />
                 <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                 <Components.Button>Sigin In</Components.Button>
             </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraphl>
                    Already a user, Signin and get started!
                </Components.Paragraphl>
                <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>Hello, Friend!</Components.Title>
                  <Components.Paragraphr>
                      New member, Create account and get started!
                  </Components.Paragraphr>
                      <Components.GhostButton onClick={() => toggle(false)}>
                          Sigin Up
                      </Components.GhostButton> 
                </Components.RightOverlayPanel>

            </Components.Overlay>
        </Components.OverlayContainer>

    </Components.Container>
)
}
export default AuthForm;
