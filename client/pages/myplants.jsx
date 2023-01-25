import React from 'react';
import AppContext from '../lib/app-context';

export default class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantCollection: [],
      isOpen: false,
      deleteId: null
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handlePlantCollection = this.handlePlantCollection.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTrashIcon = this.handleTrashIcon.bind(this);
    this.handleCancelButton = this.handleCancelButton.bind(this);
    this.handlePlantNameClick = this.handlePlantNameClick.bind(this);
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

  handlePlantCollection(event) {
    const plantEntries = event.map((plant, index) => {
      return (
        <div key={index} className='plantnames-container'>
          <h3 onClick={this.handlePlantNameClick} className='plantname'>{`${plant.plantName}`}</h3>
          <i onClick={this.handleTrashIcon} className='fa-solid fa-trash' id={`${plant.plantId}`} />
        </div>
      );
    });
    return plantEntries;
  }

  handleTrashIcon(event) {
    this.setState({ isOpen: true });
    this.setState({ deleteId: event.target.id });
  }

  handleCancelButton(event) {
    this.setState({ isOpen: false });
  }

  handleDelete(event) {
    event.preventDefault();
    const { deleteId } = this.state;
    fetch(`/delete/plant/${deleteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'

      }
    })
      .then(res => {
        this.setState({ isOpen: false });
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
      });
  }

  handlePlantNameClick() {
    window.location.hash = 'plantpage';

  }

  render() {
    const { plantCollection, isOpen } = this.state;
    const { handleDelete, handlePlantCollection, handleCancelButton } = this;
    const showHiddenMessage = plantCollection.length === 0 ? '' : 'hidden';
    const showModal = isOpen ? '' : 'hidden';
    return (
      <div className='container'>
        <div className='row'>
          <div className='my-plants'>
            <h1 className='header'>My Plants</h1>
            <button type="button" onClick={this.handleButtonClick} className='add-plant'>Add a plant +</button>
            <h4 className= {`${showHiddenMessage} no-plant`}>You have no plants on your plant list!</h4>
            {handlePlantCollection(plantCollection)}
          </div>
        </div>
        <div className={`${showModal} delete-plant-modal`}>
          <div className='delete-plant-rectangle' >
            <h3 className='delete-text'>Are you sure you to remove this plant from your  &#34;My Plants&#34; list?</h3>
            <div className='modal-buttons' >
              <button onClick={handleCancelButton} className='cancel'>CANCEL</button>
              <button onClick={handleDelete} className='delete'>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyPlants.contextType = AppContext;
