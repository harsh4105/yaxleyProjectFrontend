import React from 'react';
import './WhyStudyInUsa.css';
import WhyStudyInUsaText from '../images/WhyStudyInUsaText.png';
const WhyStudyInUsa = () => {
    return (
        <div className='why-study-in-usa-section'>
            <div className="why-study-in-usa-heading-section">
                <img src={WhyStudyInUsaText} alt="why-study-in-usa-heading-img" />
            </div>

            <div className="why-study-in-usa-contain-section">
                <h1>USA Education at a Glance</h1>
                <div className="why-study-in-usa-contain-blocks-section">
                    <div className="why-study-in-usa-contain-block">
                        <h1>Avg Course Fees</h1>
                        <p>25000 US$</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Part Time</h1>
                        <p>20 hours/week</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Avg Living Expenses</h1>
                        <p>15000 US$</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Dependents Allowed</h1>
                        <p>Allowed with restriction to work</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Language Requirements</h1>
                        <p>IELTS -</p>
                        <p> UG Minimum 6.0+</p>
                        <p> PG Minimum 6.5+</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Post Study Work</h1>
                        <p>1 Year to 3 year Depends on the course</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>Financial Requirements</h1>
                        <p>Bank statement or FD with source of funds</p>
                    </div>
                    <div className="why-study-in-usa-contain-block">
                        <h1>English Language Waiver</h1>
                        <p>Not po</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyStudyInUsa;

