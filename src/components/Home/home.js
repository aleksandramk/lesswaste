import React from 'react';
import Banner from './banner';
import ThreeColumns from './threeColumns';
import FourSteps from './fourSteps';
import AboutUs from './aboutUs';
import WhoWeHelp from './whoWeHelp';


function Home() {
  return (
    <div className="home-page" id="home">
      
      <Banner/>
      <ThreeColumns/>
      <FourSteps/>
      <AboutUs/>
     

    </div>
    
  )
}

export default Home;
