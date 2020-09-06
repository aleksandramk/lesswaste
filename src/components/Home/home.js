import React from 'react';
import Banner from './banner';
import ThreeColumns from './threeColumns';
import FourSteps from './fourSteps';
import AboutUs from './aboutUs';
import WhoWeHelp from './whoWeHelp';
import Contact from '../Contact/contact';
import Footer from '../Footer/footer';


function Home() {
  return (
    <div className="home-page" id="home">
      
      <Banner/>
      <ThreeColumns/>
      <FourSteps/>
      <AboutUs/>
      <WhoWeHelp/>
      <Contact/>
      <Footer/>
     
    </div>
    
  )
}

export default Home;
