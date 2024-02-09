import React from "react";
import './Singapore.css';
import SingaporeImg from '../images/SingaporeImg.png';
import BraunVector from '../images/BraunVector.png';
import Countryblock from "../Countryblock/Countryblock";


const Singapore=()=>{
    return(
        <Countryblock image={SingaporeImg} name='Singapore' bullets={BraunVector} class={'left'} background='#FEF5EB'/>
    )
}

export default Singapore;

