import React from "react";
import './Canada.css';
import CanadaImg from '../images/CanadaImg.png';
import BlueVector from '../images/BlueVector.png';
import Countryblock from "../Countryblock/Countryblock";
const Canada=()=>{
    return(
        <Countryblock image={CanadaImg} name='Canada' bullets={BlueVector} class={'right'} background='white'/>
    )
}

export default Canada;

