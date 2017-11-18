import React, { Component } from 'react';
import home from '../../assets/home.png';
import search from '../../assets/search.png';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="header-left">
          <span className="header-title">Helo</span>
          <img src={home} alt="home" />
          <img src={search} alt="search" />
        </div>
        <span className="open-sans header-font">Dashboard</span>
        <div className="open-sans header-font">Logout</div>
      </div>
    )
  }
}
