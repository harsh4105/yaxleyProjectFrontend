import React from "react";
import './Scholarship.css';
import ScholarshipServicesImg from '../images/ScholarshipServicesImg.png';
import ScholarshipAndText from '../images/ScholarshipAndText.png';

const ScholarshipForService=()=>{
    return(
        <div className="scholarship-section-for-services">
            <div className="scholarship-left-section">
                <img src={ScholarshipAndText} alt="scholarship-and-offer-img" />
            </div>
            <div className="scholarship-right-section">
                <img src={ScholarshipServicesImg} alt="scholarship-people-img" />
            </div>
        </div>
    )
}

export default ScholarshipForService;

