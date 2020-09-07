import React from 'react';
import {Link} from 'react-router-dom';

function FourSteps() {
  return (
    <section id ="fourSteps">

        

        <div className="fourSteps-title">
            <h3>Wystarczą 4 proste kroki</h3>
            <div><img src="/images/Decoration.svg"/></div>
         </div>

         <div className="fourSteps-highlight">
         <div className="container">
           
            <article className ="step1">
                        <div><img src="/images/Icon-1.svg"/></div>
                        <h3 className="step-title">Wybierz rzeczy</h3>
                        <p className ="step-text">ubrania, zabawki, sprzęt i inne</p>
             </article>

             <article className ="step2">
                        <div><img src="/images/Icon-2.svg"/></div>
                        <h3 className="step-title">Spakuj je</h3>
                        <p className ="step-text">skorzystaj z worków na śmieci</p>
            </article>
                
            <article className ="step3">
                        <div><img src="/images/Icon-3.svg"/></div>
                        <h3 className="step-title">Zdecyduj komu chcesz pomóc</h3>
                        <p className ="step-text">wybierz zaufane miejsce</p>
            </article>
            <article className ="step4">
                        <div><img src="/images/Icon-4.svg"/></div>
                        <h3 className="step-title">Zamów kuriera</h3>
                        <p className ="step-text">kurier przyjedzie w dogodnym terminie</p>
            </article>
        </div>
        </div>
        
            <div className="returnBtn"><Link to='/login'>Oddaj rzeczy</Link></div>

            
</section>
  )
}

export default FourSteps;
