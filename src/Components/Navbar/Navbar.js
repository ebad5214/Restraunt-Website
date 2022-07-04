import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from '../../Constants/images';
import './Navbar.css'

const Navbar = () => {
   
    const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app_navbar">
        <div className="app_navbar-logo">
            <img src={images.Ebad} alt="Ebad's" />
        </div>
        <ul className="app_navbar-links">
            <li className="p__opensans">
                <NavLink activeClassName='active' to="/home">Home</NavLink>
            </li>
            <li className="p__opensans">
                <NavLink activeClassName='active' to="/about">About</NavLink>
            </li>
            <li className="p__opensans">
                <NavLink activeClassName='active' to="/menu">Menu</NavLink>
            </li>
            <li className="p__opensans">
                <NavLink activeClassName='active' to="/awards">Awards</NavLink>
            </li>
            <li className="p__opensans">
                <NavLink activeClassName='active' to="/contact">Contacts</NavLink>
            </li>
        </ul>
        <div className="app_navbar-login">
            <NavLink className="p__opensans" to="/login">Reister</NavLink>
            <div />
            <NavLink  className="p__opensans" to="/booking">
                Book Table
            </NavLink>
        </div>
        <div className="app_navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && <div className="app_navbar-smallScreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu
                    fontSize={27}
                    className="overlay__close"
                    onClick={() => setToggleMenu(false)}
                />
                <ul className="app_navbar-smallscreen-links">
                    <li className="p__opensans">
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="p__opensans">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="p__opensans">
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li className="p__opensans">
                        <NavLink to="awards">Awards</NavLink>
                    </li>
                    <li className="p__opensans">
                        <NavLink to="/contact">Contacts</NavLink>
                    </li>
                </ul>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar