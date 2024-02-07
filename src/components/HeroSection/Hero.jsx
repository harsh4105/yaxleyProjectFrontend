import React from "react";
import './Hero.css';
import heroSectionStudent from '../images/heroSectionStudent.png';
const Hero = () => {
    return (
        <div className="hero-section">
            <div className="left-right-section">
                <div className="hero-left-side">
                    <p>Shaping Futures ,
                        Connecting Cultures</p>
                    <span>Our technology-driven solutions assist international students in selecting top univercity world wide.</span>
                    <button>Enquire Now</button>
                </div>
                <div className="hero-right-side">
                    <img src={heroSectionStudent} alt="student-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;