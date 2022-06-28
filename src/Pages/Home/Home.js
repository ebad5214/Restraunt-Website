import React from 'react'
// import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import HeaderWeb from './HeaderWeb/HeaderWeb'
import Intro from './Intro/Intro'
// import Navbar from './Navbar/Navbar'

import './Home.css'
import Chef from './Chef/Chef'

const Home = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <HeaderWeb />
      <Chef />
      <Intro />
      <Gallery />
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Home