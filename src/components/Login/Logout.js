import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Logout() {


  return (
    <section id="logout">

    <div className="container">

    
          <h3>Wylogowanie nastąpiło pomyślnie!</h3>
          <div><img src="/images/Decoration.svg"/></div>

          <Link to='/'>Strona główna</Link>
        
    </div>

  </section>
  
  )
}

export default Logout;
