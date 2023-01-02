import React from 'react';
// import HelloWorld from '../components/hello-world';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // console.log('plantName:', this.state.plantName);
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
