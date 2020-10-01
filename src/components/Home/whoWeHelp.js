import React, {useState, useEffect} from 'react';
import Fundations from './pagFundations';



function WhoWeHelp() {

  const [activeType,setActiveType] = useState("fundations");

  const whoWeHelpType = [
    {
        key:"fundations",
        title: "Fundacjom", 
        description: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."
    },
    {
      key:"organizations",
        title: "Organizacjom pozarządowym", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      key:"local",
        title: "Lokalnym zbiórkom", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi assumenda ex, qui quam, labore, accusantium autem consectetur minus enim voluptatem nihil?"
    }
];

  

  return (
    <section id="whoWeHelp">
      <div className="container">

      <div className="whoWeHelp-header">

        <h3>Komu pomagamy?</h3>
        <div><img src="/images/Decoration.svg"/></div>

        <div className= "whoWeHelp-btns">

        {whoWeHelpType.map( (el, key) => {
                        return (
                
                            <button 
                                key={key} 
                                className={`whoWeHelp-type ${activeType === key ? "active" : ""}`}
                                onClick={() => setActiveType(el.key)}>
                                {el.title}
                            </button>
                          
                        )
                    })}



        </div>

        <div className="type-description">
                            
                            </div>

                        <Fundations acvtiveFundation={activeType}/>
      </div>

                    

      </div>

    </section>
    
  )
}

export default WhoWeHelp;
