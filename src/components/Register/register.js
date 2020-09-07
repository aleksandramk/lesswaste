import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Login() {

  const[email,setEmail] = useState("");
  const[password, setPassword]=useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <section id="login">

    <div className="container">

    
          <h3>Zarejestuj się</h3>
          <div><img src="/images/Decoration.svg"/></div>

          <form onSubmit={handleSubmit} className="loginForm">
                
                    <label>Email
                        <textarea className="form-control" type="email" name="email" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </label>

                    <label>Hasło
                        <textarea className="form-control" type="password" name="password" value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <label>Powtórz hasło
                        <textarea className="form-control" type="password" name="password" value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </label>

                    
            </form>
            <div className="loginButtons">

                  <Link to='/login'>Zaloguj się</Link>
                  <input className="btn-login" type="submit" value="Załóż konto"/>
                  
                
            </div>
           
    </div>

  </section>
  
  )
}

export default Login;
