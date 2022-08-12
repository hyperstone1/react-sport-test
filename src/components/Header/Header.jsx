import React, { useState } from 'react';
import './index.scss';

const Header = ({ width, open, onClickClose }) => {
  const stylesForBurger = !open
    ? { opacity: 1, transition: 'opacity 0.2s' }
    : { opacity: 0, transition: 'all 0.2s' };
  // const [screen, setScreen] = useState();
  const screenWidth = window.screen.width;

  return (
    <div className="wrapper">
      <div className="header">
        <img src="./img/logo.svg" alt="" />
        {width > 1117 ? (
          <ul className="menu">
            <li className="menu-li">review</li>
            <li className="menu-li">экстрим</li>
            <li className="menu-li">легенды</li>
            <li className="menu-li">зож и туризм</li>
            <li className="menu-li">позірк</li>
            <li className="menu-li">треш</li>
            <li style={stylesForBurger} onClick={() => onClickClose()} className="burger"></li>
          </ul>
        ) : (
          <li style={stylesForBurger} onClick={() => onClickClose()} className="burger"></li>
        )}
      </div>
    </div>
  );
};

export default Header;
