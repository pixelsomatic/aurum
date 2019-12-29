import React, { Component } from 'react'
import './App.scss';
import Navbar from "./pages/Navbar";

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <div className="Aurum">
      <header className="Aurum-header">
      </header>
      <body className="Aurum-body"> Teste </body>
    </div>
      </>
    )
  }
}

export default App;
