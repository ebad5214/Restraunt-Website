import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu/Menu";
import Awards from "./Pages/Awards/Awards";
import Contact from "./Pages/Contacts/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Register from "./Pages/Login/Register";
import Booking from "./Pages/Booking/Booking";


// import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
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
          <Route path="/login">
            <Register />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
