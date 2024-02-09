import React from "react";
import './Poland.css';
import PolandImg from '../images/PolandImg.png';
import GreenVector from '../images/GreenVector.png';
import Countryblock from "../Countryblock/Countryblock";


const Poland=()=>{
    return(
        <Countryblock image={PolandImg} name='Poland' bullets={GreenVector} class={'right'} background='white'/>
    )
}

export default Poland;

