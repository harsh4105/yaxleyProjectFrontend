import React from "react";
import './Counselling.css';
import CounsellingOfferForService from '../images/CounsellingOfferForService.png';
import CoundellingForServices from '../images/CoundellingForServices.png';
const CounsellingForService=()=>{
    return(
        <div className="counselling-section-for-services">
            <div className="counselling-left-section">
                <img src={CounsellingOfferForService} alt="counselling-and-offer-img" />
            </div>
            <div className="counselling-right-section">
                <img src={CoundellingForServices} alt="counselling-people-img" />
            </div>
        </div>
    )
}

export default CounsellingForService;

