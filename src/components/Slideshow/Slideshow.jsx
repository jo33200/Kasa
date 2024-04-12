import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Slideshow.scss'
import ArrowForward from '../../assets/arrow_forward.svg'
import ArrowBack from '../../assets/arrow_back.svg'
import housingData from'../../data/housing.json'


function Slideshow() {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const house = housingData.find(house => house.id === id);
        if (house) {
            setImages([house.cover, ...house.pictures]);
            setCurrentImageIndex(0);
        }
    }, [id]);

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            {images.length > 1 && <ArrowBack onClick={handlePrevious} />}
            <img src={images[currentImageIndex]} alt="" />
            {images.length > 1 && <ArrowForward onClick={handleNext} />}
        </div>
    );
}

export default Slideshow;