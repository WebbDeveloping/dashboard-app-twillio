import React from 'react';
import { HashRouter } from 'react-router-dom';
import './components/ToolBar/Toolbar.css';
import Footer from './components/Footer/Footer';
import ToolBar from './components/ToolBar/ToolBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import routes from './components/routes';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <HashRouter>
        <span className='app' style={{ height: '100%' }}>
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            close={this.backdropClickHandler}
          />
          {backdrop}
          {routes}
          <Footer />
        </span>
      </HashRouter>
    );
  }
}

export default App;
