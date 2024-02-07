import React from "react";
import './Canada.css';
import CanadaImg from '../images/CanadaImg.png';
import Canadatext from '../images/Canadatext.png';


const Canada=()=>{
    return(
        <div className="canada-section-for-services">
            <div className="canada-left-section">
                <img src={Canadatext} alt="canada-and-offer-img" />
            </div>
            <div className="canada-right-section">
                <img src={CanadaImg} alt="canada-people-img" />
            </div>
        </div>
    )
}

export default Canada;

