import React from "react";
import './Usa.css';
import UsaImg from '../images/UsaImg.png';
import RedVector from '../images/RedVector.png'
import Countryblock from "../Countryblock/Countryblock";

const Usa=()=>{
    return(
        <Countryblock image={UsaImg} name='Usa' bullets={RedVector} class={'right'} background='white'/>
    )
}

export default Usa;

