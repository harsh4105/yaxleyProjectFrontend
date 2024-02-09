import React from "react";
import './France.css';
import FranceImg from '../images/FranceImg.png';
import Countryblock from "../Countryblock/Countryblock";
import RedVector from '../images/RedVector.png';

const France=()=>{
    return(
        <Countryblock image={FranceImg} name='France' bullets={RedVector} class={'left'} background='#FFECEC'/>
    )
}

export default France;

