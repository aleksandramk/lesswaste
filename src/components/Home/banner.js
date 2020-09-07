import React from 'react';
import {Link} from 'react-router-dom';



function Banner() {
  return (
    <section id="home-page-banner">
      <div className="container">

      <div className="banner-img">
        <img className ="banner-img-picture" src="/images/Home-Hero-Image.jpg" alt="Banner" />
      </div>
      <div className="banner-text">
          <h2><span>Zacznij pomagać!</span><span>Oddaj niechciane rzeczy w zaufane ręce</span></h2>
          <div><img src="/images/Decoration.svg"/></div>
          <ul>
              <li>
                <Link to='/login'>Oddaj rzeczy</Link>
              </li>
              <li>
                <Link to='/login'>Zorganizuj zbiórkę</Link>
              </li>
          </ul>
      </div>
      </div>

    </section>
    
  )
}

export default Banner;
