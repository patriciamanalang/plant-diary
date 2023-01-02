import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import AppContext from './lib/app-context';

export default class App extends React.Component {

  renderPage() {
    return <Home />;
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
