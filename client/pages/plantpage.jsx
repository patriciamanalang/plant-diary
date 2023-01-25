import React from 'react';
import AppContext from '../lib/app-context';

export default class PlantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantName: '',
      plantId: null
    };
  }

  // componentDidMount() {
  //   fetch(`/plants/${this.props.plantName}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(plant => this.setState({
  //       plantName: plant.plantName,
  //       plantId: plant.plantId
  //     }))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-half'>
            <h1 className='plantentry-name'>Plant Name</h1>
          </div>
          <div className='column-half' >
            <div className='add-entry-div'>
              <h1 className='add-entry'>Add Entry</h1>
            </div>
          </div>
        </div>
        <div>
          <p className='no-plant-entries'>You have no entries for this plant</p>
        </div>
      </div>
    );
  }
}

PlantPage.contextType = AppContext;
