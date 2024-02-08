import React from "react";
import './GlobalRecognizationOfUsaEducation.css';
import GlobalRecognisationOfUsaEducationImg from '../images/GlobalRecognisationOfUsaEducationImg.png';
import ReputationOfIntitutesImg from '../images/ReputationOfIntitutesImg.png';
import DiversityOfOptionsImg from '../images/DiversityOfOptionsImg.png';
import ProfessionalDevelopmentImg from '../images/ProfessionalDevelopmentImg.png';
import InternationalContactsImg from '../images/InternationalContactsImg.png';
import NetworkingInAMeltingPointImg from '../images/NetworkingInAMeltingPointImg.png';

import UsaCountryImg from '../images/UsaCountryImg.png';
const GlobalRecognizationOfUsaEducation=()=>{
    return(
        <div className="Global-Recognization-Of-Usa-Education-section">
            <div className="Global-Recognization-Of-Usa-Education-left">
                <div className="GROUEL-heading">
                  <img src={GlobalRecognisationOfUsaEducationImg} alt="GlobalRecognisationOfUsaEducationImg" />
                </div>
                  <img src={ReputationOfIntitutesImg} alt="ReputationOfIntitutesImg" />
                  <img src={DiversityOfOptionsImg} alt="DiversityOfOptionsImg" />
                  <img src={ProfessionalDevelopmentImg} alt="ProfessionalDevelopmentImg" />
                  <img src={InternationalContactsImg} alt="InternationalContactsImg" />
                  <img src={NetworkingInAMeltingPointImg} alt="NetworkingInAMeltingPointImg" />
            </div>
            <div className="Global-Recognization-Of-Usa-Education-right">
                  <img src={UsaCountryImg} alt="ResearchOpportunities" />
            </div>
        </div>
    )
}
export default GlobalRecognizationOfUsaEducation;
