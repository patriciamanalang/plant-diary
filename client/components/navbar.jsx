import React from 'react';
import AppContext from '../lib/app-context';

export default class Navbar extends React.Component {

  handleHomeIconClick() {
    window.location.hash = 'home';

  }

  render() {
    return (
      <div className="container">
        {/* <div className='row'> */}
        <div className='column-full'>
          <nav className="navbar">
            <a className="navbar-logo" href="">Plant Diary</a>
            <div className="navbar-icons">
              <i onClick={this.handleHomeIconClick} className="fa-solid fa-house" href="#" />
              <a className="my-plants" href='#myplants'>My Plants</a>
              <p className='logout'>Log Out</p>
            </div>
          </nav>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

Navbar.contextType = AppContext;
