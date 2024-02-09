import React from "react";
import './NewzeLand.css';
import NewzelandImg from '../images/NewzelandImg.png';
import BlueVector from '../images/BlueVector.png';
import Countryblock from "../Countryblock/Countryblock";


const NewzeLand=()=>{
    return(
        <Countryblock image={NewzelandImg} name='New Zeland' bullets={BlueVector} class={'right'} background='white'/>
    )
}

export default NewzeLand;

