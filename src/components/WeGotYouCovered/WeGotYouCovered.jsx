import React from "react";
import './WeGotYouCovered.css';
import WeGotYouCoveredImg from '../images/WeGotYouCoveredImg.png';
import LoremIpsumImg from '../images/LoremIpsumImg.png';
const WeGotYouCovered=()=>{
   return(
      <div className="WeGotYouCovered-section">
         <div className="WeGotYouCovered-heading">
            <img src={WeGotYouCoveredImg} alt="WeGotYouCovered" />
         </div>
         <div className="WeGotYouCovered-items">
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
            <img src={LoremIpsumImg} alt="WeGotYouCovered" />
         </div>
      </div>
   )
}
export default WeGotYouCovered;
