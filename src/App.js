import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar';
import PostImage from './components/GetImages';
import GlobalStyle from './styles/Global';
import PostList from './components/PostList'; 


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
      <div className="Aurum-body">
          <PostList/>
          <PostImage />
         Teste body
      </div>
    </div>
      </>
    )
  }
}

export default App;
