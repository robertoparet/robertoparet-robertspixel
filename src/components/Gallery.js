import React, { useState } from 'react';
import '../styles/styles.css'; 

import img1 from '../assets/px01.jpg';
import img2 from '../assets/px02.jpg';
import img3 from '../assets/px03.jpg';
import img4 from '../assets/px04.jpg';
import img5 from '../assets/px05.jpg';
import img6 from '../assets/px06.jpg';
import img7 from '../assets/px07.jpg';
import img8 from '../assets/px08.jpg';
import img9 from '../assets/px09.jpg';
import img11 from '../assets/px11.jpg';
import img12 from '../assets/px12.jpg';
import img13 from '../assets/px13.jpg';
import img14 from '../assets/px14.jpg';
import img15 from '../assets/px15.jpg';
import img18 from '../assets/px18.jpg';
import img19 from '../assets/px19.jpg';
import img20 from '../assets/px20.jpg';
import img21 from '../assets/px21.jpg';
import img22 from '../assets/px22.jpg';
import img23 from '../assets/px23.jpg';
import img24 from '../assets/px24.jpg';
import img25 from '../assets/px25.jpg';
import img27 from '../assets/px27.jpg';
import img28 from '../assets/px28.jpg';
import img29 from '../assets/px29.jpg';
import img30 from '../assets/px30.jpg';
import img32 from '../assets/px32.jpg';
import img33 from '../assets/px33.jpg';
import img38 from '../assets/px38.jpg';
import img40 from '../assets/px40.jpg';
import img41 from '../assets/px41.jpg';
import img42 from '../assets/px42.jpg';
import img43 from '../assets/px43.jpg';
import img44 from '../assets/px44.jpg';
import img45 from '../assets/px45.jpg';
import img46 from '../assets/px46.jpg';
import img47 from '../assets/px47.jpg';


const images = [
    { src: img1, alt: "1" },
    { src: img2, alt: "2" },
    { src: img3, alt: "3" },
    { src: img4, alt: "4" },
    { src: img5, alt: "5" },
    { src: img6, alt: "6" },
    { src: img7, alt: "7" },
    { src: img8, alt: "8" },
    { src: img9, alt: "9" },
    { src: img11, alt: "11" },
    { src: img12, alt: "12" },
    { src: img13, alt: "13" },
    { src: img14, alt: "14" },
    { src: img15, alt: "15" },
    { src: img18, alt: "18" },
    { src: img19, alt: "19" },
    { src: img20, alt: "20" },
    { src: img21, alt: "21" },
    { src: img22, alt: "22" },
    { src: img23, alt: "23" },
    { src: img24, alt: "24" },
    { src: img25, alt: "25" },
    { src: img27, alt: "27" },
    { src: img28, alt: "28" },
    { src: img29, alt: "29" },
    { src: img30, alt: "30" },
    { src: img32, alt: "32" },
    { src: img33, alt: "33" },
    { src: img38, alt: "38" },
    { src: img40, alt: "40" },
    { src: img41, alt: "41" },
    { src: img42, alt: "42" },
    { src: img43, alt: "43" },
    { src: img44, alt: "44" },
    { src: img45, alt: "45" },
    { src: img46, alt: "46" },
    { src: img47, alt: "47" }
];


  

  export function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleClick(image)}
                />
            ))}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={handleClose}>
                    <div className="lightbox-content">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="lightbox-image"
                        />
                        <button className="close-button" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


