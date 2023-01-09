import React from 'react';
import AppContext from '../lib/app-context';

export default class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollection: []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePlantCollection = this.handlePlantCollection.bind(this);
  }

  componentDidMount() {
    fetch('/plants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(plantCollection => {
        this.setState({ plantCollection });
      })
      .catch(err => console.error(err));
  }

  handleButtonClick() {
    window.location.hash = 'home';

  }

  handlePlantCollection() {
    const { plantCollection } = this.state;
    plantCollection.map(plant => {
      return (
        <>
          <h3 className='plantname'>{plant}</h3>
          <i className="fa-solid fa-trash" />
        </>
      );
    });
  }

  render() {
    const { plantCollection } = this.state;
    const showHiddenMessage = plantCollection.length === 0 ? '' : 'hidden';
    const plantEntries = plantCollection.map((plant, index) => {
      return (
        <div key={index} className='plantnames-container'>
          <h3 className='plantname'>{`${plant.plantName}`}</h3>
          <i className="fa-solid fa-trash" />
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row'>
          <div className='my-plants'>
            <h1 className='header'>My Plants</h1>
            <button type="button" onClick={this.handleButtonClick} className='add-plant'>Add a plant +</button>
            <h4 className= {`${showHiddenMessage} no-plant`}>You have no plants on your plant list!</h4>
            {plantEntries}
          </div>
        </div>
        <div className='hidden delete-plant-modal'>
          <div className='delete-plant-rectangle' >
            <h3 className='delete-text'>Are you sure you to remove this plant from your  &#34;My Plants&#34; list?</h3>
          </div>
        </div>
      </div>
    );
  }
}

MyPlants.contextType = AppContext;
