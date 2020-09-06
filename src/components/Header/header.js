import React from 'react';
import Nav from './nav';
import Menu from './menu';


function Header() {
  return (
   <header>
     <div className="container">
      <Nav/>
      <Menu/>
   </div>
   </header>
  )
}

export default Header;
