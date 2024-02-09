import React, { useState } from 'react';
import './BatchesForYou.css';
import UpcomingImg from '../images/UpcomingImg.png'
import BatchesForYouImg from '../images/BatchesForYouImg.png'
const BatchesForYou = () => {
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
      <div className="BatchesForYou-carousel-container">
         <div className="BatchesForYou-section">
            <div className="BatchesForYou-heading">
               <img src={BatchesForYouImg} alt="BatchesForYouImg" />
            </div>
         </div>
         <div className="BatchesForYou-carousel">
            <div className="BatchesForYou-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
               <div className="BatchesForYou-slide slide1">
                  <img src={UpcomingImg} alt="UpcomingImg" />
               </div>
               <div className="BatchesForYou-slide slide2">
                  <img src={UpcomingImg} alt="UpcomingImg" />
               </div>
               <div className="BatchesForYou-slide slide3">
                  <img src={UpcomingImg} alt="UpcomingImg" />
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

export default BatchesForYou;

{/* <img src={UpcomingImg} alt="UpcomingImg" />


<div className="BatchesForYou-section">
         <div className="BatchesForYou-heading">
            <img src={BatchesForYouImg} alt="BatchesForYouImg" />
         </div>

      </div> */}

// BatchesForYou