import React from "react";
import './UpcomingEAW.css';
import UpcomingImg from '../images/UpcomingImg.png';
import Upcomingtext from '../images/Upcomingtext.png';
const UpcomingEAW = () => {
    return (
        <div className="upcoming-for-event">
            <div className="upcoming-section-headings">
                <img src={Upcomingtext} alt="Heading"/>
            </div>
            <div className="upcoming-section-context">
                <img src={UpcomingImg} alt="Upcoming-events-img"/>
                <button>Register Now</button>
            </div>
        </div>
    )
}

export default UpcomingEAW;