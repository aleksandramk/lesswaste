import React, {useState} from 'react';


function Login() {

  const[email,setEmail] = useState("");
  const[password, setPassword]=useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <section id="login">

    <div className="container">

    
          <h3>Zaloguj się</h3>
          <div><img src="/images/Decoration.svg"/></div>

          <form onSubmit={handleSubmit} className="loginForm">
                
                    <label>Email
                        <textarea className="form-control" type="email" name="name" value={email}
                            onChange={e => setEmail(e.target.value)}/>
                    </label>

                    <label>Hasło
                        <textarea className="form-control" type="password" name="password" value={password}
                            onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <div className="loginButtons">
                      <input className="btn-login" type="submit" value="Zaloguj się"/>
                      <input className="btn-createAccount" type="submit" value="Załóż konto"/>
                    </div>
            </form>
           
    </div>

  </section>
  
  )
}

export default Login;
