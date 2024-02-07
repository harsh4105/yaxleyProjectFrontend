import React from "react";
import './Testimonial.css';
import TestimonialImg from '../images/TestimonialImg.png';
const Testimonials=()=>{
    return(
        <div className="testimonials-section">
            <h1>Testimonials</h1>
            <p>Explore the heartwarming and inspirig experiences shared by our valuable clients</p>
            <div className="tetmls">
                <img src={TestimonialImg} alt="testimonial-img"/>
            </div>
        </div>
    )
}

export default Testimonials;