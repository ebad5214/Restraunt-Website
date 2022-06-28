import React, { useState } from 'react'

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
                <a>Home</a>
            </li>
            <li className="p__opensans">
                <a>About</a>
            </li>
            <li className="p__opensans">
                <a>Menu</a>
            </li>
            <li className="p__opensans">
                <a>Awards</a>
            </li>
            <li className="p__opensans">
                <a>Contacts</a>
            </li>
        </ul>
        <div className="app_navbar-login">
            <a href="/" className="p__opensans">
                Log In / Register
            </a>
            <div />
            <a href="/" className="p__opensans">
                Book Table
            </a>
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
                        <a>Home</a>
                    </li>
                    <li className="p__opensans">
                        <a>About</a>
                    </li>
                    <li className="p__opensans">
                        <a>Menu</a>
                    </li>
                    <li className="p__opensans">
                        <a>Awards</a>
                    </li>
                    <li className="p__opensans">
                        <a>Contacts</a>
                    </li>
                </ul>
            </div>}
        </div>
    </nav>
  )
}

export default Navbar