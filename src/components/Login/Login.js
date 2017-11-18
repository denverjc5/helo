import React, { Component } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';


export default class Login extends Component {

  render() {
    return (
      <div className="main">
        <div className="splash-screen">
          <img src={logo} alt="logo" />
          <div className="logo-text">
            Helo
          </div>
          <a href={process.env.REACT_APP_LOGIN}><button className="login-button">Login/Register</button></a>
        </div>
      </div>
    )
  }
}
