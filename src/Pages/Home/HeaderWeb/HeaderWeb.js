import React from 'react'

import SubHeading from '../../../Components/Store/SubHeading/SubHeading'
import './HeaderWeb.css'
import { images } from '../../../Constants'

const HeaderWeb = () => {
  return (
    <div className='app__header app__wrapper section_padding' id='home'>
    <div className='app__wrapper_info'>
       <SubHeading title='Chase the new flavor'/>
       <h1 className='app__header-h1'>The key<br />to Fine<br />Dining </h1>
       <p className='p__opensans' style={{ margin: '2rem 0', fontSize: '1rem' }}>"People who love to eat are always the best people."<br/>A good restaurant is like a vacation;<br/> it transports you, and it becomes a lot more than just about the food. ...</p>
       <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt = 'header img'/>
    </div>  
  </div>
  )
}

export default HeaderWeb