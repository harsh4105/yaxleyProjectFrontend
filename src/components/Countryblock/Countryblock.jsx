import React from "react";
import './Countryblock.css';

const Countryblock=(props)=>{
    return(
        <div  className={`Countryblock-section-for-services ${props.class}`} style={{backgroundColor: `${props.background}`,}}>
            <div className="Countryblock-left-section">
                <h1>{props.name}</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4>
                <h2>About Us University in {props.name}</h2>
                <p><img src={props.bullets} alt="bullets"/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span></p>
                <p><img src={props.bullets} alt="bullets"/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span></p>
                <p><img src={props.bullets} alt="bullets"/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span></p>
                <p><img src={props.bullets} alt="bullets"/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</span></p>
            </div>
            <div className="Countryblock-right-section">
                <img src={props.image} alt="country-img" />
            </div>
        </div>
    )
}

export default Countryblock;

const countries = [
    {
      "name": "United States",
      "description": "The United States of America, commonly known as the United States (U.S. or US) or America, is a country primarily located in North America.",
      "image": "usa.jpg",
      "color": "#ff0000",
      "bullets":""
    },
    {
      "name": "United Kingdom",
      "description": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country located off the northwestern coast of mainland Europe.",
      "image": "uk.jpg",
      "color": "#0000ff"
    },
    {
      "name": "France",
      "description": "France, officially the French Republic, is a country primarily located in Western Europe.",
      "image": "france.jpg",
      "color": "#ffffff"
    },
  ];
  