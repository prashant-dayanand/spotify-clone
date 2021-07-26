import React from 'react'
import "./Login.css"
import { accessUrl } from './spotify'
const Login = () => {
  
  return (
    <div className="login">
       <img src="images/logo512.png" alt="" /><br />
       <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
