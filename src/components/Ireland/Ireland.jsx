import React from "react";
import './Ireland.css';
import IrelandImg from '../images/IrelandImg.png';
import Irelandtext from '../images/Irelandtext.png';


const Ireland=()=>{
    return(
        <div className="Ireland-section-for-services">
            <div className="Ireland-left-section">
                <img src={Irelandtext} alt="Ireland-and-offer-img" />
            </div>
            <div className="Ireland-right-section">
                <img src={IrelandImg} alt="Ireland-people-img" />
            </div>
        </div>
    )
}

export default Ireland;

