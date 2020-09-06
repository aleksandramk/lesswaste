import React from 'react';
import ContactForm from './contactForm';



function Contact() {
  return (
    <section id="contact">

      <div className="container">

      <div className="contact-text">

         <h3>Skontaktuj się z nami</h3>
             <div><img src="/images/Decoration.svg"/></div>
             
             <ContactForm/>
             
      </div>
 
        
      </div>
     

    </section>
    
  )
}

export default Contact;
