import React from 'react';
import './Navigation.scss';
import MenuBtn from './MenuBtn';

const Navigation = (props) => {
  return (props.isMobile === false ? (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list__item"><a className="Navigation__list__item__link" href="#portfolio">Portfolio</a></li>
        <li className="Navigation__list__item"><a className="Navigation__list__item__link" href="#aboutme">About Me</a></li>
        <li className="Navigation__list__item">
          <button className="Navigation__list__item__button btn-md"
            onClick={() => window.location.href = '/#contact'}>
            Contact</button>
        </li>
      </ul>
    </nav>
  ) : (
      <MenuBtn handleOpenMenu={props.handleOpenMenu} isMenuOpen={props.isMenuOpen} />));
}

export default Navigation;