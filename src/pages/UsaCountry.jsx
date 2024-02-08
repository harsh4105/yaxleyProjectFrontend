import React from 'react';
import HeroForUSACountry from '../components/HeroSection/HeroForUSACountry';
import WhyStudyInUsa from '../components/WhyStudyInUsa/WhyStudyInUsa';
import AdvantagesOfUsaEducation from '../components/AdvantagesOfUsaEducation/AdvantagesOfUsaEducation';
import GlobalRecognizationOfUsaEducation from '../components/GlobalRecognizationOfUsaEducation/GlobalRecognizationOfUsaEducation';
import PopularUniversities from '../components/PopularUniversities/PopularUniversities';
import ImportantLinks from '../components/ImportantLinks/ImportantLinks';

const USAPage = () => {
  return (
    <div>
      <HeroForUSACountry/>
      <WhyStudyInUsa/>
      <AdvantagesOfUsaEducation/>
      <GlobalRecognizationOfUsaEducation/>
      <PopularUniversities/>
      <ImportantLinks/>
    </div>
  );
};

export default USAPage;
