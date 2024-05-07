import React, { useState } from 'react';
import '../styles/styles.css'; 
const images = [
    { src: "/assets/px01.jpg", alt: "1" },
    { src: "/assets/px02.jpg", alt: "2" },
    { src: "/assets/px03.jpg", alt: "3" },
    { src: "/assets/px04.jpg", alt: "4" },
    { src: "/assets/px05.jpg", alt: "5" },
    { src: "/assets/px06.jpg", alt: "6" },
    { src: "/assets/px07.jpg", alt: "7" },
    { src: "/assets/px08.jpg", alt: "8" },
    { src: "/assets/px09.jpg", alt: "9" },
    { src: "/assets/px10.jpg", alt: "10" },
    { src: "/assets/px11.jpg", alt: "11" },
    { src: "/assets/px12.jpg", alt: "12" },
    { src: "/assets/px13.jpg", alt: "13" },
    { src: "/assets/px14.jpg", alt: "14" },
    { src: "/assets/px15.jpg", alt: "15" },
    { src: "/assets/px18.jpg", alt: "18" },
    { src: "/assets/px19.jpg", alt: "19" },
    { src: "/assets/px20.jpg", alt: "20" },
    { src: "/assets/px21.jpg", alt: "21" },
    { src: "/assets/px22.jpg", alt: "22" },
    { src: "/assets/px23.jpg", alt: "23" },
    { src: "/assets/px24.jpg", alt: "24" },
    { src: "/assets/px25.jpg", alt: "25" },
    { src: "/assets/px27.jpg", alt: "27" },
    { src: "/assets/px28.jpg", alt: "28" },
    { src: "/assets/px29.jpg", alt: "29" },
    { src: "/assets/px30.jpg", alt: "30" },
    { src: "/assets/px32.jpg", alt: "32" },
    { src: "/assets/px33.jpg", alt: "33" },
    { src: "/assets/px38.jpg", alt: "38" },
    { src: "/assets/px40.jpg", alt: "40" },
    { src: "/assets/px41.jpg", alt: "41" },
    { src: "/assets/px42.jpg", alt: "42" },
    { src: "/assets/px43.jpg", alt: "43" },
    { src: "/assets/px44.jpg", alt: "44" },
    { src: "/assets/px45.jpg", alt: "45" },
    { src: "/assets/px46.jpg", alt: "46" },
    { src: "/assets/px47.jpg", alt: "47" }
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


