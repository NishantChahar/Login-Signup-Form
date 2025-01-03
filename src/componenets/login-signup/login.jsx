import React, { useState } from 'react';
import './login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

const Login = () => {
  const [action,setaction] = useState("Login");
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const namechangehandle=(e)=>{
    setName(e.target.value)
  }

  const emailchangehandle=(e)=>{
    setEmail(e.target.value)
  }

  const passwordchangehandle=(e)=>{
    setPassword(e.target.value)
  }
  
  const loginhandle=()=>{
    setaction("Login")
  }

  const Signuphandle=()=>{
    const data ={name,email,password}
    setaction("Signup")
  }
  
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className={action==='Login'?"hidden-user":"input"}>
                <img src={person_icon} alt=''/>
                <input type='text' placeholder='Name' onChange={namechangehandle}/>
            </div>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email' onChange={emailchangehandle}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password'placeholder='Password' onChange={passwordchangehandle}/>
            </div>
        </div>
        <div className={action==="Login"?"forgot-password":"hidden-user"}>lost password <span>Click Here</span></div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={loginhandle}>Signup</div>
          <div className={action==="Signup"?"submit gray":"submit"} onClick={Signuphandle}>Login</div>
          {/* <div className="submit">signin</div> */}
        </div>
    </div>
  );
}

export default Login;