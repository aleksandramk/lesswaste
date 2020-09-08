import React from 'react';
import {Link as DomLink} from 'react-router-dom'
import {Link, animateScroll as scroll } from 'react-scroll';


function Menu() {

  return (
    <nav className="header-menu">
        <ul className="header-menu-list">
            <li>
                <DomLink to='/'> Start </DomLink>
            </li>
            <li>
                <Link to='fourSteps' smooth={true} duration={500}>O co chodzi?</Link>
            </li>
            <li>
                <Link to='aboutUs'smooth={true} duration={500}>O nas</Link>
            </li>
            <li>
                <Link to='whoWeHelp' smooth={true} duration={500}>Fundacja i organizacje</Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>Kontakt</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu;
