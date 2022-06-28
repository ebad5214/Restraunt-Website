import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import NewsLetter from './NewsLetter'
import { images } from '../../../Constants'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
    <NewsLetter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>
          Contact Us
        </h1>
        <p className='p__opensans'>Shop Number 7 Sham-E-Avadh Bazaar, Parivartan Chowk, Hazratganj, Lucknow, Uttar Pradesh 226001</p>
        <p className='p__opensans'>+91 9891984017</p>
        <p className='p__opensans'>+91 8004888912</p>
        <p className='p__opensans'>Mohd.Ebad007@gmail.com</p>
      </div>
      <div className='app__footer-links_logo'>
       <img src={images.Ebad} alt = "logo" style={{width: '30rem', marginTop: '-4rem', marginLeft: '5rem', marginRight: '7rem' }}/>
       <p className='p__opensans'>The Best way to find yourself is to lose yourself in the service of other</p>
       <img src={images.spoon} alt = "spoon" className='spoon__img' style={{marginTop: '15'}}/>
       <div className='app__footer-links_icons'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
       </div>
      </div>
      <div className='app__footer-links_work'>
      <p className='p__opensans'><h3>Working Hours</h3></p>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00 AM - 02:00 AM</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>09:30 AM - 03:00 AM</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>&#169; 2022 Ebad's. All Rights reserved</p>
    </div>
  </div>
  )
}

export default Footer