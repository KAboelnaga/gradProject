import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Components from './Components.js';
import { AuthContext } from './AuthContext';
import '../Styles/login-signup.css';
const AuthForm = ({darkmode}) => {
  const [showForm, setShowForm] = useState(false);
  const [isDoctor, setIsDoctor] = useState(null);
  const [isLogin, setIsLogin] = useState("login");
  const [loginEmail, setLoginEmail] = useState([]);
  const [loginPassword, setLoginPassword] = useState([]);
  const [lmessage, setlMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loginError, setLoginError] = useState([]);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const loginNavigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    certificateImage: null,
  });
  const handleOnChangeLoginEmail = e => {
    setLoginEmail(e.target.value);
  };
  const handleOnChangeLoginPassword = e => {
    setLoginPassword(e.target.value);
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setIsDoctor(value);
  };
  const handleForm = e =>{
    const { value } = e.target;
    setIsLogin(value);
  }
  
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
const [signIn, toggle] = useState(true);
console.log(isLogin === "login");
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
                 {loginMessage}
          {loginShow}
            <div>
              {loginError}
              {loginMessage}
            </div>
                 <label>Email</label>
                 <Components.Input type='email' placeholder='Email' dark={darkmode} onChange={handleOnChangeLoginEmail}/>
                 <label>Password</label>
                 <Components.Input type='password' placeholder='Password' dark={darkmode} onChange={handleOnChangeLoginPassword}/>
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
        <button className ="bn40" value="login" onClick={handleForm}>Login</button>
        <button className ="bn40" value="signup" onClick={handleForm}>Signup</button>
        </div>
        <div className={`${isLogin === 'login'? 'show':'hidden'}`}>
        <div id='container'>
        <form className="dropzone-box">
        <h2 id='loginTitle'>Login</h2>
        <div className="input-group">
          <input className="input1" required autoComplete="off" type="text" name="username" id="username"/>
          <label className="label1" htmlFor="username">Email</label>
          <input className="input2" required autoComplete="off" type="password" name="password" id="password"/>
          <label className="label2" htmlFor="password">password</label>
        </div>
        <Components.Button dark={darkmode}>Login</Components.Button>
        </form>
      </div>
      </div>
      <div className={`${isLogin === 'login'? 'hidden':'show'}`}>
      <div id='container'>
        <form className="dropzone-box">
        <h2 id='loginTitle'>Signup</h2>
        <div className="input-group">
          <input className="input1" required autoComplete="off" type="text" name="username" id="username"/>
          <label className="label1" htmlFor="username">Email</label>
          <input className="input2" required autoComplete="off" type="password" name="password" id="password"/>
          <label className="label2" htmlFor="password">Password</label>
          <input className="input3" required autoComplete="off" type="password" name="password" id="password"/>
          <label className="label3" htmlFor="password">Retype Password</label>
          <div className='radd-cont'>
          <label className={`labell${isDoctor === "doctor"? 'selected' : ''}`}>
            <input className={`radd ${isDoctor === "doctor"? 'selected' : ''}`}type="radio"name="patientType"value="doctor"checked={setIsDoctor["doctor"]}onChange={handleRadioChange}/>
            Doctor
          </label>

          <label className={`labell${isDoctor === "patient"? 'selected' : ''}`}>
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
        </div>
        <Components.Button dark={darkmode}>Sign Up</Components.Button>
        </form>
      </div>
      </div>
    </div>
    <div id='loginSpace'></div>
    </div>
)
}
export default AuthForm;