import React from "react";
import './Ireland.css';
import IrelandImg from '../images/IrelandImg.png';
import PinkVector from '../images/PinkVector.png';
import Countryblock from "../Countryblock/Countryblock";


const Ireland=()=>{
    return(
        <Countryblock image={IrelandImg} name='Ireland' bullets={PinkVector} class={'right'} background='white'/>
    )
}

export default Ireland;

