import React from 'react';
import './IELTS_Modules.css';
import IELTDSModuleImg from '../images/IELTDSModuleImg.png';
import ListeningImg from '../images/ListeningImg.png';
import AcedamicReadingImg from '../images/AcedamicReadingImg.png';
import AdcedamicWritingImg from '../images/AdcedamicWritingImg.png';
import SpeakingImg from '../images/SpeakingImg.png';
const IELTS_Modules=()=> {
    return (
      <div className='IELTS_Modules-section'>
        <img src={IELTDSModuleImg} alt="IELTDSModuleImg" />
        <img src={ListeningImg} alt="ListeningImg" />
        <img src={AcedamicReadingImg} alt="AcedamicReadingImg" />
        <img src={AdcedamicWritingImg} alt="AdcedamicWritingImg" />
        <img src={SpeakingImg} alt="SpeakingImg" />
        
      </div>
    );
}

export default IELTS_Modules;
