import React from "react";
import './Serviceblock.css';
import tick from '../images/tick.jpg';
const Serviceblock=(props)=>{
    return(
        <div  className={`Serviceblock-section-for-services ${props.class}`} style={{backgroundColor: `${props.background}`,}}>
            <div className="Serviceblock-left-section">
                <h1>{props.name}</h1>
                <h4>{props.description}</h4>
                <h2>{props.pointHeading}</h2>
                <p><img src={tick} alt="bullets"/><span>{props.p1}</span></p>
                <p><img src={tick} alt="bullets"/><span>{props.p2}</span></p>
                <p><img src={tick} alt="bullets"/><span>{props.p3}</span></p>
                {
                    props.p4==='' ? <p><span>{props.p4}</span></p>:<p><img src={tick} alt="bullets"/><span>{props.p4}</span></p>
                }
            </div>
            <div className="Serviceblock-right-section">
                <img src={props.image} alt="Service-img" />
            </div>
        </div>
    )
}

export default Serviceblock;

  