import React from 'react';
import './IELTS_Section.css';
import WhatIsIELTSHeadingImg from '../images/WhatIsIELTSHeadingImg.png';
import IELTSDifferenceImg from '../images/IELTSDifferenceImg.png';
import GlobalPartnershipImg from '../images/GlobalPartnershipImg.png';
const IELTS_Section = () => {
    return (
        <div className='IELTS-Section'>
            <div className='IELTS-Section-heading'>
                <img src={WhatIsIELTSHeadingImg} alt="WhatIsIELTSHeadingImg" />
            </div>
            <div className='IELTS-Section-contain'>
                <img src={IELTSDifferenceImg} alt="IELTSDifferenceImg" />
                <img src={GlobalPartnershipImg} alt="GlobalPartnershipImg" />
            </div>
        </div>
    )
}

export default IELTS_Section;
