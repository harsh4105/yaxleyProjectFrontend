import React from "react";
import './Australia.css';
import AustraliaImg from '../images/AustraliaImg.png';
import Countryblock from "../Countryblock/Countryblock";
import RedVector from '../images/RedVector.png'

const Australia = () => {
    return (
        <Countryblock image={AustraliaImg} name='Australia' bullets={RedVector} class={'left'} background='#FFFBE5'/>
    )
}

export default Australia;

