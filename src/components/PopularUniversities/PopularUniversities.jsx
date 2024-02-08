import React from "react";
import './PopularUniversities.css';
import PopularUniversitiesHeadingImg from '../images/PopularUniversitiesHeadingImg.png';
import PopularUniversitiesImg from '../images/PopularUniversitiesImg.png';
const PopularUniversities=()=>{
    return(
        <div className="Popular-Universities-section">
            <div className="Popular-Universities-Heading">
                <img src={PopularUniversitiesHeadingImg} alt="PopularUniversitiesHeadingImg" />
            </div>
            <div className="Popular-Universities-contain-section">
                <img src={PopularUniversitiesImg} alt="PopularUniversitiesHeadingImg" />
                <img src={PopularUniversitiesImg} alt="PopularUniversitiesHeadingImg" />
            </div>
            <p>More Universities</p>
        </div>
    )
}

export default PopularUniversities;
