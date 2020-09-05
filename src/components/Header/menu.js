import React from 'react';

import {Link, animateScroll as scroll } from "react-scroll";


function Menu() {

  return (
    <nav className="header-menu">
        <ul className="header-menu-list">
            <li>
                <Link to='home' smooth={true} duration={1000}> Start </Link>
            </li>
            <li>
                <Link to='/'>O co chodzi?</Link>
            </li>
            <li>
                <Link to='/'>O nas</Link>
            </li>
            <li>
                <Link to='/'>Fundacja i organizacje</Link>
            </li>
            <li>
                <Link to='/'>Kontakt</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu;
