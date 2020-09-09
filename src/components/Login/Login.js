import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';


function Login() {



  return (
    <section id="login">

    <div className="container">

    
          <h3>Zaloguj się</h3>
          <div><img src="/images/Decoration.svg"/></div>

          <Formik
      initialValues={{ email: '', password: ''}}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Podany email jest nieprawidłowy!')
          .required('pole wymagane'),
        password: Yup.string()
          .min(6, 'Podane hasło jest za krótkie!')
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
         <form onSubmit={formik.handleSubmit} className="loginForm">
       
          <label htmlFor="email">Email</label>
        
           <input id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <div className ="errorMsg">{formik.errors.email}</div>
           ) : <div className ="correct"> </div>}

         <label htmlFor="password">Hasło</label>

         <input id="password" type="password" {...formik.getFieldProps('password')} />
           {formik.touched.password && formik.errors.password ? (
             <div className ="errorMsg">{formik.errors.password}</div>
           ) : <div className ="correct"> </div>}
         
    
       </form>
       )}
    </Formik>


            <div className="loginButtons">

                  <Link to='/register'>Zarejestruj się</Link>
                  <button className="btn-login" type="submit">Zaloguj się</button>
                  
                
            </div>
           
    </div>

  </section>
  
  )
};

export default Login;
