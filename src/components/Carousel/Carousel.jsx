import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel-container">
            <div className="testimonials-section">
                <h1>Testimonials</h1>
                <p>Explore the heartwarming and inspirig experiences shared by our valuable clients</p>
            </div>
            <div className="carousel">
                <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="slide slide1">
                        <div>
                            <h1>Sheree</h1>
                            <p>Mar 21, 2022</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                        <div>
                            <h1>Alyse</h1>
                            <p>Sep 13, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div>
                            <h1>Jia</h1>
                            <p>Aug 7, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                        <div>
                            <h1>Harry</h1>
                            <p>Mar 13, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                    </div>
                    <div className="slide slide3">
                        <div>
                            <h1>David</h1>
                            <p>april 12, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                        <div>
                            <h1>Sneha</h1>
                            <p>june 19, 2023</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={prevSlide} className="prev-btn">&#10094;</button>
            <button onClick={nextSlide} className="next-btn">&#10095;</button>
            <div className="dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? 'dot active' : 'dot'}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
