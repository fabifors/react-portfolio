import React from 'react';
import './SideMenu.scss';

const SideMenu = (props) => {

  const menuOpen = props.isMenuOpen === true ? "Side-Menu open" : "Side-Menu";

  return (
    <section className={menuOpen}>
      <h2 className="Side-Menu__Heading">Menu</h2>
      <nav className="Side-Menu__Navigation">
        <ul className="Side-Menu__Navigation__list">
          <li className="Side-Menu__Navigation__list__item"><a className="Side-Menu__Navigation__list__item__link" href="#portfolio">Portfolio</a></li>
          <li className="Side-Menu__Navigation__list__item"><a className="Side-Menu__Navigation__list__item__link" href="#aboutme">About Me</a></li>
          <li className="Side-Menu__Navigation__list__item">
            <a className="Side-Menu__Navigation__list__item__link"
                href="#contact">
            Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default SideMenu;