import React from 'react';

import Home from './components/Home/home';
import Login from './components/Login/Login';
import Register from './components/Register/register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/header'
import Logout from './components/Login/Logout';



function App() {

  return (

   
    <Router>

      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path ="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/logout" component={Logout}   />     
      </Switch>

      
    </Router>
    
   
  );
}

export default App;
