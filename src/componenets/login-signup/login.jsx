import React, { useState } from 'react';
import './login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [action,setaction] = useState("Signup");
  const navigate = useNavigate();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [phoneNumber,setPhoneNumber] = useState();
  const [address,setAddress] = useState();

  const namechangehandle=(e)=>{
    setName(e.target.value)
  }

  const emailchangehandle=(e)=>{
    setEmail(e.target.value)
  }

  const passwordchangehandle=(e)=>{
    setPassword(e.target.value)
  }
  const phonenochangehandle=(e)=>{
    setPhoneNumber(e.target.value)
  }
  const addresschangehandle=(e)=>{
    setAddress(e.target.value)
  }

    const navigationHandler=()=>{
  
      navigate("/"); // Navigate to "/new-path"
    
    };


  const regexloginPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  const regexloginEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const loginhandle=(e)=>{
    console.log(e)
    const data1 ={email,password}
    if (email && password){

      if (regexloginEmail.test(email)){
        console.log("login email print")
        if (regexloginPassword.test(password)){
          console.log("login password print")
        }else{
          console.log("wrong login password print")
        }  
      }else{
        console.log("wrong login email print")
      }
      console.log("login data print")
      // if (email && password){
      addApi1(data1)
      // }
        
    }else{
      console.log("login data is not print")
    }    
    // addApi1(data1)
    console.log(data1)
    // setaction("Login")
    setEmail("")
    setPassword("")
  }
  
  
  const addApi1=(data1)=>{
    fetch("http://localhost:8080/api/v1/user/login",{
      method:"POST",
      body:JSON.stringify(data1),
      headers:{
        "content-Type":"application/json"
      }
    });
  };
  
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email' onChange={emailchangehandle}value={email}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password'placeholder='Password' onChange={passwordchangehandle}value={password}/>
            </div>
            
        </div>
        <div className="submit-container">
          <div className="submit" onClick={loginhandle}>Login</div>
          {/* <div className="forget button">lost password</div> */}
        
        </div>
        <div className="new_user_register_now" >new user register now <button onClick={navigationHandler}>Click Here</button></div>
    </div>
  );
}

export default Login;