import React from 'react';
import './MenuBtn.scss';

const MenuBtn = (props) => {

  const active = props.isMenuOpen === true ? "menu-btn open" : "menu-btn";

  return (
    <div className={active} onClick={()=> props.handleOpenMenu()}>
      <div className="menu-btn__1"></div>
      <div className="menu-btn__2"></div>
      <div className="menu-btn__3"></div>
    </div>
  );
}

export default MenuBtn;