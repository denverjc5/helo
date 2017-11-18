import React, { Component } from 'react';
import './Dashboard.css';
import NavBar from './NavBar';
import User from './User';
import Recommendations from './Recommendations';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-main">
        <NavBar />
        <div className="dash-top">
          <User />
          <div className="welcome content-div">
            <span className="open-sans">
            Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
            </span>
          </div>
        </div>
        <Recommendations />
      </div>
    )
  }
}
