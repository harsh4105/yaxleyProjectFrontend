import React from "react";
import './Country.css';
import country_info from "../images/country_info.png";

const CountryInfo=()=>{
   return(
    <div className="country-info">
        <img src={country_info} alt="country-information-img" />
    </div>
   )
}

export default CountryInfo;