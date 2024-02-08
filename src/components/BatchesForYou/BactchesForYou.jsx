import React from "react";
import './BatchesForYou.css';
import UpcomingImg from '../images/UpcomingImg.png';
import BatchesForYouImg from '../images/BatchesForYouImg.png';
const BatchesForYou=()=>{
   return(
      <div className="BatchesForYou-section">
         <div className="BatchesForYou-heading">
            <img src={BatchesForYouImg} alt="BatchesForYouImg" />
         </div>
         <div className="BatchesForYou-items">
            <img src={UpcomingImg} alt="UpcomingImg" />
         </div>
      </div>
   )
}
export default BatchesForYou;