import React from 'react'

import { images } from '../../../Constants';

const SubHeading = (props) => {
  return (
    <div style={{marginBottom: '1rem' }}>
    <p className='p__cormorant'>{props.title}</p>
    <img src={images.spoon} alt = "spoon" className='spoon_img'/>
    <p className='p__opensans'></p>
  </div>
  )
}

export default SubHeading