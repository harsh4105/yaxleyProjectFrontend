import React from "react";
import './LeaveMessage.css';
import leaveDiscription from '../images/leaveDiscription.png';
const LeaveMessage=()=>{
    return(
        <div className="leave-message-section">
            <div className="leave-message-section-heading">
                <h1>Leave a Message</h1>
                <img src={leaveDiscription} alt="discription-img" />
            </div>
            <div className="leave-message-section-inputs">
                 <input type="text" placeholder="Enter your Full Name" />
                 <input type="text" placeholder="Enter your Email Address (sample123@gmail.com)"/>
                 <input type="text" placeholder="Enter your Mobile Number"/>
                 <textarea cols="30" rows="10" placeholder="Tell us a few words...."></textarea>
                 <button>Send Message <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default LeaveMessage;