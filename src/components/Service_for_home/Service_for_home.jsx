import React from "react";
import './Service_for_home.css';
import counselling from '../images/counselling.png';
import admission from '../images/admission.png';
import visa from '../images/visa.png';
import scholarship from '../images/scholarship.png';
import educationLoan from '../images/educationLoan.png';
const Service_for_Home = () => {
    return (

        <div className="sevice-section-main">
            <div className="service-heading">
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                {/* <p>elit, sed do eiusmod tempor incididunt.</p> */}
            </div>
            <div className="sevice-section">
                <div className="counselling-section">
                    <img src={counselling} alt="counselling-img" />
                </div>
                <div className="other-service">
                    <div className="other-service-section">
                        <img src={admission} alt="admission-img" />
                    </div>
                    <div className="other-service-section">
                        <img src={visa} alt="visa-processing-img" />
                    </div>
                    <div className="other-service-section">
                        <img src={scholarship} alt="scholarship-img" />
                    </div>
                    <div className="other-service-section">
                        <img src={educationLoan} alt="education-loan-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service_for_Home;