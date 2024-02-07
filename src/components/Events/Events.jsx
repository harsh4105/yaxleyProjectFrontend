import React from "react";
import './Events.css';
import EventImg from "../images/EventImg.png";
const Events=()=>{
    return(
        <div className="Events-section">
            <h1>Events</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div className="event-blocks">
                <div className="event-blk">
                    <img src={EventImg} alt="event-img" />
                    <button>Registration</button>
                </div>
                <div className="event-blk">
                    <img src={EventImg} alt="event-img" />
                    <button>Registration</button>
                </div>
                <div className="event-blk">
                    <img src={EventImg} alt="event-img" />
                    <button>Registration</button>
                </div>
                <div className="event-blk">
                    <img src={EventImg} alt="event-img" />
                    <button>Registration</button>
                </div>
            </div>
        </div>
    )
}

export default Events;