import React from 'react';
import './Header.css';
import ruinLogo from "../assets/header/logo.jpeg";
import searchIcon from "../assets/header/search.png"

const Header = () => {
  return (
    <div className="header">
        <div className="logoContainer">
            <img src={ruinLogo} className="ruinLogo" alt=""/>
        </div>
        <div className="searchBar">
            <div className="searchIconContainer">
                <img src={searchIcon} />
            </div>
            <input className="searchInput" placeholder="Collection, Item or User..."/>
        </div>
    </div>
  )
};

export default Header;
