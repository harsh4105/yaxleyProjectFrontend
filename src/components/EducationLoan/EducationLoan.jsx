import React from "react";
import './EducationLoan.css';
import EducationLoanImg from '../images/EducationLoanImg.png';
import EducationLoanText from '../images/EducationLoanText.png';

const EducationLoanForService=()=>{
    return(
        <div className="educationloan-section-for-services">
            <div className="educationloan-left-section">
                <img src={EducationLoanText} alt="educationloan-and-offer-img" />
            </div>
            <div className="educationloan-right-section">
                <img src={EducationLoanImg} alt="educationloan-people-img" />
            </div>
        </div>
    )
}

export default EducationLoanForService;

