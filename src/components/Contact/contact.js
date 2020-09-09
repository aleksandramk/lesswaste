import React from 'react';
import ContactForm from './contactForm';
import ContactFormFormik from './contactFormFormik';



function Contact() {
  return (
    <section id="contact">

      <div className="container">

      <div className="contact-text">

         <h3>Skontaktuj się z nami</h3>
             <div><img src="/images/Decoration.svg"/></div>
             
             <ContactFormFormik/>
             
      </div>
 
        
      </div>
     

    </section>
    
  )
}

export default Contact;
