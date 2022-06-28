import React, { useRef } from 'react'
import {
    BsInstagram,
    BsArrowLeftShort,
    BsArrowRightShort,
  } from "react-icons/bs";

  import SubHeading from '../../../Components/Store/SubHeading/SubHeading';
  import { images } from '../../../Constants';
  import './Gallery.css'

  const Images = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

const Gallery = () => {

    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      const currnet = scrollRef
  
      if(direction === 'left') {
        currnet.scrollLeft -= 300;
      } else {
        currnet.scrollLeft += 300;
      }
    }

  return (
    <div className="APP__gallery flex__center">
      <div className="APP__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="APP__gallery-images">
        <div className="APP__gallery-images_container" ref={scrollRef}>
          {Images.map((image, index) => (
            <div className="APP__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt = "gallery"/>
              <BsInstagram className="APP__gallery-images_icon" />
            </div>
          ))}
        </div>
        <div className="APP__gallrey-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery