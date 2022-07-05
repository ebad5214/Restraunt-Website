import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
                <Link  to="/home">Home</Link>
            </li>
            <li className="p__opensans">
                <Link  to="/about">About</Link>
            </li>
            <li className="p__opensans">
                <Link  to="/menu">Menu</Link>
            </li>
            <li className="p__opensans">
                <Link  to="/awards">Awards</Link>
            </li>
            <li className="p__opensans">
                <Link  to="/contact">Contacts</Link>
            </li>
        </ul>
        <div className="app_navbar-login">
            <Link className="p__opensans" to="/login">Reister</Link>
            <div />
            <Link  className="p__opensans" to="/booking">
                Book Table
            </Link>
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
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="p__opensans">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p__opensans">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="p__opensans">
                        <Link to="awards">Awards</Link>
                    </li>
                    <li className="p__opensans">
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar