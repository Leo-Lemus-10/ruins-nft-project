import React from 'react';
import './Header.css';
import ruinLogo from "../assets/header/logo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
          <img src={ruinLogo} className="ruinLogo" alt=""/>
      </div>
    </div>
  )
};

export default Header;
