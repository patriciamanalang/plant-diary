import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollections: [],
      plantName: ''
    };
    this.handlePlantNameChange = this.handlePlantNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePlantNameChange(event) {
    this.setState({ plantName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { plantName } = this.state;
    const plant = { plantName };

    fetch('/plants/add', {
      method: 'POST',
      body: JSON.stringify(plant),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(plantData => {
        this.setState({ plantName: '' });
        window.location.hash = 'myplants';
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <div className='home-background container'>
        <div className='row logo-position'>
          <img className='logo' src="https://static.vecteezy.com/system/resources/previews/015/124/165/original/minimal-style-potted-plants-png.png" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className='input' type="text" placeholder='Enter Plant Name' value={this.state.plantName} onChange={this.handlePlantNameChange} />
            </label>
            <div>
              <button id='button' className='add'>Add To My Plants</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
