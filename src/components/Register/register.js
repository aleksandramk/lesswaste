import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {  Formik } from 'formik';
import * as Yup from 'yup';

function Register() {

  return (

    <section id="register">

     <div className="container">

    
         <h3>Zarejestuj się</h3>
          <div><img src="/images/Decoration.svg"/></div>

    <Formik
      initialValues={{ email: '', password1: '', password2: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('email niepoprawny')
          .required('pole wymagane'),
        password1: Yup.string()
          .min(6, 'Hasło niepoprawne')
          .required('pole wymagane'),
        password2: Yup.string()
          .min(6, 'Hasło niepoprawne')
          .oneOf([Yup.ref('password1')], 'Hasło musi być takie samo!')
          .required('pole wymagane'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
       {formik => (
         <form onSubmit={formik.handleSubmit} className="registerForm">
       
          <label htmlFor="email">Email</label>
        
           <input id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <div className ="errorMsg">{formik.errors.email}</div>
           ) : <div className ="correct"> </div>}

         <label htmlFor="password1">Hasło</label>

         <input id="password1" type="password" {...formik.getFieldProps('password1')} />
           {formik.touched.password1 && formik.errors.password1 ? (
             <div className ="errorMsg">{formik.errors.password1}</div>
           ) : <div className ="correct"> </div>}
         
         <label htmlFor="password2">Powtórz hasło</label>
         <input id="password2" type="password" {...formik.getFieldProps('password2')} />
           {formik.touched.password2 && formik.errors.password2 ? (
             <div className ="errorMsg">{formik.errors.password2}</div>
           ) : <div className ="correct"> </div>}
       </form>
       )}
    </Formik>
 
 
           <div className="loginButtons">

                  <Link to='/login'>Zaloguj się</Link>
                 <button className="btn-login" type="submit">Załóż konto</button> 
                
           </div>
           
     </div>

   </section>
  );
  
 
}

export default Register;
