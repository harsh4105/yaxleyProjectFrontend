import React from 'react';
import HeroForUSACountry from '../components/HeroSection/HeroForUSACountry';
import WhyStudyInUsa from '../components/WhyStudyInUsa/WhyStudyInUsa';
import AdvantagesOfUsaEducation from '../components/AdvantagesOfUsaEducation/AdvantagesOfUsaEducation';
import GlobalRecognizationOfUsaEducation from '../components/GlobalRecognizationOfUsaEducation/GlobalRecognizationOfUsaEducation';

const USAPage = () => {
  return (
    <div>
      <HeroForUSACountry/>
      <WhyStudyInUsa/>
      <AdvantagesOfUsaEducation/>
      <GlobalRecognizationOfUsaEducation/>
    </div>
  );
};

export default USAPage;

