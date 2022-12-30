import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <a className="navbar-logo" href="#">Plant Diary</a>
          <div className="navbar-icons">
            <i className="fa-solid fa-house" />
            <p className="my-plants">My Plants</p>
            <p className='logout'>Log Out</p>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.contextType = AppContext;
