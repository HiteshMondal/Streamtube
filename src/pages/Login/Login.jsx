import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  
  const [signState, SetSignState] = useState("Sign In")
  
  
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder='Your Name'/> : ""}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New User?<span onClick={()=>SetSignState("Sign Up")}>Join Right Now!</span></p>
            :<p>Already have account?<span onClick={()=>SetSignState("Sign In")}>Sign In</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login