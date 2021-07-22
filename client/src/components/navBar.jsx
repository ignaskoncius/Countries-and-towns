import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="places-info">
        <h2>Choose what you want to see</h2>
        <Link to="/form">Add new place</Link>
        <Link to="/allPosts">All places</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/countries">Countries</Link>
      </div>
    );
  }
}

export default NavBar;
