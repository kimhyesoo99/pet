import React, { useState } from 'react';
import '../css/mainSlide.css';

const MainSlide = () => {


    const slides = [
        { id: 1, imgurl: '/img/main_banner_img.png', backgroundImg: '/img/main_banner_img_small01.png', alt: 'Slide 1' },
        { id: 2, imgurl: '/img/main_banner_img2.png', backgroundImg: '/img/main_banner_img_small02.png', alt: 'Slide 2' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };


    return (
        <div className="slideCont">
            <div
                className="slide-wrapper"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div className="slide" key={slide.id}>
                        <img src={slide.imgurl} alt={slide.alt} />
                        <div
                            className="slide-background"
                            style={{ backgroundImage: `url(${slide.backgroundImg})` }}
                        />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} style={{ position: 'absolute', left: '10px' }}>
                ◀
            </button>
            <button onClick={nextSlide} style={{ position: 'absolute', right: '10px' }}>
                ▶
            </button>
        </div>
    );
};

export default MainSlide;
