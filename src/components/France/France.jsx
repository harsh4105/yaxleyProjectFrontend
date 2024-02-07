import React from "react";
import './France.css';
import FranceImg from '../images/FranceImg.png';
import Francetext from '../images/Francetext.png';


const France=()=>{
    return(
        <div className="France-section-for-services">
            <div className="France-left-section">
                <img src={FranceImg} alt="France-and-offer-img" />
            </div>
            <div className="Singapore-right-section">
                <img src={Francetext} alt="France-people-img" />
            </div>
        </div>
    )
}

export default France;

