import React from "react";
import './Hero.css';
import heroSectionStudent from '../images/heroSectionStudent.png';
const HeroForService = () => {
    return (
        <div className="hero-section">
            <div className="left-right-section">
                <div className="hero-left-side">
                    <p>Services we offer</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                    <button>Contact Us</button>
                </div>
                <div className="hero-right-side">
                    <img src={heroSectionStudent} alt="student-img" />
                </div>
            </div>
        </div>
    )
}

export default HeroForService;