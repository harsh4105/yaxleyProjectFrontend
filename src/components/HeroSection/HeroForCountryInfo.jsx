import React from "react";
import './HeroForCountryInfo.css';
import angledown from '../images/angledown.png';

const CountryInfoHeroForService = () => {
    return (
        <div className="hero-section">
            <div className="hero-countryInfo">
                <p>Country Information</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                <div className='country-search-bar'>
                    <input
                        type="text"
                        placeholder="Please enter your email Id"
                    />
                    <button type="search"><img className="btn-img" src={angledown} alt="img"/></button>
                </div>
            </div>
        </div>
    )
}

export default CountryInfoHeroForService;