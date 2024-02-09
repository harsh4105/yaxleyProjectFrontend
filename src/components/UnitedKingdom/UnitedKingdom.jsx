import React from "react";
import './UnitedKingdom.css';
import UnitedImg from '../images/UnitedImg.png';
import Countryblock from "../Countryblock/Countryblock";
import GreenVector from '../images/GreenVector.png'

const UnitedKingdom=()=>{
    return(
        <Countryblock image={UnitedImg} name='United Kingdom' bullets={GreenVector} class={'left'} background='#F0FFE2'/>
    )
}

export default UnitedKingdom;

