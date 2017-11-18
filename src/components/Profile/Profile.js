import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile-main content-div">
        <div className="profile-top">
          <img src="https://robohash.com/4" alt="img" />
          <div className="profile-name">
            <span>First Name</span>
            <br />
            <span>Last Name</span>
          </div>
          <div className="profile-buttons">
            <button>Update</button>
            <button>Cancel</button>
          </div>
        </div>
        <div className="profile-bottom">


        </div>
      </div>
    )
  }
}

export default Profile;
