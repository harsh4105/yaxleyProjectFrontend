import React from "react";
import './Usa.css';
import UsaImg from '../images/UsaImg.png';
import Usatext from '../images/Usatext.png';


const Usa=()=>{
    return(
        <div className="usa-section-for-services">
            <div className="usa-left-section">
                <img src={Usatext} alt="usa-and-offer-img" />
            </div>
            <div className="usa-right-section">
                <img src={UsaImg} alt="usa-people-img" />
            </div>
        </div>
    )
}

export default Usa;

