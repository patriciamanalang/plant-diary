import React from 'react';
import AppContext from '../lib/app-context';

export default class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollection: [],
      isClicked: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePlantEntries = this.handlePlantEntries.bind(this);
  }

  handleButtonClick() {
    // const { route } = this.context;
    // route.path = '';
    // console.log(route.path);
    window.location.hash = 'home';

  }

  handlePlantEntries() {
    return (this.plantCollection);
  }

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='my-plants'>
            <h1 className='header'>My Plants</h1>
            <button onClick={this.handleButtonClick} className='add-plant'>Add a plant +</button>
            <h4 className='hidden no-plant'>You have no plants on your plant list!</h4>
            <div className='plantnames-container'>
              <h3 className=' plantname'>Philodendron Gloriosum</h3>
              <i className="fa-solid fa-trash" />
            </div>
          </div>
        </div>
        <div className='delete-plant-modal'/>
        <div className='delete-plant-rectangle' />

      </div>

    );
  }
}

MyPlants.contextType = AppContext;
