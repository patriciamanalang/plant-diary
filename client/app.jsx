import React from 'react';
// import Home from './pages/home';
import Navbar from './components/navbar';
import AppContext from './lib/app-context';

export default class App extends React.Component {
  // render() {
  //   return <Home />;
  // }

  render() {
    return <Navbar />;
  }
}

App.contextType = AppContext;
