import React from "react";
import './AdvantagesOfUsaEducation.css';
import AdvantagesOfEducationImg from '../images/AdvantagesOfEducationImg.png';
import QualityEducationImg from '../images/QualityEducationImg.png';
import DivarseRangeOfProgram from '../images/DivarseRangeOfProgram.png';
import CulturalDiversity from '../images/CulturalDiversity.png';
import FlexibilityInCurcumImg from '../images/FlexibilityInCurcumImg.png';
import ResearchOpportunities from '../images/ResearchOpportunities.png';
import UsaCountryImg from '../images/UsaCountryImg.png';
const AdvantagesOfUsaEducation=()=>{
    return(
        <div className="Advantages-Of-Usa-Education-section">
            <div className="Advantages-Of-Usa-Education-left">
                <div className="AOUEL-heading">
                  <img src={AdvantagesOfEducationImg} alt="AdvantagesOfEducationImg" />
                </div>
                  <img src={QualityEducationImg} alt="QualityEducationImg" />
                  <img src={DivarseRangeOfProgram} alt="DivarseRangeOfProgram" />
                  <img src={CulturalDiversity} alt="CulturalDiversity" />
                  <img src={FlexibilityInCurcumImg} alt="FlexibilityInCurcumImg" />
                  <img src={ResearchOpportunities} alt="ResearchOpportunities" />
                  <img src={QualityEducationImg} alt="QualityEducationImg" />
                  <img src={DivarseRangeOfProgram} alt="DivarseRangeOfProgram" />
                  <img src={CulturalDiversity} alt="CulturalDiversity" />
                  <img src={FlexibilityInCurcumImg} alt="FlexibilityInCurcumImg" />
                  <img src={ResearchOpportunities} alt="ResearchOpportunities" />
                  <img src={DivarseRangeOfProgram} alt="DivarseRangeOfProgram" />
                  <img src={CulturalDiversity} alt="CulturalDiversity" />
                  <img src={FlexibilityInCurcumImg} alt="FlexibilityInCurcumImg" />
                  <img src={ResearchOpportunities} alt="ResearchOpportunities" />
            </div>
            <div className="Advantages-Of-Usa-Education-right">
                  <img src={UsaCountryImg} alt="ResearchOpportunities" />
            </div>
        </div>
    )
}
export default AdvantagesOfUsaEducation;
