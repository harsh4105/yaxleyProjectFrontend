import React from "react";
import './VisaProcessing.css';
import visaProcessingImg from '../images/visaProcessingImg.png';
import visaProcessingAndText from '../images/visaProcessingAndText.png';

const VisaForService=()=>{
    return(
        <div className="visa-section-for-services">
            <div className="visa-left-section">
                <img src={visaProcessingImg} alt="visa-and-offer-img" />
            </div>
            <div className="visa-right-section">
                <img src={visaProcessingAndText} alt="visa-people-img" />
            </div>
        </div>
    )
}

export default VisaForService;

