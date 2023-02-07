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
          <p className='hidden no-plant-entries'>You have no entries for this plant.</p>
        </div>
        <div className='row'>
          <div className='col-one-fourth trash-div'>
            <i className="fa-solid fa-trash-can" />
          </div>
          <div className='column-half plant-photo-entry-div'>
            <img className='plant-photo-entry' src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder-300x300.jpg" alt="placeholder image" />
            <div className='plant-notes'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione similique sint, beatae voluptate commodi temporibus! Officia a sit, porro animi cum, est sed placeat tenetur ratione, saepe soluta quidem!</p>
            </div>
          </div>
          <div className='col-one-fourth editpen-div'>
            <i className="fa-solid fa-pen" />
          </div>
        </div>
        <div className='hidden delete-plant-modal'>
          <div className='delete-plant-rectangle'>
            <h3 className='delete-text'>Are you sure you want to delete this plant entry?</h3>
            <div className='entry-modal-buttons' >
              <button className='cancel'>CANCEL</button>
              <button className='delete'>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlantEntriesPage.contextType = AppContext;
