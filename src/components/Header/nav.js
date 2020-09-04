import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
          <Link to='/login'>Zaloguj</Link>
          </li>
          <li>
          <Link to='/register'>Załóż konto</Link>
          </li>
          
        </ul>
    </nav>
  )
}

export default Nav;
