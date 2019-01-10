import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatIDo from './components/WhatIDo/WhatIDo';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import SideMenu from './components/Navigation/SideMenu';

library.add(fas);

class App extends Component {
  state = {
    isMobile: false,
    isMenuOpen: false
  }

  handleOpenMenu = () => {
    this.setState(prevState => {
      return { isMenuOpen: !prevState.isMenuOpen }
    })
  }

  componentDidMount = () => {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillMount = () => {
    window.removeEventListener('resize', this.handleResize)
  }


  handleResize = () => {
    const windowSize = window.innerWidth;
    if (windowSize < 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  render() {
    return (
      <div className="App" style={this.state.isMenuOpen === true? {overflow: 'hidden'}: null}>
        {this.state.isMobile ? <SideMenu isMenuOpen={this.state.isMenuOpen} />: null}
        <div className="container">
          <Header isMobile={this.state.isMobile}
                  handleOpenMenu={this.handleOpenMenu}
                  isMenuOpen={this.state.isMenuOpen} />
          <Hero />
        </div>
        <WhatIDo />
      </div>
    );
  }
}

export default App;