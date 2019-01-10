import React from 'react';
import Logo from './Logo';
import Navigation from '../Navigation/Navigation.js';
import './Header.scss';

const Header = (props) => {
  console.log(props);
  return (
    <header className="main-header">
      <Logo height={'70%'}/>
      <Navigation isMobile={props.isMobile} 
                  isMenuOpen={props.isMenuOpen}
                  handleOpenMenu={ props.handleOpenMenu }
                  />
    </header>
  );
}

export default Header;