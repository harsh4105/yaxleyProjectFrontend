import React from "react";
import './Singapore.css';
import SingaporeImg from '../images/SingaporeImg.png';
import Singaporetext from '../images/Singaporetext.png';


const Singapore=()=>{
    return(
        <div className="Singapore-section-for-services">
            <div className="Singapore-left-section">
                <img src={SingaporeImg} alt="Singapore-and-offer-img" />
            </div>
            <div className="Singapore-right-section">
                <img src={Singaporetext} alt="Singapore-people-img" />
            </div>
        </div>
    )
}

export default Singapore;

