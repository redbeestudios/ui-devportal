import React from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = props => {
    return (
        <header className='header'>
          <div className='header__brand container'>
            <img src='/static/logo.svg' className="brand__logo" alt="Quiero ver feliz"/>
          </div>
        </header>
    );
}

export default Header;
