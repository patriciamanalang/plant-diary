import React from 'react';
import AppContext from '../lib/app-context';

export default class PlantEntry extends React.Component {
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

PlantEntry.contextType = AppContext;
