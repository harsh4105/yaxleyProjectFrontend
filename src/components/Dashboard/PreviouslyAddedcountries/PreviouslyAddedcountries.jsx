import React from 'react';
import './PreviouslyAddedcountries.css'; 

const PreviouslyAddedcountries = ({country, description, subHeading, p1, p2, p3, p4, avgCourseFee, partTime, avgLivingExpense, dependentsAllowed, languageRequirements, postStudyWorks, financialRequirements, englishLanguageWaiver, lt1, lt2, lt3, lt4, pu1, pu2, pu3, pu4 }) => {
    return (
        <div className="data-block">
            <div className="content">
                <h3 className='country-heading'>Country : <span>{country}</span></h3>
                <p>Description: <span>{description}</span></p>
                <p>Sub Heading: <span>{subHeading}</span></p>
                <ul>
                    <li><span>{p1}</span></li>
                    <li><span>{p2}</span></li>
                    <li><span>{p3}</span></li>
                    <li><span>{p4}</span></li>
                </ul>
                <p>Average Course Fee :</p><span>{avgCourseFee}</span>
                <p>Part-time :</p><span> {partTime}</span>
                <p>Average Living Expense: </p><span>{avgLivingExpense}</span>
                <p>Dependents Allowed:</p> <span>{dependentsAllowed}</span>
                <p>Language Requirements:</p> <span>{languageRequirements}</span>
                <p>Post Study Works: </p><span>{postStudyWorks}</span>
                <p>Financial Requirements: </p><span>{financialRequirements}</span>
                <p>English Language Waiver: </p><span>{englishLanguageWaiver}</span>
                <h4>Link Tittle</h4>
                <ul>
                    <li><span>{lt1}</span></li>
                    <li><span>{lt2}</span></li>
                    <li><span>{lt3}</span></li>
                    <li><span>{lt4}</span></li>
                </ul>
                <h4>Paste Url</h4>
                <ul>
                    <li><span>{pu1}</span></li>
                    <li><span>{pu2}</span></li>
                    <li><span>{pu3}</span></li>
                    <li><span>{pu4}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default PreviouslyAddedcountries;
