import React, { useState } from 'react';
import CountryInfoHeroForService from '../components/HeroSection/HeroForCountryInfo';
import Usa from '../components/Usa/Usa';
import UnitedKingdom from '../components/UnitedKingdom/UnitedKingdom';
import Canada from '../components/Canada/Canada';
import Australia from '../components/Australia/Australia';
import NewzeLand from '../components/NewzeLand/NewzeLand';
import Singapore from '../components/Singapore/Singapore';
import Ireland from '../components/Ireland/Ireland';
import France from '../components/France/France';
import Poland from '../components/Poland/Poland';
import Faqs from '../components/Faqs/Faqs';

const CountryInfo = () => {
  return (
    <div>
       <CountryInfoHeroForService/>
       <Usa/>
       <UnitedKingdom/>
       <Canada/>
       <Australia/>
       <NewzeLand/>
       <Singapore/>
       <Ireland/>
       <France/>
       <Poland/>
       <Faqs/>
    </div>
  );
};

export default CountryInfo;
