import React from "react";
import './AdmissionForServices.css';
import AdmisionImgServices from '../images/AdmisionImgServices.png';
import AdmissionAndOffering from '../images/AdmissionAndOffering.png';

const AdmissionForService=()=>{
    return(
        <div className="admission-section-for-services">
            <div className="admission-left-section">
                <img src={AdmisionImgServices} alt="admission-and-offer-img" />
            </div>
            <div className="admission-right-section">
                <img src={AdmissionAndOffering} alt="admission-people-img" />
            </div>
        </div>
    )
}

export default AdmissionForService;

