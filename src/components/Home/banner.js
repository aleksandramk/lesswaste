import React from 'react';
import {Link} from 'react-router-dom';



function Banner() {
  return (
    <div className="home-page-banner">

      <div className="banner-img">
        <img className ="banner-img-picture" src="/images/Home-Hero-Image.jpg" alt="Banner" />
      </div>
      <div className="banner-text">
          <h2><span>Zacznij pomagać!</span><span>Oddaj niechciane rzeczy w zaufane ręce</span></h2>
          <ul>
              <li>
                <Link to='/register'>Oddaj rzeczy</Link>
              </li>
              <li>
                <Link to='/register'>Zorganizuj zbiórkę</Link>
              </li>
          </ul>
      </div>

    </div>
    
  )
}

export default Banner;
