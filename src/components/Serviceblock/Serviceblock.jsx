import React from "react";
import './Serviceblock.css';
import tick from '../images/tick.jpg';
const Serviceblock = (props) => {
    return (
        <div className={`Serviceblock-section-for-services ${props.class}`} style={{ backgroundColor: `${props.background}`, }}>
            <div className="Serviceblock-left-section">
                <h1>{props.name}</h1>
                <h4>{props.description}</h4>
                <h2>{props.pointHeading}</h2>
                {/* <p><img src={tick} alt="bullets"/>&nbsp;&nbsp;&nbsp;<span>{props.p1}</span></p> */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '-15px' }}>
                    <img src={tick} alt="bullets" style={{ marginRight: '10px' }} />
                    <span style={{ marginBottom: "5px" }}><p>{props.p1}</p></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '-40px' }}>
                    <img src={tick} alt="bullets" style={{ marginRight: '10px' }} />
                    <span style={{ marginBottom: "5px" }}><p>{props.p2}</p></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '-40px' }}>
                    <img src={tick} alt="bullets" style={{ marginRight: '10px' }} />
                    <span style={{ marginBottom: "5px" }}><p>{props.p3}</p></span>
                </div>
                {/* <p><img src={tick} alt="bullets" /><span>{props.p2}</span></p>
                <p><img src={tick} alt="bullets" /><span>{props.p3}</span></p> */}
                {
                    props.p4 === '' ? <p><span>{props.p4}</span></p> : <div style={{ display: 'flex', alignItems: 'center', marginTop: '-40px' }}>
                        <img src={tick} alt="bullets" style={{ marginRight: '10px' }} />
                        <span style={{ marginBottom: "5px" }}><p>{props.p3}</p></span>
                    </div>
                }
            </div>
            <div className="Serviceblock-right-section">
                <img src={props.image} alt="Service-img" />
            </div>
        </div>
    )
}

export default Serviceblock;

