import React from "react";
import './Poland.css';
import PolandImg from '../images/PolandImg.png';
import Polandtext from '../images/Polandtext.png';


const Poland=()=>{
    return(
        <div className="Poland-section-for-services">
            <div className="Poland-left-section">
                <img src={Polandtext} alt="Poland-and-offer-img" />
            </div>
            <div className="Poland-right-section">
                <img src={PolandImg} alt="Poland-people-img" />
            </div>
        </div>
    )
}

export default Poland;

