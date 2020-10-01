import React, {useState, useEffect} from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';


const errorsArr = [];

const ContactFormFormik = () => {
    return (
        <>
    
              <Formik
          initialValues={
              {
                  name: 'Krzysztof',
                  email: 'abc@xyz.pl', 
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
            
            }


          validationSchema={Yup.object({
              name: Yup.string()
              .min(3,'Podane imię jest nieprawidłowe!')
              .matches(/^\s*\S+\s*$/, 'Podane imię jest nieprawidłowe!')
              .required('pole wymagane'),
            email: Yup.string()
              .email('Podany email jest nieprawidłowy!')
              .required('pole wymagane'),
            text: Yup.string()
              .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
              .required('pole wymagane'),
            
      
          })}

        
     
          onSubmit={(values, { setSubmitting }) => {
            
            
            console.log(values)
          }}


        >
           {formik => (
             <form onSubmit={formik.handleSubmit} className="contactForm">

                <div className="person-data">

                  <div className="nameBox">
                  <label htmlFor="name">Wpisz swoje imię</label>
            
            <input id="name" type="text" {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? (
              <div className ="errorMsg">{formik.errors.name}</div>
            ) : <div className ="correct"> </div>}

                  </div>

            <div className="emailBox">

            <label htmlFor="email">Wpisz swój email</label>
            
            <input id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div className ="errorMsg">{formik.errors.email}</div>
            ) : <div className ="correct"> </div>}

            </div>
           

               </div>
    
             <label htmlFor="text">Wpisz swoją wiadomość</label>
    
             <textarea className ="yourText" id="text" type="text" {...formik.getFieldProps('text')} />
               {formik.touched.text && formik.errors.text ? (
                 <div className ="errorMsg">{formik.errors.text}</div>
               ) : <div className ="correct"> </div>}

               <button className="btn-submit" type="submit">Wyślij</button>
             
        
           </form>


           )}
        </Formik>

        
               
        </>
      )
    };

export default ContactFormFormik; 