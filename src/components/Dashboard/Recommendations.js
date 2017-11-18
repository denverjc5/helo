import React, { Component } from 'react';

export default class Recommendations extends Component {
  render() {
    return (
      <div className="rec-main content-div">
        <div className="rec-top">
          <span>Recommended Friends</span>
          <div>
            <span>Sorted by</span>
            <select>
              <option value="first">First Name</option>
              <option value="last">Last Name</option>
              <option value="gender">Gender</option>
              <option value="hobby">Hobby</option>
              <option value="hair_color">Hair Color</option>
              <option value="eye_color">Eye Color</option>
              <option value="birthday">Birthday</option>
            </select>
          </div>
        </div>
        <div className="rec-friends">
          No recommendations!
        </div>
      </div>
    )
  }
}
