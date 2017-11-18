import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div className="user-mini content-div">
        <div className="user-left">
          <img src="https://robohash.org/5" alt="user-image" width="150" height="150" />
        </div>
        <div className="user-right">
          <span>First Name</span>
          <span>Last Name</span>
          <button>Edit Profile</button>
        </div>
      </div>
    )
  }
}
