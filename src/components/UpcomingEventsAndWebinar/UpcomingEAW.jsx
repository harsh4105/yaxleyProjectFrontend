import React from "react";
import './UpcomingEAW.css';
import UpcomingImg from '../images/Rectangle.png';
import tick from '../images/tick.jpg';

const UpcomingEAW = () => {
    return (
        <div className="upcoming-for-event">
            <div className="upcoming-section-headings">
                <h1>Upcoming Events & Webinar</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="upcoming-section-context">
                <div className="first-upcoming-section-img">
                    <img src={UpcomingImg} alt="eventImg" />
                </div>
                <div className="first-upcoming-section-context">
                    <h3>Discussion Event</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className="first-upcoming-section-context-points">
                        <img src={tick} alt="tickImg" />
                        <span>Comprehensive guidance on visa documentation</span>
                    </div>
                    <div className="first-upcoming-section-context-points">
                        <img src={tick} alt="tickImg" />
                        <span>Exceptional track record of visa approvals across various</span>
                    </div>
                    <div className="first-upcoming-section-context-points">
                        <img src={tick} alt="tickImg" />
                        <span>Practice sessions for visa intervieran</span>
                    </div>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEAW;