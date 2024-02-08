import React from "react";
import './OurExpertsInYourSupports.css';
import OurExpertsInYourSupportImg from '../images/OurExpertsInYourSupportImg.png';
import SaraswathiChandraImg from '../images/SaraswathiChandraImg.png';
import scrollImg from '../images/scrollImg.png';

const OurExpertsInYourSupports=()=>{
   return(
      <div className="OurExpertsInYourSupports-section">
         <div className="OurExpertsInYourSupports-heading">
            <img src={OurExpertsInYourSupportImg} alt="OurExpertsInYourSupportImg"/>
         </div>
         <div className="OurExpertsInYourSupports-items">
            <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg"/>
            <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg"/>
            <img src={SaraswathiChandraImg} alt="SaraswathiChandraImg"/>
         </div>
         <div className="scroll">
            <img src={scrollImg} alt="scrollImg"/>
         </div>
      </div>
   )
}
export default OurExpertsInYourSupports;
