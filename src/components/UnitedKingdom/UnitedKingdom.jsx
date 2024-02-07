import React from "react";
import './UnitedKingdom.css';
import UnitedImg from '../images/UnitedImg.png';
import Unitedtext from '../images/Unitedtext.png';


const UnitedKingdom=()=>{
    return(
        <div className="united-section-for-services">
            <div className="united-left-section">
                <img src={UnitedImg} alt="united-and-offer-img" />
            </div>
            <div className="united-right-section">
                <img src={Unitedtext} alt="united-people-img" />
            </div>
        </div>
    )
}

export default UnitedKingdom;

