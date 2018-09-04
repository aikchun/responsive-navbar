import React, { Component } from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop />
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        { sideDrawer }
        { backdrop }
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>

        </main>
      </div>
    );
  }
}

export default App;
