import React from 'react';
import AppContext from '../lib/app-context';
import parseString from '../lib/parse-string';

export default class PlantEntriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollection: [],
      plantId: null
    };
    this.handleAddEntryClick = this.handleAddEntryClick.bind(this);
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

  handleAddEntryClick(event) {
    window.location.hash = 'addentry';
  }

  render() {
    const hashPlantName = window.location.hash.slice(28);
    const plantName = parseString(hashPlantName);
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-half'>
            <h1 className='plantentry-name'>{plantName}</h1>
          </div>
          <div className='column-half' >
            <div className='add-entry-div'>
              <h1 onClick={this.handleAddEntryClick} className='add-entry'>Add Entry</h1>
            </div>
          </div>
        </div>
        <div>
          <p className='no-plant-entries'>You have no entries for this plant.</p>
        </div>
      </div>
    );
  }
}

PlantEntriesPage.contextType = AppContext;
