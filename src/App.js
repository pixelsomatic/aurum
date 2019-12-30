import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar';
import PostImage from './components/GetImages';
import InfoImage from './components/GetImagesInfo';
import GlobalStyle from './styles/Global';
import PostList from './components/PostList'; 
import EbookList from './components/ebookList'; 
import PostTitle from './components/PostTitle'; 
import EbookTitle from './components/ebookTitle'; 


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
      <header className="Aurum-header"></header>
      <div className="Aurum-body">
        <div className="Image-section">
          <PostImage />
        </div>
        <div>
          <PostTitle/>
          <PostList/>
        </div>
        <div className="Image-section-info">
          <InfoImage />
        </div>
        <div>
          <EbookTitle />
          <EbookList />
        </div>
      </div>
    </div>
      </>
    )
  }
}

export default App;
