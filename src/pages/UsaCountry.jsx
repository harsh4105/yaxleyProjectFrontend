import React from 'react';
import HeroForUSACountry from '../components/HeroSection/HeroForUSACountry';
import WhyStudyInUsa from '../components/WhyStudyInUsa/WhyStudyInUsa';
import AdvantagesOfUsaEducation from '../components/AdvantagesOfUsaEducation/AdvantagesOfUsaEducation';
import GlobalRecognizationOfUsaEducation from '../components/GlobalRecognizationOfUsaEducation/GlobalRecognizationOfUsaEducation';
import PopularUniversities from '../components/PopularUniversities/PopularUniversities';

const USAPage = () => {
  return (
    <div>
      <HeroForUSACountry/>
      <WhyStudyInUsa/>
      <AdvantagesOfUsaEducation/>
      <GlobalRecognizationOfUsaEducation/>
      <PopularUniversities/>
    </div>
  );
};

export default USAPage;
