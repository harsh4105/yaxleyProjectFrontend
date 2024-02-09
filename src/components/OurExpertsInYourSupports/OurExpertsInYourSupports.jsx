import React from "react";
import './OurExpertsInYourSupports.css';
import  { useState } from 'react';
import OurExpertsInYourSupportImg from '../images/OurExpertsInYourSupportImg.png';
import SaraswathiChandraImg from '../images/SaraswathiChandraImg.png';

const OurExpertsInYourSupports = () => {
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
      <div className="OurExpertsInYourSupports-section">
         <div className="OurExpertsInYourSupports-heading">
            <img src={OurExpertsInYourSupportImg} alt="OurExpertsInYourSupportImg" />
         </div>

         <div className="OurExpertsInYourSupports-carousel-container">
            <div className="OurExpertsInYourSupports-carousel">
               <div className="OurExpertsInYourSupports-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  <div className="OurExpertsInYourSupports-slide slide1">
                     <div className="OurExpertsInYourSupports-items">
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                     </div>
                  </div>
                  <div className="OurExpertsInYourSupports-slide slide2">
                     <div className="OurExpertsInYourSupports-items">
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                     </div>
                  </div>
                  <div className="OurExpertsInYourSupports-slide slide3">
                     <div className="OurExpertsInYourSupports-items">
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                        <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg" />
                     </div>
                  </div>
               </div>
            </div>
            <button onClick={prevSlide} className="OurExpertsInYourSupports-prev-btn">&#10094;</button>
            <button onClick={nextSlide} className="OurExpertsInYourSupports-next-btn">&#10095;</button>
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
      </div>
   )
}
export default OurExpertsInYourSupports;
