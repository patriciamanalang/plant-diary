import React from 'react';
import AppContext from '../lib/app-context';

export default class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(state => {
      return { isClicked: !state.isClicked };
    });
  }

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='my-plants'>
            <h1 className='header'>My Plants</h1>
            <h4 className='no-plant'>You have no plants on your plant list!</h4>
            <button className='add-plant'>Add a plant +</button>
          </div>

        </div>
      </div>
    );
  }
}

MyPlants.contextType = AppContext;
