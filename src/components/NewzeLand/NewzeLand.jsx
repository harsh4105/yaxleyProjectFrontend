import React from "react";
import './NewzeLand.css';
import NewzelandImg from '../images/NewzelandImg.png';
import Newzelandtext from '../images/Newzelandtext.png';


const NewzeLand=()=>{
    return(
        <div className="newzeland-section-for-services">
            <div className="newzeland-left-section">
                <img src={Newzelandtext} alt="newzeland-and-offer-img" />
            </div>
            <div className="newzeland-right-section">
                <img src={NewzelandImg} alt="newzeland-people-img" />
            </div>
        </div>
    )
}

export default NewzeLand;

