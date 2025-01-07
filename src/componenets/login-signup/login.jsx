import React, { useState } from 'react';
import './login.css';
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

const Login = () => {
  const [action,setaction] = useState("Signup");
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

  
  const loginhandle=(e)=>{
    console.log(e)
    const data1 ={email,password}
    addApi1(data1)
    console.log(data1)
    setaction("Login")
    setEmail("")
    setPassword("")
  }
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexFullname = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/; 
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  const regexPhone = /^\d{10}$/; 
  const regexAddress = /^[a-zA-Z0-9\s,.-]+$/; 

  const Signuphandle=()=>{
    
    const data2 ={name,email,password,phoneNumber,address}
    if (name && email && password && phoneNumber && address){
      if (regexEmail.test(email)){
        console.log("email print")
      if (regexFullname.test(name)){
          console.log("full name print")
          if (regexPassword.test(password)){
            console.log("password print")
            if (regexPhone.test(phoneNumber)){
              console.log("phone no print")
              if (regexAddress.test(address)){
                console.log("address print")
              }else{
                console.log("wrong address")
              }
            }else{
              console.log("wrong phone no")
            }
          }else{
            console.log("wrong password")
          }
        }else{
          console.log("wrong full name")
        
      }}else{
        console.log("wrong email")
      }
    
      
    // if (data2===""){
      console.log("data is entered")
      addApi(data2)
    }else{
      console.log("data is not entered")
    }
    setaction("Signup")
    console.log(data2)
    
    setPassword("")
    setEmail("")
  }
  const addApi=(data2)=>{
    console.log(data2)
    fetch("http://localhost:8080/api/v1/user/register",{
      method:"POST",
      body:JSON.stringify(data2),
      headers:{
        "content-Type":"application/json"
      }
    });
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
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className={action==='Login'?"hidden-user":"input"}>
                <img src={person_icon} alt=''/>
                <input type='text' placeholder='Name' onChange={namechangehandle} value={name}/>
            </div>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email' onChange={emailchangehandle}value={email}/>
            </div>
            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password'placeholder='Password' onChange={passwordchangehandle}value={password}/>
            </div>
            <div className={action==='Login'?"hidden-user":"input"}>
                <img src={password_icon} alt=''/>
                <input type='text'placeholder='Phone No' onChange={phonenochangehandle}value={phoneNumber}/>
            </div>
            <div className={action==='Login'?"hidden-user":"input"}>
                <img src={password_icon} alt=''/>
                <input type='text'placeholder='Address' onChange={addresschangehandle}value={address}/>
            </div>
        </div>
        <div className={action==="Login"?"forgot-password":"hidden-user"}>lost password <span>Click Here</span></div>
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={Signuphandle}>Signup</div>
          <div className={action==="Signup"?"submit gray":"submit"} onClick={loginhandle}>Login</div>
          {/* <div className="submit">signin</div> */}
        </div>
    </div>
  );
}

export default Login;