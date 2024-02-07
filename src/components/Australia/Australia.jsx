import React from "react";
import './Australia.css';
import AustraliaImg from '../images/AustraliaImg.png';
import Australiatext from '../images/Australia.text.png';


const Australia=()=>{
    return(
        <div className="australia-section-for-services">
            <div className="australia-left-section">
                <img src={AustraliaImg} alt="australia-and-offer-img" />
            </div>
            <div className="australia-right-section">
                <img src={Australiatext} alt="australia-people-img" />
            </div>
        </div>
    )
}

export default Australia;

