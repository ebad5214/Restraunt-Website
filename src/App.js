import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Menu from './Pages/Menu/Menu'
import Awards from './Pages/Awards/Awards'
import Contact from './Pages/Contacts/Contact'

// import './App.css';


function App() {
  return (
    <React.Fragment>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/awards">
        <Awards />
      </Route>
      <Route path="/contact">
       <Contact />
      </Route>
    </React.Fragment>
  );
}

export default App;
