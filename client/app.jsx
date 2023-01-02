import React from 'react';
// import Home from './pages/home';
import Navbar from './components/navbar';
import AppContext from './lib/app-context';
import MyPlants from './pages/myplants';

export default class App extends React.Component {

  renderPage() {
    return <MyPlants />;
  }

  render() {
    return (
      <>
        <Navbar />
        { this.renderPage() }
      </>
    );
  }
}

App.contextType = AppContext;
