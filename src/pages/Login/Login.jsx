import React from 'react';
import image from '../../assets/login-icon.png'
import './Login.css'

const Login=() =>{
  return (
    <div className="container">
      <div className="left">
        <h1>Your Dream job is one click away!</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
      <div className="right">
        <img
          autoplay
          loop
          src='https://www.webnox.in/wp-content/uploads/2022/10/Job-Portal-Software.png'
          style={{ height: '400px', width: '550px' }}
        />
      </div>
    </div>
  );
}

export default Login;
