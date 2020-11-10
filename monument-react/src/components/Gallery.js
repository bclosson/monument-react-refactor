import React from 'react';

import galleryImageOne from '../images/gallery_1.jpg';
import galleryImageTwo from '../images/gallery_2.jpg';
import galleryImageThree from '../images/gallery_3.jpg';
import galleryImageFour from '../images/gallery_4.jpg';
import galleryImageFive from '../images/gallery_5.jpg';
import galleryImageSix from '../images/gallery_6.jpg';

const Gallery = (props) => {
  return (
    <div>
      <section id="gallery">
        <div className="wrap">
          <h2>Issue Twenty</h2>
          <h3>A visual guide to the Southwest</h3>
          <div className="masonry">
            <img src={galleryImageOne} alt="Small Cactus" />
            <img src={galleryImageThree} alt="Small Prickley Cactus" />
            <img src={galleryImageFour} alt="Lone Tree in the Desert" />
            <img src={galleryImageTwo} alt="Dessert Landscape" />
            <img src={galleryImageFive} alt="Straight Cactus Landscape" />
            <img src={galleryImageSix} alt="Mulitple Arm Cactus Landscape" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery;