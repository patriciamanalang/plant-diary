import React from 'react';
import AppContext from '../lib/app-context';
// import parseString from '../lib/parse-string';

export default class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollection: [],
      plantId: null
    };
    // this.handleShowSelectedPlant = this.handleShowSelectedPlant.bind(this);
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

  render() {
    // const hashPlantName = window.location.hash.slice(28);
    // const plantName = parseString(hashPlantName);
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-half'>
            <h1 className='plantentry-name'>Snake Plant</h1>
          </div>
        </div>
        <div className='column-full'>
          <div className='row'>
            <div className='plant-photo-div'>
              <img className='plant-photo' src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder-300x300.jpg" alt="placeholder image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEntry.contextType = AppContext;
