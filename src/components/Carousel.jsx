import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const currentImage = images[currentIndex];

    return (
        <div id="carousel">
            <div id="innerCarousel" style={{ backgroundImage: `url(${currentImage.img})` }}>
                <div id="leftButton" onClick={prevImage}>
                    <ArrowBackIosIcon style={{ color: "white", fontSize: "24px" }} />
                </div>
                <div id="centerText">
                    <h1>{currentImage.title}</h1>
                    <p>{currentImage.subtitle}</p>
                </div>
                <div id="rightButton" onClick={nextImage}>
                    <ArrowForwardIosIcon style={{ color: "white", fontSize: "24px" }} />
                </div>
            </div>
        </div>
    )
}

export default Carousel;