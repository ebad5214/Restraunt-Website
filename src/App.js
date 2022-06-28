import React from 'react';
import { Route } from 'react-router-dom';
import About from './Components/About/About';
import Awards from './Components/Awards/Awards';
import Contact from './Components/Contacts/Contact';

// import './App.css';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';

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
