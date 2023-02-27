import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import AppContext from './lib/app-context';
import MyPlants from './pages/myplants';
import parseRoute from './lib/parse-route';
import PlantEntriesPage from './pages/plantentriespage';
import AddEntry from './pages/add-entry';
import AuthPage from './pages/auth-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'home' || route.path === '') {
      return <Home />;
    } else if (route.path === 'myplants') {
      return <MyPlants />;
    } else if (route.path === 'plantentriespage') {
      return <PlantEntriesPage />;
    } else if (route.path === 'addentry') {
      return <AddEntry />;
    } else if (route.path === 'authpage') {
      return <AuthPage />;
    }
  }

  render() {
    const { route } = this.state;
    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Navbar />
          { this.renderPage() }
        </>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;
